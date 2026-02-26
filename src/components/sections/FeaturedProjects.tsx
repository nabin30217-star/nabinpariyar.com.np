"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";
import { projects } from "@/lib/data/projects";
import { caseStudies } from "@/lib/data/case-studies";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Some things I've built"
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => {
            const hasCaseStudy = caseStudies.some((cs) => cs.slug === project.id);
            return (
              <StaggerItem key={project.id}>
                <Card className="flex h-full flex-col">
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
                        className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        View on Play Store
                      </a>
                    )}
                    {hasCaseStudy && (
                      <a
                        href={`/case-studies/${project.id}`}
                        className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
                      >
                        Case Study &rarr;
                      </a>
                    )}
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
        <div className="mt-12 text-center">
          <Button href="/projects" variant="outline">
            View All Projects &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
