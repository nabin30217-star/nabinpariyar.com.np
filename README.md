# Nabin Pariyar Portfolio

Personal portfolio and public support site for Nabin Pariyar: a full-stack web and Android engineer building a garment ERP and publishing eight Android products under **TheMixzone**.

The site is built with Next.js, React, TypeScript, and Tailwind CSS. It includes portfolio projects, case studies, app support and policy pages, account/data deletion instructions, advertising verification files, analytics, and consent tooling.

## Contributor Documentation

Read these before making changes:

- [`AGENTS.md`](AGENTS.md) — repository-wide implementation and verification rules.
- [`docs/DESIGN_GUARDRAILS.md`](docs/DESIGN_GUARDRAILS.md) — protected visual direction, responsive behavior, and patterns to avoid.
- [`docs/PLAY_CONSOLE_REQUIREMENTS.md`](docs/PLAY_CONSOLE_REQUIREMENTS.md) — required routes, public files, identifiers, footer links, CSP, ads, analytics, and release checks.

## Local Development

Install dependencies and start the development server:

```powershell
npm.cmd install
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd test
npm.cmd run test:e2e
npm.cmd run build
```

For the full five-width route crawl, run the production build/server and then the browser QA command in another terminal:

```powershell
npm.cmd run build
npm.cmd start
npm.cmd run qa:browser
```

Changes to navigation, policy pages, public files, CSP, or the root layout require the additional browser and route checks documented in `AGENTS.md`.

## Important Public Endpoints

- `/privacy-policy`
- `/terms`
- `/support`
- `/delete-account`
- `/data-deletion`
- `/app-ads.txt`
- `/ads.txt`
- `/robots.txt`
- `/sitemap.xml`
- `/.well-known/security.txt`

Do not remove these as part of design cleanup or navigation simplification.
