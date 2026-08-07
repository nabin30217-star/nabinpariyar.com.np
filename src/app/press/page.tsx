import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getPortfolioProjects } from "@/lib/services/playStore";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Press Reference",
  description: "My verified biography, profile image, engineering background, Android app assets, and contact information.",
  path: "/press",
});

export const revalidate = 86400;

export default async function PressPage() {
  const projects = await getPortfolioProjects();

  return (
    <Container className="max-w-5xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <SectionHeading eyebrow="Press / factual reference" title="My biography and current product assets." subtitle="I provide the verified text and images below for coverage, reviews, or interview requests." />

      <section className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[0.58fr_1.42fr]" aria-labelledby="press-bio-title">
        <div>
          <Image src="/images/nabin-profile.png" alt="Nabin Pariyar" width={420} height={525} priority sizes="(max-width: 1024px) 100vw, 360px" className="h-auto w-full border border-border object-cover" />
          <a href="/images/nabin-profile.png" download className="text-link mt-3">Download my profile image ↓</a>
        </div>
        <div>
          <p className="utility-label text-accent">My biography</p>
          <h2 id="press-bio-title" className="mt-4 font-display text-4xl font-semibold text-text">Nabin Pariyar</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-text-muted">
            <p>I am a full-stack web and Android developer from Nepal with three years of software-industry experience. I spent two years working as part of a team managing three company-owned Google Play Console accounts covering approximately 900 apps, including publishing, store listings, AAB releases, ASO, and IR-code research.</p>
            <p>Since June 2025, I have worked independently. I built and delivered a private garment ERP that is live across three shops and supports an operation of more than 80 people. I have also built more than 15 Android apps and currently publish eight of them through my own TheMixzone account.</p>
            <p>My work includes TypeScript, Next.js, React, Supabase, Cloudflare, Kotlin, Jetpack Compose, FFmpeg, WorkManager, device discovery, infrared control, WebSockets, Wake-on-LAN, deployment, publishing, backup, and recovery systems.</p>
          </div>
          <p className="mt-6 leading-7 text-text-muted">For interviews or fact-checking, email <a href="mailto:nabin30217@gmail.com" className="text-link align-middle">nabin30217@gmail.com</a>.</p>
        </div>
      </section>

      <section className="pt-12" aria-labelledby="app-assets-title">
        <p className="utility-label text-accent">My published products</p>
        <h2 id="app-assets-title" className="mt-3 font-display text-3xl font-semibold text-text">Current Google Play icons</h2>
        <p className="mt-4 max-w-3xl leading-7 text-text-muted">These titles and icons refresh from my public Google Play listings each day. Local files remain as fallbacks if Google Play is temporarily unavailable.</p>
        <ul className="mt-7 grid gap-px border border-border bg-border sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id} className="bg-bg p-5">
              <a href={project.playStoreUrl ?? project.image} target="_blank" rel="noopener noreferrer" className="flex min-h-24 items-center gap-5">
                <Image src={project.image} alt={`${project.title} app icon`} width={72} height={72} sizes="72px" className="h-18 w-18 object-contain" />
                <span>
                  <span className="block font-semibold text-text">{project.title}</span>
                  <span className="mt-1 block text-sm text-text-muted">Open current listing ↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Link href="/contact" className="text-link mt-10">Press or interview inquiry →</Link>
    </Container>
  );
}
