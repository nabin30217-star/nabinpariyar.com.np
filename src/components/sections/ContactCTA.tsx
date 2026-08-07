import Link from "next/link";
import Container from "@/components/ui/Container";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="contact-cta-title">
      <Container>
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_auto] lg:items-end sm:pb-16">
          <div>
            <p className="utility-label text-accent">A useful problem is enough to start</p>
            <h2 id="contact-cta-title" className="section-title mt-4 max-w-4xl text-text">
              Need someone who can own the product from interface to release?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-text-muted">
              Send the problem, the constraint, and what has already been tried. I will tell you where I can be useful and when I am not the right fit.
            </p>
          </div>
          <Link href="/contact" prefetch={false} className="inline-flex min-h-12 items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-hover">
            Start a conversation →
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-2 font-utility text-xs uppercase tracking-[0.07em] text-text-muted sm:flex-row sm:justify-between">
          <a href={SOCIAL_LINKS.email} className="inline-flex min-h-11 items-center hover:text-text">nabin30217@gmail.com</a>
          <p className="flex min-h-11 items-center">Nepal / remote collaboration</p>
        </div>
      </Container>
    </section>
  );
}
