"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import SpotlightCard from "@/components/animations/SpotlightCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";
import ProjectCardImage from "@/components/ui/ProjectCardImage";
import { projects } from "@/lib/data/projects";

function getStatusColor(project: (typeof projects)[0]) {
  if (project.playStoreUrl || project.liveUrl) return "text-emerald-400";
  return "text-yellow-400";
}

function getStatusLabel(project: (typeof projects)[0]) {
  if (project.liveUrl) return "Live";
  if (project.playStoreUrl) return "Published";
  return "In Development";
}

const directions: Array<"left" | "up" | "right"> = ["left", "up", "right"];

export default function ProjectsClient() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading title="Projects" subtitle="Apps and tools I've built" />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <StaggerItem
            key={project.id}
            direction={directions[index % directions.length]}
            scale
          >
            <SpotlightCard className="flex h-full flex-col p-6">
              {/* Status indicator */}
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${getStatusColor(project)} bg-current`}
                />
                <span className="text-xs font-medium text-text-muted">
                  {getStatusLabel(project)}
                </span>
              </div>

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
                    className="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Google Play
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    Live Site &rarr;
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    GitHub &rarr;
                  </a>
                )}
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Container>
  );
}
