import { chromium } from "@playwright/test";

const origin = process.env.QA_ORIGIN || "http://127.0.0.1:3000";
const chromePath = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const widths = [375, 768, 1024, 1280, 2560];
const failures = [];

function fail(route, width, message) {
  failures.push(`${route} @ ${width}px: ${message}`);
}

const browser = await chromium.launch({ executablePath: chromePath, headless: true });
const context = await browser.newContext({ reducedMotion: "reduce" });
const page = await context.newPage();

const sitemapResponse = await context.request.get(`${origin}/sitemap.xml`);
if (!sitemapResponse.ok()) {
  throw new Error(`Sitemap returned ${sitemapResponse.status()}`);
}

const sitemap = await sitemapResponse.text();
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const url = new URL(match[1]);
  return `${url.pathname}${url.search}`;
});

const protectedEndpoints = [
  "/app-ads.txt",
  "/ads.txt",
  "/robots.txt",
  "/sitemap.xml",
  "/.well-known/security.txt",
  "/opengraph-image",
];

for (const endpoint of protectedEndpoints) {
  const response = await context.request.get(`${origin}${endpoint}`);
  if (!response.ok()) fail(endpoint, "request", `returned ${response.status()}`);
}

for (const width of widths) {
  await page.setViewportSize({ width, height: width === 375 ? 812 : 900 });

  for (const route of routes) {
    const browserMessages = [];
    const onConsole = (message) => {
      if (["error", "warning"].includes(message.type())) browserMessages.push(`${message.type()}: ${message.text()}`);
    };
    const onPageError = (error) => browserMessages.push(`pageerror: ${error.message}`);
    page.on("console", onConsole);
    page.on("pageerror", onPageError);

    const response = await page.goto(`${origin}${route}`, { waitUntil: "domcontentloaded" });
    if (response?.status() !== 200) fail(route, width, `returned ${response?.status() ?? "no response"}`);

    const layout = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      contentWidth: document.documentElement.scrollWidth,
      h1Count: document.querySelectorAll("h1").length,
      headings: [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((heading) => Number(heading.tagName[1])),
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "",
    }));

    if (layout.contentWidth > layout.viewportWidth) {
      fail(route, width, `horizontal overflow (${layout.contentWidth}px content)`);
    }
    if (layout.h1Count !== 1) fail(route, width, `expected one h1, found ${layout.h1Count}`);
    for (let index = 1; index < layout.headings.length; index += 1) {
      if (layout.headings[index] - layout.headings[index - 1] > 1) {
        fail(route, width, `heading level skips from h${layout.headings[index - 1]} to h${layout.headings[index]}`);
      }
    }

    const expectedCanonical = route === "/" ? "https://nabinpariyar.com.np" : `https://nabinpariyar.com.np${route}`;
    if (layout.canonical !== expectedCanonical) {
      fail(route, width, `canonical is ${layout.canonical || "missing"}`);
    }

    if (width === 375 || width === 1280) {
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += window.innerHeight) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        window.scrollTo(0, 0);
      });

      await page.locator("img").evaluateAll(async (images) => {
        await Promise.all(images.map(async (image) => {
          if (!image.complete) {
            await Promise.race([
              new Promise((resolve) => {
                image.addEventListener("load", resolve, { once: true });
                image.addEventListener("error", resolve, { once: true });
              }),
              new Promise((resolve) => setTimeout(resolve, 5000)),
            ]);
          }
          if (image.decode) await image.decode().catch(() => undefined);
        }));
      });

      const imageProblems = await page.locator("img").evaluateAll((images) => images.flatMap((image) => {
        const issues = [];
        if (!image.hasAttribute("alt")) issues.push(`${image.currentSrc || image.src}: missing alt`);
        if (!image.complete || image.naturalWidth === 0) issues.push(`${image.currentSrc || image.src}: failed to load`);
        return issues;
      }));
      imageProblems.forEach((problem) => fail(route, width, problem));
    }

    if (width === 375) {
      const shortTargets = await page.locator('a[href], button, input:not([type="hidden"]), textarea, select, summary').evaluateAll((elements) => elements.flatMap((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        if (style.visibility === "hidden" || style.display === "none" || rect.width === 0 || rect.height === 0) return [];
        if (rect.height >= 44 && rect.width >= 44) return [];
        const label = (element.getAttribute("aria-label") || element.textContent || element.getAttribute("name") || element.tagName).trim().replace(/\s+/g, " ").slice(0, 60);
        return [`${label || element.tagName} is ${Math.round(rect.width)}x${Math.round(rect.height)}px`];
      }));
      shortTargets.forEach((problem) => fail(route, width, `touch target ${problem}`));
    }

    browserMessages.forEach((message) => fail(route, width, message));
    page.off("console", onConsole);
    page.off("pageerror", onPageError);
  }
}

await page.setViewportSize({ width: 375, height: 812 });
await page.goto(origin, { waitUntil: "domcontentloaded" });
const menuButton = page.getByRole("button", { name: "Open navigation" });
await menuButton.click();
if (await page.evaluate(() => document.body.style.overflow) !== "hidden") fail("/", 375, "mobile menu did not lock body scroll");
await page.keyboard.press("Escape");
if (await page.getByRole("button", { name: "Open navigation" }).getAttribute("aria-expanded") !== "false") fail("/", 375, "Escape did not close mobile menu");
if (await page.evaluate(() => document.body.style.overflow) !== "") fail("/", 375, "mobile menu did not restore body scroll");

await menuButton.click();
await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Nabin Pariyar" }).click();
if (await page.getByRole("button", { name: "Open navigation" }).getAttribute("aria-expanded") !== "false") fail("/", 375, "logo did not close mobile menu");

await menuButton.click();
await page.locator("#mobile-navigation").getByRole("link", { name: "Work" }).click();
await page.waitForURL("**/projects");
if (await page.getByRole("button", { name: "Open navigation" }).getAttribute("aria-expanded") !== "false") fail("/projects", 375, "navigation link did not close mobile menu");

await browser.close();

if (failures.length > 0) {
  console.error(`Browser QA failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Browser QA passed: ${routes.length} routes at ${widths.join(", ")}px; protected endpoints and mobile-menu behavior verified.`);
