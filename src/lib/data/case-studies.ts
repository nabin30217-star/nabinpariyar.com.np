import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-calculator",
    title: "Smart Calculator – All in One",
    description:
      "A deep dive into building a fast, feature-packed calculator app for Android with Kotlin and Jetpack Compose.",
    coverImage: "/images/projects/smart-calculator.png",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Material 3"],
    publishedAt: "2025-01-15",
    sections: [
      {
        title: "Overview",
        content:
          "Smart Calculator is an all-in-one calculator app for Android, offering a clean UI with multiple useful tools beyond basic arithmetic. Built with Kotlin and Jetpack Compose, it follows modern Android architecture patterns and Material Design 3 guidelines.",
      },
      {
        title: "Problem",
        content:
          "Most calculator apps on the Play Store are either too simple (just basic math) or overloaded with features buried in confusing menus. Users needed a calculator that's fast to open, easy to use, but powerful enough for everyday tasks like unit conversion, percentage calculations, and more — all in one place.",
      },
      {
        title: "Architecture",
        content:
          "The app is built with a single-activity architecture using Jetpack Compose for the entire UI layer. It follows MVVM with clean architecture principles: UI layer (Compose screens + ViewModels), Domain layer (use cases), and Data layer (repositories). Dependency injection is handled through manual constructor injection to keep the APK size minimal.",
      },
      {
        title: "Technical Challenges",
        content:
          "Expression parsing was the biggest challenge — building a reliable math parser that handles operator precedence, parentheses, and edge cases (like division by zero) without relying on heavy third-party libraries. The solution was a custom recursive descent parser that's both fast and lightweight. Another challenge was making the UI responsive across hundreds of different Android screen sizes and densities.",
      },
      {
        title: "Performance Optimization",
        content:
          "The app prioritizes instant startup time and smooth animations. Compose's lazy composition means only visible UI elements are rendered. The APK size is kept under 5MB by avoiding unnecessary dependencies. ProGuard/R8 shrinking removes unused code, and all assets are optimized for size.",
      },
      {
        title: "Results",
        content:
          "Published on the Google Play Store with positive user reception. The app maintains a fast startup time, small install size, and stable crash-free rate. It continues to receive updates based on user feedback and Play Console analytics.",
      },
    ],
  },
];
