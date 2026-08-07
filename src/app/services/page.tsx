import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ways to Work Together",
  description: "I build full-stack business systems, native Android applications, device and media integrations, and handle Google Play publishing and ASO.",
  path: "/services",
});

const scopes = [
  {
    number: "01",
    title: "Full-stack business systems",
    text: "I build ERP platforms, dashboards, multi-shop systems, accounting and inventory workflows, employee and payroll tools, reports, authentication, permissions, backups, and recovery tooling.",
    evidence: "TypeScript / Next.js / React / Tailwind CSS / Supabase PostgreSQL / Cloudflare",
  },
  {
    number: "02",
    title: "Native Android applications",
    text: "I build Android products across categories, from interface and application state through local data, background processing, native device features, testing, Play Store release, and maintenance.",
    evidence: "Kotlin / Jetpack Compose / MVVM / Room / Retrofit / Firebase / WorkManager",
  },
  {
    number: "03",
    title: "Device and media engineering",
    text: "I implement media pipelines, camera workflows, infrared control, television discovery, network protocols, casting, screen mirroring, and long-running background work.",
    evidence: "FFmpeg / CameraX / OpenCV / SSDP / UPnP / WebSocket / Wake-on-LAN / IR",
  },
  {
    number: "04",
    title: "Google Play publishing and ASO",
    text: "I prepare listings, write and optimize descriptions, upload AAB releases, manage test and production tracks, monitor app status, research competitors and keywords, and maintain released products.",
    evidence: "Two years / three company Console accounts / approximately 900 apps / my own TheMixzone account",
  },
];

export default function ServicesPage() {
  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <p className="utility-label text-accent">How I can help / web + Android + release</p>
        <div>
          <h1 className="display-title text-text">I can carry a product from workflow to release and maintenance.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">I can build the complete web system, the native Android product, the backend and recovery layer, or the Play Store release process around it.</p>
        </div>
      </div>

      <ol className="divide-y divide-border border-b border-border">
        {scopes.map((scope) => (
          <li key={scope.number} className="grid gap-5 py-10 lg:grid-cols-[4rem_0.8fr_1.2fr] lg:gap-10">
            <span className="font-utility text-xs text-accent">{scope.number}</span>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-text">{scope.title}</h2>
            <div>
              <p className="leading-7 text-text-muted">{scope.text}</p>
              <p className="mt-4 font-utility text-[0.7rem] uppercase leading-5 tracking-[0.05em] text-accent">{scope.evidence}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 border-l-2 border-accent pl-6">
        <p className="max-w-2xl text-lg leading-8 text-text">A first conversation is for deciding whether my experience fits the problem and what a realistic scope looks like.</p>
        <Link href="/contact" className="text-link mt-4">Describe the problem →</Link>
      </div>
    </Container>
  );
}
