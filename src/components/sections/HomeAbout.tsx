import Link from "next/link";
import Container from "@/components/ui/Container";

export default function HomeAbout() {
  return (
    <section className="border-y border-border bg-surface py-20 sm:py-28" aria-labelledby="operating-method-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="utility-label text-accent">Experience / operations to engineering</p>
            <h2 id="operating-method-title" className="section-title mt-4 text-text">I combine product development with real publishing and operational experience.</h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-text">I have three years of software-industry experience. For two years, I worked as part of a team managing three company Play Console accounts covering approximately 900 apps. Since June 2025, I have independently built full-stack web systems and native Android products.</p>
            <p className="mt-6 text-lg leading-8 text-text-muted">My private garment ERP is now live across three shops and supports an operation of more than 80 people. I completed and delivered it, own the codebase, and continue to maintain it for bugs and requested customizations.</p>
            <p className="mt-6 text-lg leading-8 text-text-muted">I have also built more than 15 Android apps independently. Eight are currently published through my own TheMixzone account, while the others are in testing or awaiting release.</p>

            <dl className="mt-10 border-y border-border">
              <div className="grid gap-2 border-b border-border py-6 sm:grid-cols-[9rem_1fr]">
                <dt className="utility-label text-accent">Private ERP</dt>
                <dd className="leading-7 text-text-muted">A delivered, live multi-shop system with diagnostics, audit logs, daily backups, recovery tooling, and ongoing maintenance.</dd>
              </div>
              <div className="grid gap-2 py-6 sm:grid-cols-[9rem_1fr]">
                <dt className="utility-label text-accent">My apps</dt>
                <dd className="leading-7 text-text-muted">More than 15 Android products built independently, with eight currently live on my TheMixzone Google Play account.</dd>
              </div>
            </dl>

            <Link href="/about" prefetch={false} className="text-link mt-7">Read my full experience →</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
