# Repository Instructions

These instructions apply to the entire repository. Follow the current user's explicit request first, then these project guardrails.

## Read Before Editing

Before changing layout, navigation, branding, legal pages, tracking, ads, or public files, read:

- [`docs/DESIGN_GUARDRAILS.md`](docs/DESIGN_GUARDRAILS.md)
- [`docs/PLAY_CONSOLE_REQUIREMENTS.md`](docs/PLAY_CONSOLE_REQUIREMENTS.md)

Do not treat a redesign, cleanup, dependency removal, or navigation simplification as permission to remove required routes, public files, policy links, or monetization integrations.

## Protected Product Decisions

- Keep the portfolio restrained and personal, with Nabin's identity as a full-stack web and Android engineer stated before the garment domain story.
- Preserve the verified core facts: Nabin builds a garment ERP, uses TypeScript/Next.js/React for web work, uses Kotlin/Jetpack Compose for Android, and has eight apps on the TheMixzone Google Play listing.
- The 40-person piece-rate garment operation is domain knowledge behind the ERP, not the primary job title and not a claim that Nabin owns a company.
- Preserve the three signature engineering facts: the calculator's hand-built recursive-descent parser, the compressor's FFmpeg + WorkManager pipeline, and the Samsung remote's WebSocket + Wake-on-LAN work without an official SDK.
- Keep `public/images/nabin-profile.png` as the primary portrait unless the user supplies and approves a replacement.
- Preserve the accessible black/white theme toggle, stored preference, system-theme fallback, and pre-hydration theme script.
- Keep projects and real product evidence more prominent than decorative effects.
- Keep the main header compact. Less-frequent destinations belong in the footer, not in deletion.
- Preserve native scrolling and touch-friendly vertical mobile layouts.
- Do not reintroduce the old 3D avatar, custom cursor, Lenis scrolling, text scrambling, typewriter effects, magnetic buttons, touch tilt, animated grids, glowing borders, or excessive gradients without explicit user approval.
- Do not invent downloads, ratings, users, experience, metrics, or technical claims.

## Protected Routes and Files

Never delete, rename, hide, or break these without explicit user approval and a documented replacement or redirect:

- `/privacy-policy`
- `/terms`
- `/support`
- `/delete-account`
- `/data-deletion`
- `/projects`
- `/case-studies`
- `/services`
- `/contact`
- `/app-ads.txt`
- `/ads.txt`
- `/robots.txt`
- `/sitemap.xml`
- `/.well-known/security.txt`

The footer must retain discoverable links to Google Play, GitHub, Privacy Policy, Terms, Support, Delete Account, and App Data Deletion. It must also retain access to portfolio and resource pages documented in `docs/PLAY_CONSOLE_REQUIREMENTS.md`.

## Ads, Analytics, Consent, and CSP

- Preserve the AdSense publisher ID, Google Analytics ID, Funding Choices integration, `ads.txt`, and `app-ads.txt` unless the user explicitly requests a change.
- `next.config.ts` intentionally permits HTTPS resources required by Google advertising, analytics, and consent scripts while keeping static generation available.
- Do not replace the current CSP with a restrictive domain allowlist without browser-testing Funding Choices, AdSense, Google Analytics, Vercel Analytics, images, and contact submission.
- Do not adopt nonce-based CSP casually: it forces dynamic rendering in Next.js and removes static/ISR caching advantages.
- After any CSP or root-layout change, verify that the homepage has no CSP errors in a production browser console.

## Navigation and Accessibility

- The logo must navigate home and close the mobile menu.
- Escape must close the mobile menu.
- Opening the mobile menu must prevent background scrolling; closing it must restore scrolling.
- Maintain keyboard focus visibility, semantic landmarks, descriptive labels, and at least 44px touch targets.
- Keep the skip link targeting `#main-content`.

## Performance

- Prefer Server Components and static generation/ISR.
- Use `next/image` for portfolio and project imagery.
- Avoid loading desktop-only media or interaction code on mobile.
- Do not add heavy animation, WebGL, 3D, cursor, or scroll libraries for decoration.
- Preserve reduced-motion support for any remaining essential motion.
- Keep noncritical production integrations disabled on localhost/preview and load production analytics/ads lazily; do not remove the production integrations.

## Required Verification

For normal code changes, run:

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run build
```

For navigation, layout, footer, policy, CSP, or responsive changes, also verify:

- Homepage at approximately 1440px and 390px widths.
- Every internal header and footer link returns HTTP 200.
- Mobile menu closes with Escape, the logo, and a selected navigation item.
- `/app-ads.txt`, `/ads.txt`, `/robots.txt`, `/sitemap.xml`, and `/.well-known/security.txt` return HTTP 200 with the expected content type.
- The production browser console contains no CSP violations.
- `/opengraph-image` returns a valid PNG showing the current profile-led design.

## Existing Work

The worktree may contain user changes. Inspect `git status` and relevant diffs before editing. Preserve unrelated changes, including the intentional Play Store scraper fallback in `src/lib/services/playStore.ts`.
