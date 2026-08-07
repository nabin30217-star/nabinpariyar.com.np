import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Working Stack",
  description: "The web, Android, backend, cloud, recovery, device-integration, and Google Play technologies I use in real products.",
  path: "/stack",
});

const stack = [
  ["Languages", "TypeScript / JavaScript / Kotlin / SQL / HTML / CSS"],
  ["Full-stack web", "Next.js / React / Server Components / route handlers / APIs"],
  ["Web interface", "Responsive layouts / Tailwind CSS / semantic HTML / accessibility"],
  ["Backend and data", "Supabase PostgreSQL / Auth / Storage / Realtime / Edge Functions / Row Level Security"],
  ["Cloud and recovery", "Cloudflare / GitHub / Google Drive / daily backups / staging restoration"],
  ["Android product", "Kotlin / Jetpack Compose / Material 3 / MVVM / Room / Retrofit / Firebase"],
  ["Background and media", "WorkManager / coroutines / FFmpeg / CameraX / OpenCV"],
  ["Device communication", "IR / SSDP / UPnP / WebSocket / Wake-on-LAN / casting / screen mirroring"],
  ["Publishing", "Google Play Console / AAB / ASO / test tracks / production releases"],
];

export default function StackPage() {
  return (
    <Container className="max-w-5xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <SectionHeading eyebrow="Working stack / used in real products" title="The technologies I use across web, Android, cloud, and release work." subtitle="I list tools here when they are part of a product I built, delivered, published, or currently maintain." />
      <dl className="border-y border-border">
        {stack.map(([label, value], index) => (
          <div key={label} className="grid gap-2 border-b border-border py-6 last:border-b-0 sm:grid-cols-[3rem_12rem_1fr]">
            <span className="font-utility text-xs text-accent">0{index + 1}</span>
            <dt className="font-semibold text-text">{label}</dt>
            <dd className="leading-7 text-text-muted">{value}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
