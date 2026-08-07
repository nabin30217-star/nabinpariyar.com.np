import Link from "next/link";
import Container from "@/components/ui/Container";

const capabilities = [
  {
    id: "WEB",
    title: "Full-stack business systems",
    description:
      "I build custom ERP systems, dashboards, multi-shop platforms, accounting workflows, inventory tools, payroll systems, reports, and administrative applications.",
    stack: "TypeScript / Next.js / React / Tailwind CSS / Supabase PostgreSQL",
  },
  {
    id: "APP",
    title: "Native Android applications",
    description:
      "I design, build, test, publish, and maintain Android products across utility, document, media, device-control, and other categories—not only the app types already shown here.",
    stack: "Kotlin / Jetpack Compose / MVVM / Room / Retrofit / Firebase / WorkManager",
  },
  {
    id: "DATA",
    title: "Backend, cloud, and recovery",
    description:
      "I build databases, authentication, storage, APIs, realtime features, permissions, backup systems, recovery tools, staging environments, and cloud integrations.",
    stack: "Supabase / PostgreSQL / Auth / RLS / Edge Functions / Cloudflare / GitHub",
  },
  {
    id: "PLAY",
    title: "Google Play publishing and ASO",
    description:
      "I prepare listings, write and optimize descriptions, upload AAB releases, manage testing and production tracks, monitor app status, research competitors and keywords, and maintain published products.",
    stack: "Google Play Console / AAB / store listings / ASO / experiments / release operations",
  },
];

export default function BuildCapabilities() {
  return (
    <section className="border-b border-border py-20 sm:py-28" aria-labelledby="capabilities-title">
      <Container>
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="utility-label text-accent">How I can help</p>
          <div>
            <h2 id="capabilities-title" className="section-title text-text">
              I can take responsibility beyond a single screen or layer.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
              I can turn a workflow or product problem into working software, then carry it through testing, release, maintenance, and recovery planning.
            </p>
          </div>
        </div>

        <ol className="divide-y divide-border border-b border-border">
          {capabilities.map((capability, index) => (
            <li key={capability.id} className="grid gap-5 py-9 lg:grid-cols-[4rem_0.8fr_1.2fr] lg:gap-10">
              <span className="font-utility text-xs text-accent">0{index + 1} / {capability.id}</span>
              <h3 className="font-display text-3xl font-semibold tracking-[-0.025em] text-text">{capability.title}</h3>
              <div>
                <p className="leading-7 text-text-muted">{capability.description}</p>
                <p className="mt-4 font-utility text-[0.7rem] uppercase leading-5 tracking-[0.05em] text-accent">{capability.stack}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-7 flex flex-wrap gap-x-7">
          <Link href="/projects" prefetch={false} className="text-link text-accent">See the software →</Link>
          <Link href="/services" prefetch={false} className="text-link">See ways to work together</Link>
        </div>
      </Container>
    </section>
  );
}
