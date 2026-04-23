import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { getPlayStoreApps } from "@/lib/services/playStore";
import { projects as staticProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore apps and tools built by Nabin Pariyar.",
};

// Revalidate data every hour
export const revalidate = 3600;

export default async function ProjectsPage() {
  const playStoreApps = await getPlayStoreApps();
  
  // Merge: match by id (appId). Static provides curated description/tags,
  // Play Store provides the live icon and title so they auto-update.
  const staticIds = new Set(staticProjects.map(p => p.id));
  
  const mergedProjects = staticProjects.map(staticApp => {
    const dynamicApp = playStoreApps.find(p => p.id === staticApp.id);
    
    if (dynamicApp) {
      return {
        ...staticApp,
        // Always use Play Store icon and title so they auto-update
        image: dynamicApp.image,
        title: dynamicApp.title,
        playStoreUrl: dynamicApp.playStoreUrl || staticApp.playStoreUrl,
      };
    }
    return staticApp;
  });

  // Add any new Play Store apps not in the static list
  const newPlayStoreApps = playStoreApps.filter(p => !staticIds.has(p.id));
  
  const allProjects = [...mergedProjects, ...newPlayStoreApps];

  return <ProjectsClient projects={allProjects} />;
}
