import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Expertise from "@/components/sections/Expertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Philosophy from "@/components/sections/Philosophy";
import ContactCTA from "@/components/sections/ContactCTA";
import { getPlayStoreApps } from "@/lib/services/playStore";
import { getGithubRepoCount } from "@/lib/services/github";

export const metadata: Metadata = {
  title: "Nabin Pariyar — Android & Web Developer from Nepal",
  description:
    "Self-taught developer from Nepal with published apps on Google Play Store. Building Android apps with Kotlin and web experiences with Next.js.",
};

export const revalidate = 3600;

export default async function Home() {
  const playStoreApps = await getPlayStoreApps();
  const playStoreAppCount = playStoreApps.length;
  const githubRepoCount = await getGithubRepoCount("nabin30217-star");

  return (
    <>
      <Hero />
      <Stats playStoreAppCount={playStoreAppCount} githubRepoCount={githubRepoCount} />
      <Expertise />
      <FeaturedProjects />
      <Philosophy />
      <ContactCTA />
    </>
  );
}
