"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/animations/TextReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";
import SpotlightCard from "@/components/animations/SpotlightCard";
import SVGDraw from "@/components/animations/SVGDraw";

const stats = [
  {
    value: 3,
    suffix: "",
    label: "Apps on Play Store",
    // SmartphoneIcon path
    iconPaths: [
      "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    ],
    color: "accent" as const,
    glowColor: "var(--glow)",
    featured: true,
  },
  {
    value: 6,
    suffix: " mo",
    label: "Self-Taught Journey",
    // Rocket icon paths
    iconPaths: [
      "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    ],
    color: "warm" as const,
    glowColor: "var(--glow-warm)",
    featured: false,
  },
  {
    value: 3,
    suffix: "K+",
    label: "Lines of Kotlin",
    // TerminalIcon path
    iconPaths: [
      "M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z",
    ],
    color: "emerald" as const,
    glowColor: "var(--glow-emerald)",
    featured: false,
  },
  {
    value: 1,
    suffix: "",
    label: "Portfolio Website Built",
    // GlobeIcon path
    iconPaths: [
      "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    ],
    color: "secondary" as const,
    glowColor: "var(--glow)",
    featured: false,
  },
];

const colorMap = {
  accent: {
    iconStroke: "var(--accent)",
    iconBg: "bg-accent/10",
    hoverGlow: "from-accent/10 to-transparent",
    text: "text-accent",
  },
  warm: {
    iconStroke: "var(--accent-warm)",
    iconBg: "bg-accent-warm/10",
    hoverGlow: "from-accent-warm/10 to-transparent",
    text: "text-accent-warm",
  },
  emerald: {
    iconStroke: "var(--accent-emerald)",
    iconBg: "bg-accent-emerald/10",
    hoverGlow: "from-accent-emerald/10 to-transparent",
    text: "text-accent-emerald",
  },
  secondary: {
    iconStroke: "var(--accent-secondary)",
    iconBg: "bg-accent-secondary/10",
    hoverGlow: "from-accent-secondary/10 to-transparent",
    text: "text-accent-secondary",
  },
};

export default function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="By the Numbers"
          subtitle="What I've accomplished in my journey so far"
        />
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const colors = colorMap[stat.color];
            return (
              <StaggerItem
                key={stat.label}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <SpotlightCard
                  className={`p-6 text-center ${stat.featured ? "gradient-border-animated sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Background glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.hoverGlow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-lg ${colors.iconBg}`}
                    >
                      <SVGDraw
                        paths={stat.iconPaths}
                        className="h-7 w-7"
                        strokeColor={colors.iconStroke}
                        duration={1}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="mt-3 text-4xl font-bold text-text">
                      <CountUp
                        target={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
