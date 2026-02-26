import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "android-development",
    title: "Android App Development",
    description:
      "Native Android applications from concept to Play Store launch. Built with Kotlin, Jetpack Compose, and Material Design for a premium user experience.",
    icon: "smartphone",
    features: [
      "Kotlin & Jetpack Compose",
      "Material Design 3",
      "Play Store publishing & ASO",
      "Firebase integration",
      "AdMob monetization",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications. Built with Next.js, TypeScript, and Tailwind CSS for speed and SEO.",
    icon: "globe",
    features: [
      "Next.js & React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive design",
      "SEO optimization",
    ],
  },
  {
    id: "ui-design",
    title: "UI Design & Implementation",
    description:
      "Clean, intuitive interfaces built with Material Design 3. I design and implement mobile-first UIs that look great and feel natural.",
    icon: "palette",
    features: [
      "Mobile-first approach",
      "Material Design 3 guidelines",
      "Responsive layouts",
      "Dark & light theme support",
      "Accessibility basics",
    ],
  },
  {
    id: "app-maintenance",
    title: "App Maintenance & Updates",
    description:
      "Keep your existing apps running smoothly. Bug fixes, performance improvements, feature updates, and Play Store compliance.",
    icon: "wrench",
    features: [
      "Bug fixes & patches",
      "Feature updates",
      "Play Store compliance",
      "Performance optimization",
      "Crash monitoring",
    ],
  },
];
