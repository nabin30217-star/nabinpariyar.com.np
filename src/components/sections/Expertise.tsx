"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";
import { SmartphoneIcon, GlobeIcon, TerminalIcon } from "@/components/ui/Icons";

const skills = [
  {
    icon: <SmartphoneIcon className="h-8 w-8 text-accent" />,
    title: "Android Apps",
    description:
      "Native Android apps with Kotlin, Jetpack Compose, and modern architecture patterns. Published on Google Play Store.",
  },
  {
    icon: <GlobeIcon className="h-8 w-8 text-accent" />,
    title: "Web Applications",
    description:
      "Modern web applications with Next.js, TypeScript, and Tailwind CSS. Fast, responsive, and SEO-optimized.",
  },
  {
    icon: <TerminalIcon className="h-8 w-8 text-accent" />,
    title: "Backend & Tooling",
    description:
      "REST APIs, Firebase integrations, CI/CD pipelines, and the tooling that connects apps to the cloud.",
  },
];

export default function Expertise() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading title="What I Build" />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <StaggerItem key={skill.title}>
              <Card className="h-full">
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-text">
                  {skill.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {skill.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
