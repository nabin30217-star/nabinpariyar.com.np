"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import SlideUp from "@/components/animations/SlideUp";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";

const principles = [
  {
    title: "Ship Early, Iterate Often",
    description: "Start with an MVP, gather real user feedback, and improve relentlessly.",
  },
  {
    title: "Clean Code Matters",
    description: "Readable, maintainable, well-tested code is the foundation of every great product.",
  },
  {
    title: "Never Stop Learning",
    description: "From first line of Kotlin to full-stack in 6 months. Growth never stops.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading title="Engineering Philosophy" />

        <SlideUp>
          <blockquote className="mb-12 border-l-4 border-accent pl-6">
            <p className="text-xl font-medium leading-relaxed text-text italic sm:text-2xl">
              &ldquo;Great software should feel invisible — fast, intuitive, and
              reliable.&rdquo;
            </p>
          </blockquote>
        </SlideUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-3">
          {principles.map((p, i) => (
            <StaggerItem key={p.title}>
              <Card className="h-full">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {i + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{p.description}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
