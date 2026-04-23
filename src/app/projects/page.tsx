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
    // Match by playStoreUrl or similar title
    const dynamicApp = playStoreApps.find(
      p => (staticApp.playStoreUrl && p.playStoreUrl === staticApp.playStoreUrl) ||
           (p.title.toLowerCase().includes(staticApp.title.toLowerCase()) || staticApp.title.toLowerCase().includes(p.title.toLowerCase()))
    );
    
    if (dynamicApp) {
      // Keep static details but use dynamic image if needed, or just let static override
      return {
        ...dynamicApp,
        ...staticApp,
        // Ensure playStoreUrl is passed from dynamic if static doesn't have it
        playStoreUrl: staticApp.playStoreUrl || dynamicApp.playStoreUrl,
      };
    }
    return staticApp;
  });

  // Add new Play Store apps not present in static list
  const existingTitles = mergedProjects.map(p => p.title.toLowerCase());
  const existingUrls = mergedProjects.map(p => p.playStoreUrl).filter(Boolean);
  
  const newPlayStoreApps = playStoreApps.filter(
    p => p.playStoreUrl && 
         !existingUrls.includes(p.playStoreUrl) &&
         !existingTitles.some(title => title.includes(p.title.toLowerCase()) || p.title.toLowerCase().includes(title))
  );
  
  const allProjects = [...mergedProjects, ...newPlayStoreApps];

  return <ProjectsClient projects={allProjects} />;
}
