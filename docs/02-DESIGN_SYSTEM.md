# 02 — Design System

## Color Palette

### Dark Mode (Default)

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0b1220` | Page background |
| `--surface` | `#111827` | Section backgrounds, elevated areas |
| `--card` | `#1f2937` | Cards, panels, elevated containers |
| `--accent` | `#3b82f6` | Buttons, links, active states |
| `--accent-hover` | `#60a5fa` | Hover state for accent elements |
| `--glow` | `rgba(59,130,246,0.25)` | Subtle glow/shadow on cards & buttons |
| `--text` | `#f1f5f9` | Primary text (headings, body) |
| `--text-muted` | `#94a3b8` | Secondary text (descriptions, labels) |
| `--border` | `#1e293b` | Borders, dividers |

### Light Mode

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#f8fafc` | Page background |
| `--surface` | `#f1f5f9` | Section backgrounds |
| `--card` | `#ffffff` | Cards |
| `--accent` | `#2563eb` | Slightly deeper blue for contrast |
| `--accent-hover` | `#3b82f6` | Hover state |
| `--glow` | `rgba(37,99,235,0.15)` | Subtle glow |
| `--text` | `#0f172a` | Primary text |
| `--text-muted` | `#64748b` | Secondary text |
| `--border` | `#e2e8f0` | Borders |

---

## Typography

**Font**: Inter (Google Fonts via `next/font/google`)

| Element | Size | Weight | Color |
|---|---|---|---|
| Hero headline | `text-5xl` / `text-6xl` | 700 (Bold) | `--text` |
| Page title | `text-4xl` | 700 (Bold) | `--text` |
| Section heading | `text-3xl` | 600 (Semibold) | `--text` |
| Subheading | `text-xl` | 600 (Semibold) | `--text` |
| Body | `text-base` (16px) | 400 (Regular) | `--text` |
| Body muted | `text-base` | 400 (Regular) | `--text-muted` |
| Small / label | `text-sm` (14px) | 500 (Medium) | `--text-muted` |
| Code / mono | `font-mono` | 400 | `--accent` |

---

## Spacing Scale

Following Tailwind's default scale. Key usage:

| Context | Spacing |
|---|---|
| Section vertical padding | `py-20` (80px) or `py-24` (96px) |
| Between sections | `gap-16` to `gap-24` |
| Card internal padding | `p-6` (24px) |
| Between cards (grid) | `gap-6` (24px) |
| Max content width | `max-w-6xl` (1152px) centered |
| Page horizontal padding | `px-6` (mobile) / `px-8` (desktop) |

---

## Component Styles

### Button

```
Primary:   bg-accent text-white → hover:bg-accent-hover, glow shadow
Outline:   border border-accent text-accent → hover:bg-accent/10
Ghost:     text-text-muted → hover:text-accent
All:       rounded-lg px-6 py-3 font-medium transition-all duration-200
```

### Card

```
bg-card border border-border rounded-xl p-6
hover: border-accent/50, subtle glow shadow
transition-all duration-300
```

### Badge / Tag

```
bg-accent/10 text-accent text-sm px-3 py-1 rounded-full font-medium
```

### Section Heading

```
text-3xl font-semibold text-text mb-4
+ accent underline decoration (2px, offset-8)
```

### Navbar

```
Fixed top, full width
bg-bg/80 backdrop-blur-md border-b border-border
Height: h-16 (64px)
z-50
```

### Footer

```
bg-surface border-t border-border
py-12, max-w-6xl centered
Links: text-text-muted hover:text-accent
```

---

## Glow Effect (Signature Style)

Used on hover for cards and buttons:

```css
box-shadow: 0 0 20px rgba(59, 130, 246, 0.25),
            0 0 60px rgba(59, 130, 246, 0.1);
```

Subtle, not overpowering. Only on interactive elements.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|---|---|---|
| Mobile | < 640px | Single column, hamburger menu, smaller text |
| Tablet | 640px – 1024px | 2-column grids, condensed spacing |
| Desktop | > 1024px | Full layout, 3-column grids, large type |

---

## Dark / Light Toggle

- Default: Dark mode
- Toggle: Icon button in Navbar (sun/moon)
- Implementation: CSS variables swapped via `data-theme` attribute on `<html>`
- Persistence: `localStorage` + respect `prefers-color-scheme`
