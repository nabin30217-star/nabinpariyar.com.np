# Senior Portfolio Redesign Report

Completed: August 7, 2026

This report is the durable handoff for the portfolio redesign. Read it with `DESIGN_GUARDRAILS.md` and `PLAY_CONSOLE_REQUIREMENTS.md` before changing the site.

## Repository Audit Before Changes

The original site used the Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, system fonts, and a mixture of Server and Client Components. The review covered all 27 page/route files and all 28 component files that existed at the start.

The old visual system relied on repeated rounded cards, similar section spacing, generic accent treatments, centered marketing copy, animated counters, and many independent motion utilities. Framer Motion plus custom client-side animation components handled reveals and effects. Static portfolio content was often wrapped in client components.

## Bugs and Risks Found, Ordered by Severity

### High

1. Every page inherited the homepage canonical and Open Graph URL. Search engines and social previews could identify deep pages as the homepage.
2. App deletion and privacy copy made claims broader than the verified Google Play Data Safety declarations and the developer's actual ability to delete Google-managed data.
3. The contact form could not complete successfully without `WEB3FORMS_ACCESS_KEY`, and its failure behavior needed a direct fallback.
4. The public story buried the real differentiator: operating a 40-person piece-rate garment factory while independently engineering Android products.

### Medium

5. `/contact` and the Samsung remote article overflowed horizontally at mobile width.
6. Five pages skipped heading levels, weakening document structure for assistive technology.
7. Several controls and legal/support links were smaller than the requested 44px touch target.
8. Primary button contrast was approximately 3.05:1 and failed WCAG AA for normal text.
9. The press page advertised a ZIP that did not exist.
10. Stack, press, changelog, and portfolio copy included unsupported hardware, sizes, metrics, version history, or broad technical claims.
11. The Play Store scraper could delay or hang `/projects`, and successful remote results could replace deterministic local icons with remote image URLs.
12. The E2E command was configured for a Playwright-managed browser that was not installed locally.
13. The Edge Open Graph route produced a production-build warning and could not reuse the approved local portrait cleanly.

### Design and Performance Debt

14. Generic hero copy, vanity counters, a generic pull quote, and repeated three-card grids made the site read like a portfolio template.
15. Uniform cards, radii, shadows, and spacing gave every section equal visual weight.
16. Framer Motion, cursor, reveal, tilt, and other animation utilities added JavaScript and maintenance cost without supporting the story.
17. Fonts were not defined through `next/font`.
18. The live baseline's third-party and animation JavaScript contributed 760ms Total Blocking Time and an estimated 355 KiB of unused JavaScript.

### Checks That Did Not Reveal a Bug

- Featured project cards rendered once in the repository version reviewed. There was no current marquee or duplicated project markup to preserve.
- Existing observers/listeners reviewed before removal had cleanup paths; no reproducible memory leak was found.
- Core name, projects, and contact information remained present with JavaScript disabled.
- A custom 404 existed and returned the correct 404 status.

## What Was Changed

### Foundation and design system

- Replaced the old palette with six named colors: Loom Ink, Workbench, Pattern Paper, Muslin, Safety Orange, and Fired Orange.
- Added Newsreader, Manrope, and IBM Plex Mono through local `next/font` assets. Local files keep builds independent of Google Fonts availability.
- Replaced rounded card repetition with rules, editorial rows, deliberate negative space, and one dominant signature component.
- Added `createPageMetadata()` and unique canonical/Open Graph URLs for every static and dynamic route.

### Homepage

- Replaced the generic introduction with the operator-engineer thesis.
- Added the Operator's Ledger as the signature visual, connecting the factory floor to the parser, FFmpeg/WorkManager pipeline, and Samsung protocol work.
- Removed counters, the generic quote, redundant skill/philosophy triads, marquee assumptions, and ornamental motion.
- Rebuilt selected work as one lead case plus two quieter supporting cases.

### Projects and case studies

- Made curated local project data authoritative during rendering.
- Presented the calculator parser, video pipeline, and Samsung WebSocket/Wake-on-LAN work as specific engineering decisions.
- Removed unsupported claims and fake device mockups.
- Retired the inaccurate old portfolio-animation article URL with a permanent redirect.

### About, services, notes, and supporting pages

- Connected piece-rate production discipline to product engineering without generic self-taught-developer copy.
- Rewrote services around focused Android builds, difficult integrations, and necessary support surfaces.
- Removed invented hardware, metrics, changelog versions, and press downloads; replaced them with verified tools and real downloadable assets.
- Rebuilt blog and case listings as editorial indexes instead of repeated card grids.

### Contact, policy, and Play Console requirements

