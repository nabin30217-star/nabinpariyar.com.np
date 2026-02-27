# 03 — Pages Specification

## Home Page (`/`)

The home page is a single long-scroll page with 6 distinct sections.

### Section 1: Hero

```
Layout: Full viewport height, centered content
Content:
  - Small text: "Hi, I'm"
  - Large heading: "Nabin Pariyar"
  - Typing animation cycling through:
      "Mobile & Web Systems Engineer"
      "Android Developer"
      "Building for the Play Store"
      "Learning. Shipping. Growing."
  - Short paragraph: positioning statement
  - Two CTA buttons: "View Projects" (primary), "Get in Touch" (outline)
  - Scroll-down indicator (animated chevron)
Background: Subtle gradient or grid pattern on --bg
```

### Section 2: Expertise (3-Column Grid)

```
Heading: "What I Build"
Three cards:

Card 1 — Mobile Development
  Icon: smartphone
  Title: "Android Apps"
  Description: "Native Android apps with Kotlin, Jetpack Compose, and modern architecture patterns. Published on Google Play Store."

Card 2 — Web Development
  Icon: globe
  Title: "Web Applications"
  Description: "Modern web applications with Next.js, TypeScript, and Tailwind CSS. Fast, responsive, and SEO-optimized."

Card 3 — Systems & Tools
  Icon: cog/terminal
  Title: "Systems Engineering"
  Description: "Backend services, CI/CD pipelines, REST APIs, and Firebase integrations. Building the infrastructure that powers great apps."
```

### Section 3: Featured Projects

```
Heading: "Featured Projects"
Subheading: "Some things I've built"
Display: 3 project cards (SmartCalculator, Vixit, Samsung TV Remote)
Each card:
  - App name
  - One-line description
  - Tech stack badges
  - "View on Play Store" link
  - "Case Study →" link (if available)
CTA: "View All Projects →" link to /projects
```

### Section 4: Engineering Philosophy

```
Heading: "Engineering Philosophy"
Layout: Large quote block + 3 principle items

Quote: "Great software should feel invisible — fast, intuitive, and reliable."

Principles:
  1. "Ship Early, Iterate Often" — Build MVPs, gather feedback, improve
  2. "Clean Code Matters" — Readable, maintainable, well-tested
  3. "Never Stop Learning" — From first line of Kotlin to full-stack in 6 months
```

### Section 5: Latest Blog Posts

```
Heading: "Latest Posts"
State: Coming Soon placeholder
Content:
  - "Blog coming soon. I'll be writing about Android development, web engineering, and lessons from building apps."
  - "Stay tuned →" link
```

### Section 6: Contact CTA

```
Heading: "Let's Work Together"
Paragraph: "I'm currently available for freelance work and open to interesting projects."
Email: nabin30217@gmail.com (clickable mailto)
GitHub link
CTA button: "Get in Touch" → /contact
```

---

## About Page (`/about`)

```
Heading: "About Me"

Bio section:
  "I'm a self-taught developer from Nepal who fell in love with building
  things that people actually use. Six months ago, I wrote my first line
  of Kotlin — today I have three apps on the Google Play Store and I'm
  expanding into web development. I believe great software should feel
  invisible: fast, intuitive, and reliable. Every day I'm learning,
  shipping, and getting better."

Journey timeline (simple vertical):
  - Started learning Kotlin & Android development
  - Published first app on Google Play Store
  - Grew to 3 published apps
  - Started learning web development (Next.js, TypeScript)
  - Built this portfolio website

Skills grid:
  Languages: Kotlin, Java, TypeScript, JavaScript, XML
  Frameworks: Jetpack Compose, Next.js, React
  Tools: Android Studio, Firebase, Git, GitHub, Vercel
  Other: REST APIs, CI/CD, Material Design, AdMob
```

---

## Projects Page (`/projects`)

