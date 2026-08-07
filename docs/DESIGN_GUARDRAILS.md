# Portfolio Design Guardrails

This file records the intentional August 2026 portfolio direction. Read it before changing layout, type, color, motion, biography, project ordering, or the homepage argument.

## The Story That Must Stay Visible

Nabin is presented first as a full-stack web and Android engineer. The first screen must answer who he is, what he builds, how he can help, and which core technologies he uses.

- He builds full-stack web systems with TypeScript, Next.js, and React, including a garment ERP.
- He independently builds, publishes, and maintains eight Android products with Kotlin and Jetpack Compose.
- His experience coordinating a 40-person piece-rate garment operation supplies domain knowledge for the ERP. Do not turn this into a company-ownership claim or his primary professional title.

The three signature engineering facts are:

1. Smart Calculator contains a hand-built recursive-descent expression parser.
2. Video Compressor uses FFmpeg with WorkManager background processing.
3. Samsung TV Remote works with Samsung's WebSocket control path and Wake-on-LAN behavior without an official SDK.

Do not replace these facts with generic claims about clean UI, performance, passion, self-teaching, or "turning ideas into reality."

## Token System

The six named colors live in `src/app/globals.css`:

- Loom Ink — `#151411`
- Workbench — `#201E19`
- Pattern Paper — `#F3EEE3`
- Muslin — `#C9BEAD`
- Safety Orange — `#E05A33`
- Fired Orange — `#A6381C`

Do not introduce a generic blue/violet developer gradient or untouched component-library palette. Safety Orange is the signature accent on dark backgrounds. Pattern Paper and Muslin carry the primary and secondary text hierarchy.

The type system uses `next/font`:

- Newsreader for restrained display type.
- Manrope for body copy and controls.
- IBM Plex Mono for ledger IDs, labels, navigation details, and technical metadata.

Do not load fonts with CSS `@import`, third-party runtime stylesheets, or raw `<link>` tags.

## Homepage Argument

Keep the sequence:

```text
specific full-stack web + Android thesis + real portrait
→ Engineering Ledger signature element
→ explicit web and Android service scope
→ strongest Android engineering cases and complete eight-app catalogue
→ garment domain experience connected to the ERP
→ direct, low-pressure contact
→ complete protected footer
```

The Engineering Ledger is the one loud visual element. It connects the garment ERP, eight-app Google Play catalogue, web stack, and Android stack using row IDs and a measurement rule. Other sections remain flatter and quieter.

## Color Themes

- Preserve both black and white themes.
- The initial theme follows a saved preference, then the operating-system preference.
- Apply the theme before hydration to prevent a flash of the wrong theme.
- Keep the toggle keyboard accessible with an explicit action label and a 44px target.
- Do not remove the dark theme, light theme, storage key, or initialization script during layout cleanup.

Do not add vanity statistics, a skills badge wall, generic philosophy cards, a centered inspirational quote, or repeated symmetrical card triads.

## Motion Budget

- The ledger/photo may use one brief entrance sequence.
- Animate only `transform` and `opacity`.
- Respect `prefers-reduced-motion` with a static result.
- Do not add Framer Motion, GSAP, WebGL, custom scroll, cursor effects, tilt, magnetic controls, marquees, floating decoration, text scrambling, or count-up animation without explicit user approval.
- Core text must not depend on JavaScript or an animation completing.

## Images and Layout

- `public/images/nabin-profile.png` is the approved portrait.
- Use `next/image` for page imagery with explicit dimensions or `fill` plus `sizes`.
- Generated Open Graph output may use `<img>` inside `ImageResponse`.
- Mobile must remain a natural vertical reading flow at 375px and above; 320px is the hard minimum.
- All controls require visible focus and at least a 44px target.

## Content Integrity

- Do not invent ratings, downloads, users, hardware, tools, response times, performance numbers, version history, client work, or press assets.
- Google Play is the source of truth for current app names, versions, release dates, and Data Safety declarations.
- Keep app deletion and privacy language aligned. Do not promise deletion of third-party data that the provider does not expose to the developer.
- If a claim cannot be tied to the user-provided facts, shipped project data, a current public listing, or repository evidence, remove it or label it clearly as unverified.

## Review Checklist

- Does the first screen identify Nabin as a full-stack web and Android engineer?
- Does it name TypeScript/Next.js/React, Kotlin/Compose, the garment ERP, and eight Google Play apps?
- Is the Engineering Ledger still the only visually loud moment?
- Do both black and white themes work without a hydration flash?
- Do the three engineering facts remain accurate and prominent?
- Are all protected Play Console routes and footer links present?
- Does every route have its own canonical and Open Graph URL?
- Does the site remain useful without JavaScript and with reduced motion?
- Are mobile layouts overflow-free and touch targets at least 44px?
- Have lint, typecheck, unit tests, E2E tests, build, browser console checks, and Lighthouse been rerun?
