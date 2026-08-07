import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const engineeringRecords = [
  ["Calculator", "I wrote the recursive-descent expression parser instead of importing a general-purpose math engine."],
  ["Video", "I built the processing path around FFmpeg and WorkManager so a long conversion is not tied to one open screen."],
  ["Television", "I worked through Samsung’s WebSocket control and Wake-on-LAN behavior without an official SDK."],
];

const experience = [
  {
    period: "June 2025–Present",
    role: "Independent Full-Stack Web & Android Developer",
    detail: "I independently build, test, publish, and maintain full-stack web systems and native Android products. I have built more than 15 Android apps, with eight currently published through my own TheMixzone account.",
  },
  {
    period: "2 years",
    role: "Google Play Console, ASO & App Publishing Specialist",
    detail: "I worked as part of a team managing three company-owned Play Console accounts covering approximately 900 apps. I handled listings, descriptions, AAB releases, publishing status, ASO research and experiments, and IR-code and JSON extraction for remote products.",
  },
];

export default function AboutClient() {
  return (
    <>
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
                <Image src="/images/nabin-profile.png" alt="Portrait of Nabin Pariyar" fill priority sizes="(max-width: 1024px) 448px, 34vw" className="object-cover object-center" />
              </div>
              <figcaption className="mt-3 font-utility text-[0.7rem] uppercase tracking-[0.08em] text-text-muted">Nabin Pariyar / Nepal</figcaption>
            </figure>

            <div>
              <p className="utility-label text-accent">About / full-stack web &amp; Android developer</p>
              <h1 className="display-title mt-6 text-text">I build products from workflow and architecture through release and maintenance.</h1>
              <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
                <p>I am a full-stack web and Android developer from Nepal with three years of software-industry experience. Since June 2025, I have independently built web systems with TypeScript, Next.js, React, Supabase, and Cloudflare, and native Android products with Kotlin and Jetpack Compose.</p>
                <p>Before moving into development, I spent two years working as part of a team that managed three company-owned Google Play Console accounts covering approximately 900 apps. I now own and manage TheMixzone, where eight of my independently built Android apps are currently published.</p>
                <p>I also independently built and delivered a private garment ERP that is live across three shops and supports an operation of more than 80 people. I own the codebase and continue to maintain the deployed system when bugs or new customization needs arise.</p>
              </div>
              <Link href="/contact" className="text-link mt-7 text-accent">Discuss a product problem →</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24" aria-labelledby="erp-scope-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="utility-label text-accent">Private ERP / delivered and live</p>
              <h2 id="erp-scope-title" className="section-title mt-4 text-text">I translated a real three-shop operation into a maintainable system.</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-accent pt-5">
                <h3 className="font-display text-3xl font-semibold text-text">Operational scope</h3>
                <p className="mt-4 leading-7 text-text-muted">The ERP manages accounting, orders, production, inventory, employees, attendance, piece-rate work, payroll, expenses, permissions, reports, and audit history.</p>
              </div>
              <div className="border-t border-border pt-5">
                <h3 className="font-display text-3xl font-semibold text-text">Reliability and recovery</h3>
                <p className="mt-4 leading-7 text-text-muted">I built admin diagnostics, fault explanations, email and in-app alerts, audit logs, daily three-location backups, a recovery app, and a staging environment.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="experience-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="utility-label text-accent">Experience</p>
              <h2 id="experience-title" className="section-title mt-4 text-text">Three years in software, with each role stated accurately.</h2>
            </div>
            <ol className="border-y border-border">
              {experience.map((item, index) => (
                <li key={item.role} className="grid gap-3 border-b border-border py-7 last:border-b-0 sm:grid-cols-[3rem_10rem_1fr]">
                  <span className="font-utility text-xs text-accent">0{index + 1}</span>
                  <p className="font-utility text-xs uppercase leading-5 text-text-muted">{item.period}</p>
                  <div>
                    <h3 className="font-semibold text-text">{item.role}</h3>
                    <p className="mt-3 leading-7 text-text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-20 sm:py-24" aria-labelledby="engineering-record-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="utility-label text-accent">Technical evidence</p>
              <h2 id="engineering-record-title" className="section-title mt-4 text-text">My work demonstrates depth beyond the interface.</h2>
            </div>
            <ol className="border-y border-border">
              {engineeringRecords.map(([title, text], index) => (
                <li key={title} className="grid gap-3 border-b border-border py-7 last:border-b-0 sm:grid-cols-[3rem_9rem_1fr]">
                  <span className="font-utility text-xs text-accent">0{index + 1}</span>
                  <h3 className="font-semibold text-text">{title}</h3>
                  <p className="leading-7 text-text-muted">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
