# 04 — Component Hierarchy & Specifications

## Component Tree

```
<ThemeProvider>
  <Navbar />
  <main>
    {page content}
  </main>
  <Footer />
</ThemeProvider>
```

---

## Layout Components

### `Navbar.tsx`

```
Purpose: Sticky top navigation for all pages
Location: src/components/layout/Navbar.tsx

Props: none (reads route from Next.js usePathname)

Structure:
  <nav> (fixed top, full width, z-50)
    <Container>
      <Logo/Brand> — "Nabin Pariyar" text, links to /
      <DesktopLinks> — hidden on mobile
        Home, About, Projects, Case Studies, Services, Blog, Contact
      <ThemeToggle> — sun/moon icon button
      <MobileMenuButton> — hamburger, visible on mobile only
    </Container>
  </nav>
  <MobileMenu> — slide-down panel when hamburger clicked
    Same links as desktop, full width

Behavior:
  - Background: transparent on top → bg-bg/80 backdrop-blur on scroll
  - Active link: text-accent
  - Hover link: text-accent-hover
  - Mobile menu: animated slide-down with Framer Motion
```

### `Footer.tsx`

```
Purpose: Site footer on all pages
Location: src/components/layout/Footer.tsx

Structure:
  <footer> (bg-surface, border-t)
    <Container>
      Row 1 — Three columns:
        Col 1: "Nabin Pariyar" + tagline
        Col 2: Quick links (Home, Projects, Services, Contact)
        Col 3: Legal (Privacy Policy, Terms, Support)
      Row 2 — Bottom bar:
        © 2026 Nabin Pariyar. All rights reserved.
        GitHub icon link
```

---

## UI Components

### `Container.tsx`

```
Purpose: Max-width centered wrapper
Props: children, className?
Output: <div className="max-w-6xl mx-auto px-6 lg:px-8">{children}</div>
```

### `Button.tsx`

```
Purpose: Styled button / link
Props:
  variant: "primary" | "outline" | "ghost"
  size: "sm" | "md" | "lg"
  href?: string (renders as <Link> if provided)
  children, className?, onClick?

Variants:
  primary: bg-accent text-white hover:bg-accent-hover + glow
  outline: border-accent text-accent hover:bg-accent/10
  ghost: text-text-muted hover:text-accent

All: rounded-lg font-medium transition-all duration-200
```

### `Card.tsx`

```
Purpose: Elevated content container
Props: children, className?, hover?: boolean

Base: bg-card border border-border rounded-xl p-6
Hover (if enabled): border-accent/50 + glow shadow
transition-all duration-300
```

### `SectionHeading.tsx`

```
Purpose: Section title with optional subtitle
Props:
  title: string
  subtitle?: string
  align?: "left" | "center"

Output:
  <div>
    <h2 className="text-3xl font-semibold">{title}</h2>
    {subtitle && <p className="text-text-muted mt-2">{subtitle}</p>}
  </div>
```

### `Badge.tsx`

```
Purpose: Tech stack tag / label
Props: text: string

Output: <span className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full">
```

---

## Animation Components

### `FadeIn.tsx`

```
Purpose: Fade-in on scroll
Props: children, delay?, duration?, className?

Uses: Framer Motion whileInView
  initial: { opacity: 0, y: 20 }
  whileInView: { opacity: 1, y: 0 }
  viewport: { once: true, margin: "-100px" }
  transition: { duration: 0.5, delay }
```

### `SlideUp.tsx`

```
Purpose: Slide up with stagger for lists
Props: children, delay?, className?

Uses: Framer Motion whileInView
  initial: { opacity: 0, y: 40 }
  whileInView: { opacity: 1, y: 0 }
  viewport: { once: true }
  transition: { duration: 0.6, delay }
```

### `TypeWriter.tsx`

```
Purpose: Typing animation for hero
Props: words: string[], speed?: number, deleteSpeed?: number

Behavior:
  - Types first word character by character
  - Pauses 2 seconds
  - Deletes character by character
  - Types next word
  - Loops infinitely

Uses: Custom useState/useEffect hook + blinking cursor (CSS)
```

---

## Section Components (Home Page Only)

### `Hero.tsx`

```
Full viewport height
Centered content
TypeWriter component for animated title
Two CTA buttons
Scroll indicator at bottom
```

### `Expertise.tsx`

```
SectionHeading: "What I Build"
3-column responsive grid (1-col mobile, 3-col desktop)
3 Card components with icon + title + description
```

### `FeaturedProjects.tsx`

```
SectionHeading: "Featured Projects"
3 project cards with app details
"View All →" link to /projects
```

### `Philosophy.tsx`

```
SectionHeading: "Engineering Philosophy"
Large styled quote block
3 principle items with number/title/description
```

### `LatestPosts.tsx`

```
SectionHeading: "Latest Posts"
Coming Soon state initially
(Later: 3 recent blog post card previews)
```

### `ContactCTA.tsx`

```
Centered content block
Heading: "Let's Work Together"
Paragraph + email link
CTA button → /contact
```

---

## Theme Component

### `ThemeProvider.tsx`

```
Purpose: Dark/light mode context
Uses: React createContext + useContext

Provides:
  theme: "dark" | "light"
  toggleTheme: () => void

Implementation:
  - Check localStorage for saved preference on mount
  - Fallback to prefers-color-scheme media query
  - Set data-theme attribute on <html>
  - Persist choice to localStorage on toggle
```
