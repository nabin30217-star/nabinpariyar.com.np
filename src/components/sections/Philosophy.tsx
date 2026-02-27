"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/animations/SpotlightCard";
import SVGDraw from "@/components/animations/SVGDraw";
import { ClipReveal, RotateIn } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";

const principles = [
  {
    title: "Build What People Use",
    description:
      "Every app I build starts with a real problem. If it doesn't help someone, it's not worth shipping.",
    // Target/bullseye icon path
    iconPath: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",
  },
  {
    title: "Learn by Doing",
    description:
      "I went from zero Kotlin to 3 Play Store apps by building, breaking, and fixing — not just reading docs.",
    // Wrench/build icon path
    iconPath:
      "M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.34 8.09A2.25 2.25 0 013 6.318V3.75a.75.75 0 01.75-.75h2.568a2.25 2.25 0 011.772.862l4.08 5.058m0 0l6.08 6.08a2.25 2.25 0 010 3.182l-.53.53a2.25 2.25 0 01-3.182 0l-6.08-6.08",
  },
  {
    title: "Keep It Simple",
    description:
      "The best apps feel effortless. I focus on clean UI, fast performance, and no unnecessary complexity.",
    // Sparkle/star icon path
    iconPath:
      "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading title="Engineering Philosophy" />

        {/* Quote with warm color moment */}
        <ClipReveal>
          <blockquote className="mb-12 border-l-4 border-accent-warm py-4 pl-6">
            <p className="text-xl font-medium leading-relaxed italic sm:text-2xl">
              <span className="gradient-text-animated">
                &ldquo;Great software should feel invisible — fast, intuitive,
                and reliable.&rdquo;
              </span>
            </p>
          </blockquote>
        </ClipReveal>

        {/* Principles with overlapping card layout on desktop */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-3">
          {principles.map((p, i) => (
            <StaggerItem
              key={p.title}
              direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
            >
              <RotateIn delay={i * 0.1}>
                <SpotlightCard
                  className={`h-full p-6 ${i === 1 ? "lg:-mx-2 lg:scale-105 lg:shadow-xl lg:shadow-accent-warm/5" : ""}`}
                  spotlightColor="var(--glow-warm)"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent-warm/10">
                    <SVGDraw
                      paths={[p.iconPath]}
                      className="h-5 w-5"
                      strokeColor="var(--accent-warm)"
                      duration={1}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {p.description}
                  </p>
                </SpotlightCard>
              </RotateIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
