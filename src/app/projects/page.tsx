import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore apps and tools built by Nabin Pariyar.",
};

function getStatusColor(project: (typeof projects)[0]) {
  if (project.playStoreUrl || project.liveUrl) return "text-green-400";
  return "text-yellow-400";
}

function getStatusLabel(project: (typeof projects)[0]) {
  if (project.liveUrl) return "Live";
  if (project.playStoreUrl) return "Published";
  return "In Development";
}

export default function ProjectsPage() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading title="Projects" subtitle="Apps and tools I've built" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="flex h-full flex-col">
            {/* Status indicator */}
            <div className="mb-3 flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${getStatusColor(project)} bg-current`} />
              <span className="text-xs font-medium text-text-muted">
                {getStatusLabel(project)}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-text">{project.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{project.description}</p>

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
                  Play Store &rarr;
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  Live Site &rarr;
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
                >
                  GitHub &rarr;
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
