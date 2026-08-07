import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { getPortfolioProjects } from "@/lib/services/playStore";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Full-Stack Web & Android Projects",
  description: "My private full-stack garment ERP and the eight Android apps currently published through my TheMixzone Google Play account.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects();
  return <ProjectsClient projects={projects} />;
}
