"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/animations/TiltCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";
import ProjectCardImage from "@/components/ui/ProjectCardImage";
import TextScramble from "@/components/animations/TextScramble";
import { projects } from "@/lib/data/projects";
import { caseStudies } from "@/lib/data/case-studies";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  const directions: Array<"left" | "up" | "right"> = ["left", "up", "right"];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Some things I've built"
        />

        {/* Mobile: horizontal scroll | Desktop: grid */}
        <div className="lg:hidden">
          <div className="scroll-snap-x -mx-4 flex gap-4 overflow-x-auto px-4 pb-4">
            {featured.map((project, index) => {
              const hasCaseStudy = caseStudies.some(
                (cs) => cs.slug === project.id
              );
              return (
                <div
                  key={project.id}
                  className="min-w-[280px] max-w-[320px] flex-shrink-0"
                >
                  <TiltCard
                    className={`flex h-full flex-col p-6 ${index === 0 ? "gradient-border-animated" : ""}`}
                    maxTilt={8}
                  >
                    <ProjectCardImage projectId={project.id} />
                    <h3 className="text-lg font-semibold text-text">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      {project.playStoreUrl && (
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on Google Play`}
                          className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                          </svg>
                          Google Play
                        </a>
                      )}
                      {hasCaseStudy && (
                        <a
                          href={`/case-studies/${project.id}`}
                          aria-label={`Read case study for ${project.title}`}
                          className="link-underline inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                        >
                          Case Study &rarr;
                        </a>
                      )}
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: staggered grid */}
        <StaggerContainer className="hidden gap-6 lg:grid lg:grid-cols-3">
          {featured.map((project, index) => {
            const hasCaseStudy = caseStudies.some(
              (cs) => cs.slug === project.id
            );
            return (
              <StaggerItem
                key={project.id}
                direction={directions[index % directions.length]}
                scale
                className={index === 1 ? "lg:mt-8" : ""}
              >
                <TiltCard
                  className={`flex h-full flex-col p-6 ${index === 0 ? "gradient-border-animated" : ""}`}
                  maxTilt={8}
                >
                  <ProjectCardImage projectId={project.id} />
                  <h3 className="text-lg font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on Google Play`}
                        className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        Google Play
                      </a>
                    )}
                    {hasCaseStudy && (
                      <a
                        href={`/case-studies/${project.id}`}
                        aria-label={`Read case study for ${project.title}`}
                        className="link-underline inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                      >
                        Case Study &rarr;
                      </a>
                    )}
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <TextScramble
            text="Want to see more?"
            className="mb-4 block text-sm text-text-muted"
            duration={1000}
          />
          <Button href="/projects" variant="outline">
            View All Projects &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