- Added accessible labels, validation messages, input state relationships, loading state, and a clear provider/network failure fallback.
- Avoided logging submitted email, message, or full forwarded-IP data.
- Reconciled privacy, account deletion, and app-data guidance with the verified product model and Google-managed data boundaries.
- Preserved all required Play Console/legal routes, footer destinations, publisher identifiers, consent tooling, analytics, ads files, CSP behavior, and support links.

### Motion and client JavaScript

- Removed Framer Motion and the obsolete animation system.
- Kept one short CSS ledger entrance using only `transform` and `opacity`.
- Added a complete `prefers-reduced-motion` static fallback.
- Kept static content in Server Components. Client JavaScript remains only where state is necessary: navigation, contact form, and the error boundary.
- Disabled automatic prefetch on homepage/navigation links so background route requests do not compete with first paint.

## Verification Results

| Gate | Result |
| --- | --- |
| ESLint | Pass, no warnings |
| TypeScript (`tsc --noEmit`) | Pass |
| Unit tests | 5/5 pass |
| Playwright E2E | 14/14 pass across desktop Chrome and Pixel 5 emulation |
| Production build | Pass; 30 routes generated, no compilation/type errors |
| Full browser QA | 23 sitemap routes pass at 375, 768, 1024, 1280, and 2560px |
| Browser console | No page errors or warnings in the production route crawl |
| Layout | No horizontal overflow; one `h1` per page; no heading-level gaps |
| Images | All rendered images load, include alt text, and use dimension-stable Next Image layouts |
| Touch targets | Visible interactive targets pass the 44x44px mobile audit |
| Protected endpoints | Ads, app-ads, robots, sitemap, security, and Open Graph endpoints return 200 |
| Internal/external links | Internal routes and checked GitHub, Google Play, and Google policy destinations resolved during the audit |
| No-JavaScript content | Core identity, work, and contact content remain readable |

The repeatable full browser crawl is `npm.cmd run qa:browser` while a production server is running.

## Lighthouse Mobile Profile

| Metric | Before | After |
| --- | ---: | ---: |
| Performance | 80 | 93 |
| Accessibility | 96 | 100 |
| Best Practices | 73 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 1.0s | 1.6s |
| Largest Contentful Paint | 2.1s | 3.1s |
| Cumulative Layout Shift | 0 | 0 |
| Total Blocking Time | 760ms | 60ms |
| Speed Index | 2.0s | 1.6s |

The final mobile lab run meets the CLS target and reduces blocking work by 700ms. It does **not** meet the requested simulated LCP target of less than 2.5s: Lighthouse reports 3.1s. The trace identifies static hero text as LCP and records about 0.3s of observed TTFB plus element render delay, but Lighthouse's simulated mobile model scores the event later. Font preloading, below-fold portrait priority, route prefetching, render-blocking CSS, and client work were tested; additional changes did not improve the stable simulated result and were not kept when they added experimental or visual risk.

INP is a field metric and is not produced by this local navigation-only Lighthouse run. TBT is 60ms and maximum potential input delay was approximately 170ms in the checked run, but those are lab proxies, not a claim about production INP.

## Explicit Limitations and Tradeoffs

- A successful real contact submission could not be verified because `WEB3FORMS_ACCESS_KEY` is absent. Validation and the missing-provider failure path are covered by E2E tests. Configure the key and perform one production delivery test before launch.
- Testing used Chrome desktop, Pixel 5 emulation, five explicit viewport widths, and Lighthouse's mobile profile. No physical mid-range Android device was available.
- Ads, Funding Choices, Google Analytics, Vercel Analytics, and Speed Insights are intentionally enabled only when `VERCEL_ENV=production` and load lazily where possible. Local Lighthouse therefore excludes their production runtime cost. They remain in the deployed code and require a production-console check after deployment.
- Google Play listings can change independently. Curated portfolio copy and icons are deterministic; Google Play remains the source of truth for versions, availability, and current Data Safety declarations.

## Future Change Checklist

1. Read `AGENTS.md`, `DESIGN_GUARDRAILS.md`, and `PLAY_CONSOLE_REQUIREMENTS.md`.
2. Preserve the full-stack web and Android identity, garment ERP, complete eight-app catalogue, and three signature engineering facts.
3. Preserve every protected route, public endpoint, footer legal/support link, and production integration.
4. Run lint, typecheck, unit tests, E2E, production build, and `qa:browser`.
5. Recheck production Lighthouse and real-user Web Vitals after deployment.

## August 2026 Positioning Follow-up

After the initial redesign, the hierarchy was corrected so the factory story no longer reads as Nabin's primary profession or as a company-ownership claim. The current portfolio leads with full-stack web and Android engineering, names the TypeScript/Next.js/React and Kotlin/Compose stacks, adds the Garment ERP as a web product, lists all eight current TheMixzone Google Play apps, and provides persistent black and white themes.
