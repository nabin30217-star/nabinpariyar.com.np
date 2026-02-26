import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Philosophy from "@/components/sections/Philosophy";
import LatestPosts from "@/components/sections/LatestPosts";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <FeaturedProjects />
      <Philosophy />
      <LatestPosts />
      <ContactCTA />
    </>
  );
}
