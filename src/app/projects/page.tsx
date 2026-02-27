import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore apps and tools built by Nabin Pariyar.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
