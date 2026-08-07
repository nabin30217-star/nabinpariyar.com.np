import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getPortfolioProjects } from "@/lib/services/playStore";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Product Record",
  description: "A factual record of Nabin Pariyar’s published Android products, with Google Play as the source for current release details.",
  path: "/changelog",
});

export const revalidate = 86400;

export default async function ChangelogPage() {
  const projects = await getPortfolioProjects();
  return (
    <Container className="max-w-5xl pt-28 pb-20 sm:pt-36 sm:pb-28">
      <SectionHeading eyebrow="Product record" title="What is live, without invented version history." subtitle="Google Play remains the source of truth for versions and release dates. This page records the technical role of each published product." />
      <ol className="border-y border-border">
        {projects.filter((project) => project.featured).map((project, index) => (
          <li key={project.id} className="grid gap-4 border-b border-border py-8 last:border-b-0 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
            <span className="font-utility text-xs text-accent">0{index + 1}</span>
            <div>
              <h2 className="font-display text-3xl font-semibold text-text">{project.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-text-muted">{project.description}</p>
            </div>
            {project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link">Current listing ↗</a>}
          </li>
        ))}
      </ol>
      <Link href="/projects" className="text-link mt-7">View the complete work index →</Link>
    </Container>
  );
}
