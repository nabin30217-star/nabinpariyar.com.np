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
  
  // Merge dynamic play store apps with static data
  const mergedProjects = staticProjects.map(staticApp => {
    // Match by playStoreUrl
    const dynamicApp = playStoreApps.find(
      p => staticApp.playStoreUrl && p.playStoreUrl === staticApp.playStoreUrl
    );
    
    if (dynamicApp) {
      // Keep static details but use dynamic image if needed, or just let static override
      return {
        ...dynamicApp,
        ...staticApp,
        // We can keep dynamicApp's icon/title if we want, but staticApp usually has better curated content
      };
    }
    return staticApp;
  });

  // Add new Play Store apps not present in static list
  const existingUrls = mergedProjects.map(p => p.playStoreUrl).filter(Boolean);
  const newPlayStoreApps = playStoreApps.filter(
    p => p.playStoreUrl && !existingUrls.includes(p.playStoreUrl)
  );
  
  const allProjects = [...mergedProjects, ...newPlayStoreApps];

  return <ProjectsClient projects={allProjects} />;
}
