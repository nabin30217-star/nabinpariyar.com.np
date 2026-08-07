import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import type { Project } from "@/types";

const caseStudySlugs: Record<string, string> = {
  "smartcalculator.calculators": "smart-calculator",
  "com.vixit.studio.converter": "vixit",
  "com.smart.samtvremote": "samsung-tv-remote",
};

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <p className="utility-label text-accent">Work / full-stack web + native Android</p>
        <div>
          <h1 className="display-title text-text">I build complete web systems and Android products.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
            Since June 2025, I have independently built more than 15 Android apps, a private full-stack ERP,
            and this portfolio. Eight of my Android products are currently published through my own TheMixzone
            Google Play account; the others are in testing or awaiting release.
          </p>
        </div>
      </div>

      <section className="border-b border-border py-12 sm:py-16" aria-labelledby="web-projects-title">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
          <figure>
            <div className="overflow-hidden border border-border bg-surface">
              <Image
                src="/images/projects/raj-garment-erp-order.png"
                alt="Raj Garment ERP new-order screen"
                width={1889}
                height={930}
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 font-utility text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
              Live product interface / order management
            </figcaption>
          </figure>
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden border border-border bg-white p-1.5 sm:h-24 sm:w-24">
                <Image
                  src="/images/projects/raj-garment-logo.png"
                  alt="Raj Garment logo"
                  width={911}
                  height={890}
                  sizes="96px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="utility-label text-accent">Private full-stack ERP / live</p>
                <p className="mt-2 text-sm text-text-muted">Completed, delivered, and maintained</p>
              </div>
            </div>
            <h2 id="web-projects-title" className="mt-7 font-display text-4xl font-semibold leading-none tracking-[-0.035em] text-text sm:text-5xl">Raj Garment ERP</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
              I independently designed and built this private ERP for a garment operation spanning three shops and more than 80 people. It manages accounting, orders, production, inventory, employees, attendance, piece-rate work, payroll, expenses, permissions, reports, and daily operations.
            </p>
            <p className="mt-5 max-w-3xl leading-7 text-text-muted">I also built administrator-only diagnostics that explain where a fault occurred, what failed, and why; email and in-app alerts; complete audit logs; and daily recoverable backups across Supabase, Google Drive, and GitHub.</p>
            <dl className="mt-7 grid grid-cols-2 border-y border-border">
              <div className="border-r border-border py-5 pr-4">
                <dt className="utility-label text-accent">Operation</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-text">3 shops</dd>
              </div>
              <div className="py-5 pl-4">
                <dt className="utility-label text-accent">People</dt>
                <dd className="mt-2 font-display text-2xl font-semibold text-text">80+</dd>
              </div>
            </dl>
            <p className="mt-5 font-utility text-xs uppercase leading-6 tracking-[0.05em] text-text-muted">TypeScript / Next.js / React / Supabase PostgreSQL / Cloudflare / daily backup &amp; recovery</p>
            <Link href="/contact" prefetch={false} className="text-link mt-6">Ask about a similar operational system →</Link>
          </div>
        </div>
      </section>

      <section className="pt-16" aria-labelledby="android-products-title">
        <div className="grid gap-5 border-b border-border pb-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-end">
          <p className="utility-label text-accent">Google Play / complete catalogue</p>
          <div>
            <h2 id="android-products-title" className="section-title text-text">Eight apps currently published on my TheMixzone account.</h2>
            <p className="mt-4 max-w-3xl leading-7 text-text-muted">I have built more than 15 Android apps in total. This list shows the eight currently live on Google Play, ordered from broader products to focused utilities.</p>
          </div>
        </div>

      <div className="divide-y divide-border border-b border-border">
        {projects.map((project, index) => {
          const slug = caseStudySlugs[project.id];
          return (
            <article key={project.id} className="grid gap-8 py-12 lg:grid-cols-[0.52fr_1.48fr] lg:gap-16 sm:py-16">
              <div className="flex min-h-64 items-center justify-center border border-border bg-surface p-8">
                <Image src={project.image} alt={`${project.title} app icon`} width={160} height={160} sizes="160px" className="h-32 w-32 object-contain sm:h-40 sm:w-40" />
              </div>
              <div className="self-center">
                <p className="utility-label text-accent">{String(index + 1).padStart(2, "0")} / {project.playStoreUrl ? "Published on Google Play" : "Product"}</p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.035em] text-text sm:text-5xl">{project.title}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">{project.description}</p>
                <p className="mt-5 font-utility text-xs uppercase leading-6 tracking-[0.05em] text-text-muted">{project.tags.join(" / ")}</p>
                <div className="mt-6 flex flex-wrap gap-x-7">
                  {slug && <Link href={`/case-studies/${slug}`} className="text-link">Technical case →</Link>}
                  {project.playStoreUrl && <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-link">Google Play ↗</a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link">GitHub profile ↗</a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      </section>
    </Container>
  );
}
