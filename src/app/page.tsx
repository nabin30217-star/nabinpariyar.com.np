import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import BuildCapabilities from "@/components/sections/BuildCapabilities";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import HomeAbout from "@/components/sections/HomeAbout";
import ContactCTA from "@/components/sections/ContactCTA";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Nabin Pariyar — Full-Stack Web & Android Developer",
  description:
    "I build full-stack business systems and native Android products, including a live private garment ERP and eight apps published through my TheMixzone account.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <BuildCapabilities />
      <FeaturedProjects />
      <HomeAbout />
      <ContactCTA />
    </>
  );
}
