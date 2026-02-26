# 01 — Architecture & Folder Structure

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion | 11.x |
| Font | Inter | Google Fonts via `next/font/google` |
| Hosting | Vercel | Free tier |
| Domain | nabinpariyar.com.np | Cloudflare DNS → Vercel |

---

## Folder Structure

```
d:\Self Try\Website\
│
├── docs/                           # 📝 Project documentation (this folder)
│   ├── 01-ARCHITECTURE.md
│   ├── 02-DESIGN_SYSTEM.md
│   ├── 03-PAGES.md
│   ├── 04-COMPONENTS.md
│   ├── 05-ANIMATIONS.md
│   ├── 06-CONTENT.md
│   └── 07-DEPLOYMENT.md
│
├── public/                         # 🌐 Static assets (served at root)
│   ├── app-ads.txt                 # AdMob verification
│   ├── favicon.ico
│   ├── images/
│   │   ├── projects/               # App screenshots & icons
│   │   └── og-image.png            # Open Graph sharing image
│   └── resume.pdf                  # Downloadable resume (later)
│
├── src/
│   ├── app/                        # 📄 Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (font, meta, theme)
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles + Tailwind
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── case-studies/
│   │   │   ├── page.tsx            # Case studies index
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual case study
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── web-lab/
│   │   │   └── page.tsx
│   │   ├── android-lab/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── tools/
│   │   │   └── page.tsx
│   │   ├── open-source/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx            # Migrated legal pages
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── support/
│   │   │   └── page.tsx
│   │   └── delete-account/
│   │       └── page.tsx
│   │
│   ├── components/                 # 🧩 Reusable components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navigation + mobile menu
│   │   │   └── Footer.tsx          # Site footer with legal links
│   │   │
│   │   ├── ui/                     # Generic UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Container.tsx       # Max-width page container
│   │   │
│   │   ├── animations/             # Framer Motion wrappers
│   │   │   ├── FadeIn.tsx
│   │   │   ├── SlideUp.tsx
│   │   │   └── TypeWriter.tsx
│   │   │
│   │   ├── sections/               # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Expertise.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   ├── LatestPosts.tsx
│   │   │   └── ContactCTA.tsx
│   │   │
│   │   └── theme/
│   │       └── ThemeProvider.tsx    # Dark/light mode context
│   │
│   ├── lib/                        # 📚 Utilities & data
│   │   ├── constants.ts            # Site metadata, nav links
│   │   └── data/
│   │       ├── projects.ts         # App definitions
│   │       ├── case-studies.ts     # Case study content
│   │       └── services.ts        # Service offerings
│   │
│   └── types/
│       └── index.ts                # Shared TypeScript interfaces
│
├── tailwind.config.ts              # Tailwind customization
├── next.config.ts                  # Next.js config
├── tsconfig.json                   # TypeScript config
├── package.json
└── .gitignore
```

---

## Component Hierarchy

```
layout.tsx
├── ThemeProvider
│   ├── Navbar
│   ├── <page content>
│   └── Footer
```

Every page renders inside this shell. The Navbar is sticky at the top, Footer at the bottom.

---

## Routing Map

| URL | Page File | Status |
|---|---|---|
| `/` | `app/page.tsx` | Full build |
| `/about` | `app/about/page.tsx` | Full build |
| `/projects` | `app/projects/page.tsx` | Full build |
| `/case-studies` | `app/case-studies/page.tsx` | Full build |
| `/case-studies/[slug]` | `app/case-studies/[slug]/page.tsx` | Full build |
| `/services` | `app/services/page.tsx` | Full build |
| `/contact` | `app/contact/page.tsx` | Full build |
| `/web-lab` | `app/web-lab/page.tsx` | Coming Soon |
| `/android-lab` | `app/android-lab/page.tsx` | Coming Soon |
| `/blog` | `app/blog/page.tsx` | Coming Soon |
| `/tools` | `app/tools/page.tsx` | Coming Soon |
| `/open-source` | `app/open-source/page.tsx` | Coming Soon |
| `/resume` | `app/resume/page.tsx` | Coming Soon |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Migrated |
| `/terms` | `app/terms/page.tsx` | Migrated |
| `/support` | `app/support/page.tsx` | Migrated |
| `/delete-account` | `app/delete-account/page.tsx` | Migrated |
