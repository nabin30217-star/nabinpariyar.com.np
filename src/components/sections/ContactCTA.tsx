"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ScaleIn } from "@/components/animations/SlideUp";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="relative bg-surface py-20 sm:py-24 overflow-hidden">
      {/* Background glow pulse */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
      </div>

      <Container className="relative z-10">
        <ScaleIn>
          <div className="mx-auto max-w-2xl text-center">
            <TextReveal
              text="Let's Work Together"
              as="h2"
              className="text-3xl font-semibold text-text sm:text-4xl"
              splitBy="word"
            />
            <p className="mt-4 text-lg leading-8 text-text-muted">
              Have an app idea or project in mind? I&apos;m open to
              collaborations and interesting work. Let&apos;s talk.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              <a
                href={SOCIAL_LINKS.email}
                className="text-accent transition-colors hover:text-accent-hover"
              >
                nabin30217@gmail.com
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted transition-colors hover:text-accent"
              >
                GitHub &rarr;
              </a>
            </div>

            <div className="mt-8">
              <MagneticButton>
                <Button href="/contact">Get in Touch</Button>
              </MagneticButton>
            </div>
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
