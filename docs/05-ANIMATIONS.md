# 05 — Animation Strategy

## Core Principle

> Animations should be **subtle and professional**. No flashy effects, no excessive movement. Every animation serves a purpose: guiding the eye, confirming interaction, or adding visual polish.

---

## Animation Library

**Framer Motion** — Used for all animations via React components.

---

## Animation Types

### 1. Scroll Reveal (FadeIn)

**Where**: Every section on every page
**Trigger**: When element enters viewport
**Effect**: Fade in + slight upward movement

```
initial:     { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
transition:  { duration: 0.5, ease: "easeOut" }
viewport:    { once: true, margin: "-100px" }
```

### 2. Staggered List (SlideUp)

**Where**: Project cards, skill badges, service cards
**Trigger**: When parent enters viewport
**Effect**: Items appear one after another with slight delay

```
Container:
  whileInView: "visible"
  variants:
    visible: { transition: { staggerChildren: 0.1 } }

Each child:
  variants:
    hidden:  { opacity: 0, y: 40 }
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
```

### 3. TypeWriter (Hero)

**Where**: Home page hero section only
**Effect**: Types text character by character, deletes, types next word

```
Words to cycle:
  "Mobile & Web Systems Engineer"
  "Android Developer"
  "Building for the Play Store"
  "Learning. Shipping. Growing."

Timing:
  Type speed:   80ms per character
  Delete speed:  40ms per character
  Pause after:   2000ms
  Cursor:        Blinking | character (CSS animation)
```

### 4. Hover Effects

**Where**: Cards, buttons, links
**Effect**: Subtle scale, color shift, glow

```
Cards:
  whileHover: { y: -2 }    // Slight lift
  + CSS: border-color transition, glow shadow

Buttons:
  whileHover: { scale: 1.02 }
  whileTap: { scale: 0.98 }
  + CSS: background-color transition

Links:
  CSS only: color transition, underline animation
```

### 5. Page Transitions (Optional Enhancement)

**Where**: Between route changes
**Effect**: Subtle fade

```
Using Framer Motion AnimatePresence in layout:
  initial:  { opacity: 0 }
  animate:  { opacity: 1 }
  exit:     { opacity: 0 }
  transition: { duration: 0.2 }
```

Note: Keep this very subtle. Pages should feel instant.

### 6. Navbar Scroll Effect

**Where**: Navbar background
**Effect**: Transparent → frosted glass on scroll

```
No Framer Motion needed — pure CSS + JS scroll listener:
  scroll > 50px → add classes:
    bg-bg/80 backdrop-blur-md border-b border-border shadow-sm
  scroll = 0 → remove classes:
    bg-transparent border-transparent
```

---

## Animation DO's and DON'Ts

### ✅ DO

- Use `once: true` for scroll animations (don't repeat)
- Keep durations under 0.6s
- Use `ease: "easeOut"` for natural movement
- Stagger children by 0.1s max
- Use hover effects for interactive feedback

### ❌ DON'T

- Animate on page load aggressively (hero animation is enough)
- Use bounce or spring effects (too playful for professional site)
- Animate layout shifts (causes CLS, hurts Lighthouse)
- Use parallax scrolling (distracting)
- Over-animate navigation (keep it instant)
- Use animation delays longer than 0.3s (feels slow)

---

## Performance Considerations

1. **`will-change`**: Only add to elements that actually animate
2. **GPU acceleration**: Framer Motion uses `transform` by default (good)
3. **Reduced motion**: Respect `prefers-reduced-motion` media query — disable all animations
4. **Lazy viewport triggers**: Use `margin: "-100px"` so animations start slightly before visible
