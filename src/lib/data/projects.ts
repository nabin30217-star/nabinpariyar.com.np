import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "smart-calculator",
    title: "Smart Calculator – All in One",
    description:
      "Fast calculator with clean UI and useful tools. Features include scientific calculator, unit converter, and more.",
    image: "/images/projects/smart-calculator.png",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=smartcalculator.calculators",
    featured: true,
  },
  {
    id: "vixit",
    title: "Vixit Video Compressor & Tools",
    description:
      "All-in-one video toolkit. Convert, compress, trim, and manage videos with an intuitive interface.",
    image: "/images/projects/vixit.png",
    tags: ["Kotlin", "Jetpack Compose", "FFmpeg"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.vixit.studio.converter",
    featured: true,
  },
  {
    id: "samsung-tv-remote",
    title: "Samsung TV Remote – Wi-Fi & IR",
    description:
      "Control Samsung TVs via IR blaster and Wi-Fi with a simple, intuitive remote layout.",
    image: "/images/projects/samsung-tv-remote.png",
    tags: ["Kotlin", "IR Blaster API", "Wi-Fi Direct"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.smart.samtvremote",
    featured: true,
  },
  {
    id: "paperly",
    title: "Paperly PDF Scanner",
    description:
      "Document scanner with edge detection and filters.",
    image: "/images/projects/paperly.png",
    tags: ["Kotlin", "Jetpack Compose", "OpenCV", "CameraX"],
    featured: false,
  },
  {
    id: "portfolio",
    title: "nabinpariyar.com.np",
    description:
      "Personal portfolio website built with modern web technologies.",
    image: "/images/projects/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://nabinpariyar.com.np",
    featured: false,
  },
];
