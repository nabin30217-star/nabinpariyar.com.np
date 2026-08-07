import gplay from "google-play-scraper";
import { Project } from "@/types";
import { projects as curatedProjects } from "@/lib/data/projects";

const DEVELOPER_ID = "TheMixzone";

export async function getPlayStoreApps(): Promise<Project[]> {
  try {
    const apps = await gplay.developer({ devId: DEVELOPER_ID });
    
    // Map the returned apps to our Project type
    return apps.map((app) => ({
      id: app.appId,
      title: app.title,
      description: (app.summary || "Android Application").replace(/<[^>]*>?/gm, ''),
      // Use the high-res icon if available
      image: app.icon,
      tags: ["Android", "Kotlin", "Play Store"],
      playStoreUrl: app.url,
      featured: false, // You can add logic to feature specific apps
    }));
  } catch {
    // Google Play can reject or throttle server-side scraper requests.
    // The pages merge this response with curated local project data, so an
    // unavailable upstream service is an expected fallback—not a render error.
    return [];
  }
}

export async function getPortfolioProjects(): Promise<Project[]> {
  const liveApps = await getPlayStoreApps();
  const liveByPackage = new Map(liveApps.map((app) => [app.id, app]));

  return curatedProjects.map((project) => {
    const live = liveByPackage.get(project.id);
    if (!live) return project;

    return {
      ...project,
      title: live.title,
      image: live.image,
      playStoreUrl: live.playStoreUrl,
    };
  });
}
