"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ScaleIn } from "@/components/animations/SlideUp";
import MagneticButton from "@/components/animations/MagneticButton";
import TextReveal from "@/components/animations/TextReveal";
import AnimatedBackground from "@/components/animations/AnimatedBackground";
import { SOCIAL_LINKS } from "@/lib/constants";
import type { Shape } from "@/components/animations/AnimatedBackground";

const ctaShapes: Shape[] = [
  { type: "ring", size: 32, x: "5%", y: "20%", delay: 0, duration: 20, color: "var(--accent-emerald)", opacity: 0.06 },
  { type: "dot", size: 4, x: "85%", y: "30%", delay: 1, duration: 16, color: "var(--accent-emerald)", opacity: 0.12 },
  { type: "triangle", size: 10, x: "75%", y: "70%", delay: 2, duration: 22, color: "var(--accent-secondary)", opacity: 0.06, rotate: 30 },
  { type: "cross", size: 8, x: "15%", y: "80%", delay: 3, duration: 18, color: "var(--accent-emerald)", opacity: 0.08, rotate: 15 },
  { type: "dot", size: 3, x: "50%", y: "15%", delay: 0.5, duration: 14, color: "var(--accent)", opacity: 0.1 },
];

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
      {/* Emerald-themed animated background */}
      <AnimatedBackground shapes={ctaShapes} />

      {/* Background glow pulse */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-pulse-glow absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-emerald/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <ScaleIn>
          <div className="mx-auto max-w-2xl rounded-2xl border border-accent-emerald/20 p-8 text-center sm:p-12 gradient-border-animated">
            <TextReveal
              text="Let's Work Together"
              as="h2"
              className="gradient-text-animated text-3xl font-semibold sm:text-4xl"
              splitBy="word"
            />
            <p className="mt-4 text-lg leading-8 text-text-muted">
              Have an app idea or project in mind? I&apos;m open to
              collaborations and interesting work. Let&apos;s talk.
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              <a
                href={SOCIAL_LINKS.email}
                className="link-underline text-accent-emerald transition-colors hover:text-accent-emerald-hover"
              >
                nabin30217@gmail.com
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-text-muted transition-colors hover:text-accent"
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
