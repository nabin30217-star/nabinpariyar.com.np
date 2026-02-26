"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";

const skills = [
  {
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Android Apps",
    description:
      "Native Android apps with Kotlin, Jetpack Compose, and modern architecture patterns. Published on Google Play Store.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Web Applications",
    description:
      "Modern web applications with Next.js, TypeScript, and Tailwind CSS. Fast, responsive, and SEO-optimized.",
  },
  {
    icon: (
      <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Systems Engineering",
    description:
      "Backend services, CI/CD pipelines, REST APIs, and Firebase integrations. Building the infrastructure that powers great apps.",
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
