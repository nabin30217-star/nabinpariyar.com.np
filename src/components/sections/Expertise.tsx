"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/animations/TiltCard";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";
import SVGDraw from "@/components/animations/SVGDraw";

const skills = [
  {
    // SmartphoneIcon path
    iconPaths: [
      "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    ],
    title: "Android Apps",
    description:
      "Native Android apps with Kotlin, Jetpack Compose, and modern architecture patterns. Published on Google Play Store.",
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "Room DB", "Coroutines"],
    direction: "left" as const,
    color: {
      stroke: "var(--accent)",
      iconBg: "bg-accent/10",
      techBg: "bg-accent/5",
      techText: "text-accent",
      gradientFrom: "from-accent/5",
    },
  },
  {
    // GlobeIcon path
    iconPaths: [
      "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    ],
    title: "Web Applications",
    description:
      "Modern web applications with Next.js, TypeScript, and Tailwind CSS. Fast, responsive, and SEO-optimized.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    direction: "up" as const,
    color: {
      stroke: "var(--accent-emerald)",
      iconBg: "bg-accent-emerald/10",
      techBg: "bg-accent-emerald/5",
      techText: "text-accent-emerald",
      gradientFrom: "from-accent-emerald/5",
    },
  },
  {
    // TerminalIcon path
    iconPaths: [
      "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
    ],
    title: "Backend & Tooling",
    description:
      "REST APIs, Firebase integrations, CI/CD pipelines, and the tooling that connects apps to the cloud.",
    technologies: ["Firebase", "REST APIs", "CI/CD", "Git", "Node.js"],
    direction: "right" as const,
    color: {
      stroke: "var(--accent-warm)",
      iconBg: "bg-accent-warm/10",
      techBg: "bg-accent-warm/5",
      techText: "text-accent-warm",
      gradientFrom: "from-accent-warm/5",
    },
  },
];

export default function Expertise() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading title="What I Build" />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <StaggerItem
              key={skill.title}
              direction={skill.direction}
              className={index === 1 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <TiltCard className="group/card relative h-full overflow-hidden p-6">
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color.gradientFrom} to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`}
                />

                <div className="relative">
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${skill.color.iconBg}`}
                  >
                    <SVGDraw
                      paths={skill.iconPaths}
                      className="h-7 w-7"
                      strokeColor={skill.color.stroke}
                      duration={1.2}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-text">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {skill.description}
                  </p>

                  {/* Technology tags — revealed on hover */}
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2 overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${skill.color.techBg} ${skill.color.techText}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
