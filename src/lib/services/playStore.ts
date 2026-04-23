import gplay from "google-play-scraper";
import { Project } from "@/types";

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
  } catch (error) {
    console.error("Error fetching Play Store apps:", error);
    return [];
  }
}
