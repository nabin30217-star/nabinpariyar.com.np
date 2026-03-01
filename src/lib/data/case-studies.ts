import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-calculator",
    title: "Smart Calculator – All in One",
    description:
      "Building a fast, feature-packed calculator that outperforms stock apps — with a custom math parser and zero third-party math libraries.",
    coverImage: "/images/projects/smart-calculator.png",
    tags: ["Android", "Kotlin", "Jetpack Compose", "Material 3"],
    publishedAt: "2025-01-15",
    sections: [
      {
        title: "The Problem",
        content:
          "Stock calculator apps are too basic — they handle arithmetic but nothing else. Third-party calculators on the Play Store are either bloated with ads, confusingly complex, or surprisingly slow to open. I wanted to build something that loads instantly, handles everything from tip calculations to scientific equations, and feels native to Material Design 3.",
      },
      {
        title: "The Solution",
        content:
          "Smart Calculator packs 15+ tools into a single app: scientific calculator, unit converter, tip calculator, percentage calculator, age calculator, BMI calculator, and more. Each tool is a separate Compose screen with its own ViewModel, but they share a common expression evaluation engine under the hood.",
      },
      {
        title: "Technical Deep Dive: Custom Math Parser",
        content:
          "The biggest technical challenge was building a reliable expression parser. Instead of using heavy libraries like exp4j or MathParser, I built a custom recursive descent parser in pure Kotlin. It handles operator precedence (PEMDAS), nested parentheses, implicit multiplication (e.g., '2(3+4)'), and edge cases like division by zero and overflow. The parser tokenizes the input string, builds an AST (Abstract Syntax Tree), and evaluates it — all in under 1ms for typical expressions.",
      },
      {
        title: "Architecture",
        content:
          "Single-activity architecture with Jetpack Compose for the entire UI. Follows MVVM with clean architecture: UI layer (Compose screens + ViewModels), Domain layer (use cases for each calculator tool), and Data layer (SharedPreferences for history, no database needed to keep the app lightweight). Dependency injection is done via manual constructor injection — this keeps the APK under 5MB without Hilt/Dagger overhead.",
      },
      {
        title: "Performance Decisions",
        content:
          "Every design decision was about speed: Compose's lazy composition renders only visible elements. No splash screen — the app opens directly to the calculator. R8 shrinking removes unused code paths. All icons are vector drawables, not PNGs. The result: cold start under 300ms on mid-range devices, APK size under 5MB, and zero ANRs in production.",
      },
      {
        title: "What I Learned",
        content:
          "Building a math parser from scratch taught me more about computer science fundamentals than any tutorial. Handling edge cases in real user input (people type weird things into calculators) improved my defensive programming. Publishing on the Play Store taught me about ASO, crash reporting with Firebase Crashlytics, and iterating based on real user feedback from reviews.",
      },
    ],
  },
  {
    slug: "vixit",
    title: "Vixit Video Compressor & Tools",
    description:
      "Integrating FFmpeg into a mobile app for video compression, format conversion, and audio extraction — with background processing that doesn't kill the UX.",
    coverImage: "/images/projects/vixit.png",
    tags: ["Android", "Kotlin", "FFmpeg", "WorkManager", "Jetpack Compose"],
    publishedAt: "2025-02-01",
    sections: [
      {
        title: "The Problem",
        content:
          "Videos shot on modern phones are massive — a 1-minute 4K video can be 400MB+. Sharing these over WhatsApp, email, or social media often means hitting file size limits, waiting forever for uploads, or losing quality to aggressive auto-compression. Users needed a tool that gives them control: choose your output quality, format, and file size.",
      },
      {
        title: "The Solution",
        content:
          "Vixit is a complete video toolkit: compress videos with adjustable quality (reduce 400MB to 20MB), convert between formats (MP4, AVI, MKV, WebM), extract audio tracks to MP3/AAC, and trim videos with frame-accurate precision. All processing happens in the background so users can close the app and come back later.",
      },
      {
        title: "Technical Deep Dive: FFmpeg Integration",
        content:
          "The core challenge was integrating FFmpeg — a powerful but complex C library — into a Kotlin/Android app. I used FFmpegKit to bridge native code with Kotlin, then built a command builder layer on top that translates user-friendly options (like 'Medium Quality, 720p') into FFmpeg command strings (like '-c:v libx264 -crf 28 -vf scale=-2:720 -preset fast'). This abstraction layer makes it easy to add new tools without touching FFmpeg internals.",
      },
      {
        title: "Background Processing",
        content:
          "Video conversion can take minutes — users shouldn't be forced to keep the app open. I implemented WorkManager for background processing with persistent notifications showing real-time progress (percentage, estimated time remaining, file size). If the user kills the app or the phone restarts, WorkManager automatically resumes the conversion. Each conversion job is a CoroutineWorker with proper cancellation support.",
      },
      {
        title: "Architecture Decisions",
        content:
          "The app follows MVVM with a Repository pattern. The FFmpeg command layer is completely decoupled from the UI — ViewModels only know about 'ConversionJob' objects, not FFmpeg details. This made testing easier and allowed me to swap FFmpeg versions without touching any UI code. File management uses Android's MediaStore API for scoped storage compliance.",
      },
      {
        title: "What I Learned",
        content:
          "Working with native libraries (FFmpeg) taught me about JNI bridges, memory management in native code, and the importance of proper error handling when native code crashes don't give you nice stack traces. Building the progress tracking system taught me about WorkManager's constraints, retry policies, and how to handle edge cases like low storage space mid-conversion.",
      },
    ],
  },
  {
    slug: "samsung-tv-remote",
    title: "Samsung TV Remote – Wi-Fi & IR",
    description:
      "Reverse-engineering Samsung's TV control protocols to build a dual-mode remote that works over both IR hardware and Wi-Fi networks.",
    coverImage: "/images/projects/samsung-tv-remote.png",
    tags: ["Android", "Kotlin", "IR Blaster", "WebSocket", "UPnP"],
    publishedAt: "2025-02-15",
    sections: [
      {
        title: "The Problem",
        content:
          "TV remotes get lost, break, or run out of batteries. Samsung's official SmartThings app works for Wi-Fi control but is bloated (100MB+), requires account login, and doesn't support IR. Third-party remotes on the Play Store are ad-heavy and often don't work. Users wanted something simple: open the app, tap a button, and the TV responds.",
      },
      {
        title: "The Solution",
        content:
          "A lightweight remote app with two control modes: IR blaster for older Samsung TVs (no Wi-Fi needed) and Wi-Fi control for smart TVs. The app auto-detects which mode to use based on the phone's hardware capabilities and available TVs on the network. The UI mimics a real remote layout — power, volume, channels, directional pad, number pad — so there's zero learning curve.",
      },
      {
        title: "Technical Deep Dive: IR Blaster API",
        content:
          "Android's ConsumerIrManager API sends raw IR signals at specific frequencies. Samsung TVs use the NEC protocol at 38kHz. The challenge was finding the correct IR codes for every Samsung remote function — there's no official database. I built a custom IR code database by decoding signals from a real Samsung remote using timing patterns, then encoding them into the format Android's API expects (alternating mark/space microsecond arrays).",
      },
      {
        title: "Technical Deep Dive: Wi-Fi Control",
        content:
          "Samsung smart TVs expose a WebSocket server on port 8001/8002. The connection flow: (1) Discover TVs on the local network using UPnP/SSDP multicast, (2) Connect via WebSocket with a handshake that includes app name and device token, (3) Send key commands as JSON payloads. The tricky part was handling Samsung's pairing flow — the TV shows a popup asking the user to allow the connection, and the app needs to wait for approval before sending commands.",
      },
      {
        title: "Architecture",
        content:
          "Clean separation between control modes: an abstract RemoteController interface with IRRemoteController and WiFiRemoteController implementations. The UI layer doesn't care whether a button press goes through IR or WebSocket — it just calls remoteController.sendKey(KEY_VOLUME_UP). Network discovery runs on a background coroutine with a timeout, and the connection state is managed with StateFlow for reactive UI updates.",
      },
      {
        title: "What I Learned",
        content:
          "This project pushed me into hardware-software interaction territory. Understanding IR protocols, signal timing, and radio frequencies was completely new. On the networking side, implementing UPnP discovery and WebSocket communication taught me about multicast, device pairing handshakes, and handling unreliable network connections gracefully (TVs drop WebSocket connections frequently).",
      },
    ],
  },
];
