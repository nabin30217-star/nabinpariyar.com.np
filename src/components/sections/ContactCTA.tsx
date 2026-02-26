"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SlideUp from "@/components/animations/SlideUp";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SlideUp>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              title="Let's Work Together"
              className="flex flex-col items-center"
            />
            <p className="text-lg leading-8 text-text-muted">
              I&apos;m currently available for freelance work and open to
              interesting projects. Let&apos;s build something great.
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
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
