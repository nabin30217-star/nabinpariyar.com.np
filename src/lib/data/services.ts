import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "android-development",
    title: "Android App Development",
    description:
      "Full-cycle Android development — from idea to Play Store launch and beyond. I build native apps with Kotlin and Jetpack Compose that are fast, beautiful, and production-ready. I've published 3 apps and know the Play Store inside out.",
    icon: "smartphone",
    features: [
      "Kotlin & Jetpack Compose (modern, no XML)",
      "Material Design 3 — premium look and feel",
      "Play Store publishing, ASO & policy compliance",
      "Firebase: Auth, Crashlytics, Analytics, Cloud Messaging",
      "AdMob & rewarded ads monetization",
      "Background processing with WorkManager",
      "CameraX, OpenCV, FFmpeg integrations",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, fast websites built with Next.js and TypeScript. Every site comes SEO-optimized, mobile-responsive, and designed to convert visitors into clients. This portfolio site is a live example of my work.",
    icon: "globe",
    features: [
      "Next.js & React — server-side rendering for speed",
      "TypeScript — fewer bugs, better code",
      "Tailwind CSS — pixel-perfect responsive design",
      "Framer Motion — smooth animations and interactions",
      "SEO: meta tags, schema markup, sitemap, OG images",
      "Vercel deployment with custom domains",
      "Contact forms with email integration",
    ],
  },
  {
    id: "ui-design",
    title: "UI/UX Design & Implementation",
    description:
      "I don't just design — I design AND build. Every interface I create is implemented in production code, not left as a Figma file. Focus on mobile-first, accessible designs that users actually enjoy using.",
    icon: "palette",
    features: [
      "Mobile-first responsive layouts",
      "Material Design 3 guidelines",
      "Dark & light theme with smooth transitions",
      "Micro-animations and interactive elements",
      "Accessibility: screen readers, reduced motion, ARIA labels",
      "Design-to-code — no handoff delays",
    ],
  },
  {
    id: "app-maintenance",
    title: "App Maintenance & Growth",
    description:
      "Already have an app? I'll keep it running smoothly, fix bugs, improve performance, and ship new features. I also handle Play Store policy updates and compliance issues — I've dealt with them firsthand.",
    icon: "wrench",
    features: [
      "Bug fixes, crash resolution & stability improvements",
      "Feature development and updates",
      "Play Store policy compliance & review fixes",
      "Performance profiling and optimization",
      "Firebase Crashlytics monitoring & analysis",
      "Dependency updates & Android version targeting",
    ],
  },
];
