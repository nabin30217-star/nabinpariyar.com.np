import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import { SOCIAL_LINKS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Nabin Pariyar about a full-stack Next.js web application, garment ERP workflow, native Kotlin Android app, Play Store release, or difficult product integration.",
  path: "/contact",
});

const contactMethods = [
  { label: "Email", value: "nabin30217@gmail.com", href: SOCIAL_LINKS.email, external: false },
  { label: "Code", value: "nabin30217-star", href: SOCIAL_LINKS.github, external: true },
  { label: "Published apps", value: "TheMixzone", href: SOCIAL_LINKS.playStore, external: true },
];

export default function ContactPage() {
  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid gap-10 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <p className="utility-label text-accent">Contact / start with the constraint</p>
        <div>
          <h1 className="display-title text-text">Bring the problem, not a polished brief.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">
            The best first message explains what must work, what makes it difficult, and what exists today. I can then respond with a useful next step—or say plainly when I am not the right fit.
          </p>
        </div>
      </div>

      <section className="border-b border-border" aria-labelledby="direct-contact-title">
        <h2 id="direct-contact-title" className="sr-only">Direct contact links</h2>
        {contactMethods.map((method) => (
          <a key={method.label} href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noopener noreferrer" : undefined} className="grid min-h-20 gap-1 border-b border-border py-5 last:border-b-0 sm:grid-cols-[10rem_1fr_auto] sm:items-center">
            <span className="utility-label text-accent">{method.label}</span>
            <span className="min-w-0 break-words font-semibold text-text">{method.value}</span>
            <span aria-hidden="true" className="text-text-muted">{method.external ? "↗" : "→"}</span>
          </a>
        ))}
      </section>

      <ContactForm />
      <FAQ />
    </Container>
  );
}