```
Heading: "Projects"
Subheading: "Apps and tools I've built"

Project cards (grid, 1-col mobile / 2-col tablet / 3-col desktop):

1. Smart Calculator – All in One
   Description: "Fast calculator with clean UI and useful tools"
   Tech: Kotlin, Jetpack Compose, Material 3
   Link: Play Store
   Status: Published

2. Vixit Video Compressor & Tools
   Description: "Convert, compress, trim and manage videos"
   Tech: Kotlin, Jetpack Compose, FFmpeg
   Link: Play Store
   Status: Published

3. Samsung TV Remote – Wi-Fi & IR
   Description: "Control Samsung TVs via IR and Wi-Fi with a simple remote layout"
   Tech: Kotlin, IR Blaster API, Wi-Fi
   Link: Play Store
   Status: Published

4. Paperly PDF Scanner (if user confirms)
   Description: "Document scanner with edge detection and filters"
   Tech: Kotlin, Jetpack Compose, OpenCV, CameraX
   Status: In Development

5. nabinpariyar.com.np (this website)
   Description: "Personal portfolio built with modern web stack"
   Tech: Next.js, TypeScript, Tailwind CSS, Framer Motion
   Link: Live site
   Status: Live
```

---

## Case Studies Page (`/case-studies`)

### Index Page
```
Heading: "Case Studies"
Subheading: "Deep dives into how I build things"
Cards linking to individual case studies
```

### Individual Case Study (`/case-studies/[slug]`)
```
Template structure:
  1. Overview — What the project is, key metrics
  2. Problem — What problem it solves
  3. Architecture — Tech stack, system design
  4. Technical Challenges — Hard problems solved
  5. Performance Optimization — Speed, size, efficiency
  6. Results — Downloads, ratings, impact

Initial case study: Smart Calculator (most mature app)
```

---

## Services Page (`/services`)

```
Heading: "Services"
Subheading: "How I can help you"

4 service cards:

1. Android App Development
   "Native Android apps from concept to Play Store. Kotlin, Jetpack Compose, Material Design."

2. Web Development
   "Modern websites and web apps with Next.js, TypeScript, and Tailwind CSS."

3. UI/UX Design
   "Clean, intuitive interfaces that users love. Mobile-first design thinking."

4. App Maintenance & Updates
   "Keep your existing apps running smoothly. Bug fixes, feature updates, and Play Store compliance."

CTA: "Let's discuss your project → Contact me"
```

---

## Contact Page (`/contact`)

```
Heading: "Get in Touch"
Paragraph: "I'm available for freelance work, collaborations, and interesting conversations."

Contact methods:
  - Email: nabin30217@gmail.com (mailto link)
  - GitHub: github.com/nabin30217-star
  - Play Store: TheMixzone developer page

Note: "I typically respond within 24 hours."
```

---

## Coming Soon Pages

These all share a template:

```
Layout: Centered content, full height
Heading: "[Page Name]"
Icon: Relevant icon
Message: "This section is under construction. Check back soon!"
CTA: "← Back to Home"
```

Pages using this template:
- `/web-lab` — "Web Lab — Experiments & demos coming soon"
- `/android-lab` — "Android Lab — Android experiments coming soon"
- `/blog` — "Blog — Articles coming soon"
- `/tools` — "Tools — Developer utilities coming soon"
- `/open-source` — "Open Source — GitHub projects coming soon"
- `/resume` — "Resume — Interactive resume coming soon"

---

## Legal Pages (Migrated Content)

### Privacy Policy (`/privacy-policy`)

```
Heading: "Privacy Policy"
Effective date: 2026-01-11
Sections:
  1. Overview
  2. Information we may collect
  3. Ads (AdMob)
  4. Analytics / crash reporting
  5. Permissions
  6. Data sharing
  7. Data retention & deletion
  8. Children's privacy
  9. Contact: nabin30217@gmail.com
  10. Updates to this policy
```

### Terms (`/terms`)

```
Heading: "Terms & Conditions"
Effective date: 2026-01-11
Sections:
  1. Acceptance
  2. Use of the apps
  3. Third-party services
  4. Disclaimer
  5. Limitation of liability
  6. Contact
```

### Support (`/support`)

```
Heading: "Support"
Contact info + support email
FAQ:
  - Ads varying by region
  - Feature requests
  - Bug reports
  - Data deletion
```

### Delete Account (`/delete-account`)

```
Heading: "Account & Data Deletion"
Last updated: 2026-01-11
Steps:
  1. Email with subject "Delete my account/data"
  2. Include app name and identifier
  3. Confirmation and processing
What gets deleted / retained
```
