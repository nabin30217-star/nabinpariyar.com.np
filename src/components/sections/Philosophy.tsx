"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { ClipReveal, RotateIn } from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";

const principles = [
  {
    title: "Build What People Use",
    description: "Every app I build starts with a real problem. If it doesn't help someone, it's not worth shipping.",
  },
  {
    title: "Learn by Doing",
    description: "I went from zero Kotlin to 3 Play Store apps by building, breaking, and fixing — not just reading docs.",
  },
  {
    title: "Keep It Simple",
    description: "The best apps feel effortless. I focus on clean UI, fast performance, and no unnecessary complexity.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading title="Engineering Philosophy" />

        {/* Quote with clip-path reveal */}
        <ClipReveal>
          <blockquote className="mb-12 border-l-4 border-accent pl-6">
            <p className="text-xl font-medium leading-relaxed text-text italic sm:text-2xl">
              &ldquo;Great software should feel invisible — fast, intuitive, and
              reliable.&rdquo;
            </p>
          </blockquote>
        </ClipReveal>

        {/* Principles with rotate-in + stagger */}
        <StaggerContainer className="grid gap-6 sm:grid-cols-3">
          {principles.map((p, i) => (
            <StaggerItem key={p.title} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
              <RotateIn delay={i * 0.1}>
                <Card className="h-full">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-text">{p.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{p.description}</p>
                </Card>
              </RotateIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
