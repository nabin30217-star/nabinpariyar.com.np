import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const ledgerRows = [
  { id: "EXP-03", system: "Software industry", decision: "Three years total, including one year of hands-on development" },
  { id: "ERP-80", system: "Private garment ERP", decision: "Live across three shops and supporting an 80+ person operation" },
  { id: "APP-15", system: "Independent Android", decision: "More than 15 apps built; eight currently published as TheMixzone" },
  { id: "PLAY-900", system: "Play operations", decision: "Approximately 900 company apps managed across three Console accounts" },
];

export default function Hero() {
  return (
    <section className="border-b border-border pt-28 pb-16 sm:pt-36 sm:pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-14">
          <div>
            <p className="utility-label text-accent">Full-stack web &amp; Android developer / Nepal</p>
            <h1 className="display-title mt-6 max-w-5xl text-text">
              I build business software and Android products from idea to release.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
              I have three years of software-industry experience. I spent two years in Google Play operations,
              publishing, and ASO, and since June 2025 I have independently built full-stack web systems and
              native Android applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7">
              <Link href="/projects" prefetch={false} className="text-link text-accent">
                View projects →
              </Link>
              <Link href="/services" prefetch={false} className="text-link">
                How I can help
              </Link>
            </div>
          </div>

          <figure className="mx-auto w-40 sm:w-48 lg:mx-0 lg:w-56 lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
              <Image
                src="/images/nabin-profile.png"
                alt="Portrait of Nabin Pariyar in a workspace"
                fill
                priority
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 font-utility text-[0.7rem] uppercase tracking-[0.08em] text-text-muted">
              Nabin Pariyar / full-stack developer / Nepal
            </figcaption>
          </figure>
        </div>

        <section aria-labelledby="operator-ledger-title" className="mt-16 border border-accent bg-surface sm:mt-24">
          <div className="measure-rule border-b border-accent px-5 py-4 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="operator-ledger-title" className="utility-label text-accent">Proof of work</h2>
              <p className="font-utility text-[0.68rem] uppercase tracking-[0.08em] text-text-muted">
                Web systems / native Android products
              </p>
            </div>
          </div>
          <dl className="divide-y divide-border">
            {ledgerRows.map((row) => (
              <div key={row.id} className="ledger-enter grid gap-2 px-5 py-5 sm:grid-cols-[7rem_1fr_1.45fr] sm:items-center sm:px-7">
                <dt className="font-utility text-xs text-accent">{row.id}</dt>
                <dd className="font-semibold text-text">{row.system}</dd>
                <dd className="text-sm leading-6 text-text-muted sm:text-base">{row.decision}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>
    </section>
  );
}
