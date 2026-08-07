import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getAllCaseStudies, getCaseStudy } from "@/lib/data";
import { getPortfolioProjects } from "@/lib/services/playStore";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 86400;

const packageByCaseSlug: Record<string, string> = {
  "smart-calculator": "smartcalculator.calculators",
  vixit: "com.vixit.studio.converter",
  "samsung-tv-remote": "com.smart.samtvremote",
};

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return createPageMetadata({
    title: study.title,
    description: study.description,
    path: `/case-studies/${slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  const projects = await getPortfolioProjects();
  const project = projects.find((item) => item.id === packageByCaseSlug[slug]);
  const coverImage = project?.image ?? study.coverImage;

  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Link href="/case-studies" className="text-link">← All engineering cases</Link>

      <header className="mt-8 grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div className="flex h-44 w-44 items-center justify-center border border-border bg-surface p-7">
          <Image src={coverImage} alt={`${study.title} app icon`} width={128} height={128} sizes="128px" className="h-28 w-28 object-contain" priority />
        </div>
        <div>
          <p className="utility-label text-accent">Android engineering case</p>
          <h1 className="display-title mt-5 text-text">{study.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">{study.description}</p>
          <p className="mt-5 font-utility text-xs uppercase leading-6 tracking-[0.06em] text-text-muted">{study.tags.join(" / ")}</p>
        </div>
      </header>

      <div className="grid gap-12 pt-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Case study index">
          <p className="utility-label text-accent">Case index</p>
          <ol className="mt-5 border-y border-border">
            {study.sections.map((section, index) => (
              <li key={section.title} className="grid grid-cols-[2.5rem_1fr] border-b border-border py-4 text-sm last:border-b-0">
                <span className="font-utility text-xs text-accent">0{index + 1}</span>
                <a href={`#section-${index + 1}`} className="inline-flex min-h-11 items-center text-text-muted hover:text-text">{section.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="technical-copy">
          {study.sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title} className="scroll-mt-28 border-b border-border py-9 first:pt-0 last:border-b-0">
              <p className="utility-label text-accent">0{index + 1}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-text sm:text-4xl">{section.title}</h2>
              <p className="mt-5 text-lg leading-8 text-text-muted">{section.content}</p>
            </section>
          ))}
          <div className="mt-12 border-l-2 border-accent pl-6">
            <p className="text-lg leading-8 text-text">The public case focuses on product decisions. Source access depends on the project.</p>
            <Link href="/contact" className="text-link mt-4">Ask about related work →</Link>
          </div>
        </article>
      </div>
    </Container>
  );
}
