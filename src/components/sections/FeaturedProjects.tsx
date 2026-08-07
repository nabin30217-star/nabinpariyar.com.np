import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getPortfolioProjects } from "@/lib/services/playStore";

const projectDetails: Record<string, { slug: string; label: string; proof: string }> = {
  "smartcalculator.calculators": {
    slug: "smart-calculator",
    label: "Language tooling inside a utility app",
    proof: "A hand-built recursive-descent parser handles precedence and nested expressions without a third-party math engine.",
  },
  "com.vixit.studio.converter": {
    slug: "vixit",
    label: "Long-running work beyond the screen",
    proof: "FFmpeg performs media processing while WorkManager keeps jobs alive when the user leaves the app.",
  },
  "com.smart.samtvremote": {
    slug: "samsung-tv-remote",
    label: "Protocol work without an official SDK",
    proof: "The remote speaks Samsung’s WebSocket control protocol and handles Wake-on-LAN instead of wrapping a vendor SDK.",
  },
};

export default async function FeaturedProjects() {
  const projects = await getPortfolioProjects();
  const featured = projects.filter((project) => project.featured);
  const [lead, ...supporting] = featured;

  return (
    <section className="py-20 sm:py-28" aria-labelledby="selected-engineering-title">
      <Container>
        <div className="grid gap-6 border-b border-border pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="utility-label text-accent">Featured technical projects</p>
          <div>
            <h2 id="selected-engineering-title" className="section-title text-text">
              Three Android apps that required custom engineering.
            </h2>
            <Link href="/projects" prefetch={false} className="text-link mt-5">See my private ERP and all eight published apps →</Link>
          </div>
        </div>

        {lead && (
          <article className="grid gap-8 border-b border-border py-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 sm:py-16">
            <div className="flex min-h-72 items-center justify-center border border-border bg-surface p-10">
              <Image src={lead.image} alt={`${lead.title} app icon`} width={200} height={200} sizes="200px" className="h-40 w-40 object-contain sm:h-48 sm:w-48" />
            </div>
            <div>
              <p className="utility-label text-accent">01 / {projectDetails[lead.id].label}</p>
              <h3 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.035em] text-text sm:text-6xl">{lead.title}</h3>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-text-muted">{projectDetails[lead.id].proof}</p>
              <p className="mt-5 text-sm leading-6 text-text-muted">{lead.tags.join(" / ")}</p>
              <div className="mt-7 flex flex-wrap gap-x-6">
                <Link href={`/case-studies/${projectDetails[lead.id].slug}`} prefetch={false} className="text-link">Read technical case →</Link>
                {lead.playStoreUrl && <a href={lead.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link">Google Play ↗</a>}
              </div>
            </div>
          </article>
        )}

        <div className="grid lg:grid-cols-2">
          {supporting.map((project, index) => {
            const detail = projectDetails[project.id];
            return (
              <article key={project.id} className={`py-12 sm:py-16 ${index === 0 ? "border-b border-border lg:border-r lg:border-b-0 lg:pr-12" : "lg:pl-12"}`}>
                <div className="grid gap-7 sm:grid-cols-[9rem_1fr] sm:items-start lg:grid-cols-1">
                  <div className="flex h-36 w-36 items-center justify-center border border-border bg-surface p-6">
                    <Image src={project.image} alt={`${project.title} app icon`} width={112} height={112} sizes="112px" className="h-24 w-24 object-contain" />
                  </div>
                  <div>
                    <p className="utility-label text-accent">0{index + 2} / {detail.label}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-text">{project.title}</h3>
                    <p className="mt-4 leading-7 text-text-muted">{detail.proof}</p>
                    <div className="mt-5 flex flex-wrap gap-x-6">
                      <Link href={`/case-studies/${detail.slug}`} prefetch={false} className="text-link">Read case →</Link>
                      {project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link">Google Play ↗</a>}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
