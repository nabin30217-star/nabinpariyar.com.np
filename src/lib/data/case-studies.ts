import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "smart-calculator",
    title: "Smart Calculator — owning the expression engine",
    description: "Why a utility app needed a hand-built recursive-descent parser instead of a generic math dependency.",
    coverImage: "/images/projects/smart-calculator.png",
    tags: ["Kotlin", "Jetpack Compose", "Parsing", "Android"],
    publishedAt: "2025-01-15",
    sections: [
      {
        title: "The product constraint",
        content: "A calculator is judged at the exact moment a user enters an expression. Operator precedence, nested parentheses, incomplete input, and invalid states are not edge decoration; they are the product. A generic evaluator would have reduced initial work, but it would also have moved the most important behavior outside the app’s control.",
      },
      {
        title: "The technical center",
        content: "I built the expression engine as a recursive-descent parser in Kotlin. The grammar separates expression, term, and factor rules so precedence follows the structure of the parser instead of a pile of special cases. The result is a focused engine that I can reason about alongside the interface that feeds it.",
      },
      {
        title: "The product consequence",
        content: "Owning the parser makes error behavior and input handling product decisions. The app can reject malformed expressions deliberately, keep evaluation rules consistent, and evolve the calculator without waiting on a broad library’s API or carrying features it does not use.",
      },
      {
        title: "What this demonstrates",
        content: "The interesting work is not that the app contains a calculator screen. I identified the part users must trust and chose to understand and implement that part directly.",
      },
    ],
  },
  {
    slug: "vixit",
    title: "Video Compressor — work that survives the screen",
    description: "How FFmpeg and WorkManager separate long-running media processing from the visible Android interface.",
    coverImage: "/images/projects/vixit.png",
    tags: ["Kotlin", "FFmpeg", "WorkManager", "Android"],
    publishedAt: "2025-02-01",
    sections: [
      {
        title: "The product constraint",
        content: "Video compression is not an instant button action. It can outlive the screen that started it, compete for device resources, and fail after the user has moved on. Treating that work as ordinary UI state would make the product fragile by design.",
      },
      {
        title: "The processing boundary",
        content: "FFmpeg owns the media operation. The Android layer translates the user’s choice into a processing job and keeps the interface concerned with intent, progress, completion, and failure rather than codec internals.",
      },
      {
        title: "Background execution",
        content: "WorkManager carries the long-running job beyond one foreground screen. That decision changes the user experience: leaving the interface does not have to mean abandoning the operation, and the app has a defined place to report progress and failure.",
      },
      {
        title: "What this demonstrates",
        content: "The core engineering move was drawing the lifecycle boundary correctly. Native media work, Android background execution, and the visible interface each have different responsibilities, and the product is more dependable when those responsibilities remain separate.",
      },
    ],
  },
  {
    slug: "samsung-tv-remote",
    title: "Samsung TV Remote — working without the SDK",
    description: "A direct implementation of Samsung TV control using WebSocket communication and Wake-on-LAN behavior.",
    coverImage: "/images/projects/samsung-tv-remote.png",
    tags: ["Kotlin", "WebSocket", "Wake-on-LAN", "Android"],
    publishedAt: "2025-02-15",
    sections: [
      {
        title: "The product constraint",
        content: "The product promise is simple: a button on the phone should make the television respond. Under that interface is a proprietary device relationship with connection state, pairing behavior, network uncertainty, and no official SDK to hide those details.",
      },
      {
        title: "The protocol path",
        content: "I worked directly with Samsung’s WebSocket-based control behavior. Commands have to be expressed in the format the television accepts, and the app has to treat connection and pairing as real states rather than optimistic button taps.",
      },
      {
        title: "Waking the device",
        content: "Control is only useful when the television can be reached. Wake-on-LAN behavior sits beside the WebSocket command path so the product can account for the device being asleep as well as connected.",
      },
      {
        title: "What this demonstrates",
        content: "This was protocol work, not a branded remote skin. The interface stays familiar because the complexity is absorbed underneath it: device state, network communication, and the absence of an official integration layer.",
      },
    ],
  },
];
