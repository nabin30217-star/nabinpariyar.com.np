# Play Console and Public Site Requirements

These routes, files, identifiers, and integrations support published apps, Google Play Console, advertising, analytics, consent, user support, and public verification. Do not remove them during a redesign or cleanup.

## Stable Identity

Current values are centralized in `src/lib/constants.ts` or the root layout:

- Site: `https://nabinpariyar.com.np`
- Developer name: `TheMixzone`
- Support email: `nabin30217@gmail.com`
- AdSense publisher: `ca-pub-1284990073783248`
- Google Analytics measurement ID: `G-F02NVF6MNS`
- GitHub: `https://github.com/nabin30217-star`
- Google Play developer page: `https://play.google.com/store/apps/developer?id=TheMixzone`

Do not change these values without explicit user confirmation.

## Required Public Routes

| Route | Purpose | Must appear in footer | Must appear in sitemap |
| --- | --- | --- | --- |
| `/privacy-policy` | App and website privacy disclosure | Yes | Yes |
| `/terms` | Application terms and conditions | Yes | Yes |
| `/support` | App support contact and FAQ | Yes | Yes |
| `/delete-account` | Account and associated-data deletion requests | Yes | Yes |
| `/data-deletion` | Device and third-party service data-deletion guidance | Yes | Yes |
| `/projects` | Published and portfolio projects | Yes | Yes |
| `/case-studies` | Detailed product evidence | Yes | Yes |
| `/services` | Available services | Yes | Yes |
| `/contact` | Direct contact channel | Yes | Yes |
| `/blog` | Technical articles | Yes | Yes |
| `/stack` | Tools and setup | Yes | Yes |
| `/changelog` | Public site changes | Yes | Yes |
| `/press` | Press information | Yes | Yes |

Home access may be provided through the site logo instead of a separate navigation item.

## Required Public Files

| Path | Purpose | Expected type |
| --- | --- | --- |
| `/app-ads.txt` | Mobile advertising seller authorization | `text/plain` |
| `/ads.txt` | Website advertising seller authorization | `text/plain` |
| `/robots.txt` | Crawler rules and sitemap discovery | `text/plain` |
| `/sitemap.xml` | Search-engine route discovery | XML |
| `/.well-known/security.txt` | Security contact and disclosure information | `text/plain` |

Keep the seller records in `public/app-ads.txt` and `public/ads.txt` intact unless an advertising provider or publisher identifier genuinely changes.

## Footer Requirements

The footer is the permanent discovery surface for less-frequent but required links. It must retain:

- Google Play.
- GitHub.
- Work and case studies.
- About, services, and contact.
- Blog, stack, changelog, and press kit.
- Privacy Policy, Terms, Support, Delete Account, and App Data Deletion.

The main header may remain minimal. Never solve header crowding by deleting footer access.

## Deletion Pages Have Different Jobs

- `/delete-account` explains how a user requests deletion of an account or associated server-side data.
- `/data-deletion` explains local device data, advertising ID, third-party Google services, and email deletion requests.

Support copy should link to `/data-deletion` when a user asks how to delete app data. Keep timelines and claims synchronized with the actual app behavior and current policies.

## Ads, Analytics, and Consent

`src/app/layout.tsx` currently loads:

- Google Funding Choices.
- Google AdSense.
- Google Analytics.
- Vercel Analytics.
- Vercel Speed Insights.

`next.config.ts` contains the Content Security Policy required for those resources. AdSense may use changing HTTPS origins, so a narrow static domain allowlist can silently stop ads or consent messages.

After changing the layout or CSP:

1. Run a production build and server.
2. Open the homepage in a clean browser profile.
3. Confirm there are no CSP console violations.
4. Confirm Funding Choices, AdSense, and Analytics requests are not blocked by CSP.
5. Confirm all internal links still return HTTP 200.

Do not report regulatory compliance merely because scripts load. Consent behavior and policy text must continue to reflect the actual applications and the user's configured Google products.

## Sitemap Requirements

When adding a public route, decide whether it belongs in `src/app/sitemap.ts`. Policy, support, deletion, portfolio, resource, and press routes should normally be included.

Before completion, verify that the generated `/sitemap.xml` contains every route listed in the table above.

## Release Checklist

```powershell
npm.cmd run lint
npm.cmd test
npm.cmd run build
```

Then verify:

- All required routes return HTTP 200.
- All required public files return HTTP 200.
- Footer links are visible at desktop and mobile widths.
- Google Play and GitHub links point to the identifiers above.
- Policy and support email links use `nabin30217@gmail.com`.
- No CSP violation blocks consent, ads, analytics, or required images.
- `/opengraph-image` returns a valid PNG.
