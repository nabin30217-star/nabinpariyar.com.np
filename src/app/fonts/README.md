# Local Font Assets

These Latin WOFF2 files are loaded with `next/font/local` from `src/app/layout.tsx`. Keep them local so clean production builds do not depend on Google Fonts being reachable.

- `manrope-latin.woff2` — Manrope variable font, used for body copy and controls.
- `newsreader-600-latin.woff2` — Newsreader 600, used for display headings.
- `ibm-plex-mono-500-latin.woff2` — IBM Plex Mono 500, used for ledger and utility labels.

The files were obtained from the official Google Fonts CDN. Manrope, Newsreader, and IBM Plex Mono are distributed under the SIL Open Font License. Do not replace or remove these files without updating the `next/font/local` declarations and running a clean offline production build.
