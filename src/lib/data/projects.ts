import { Project } from "@/types";

const productOrder = [
  "com.universaltv.remotetv",
  "com.paperly.pdfscanner",
  "com.vixit.studio.converter",
  "com.smart.samtvremote",
  "smartcalculator.calculators",
  "com.tvremote.vestel",
  "com.remote.skyworthir",
  "com.remote.bushtvir",
];

const projectRank = new Map(productOrder.map((id, index) => [id, index]));

export const projects: Project[] = [
  {
    id: "smartcalculator.calculators",
    title: "Smart Calculator – Converter",
    description:
      "A multi-tool calculator whose expression engine is a hand-built recursive-descent parser. The technical center is owned in Kotlin rather than delegated to a general-purpose math library.",
    image: "/images/projects/smart-calculator.png",
    tags: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=smartcalculator.calculators",
    githubUrl: "https://github.com/nabin30217-star",
    featured: true,
  },
  {
    id: "com.vixit.studio.converter",
    title: "Video Compressor: Save Space",
    description:
      "A video utility built around FFmpeg processing and WorkManager background jobs, so compression work is not coupled to one open screen.",
    image: "/images/projects/vixit.png",
    tags: ["Kotlin", "Jetpack Compose", "FFmpeg", "WorkManager"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.vixit.studio.converter",
    githubUrl: "https://github.com/nabin30217-star",
    featured: true,
  },
  {
    id: "com.smart.samtvremote",
    title: "Remote Control for Samsung TV",
    description:
      "A Samsung TV remote built without an official SDK. It works directly with Samsung’s WebSocket control path and Wake-on-LAN behavior.",
    image: "/images/projects/samsung-tv-remote.png",
    tags: ["Kotlin", "IR Blaster API", "Wi-Fi Direct", "WebSocket"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.smart.samtvremote",
    githubUrl: "https://github.com/nabin30217-star",
    featured: true,
  },
  {
    id: "com.paperly.pdfscanner",
    title: "PDF Scanner – Sign & OCR",
    description:
      "A published Android document-scanning utility for turning phone captures into organized PDF output.",
    image: "/images/projects/paperly.png",
    tags: ["Android", "Kotlin", "Document workflow"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.paperly.pdfscanner",
    githubUrl: "https://github.com/nabin30217-star",
    featured: false,
  },
  {
    id: "com.universaltv.remotetv",
    title: "Universal Remote for All TV",
    description:
      "A multi-brand television remote combining local-network control for smart TVs with infrared control for compatible Android phones, plus casting and screen-mirroring workflows.",
    image: "/images/projects/universal-tv-remote.png",
    tags: ["Kotlin", "Jetpack Compose", "Wi-Fi discovery", "IR Blaster"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.universaltv.remotetv",
    githubUrl: "https://github.com/nabin30217-star",
    featured: false,
  },
  {
    id: "com.tvremote.vestel",
    title: "Remote For Vestel TV",
    description:
      "A hybrid Vestel remote with SSDP discovery and Wake-on-LAN for smart televisions plus native infrared control for compatible legacy models.",
    image: "/images/projects/vestel-tv-remote.png",
    tags: ["Kotlin", "SSDP", "Wake-on-LAN", "IR Blaster"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.tvremote.vestel",
    githubUrl: "https://github.com/nabin30217-star",
    featured: false,
  },
  {
    id: "com.remote.skyworthir",
    title: "TV Remote For Skyworth",
    description:
      "A dual-mode remote for Skyworth televisions using local-network discovery for Android and Google TV models and infrared commands for compatible classic televisions.",
    image: "/images/projects/skyworth-tv-remote.png",
    tags: ["Kotlin", "Wi-Fi discovery", "Google TV", "IR Blaster"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.remote.skyworthir",
    githubUrl: "https://github.com/nabin30217-star",
    featured: false,
  },
  {
    id: "com.remote.bushtvir",
    title: "Remote for Bush TV",
    description:
      "A Bush TV replacement remote with automatic Wi-Fi discovery for supported smart models and offline infrared control for compatible Android devices.",
    image: "/images/projects/bush-tv-remote.png",
    tags: ["Kotlin", "Wi-Fi discovery", "Android TV", "IR Blaster"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.remote.bushtvir",
    githubUrl: "https://github.com/nabin30217-star",
    featured: false,
  },
].sort(
  (first, second) =>
    (projectRank.get(first.id) ?? Number.MAX_SAFE_INTEGER) -
    (projectRank.get(second.id) ?? Number.MAX_SAFE_INTEGER),
);
