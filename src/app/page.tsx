import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Expertise from "@/components/sections/Expertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Philosophy from "@/components/sections/Philosophy";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Nabin Pariyar — Android & Web Developer from Nepal",
  description:
    "Self-taught developer from Nepal with 3 published apps on Google Play Store. Building Android apps with Kotlin and web experiences with Next.js.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Expertise />
      <FeaturedProjects />
      <Philosophy />
      <ContactCTA />
    </>
  );
}
