import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Expertise from "@/components/sections/Expertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Philosophy from "@/components/sections/Philosophy";
import ContactCTA from "@/components/sections/ContactCTA";

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
