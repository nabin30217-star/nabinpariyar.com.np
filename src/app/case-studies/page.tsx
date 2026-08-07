import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getAllCaseStudies } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Case Studies",
  description: "Technical cases from Nabin Pariyar’s Android work: a recursive-descent parser, FFmpeg with WorkManager, and Samsung TV control without an official SDK.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <p className="utility-label text-accent">Case studies / decisions under the interface</p>
        <div>
          <h1 className="display-title text-text">How I solved the difficult part inside each product.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">Each case explains one engineering decision, why it mattered, what I implemented, and how it changed the product.</p>
        </div>
      </div>

      <ol className="divide-y divide-border border-b border-border">
        {studies.map((study, index) => (
          <li key={study.slug}>
            <Link href={`/case-studies/${study.slug}`} className="group grid min-h-44 gap-5 py-9 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
              <span className="font-utility text-xs text-accent">0{index + 1}</span>
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.025em] text-text sm:text-4xl">{study.title}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-text-muted">{study.description}</p>
                <p className="mt-3 font-utility text-[0.7rem] uppercase tracking-[0.06em] text-text-muted">{study.tags.join(" / ")}</p>
              </div>
              <span aria-hidden="true" className="text-2xl text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
}
