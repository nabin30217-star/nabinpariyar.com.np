import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "smart-calculator",
    title: "Smart Calculator – All in One",
    description:
      "Advanced calculator with 15+ tools including scientific mode, unit converter, and tip calculator. Built a custom recursive descent parser for expression evaluation — no heavy math libraries needed. Under 5MB APK size.",
    image: "/images/projects/smart-calculator.png",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=smartcalculator.calculators",
    githubUrl: "https://github.com/nabin30217-star",
    featured: true,
  },
  {
    id: "vixit",
    title: "Vixit Video Compressor & Tools",
    description:
      "Video toolkit with FFmpeg-powered compression, format conversion, audio extraction, and trimming. Implemented background processing with WorkManager so users can multitask while videos convert.",
    image: "/images/projects/vixit.png",
    tags: ["Kotlin", "Jetpack Compose", "FFmpeg", "WorkManager"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.vixit.studio.converter",
    githubUrl: "https://github.com/nabin30217-star",
    featured: true,
  },
  {
    id: "samsung-tv-remote",
    title: "Samsung TV Remote – Wi-Fi & IR",
    description:
      "Dual-mode TV remote supporting both IR blaster hardware and Wi-Fi network control. Implemented Samsung's WebSocket-based WoL protocol for network discovery and UPnP for device pairing — no Samsung SDK required.",
    image: "/images/projects/samsung-tv-remote.png",
    tags: ["Kotlin", "IR Blaster API", "Wi-Fi Direct", "WebSocket"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.smart.samtvremote",
    githubUrl: "https://github.com/nabin30217-star",
    featured: true,
  },
  {
    id: "paperly",
    title: "Paperly PDF Scanner",
    description:
      "Document scanner with real-time edge detection using OpenCV, perspective correction, and adaptive image filters. Built a custom CameraX pipeline for high-res capture with automatic document boundary detection.",
    image: "/images/projects/paperly.png",
    tags: ["Kotlin", "Jetpack Compose", "OpenCV", "CameraX"],
    githubUrl: "https://github.com/nabin30217-star",
    featured: false,
  },
];
