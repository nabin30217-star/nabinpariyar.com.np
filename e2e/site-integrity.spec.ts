import { expect, test } from '@playwright/test';

const protectedRoutes = [
  '/privacy-policy',
  '/terms',
  '/support',
  '/delete-account',
  '/data-deletion',
  '/projects',
  '/case-studies',
  '/services',
  '/contact',
];

test('protected product and Play Console routes remain healthy', async ({ request }) => {
  for (const route of protectedRoutes) {
    const response = await request.get(route);
    expect(response.status(), `${route} should resolve`).toBe(200);
  }
});

test('page canonical matches the current route', async ({ page }) => {
  await page.goto('/case-studies/smart-calculator');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://nabinpariyar.com.np/case-studies/smart-calculator',
  );
});

test('homepage has no horizontal overflow and renders each featured project once', async ({ page }) => {
  await page.goto('/');
  const dimensions = await page.evaluate(() => ({
    viewport: window.innerWidth,
    document: document.documentElement.scrollWidth,
  }));
  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport);
  await expect(page.locator('main article')).toHaveCount(3);
});

test('unknown routes use the custom 404', async ({ page }) => {
  const response = await page.goto('/route-that-does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('route left the ledger');
});

test('homepage identifies the full-stack role and work page lists all eight Play apps', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('full-stack web systems and Android apps');
  await expect(page.getByText('Garment ERP', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('TypeScript / Next.js / React / server routes').first()).toBeVisible();

  await page.goto('/projects');
  await expect(page.getByRole('heading', { name: 'Garment ERP System' })).toBeVisible();
  await expect(page.locator('section[aria-labelledby="android-products-title"] article')).toHaveCount(8);
});

test('black and white theme choice persists across navigation', async ({ page }) => {
  await page.goto('/');
  const initialTheme = await page.locator('html').getAttribute('data-theme');
  expect(['light', 'dark']).toContain(initialTheme);

  await page.getByRole('button', { name: /switch to (black|white) theme/i }).click();
  const expectedTheme = initialTheme === 'light' ? 'dark' : 'light';
  await expect(page.locator('html')).toHaveAttribute('data-theme', expectedTheme);
  expect(await page.evaluate(() => localStorage.getItem('portfolio-theme'))).toBe(expectedTheme);

  await page.goto('/about');
  await expect(page.locator('html')).toHaveAttribute('data-theme', expectedTheme);
});
