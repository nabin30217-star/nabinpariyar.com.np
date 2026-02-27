"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import SpotlightCard from "@/components/animations/SpotlightCard";
import SVGDraw from "@/components/animations/SVGDraw";
import SlideUp, {
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/SlideUp";
import TextReveal from "@/components/animations/TextReveal";

/* ── Timeline data ── */
const timeline = [
  {
    period: "Mid 2025",
    title: "Started Learning Kotlin",
    description:
      "Picked up Kotlin from scratch — no CS degree, no bootcamp. Just curiosity and documentation.",
    // Fire/flame icon
    iconPath: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
    iconPath2: "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z",
    color: "var(--accent-warm)",
  },
  {
    period: "Late 2025",
    title: "First App on Play Store",
    description:
      "Published Smart Calculator on Google Play Store. First time seeing real users download something I built.",
    // Rocket icon
    iconPath: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    color: "var(--accent)",
  },
  {
    period: "2025",
    title: "3 Apps Published",
    description:
      "Shipped Vixit Video Compressor and Samsung TV Remote. Learned real-world challenges: AdMob, privacy policies, user feedback.",
    // Smartphone icon
    iconPath: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
    color: "var(--accent-secondary)",
  },
  {
    period: "Late 2025",
    title: "Expanded to Web Development",
    description:
      "Started learning Next.js, TypeScript, and Tailwind CSS. Full-stack ambitions unlocked.",
    // Globe icon
    iconPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    color: "var(--accent-emerald)",
  },
  {
    period: "2026",
    title: "Built This Portfolio",
    description:
      "Designed and coded nabinpariyar.com.np from scratch with Next.js 16, Framer Motion, and Vercel deployment.",
    // Sparkle icon
    iconPath: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
    color: "var(--accent-warm)",
  },
];

/* ── Skills data ── */
const skillCategories = [
  {
    label: "Mobile",
    // Smartphone paths
    iconPaths: ["M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"],
    iconColor: "var(--accent)",
    color: "from-blue-500/20 to-blue-600/5",
    accentBg: "bg-accent/10",
    skills: [
      { name: "Kotlin", level: 85 },
      { name: "Jetpack Compose", level: 80 },
      { name: "Java", level: 60 },
      { name: "Android Studio", level: 85 },
      { name: "Material Design", level: 75 },
    ],
  },
  {
    label: "Web",
    // Globe paths
    iconPaths: ["M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582"],
    iconColor: "var(--accent-emerald)",
    color: "from-emerald-500/20 to-emerald-600/5",
    accentBg: "bg-accent-emerald/10",
    skills: [
      { name: "TypeScript", level: 65 },
      { name: "Next.js", level: 60 },
      { name: "React", level: 60 },
      { name: "Tailwind CSS", level: 70 },
      { name: "HTML/CSS", level: 75 },
    ],
  },
  {
    label: "Tools & Cloud",
    // Terminal paths
    iconPaths: ["M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"],
    iconColor: "var(--accent-secondary)",
    color: "from-purple-500/20 to-purple-600/5",
    accentBg: "bg-accent-secondary/10",
    skills: [
      { name: "Firebase", level: 70 },
      { name: "Git & GitHub", level: 75 },
      { name: "REST APIs", level: 70 },
      { name: "Vercel", level: 65 },
      { name: "CI/CD", level: 55 },
    ],
  },
  {
    label: "Libraries",
    // Code icon paths
    iconPaths: ["M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"],
    iconColor: "var(--accent-warm)",
    color: "from-orange-500/20 to-orange-600/5",
    accentBg: "bg-accent-warm/10",
    skills: [
      { name: "OpenCV", level: 60 },
      { name: "AdMob", level: 75 },
      { name: "Framer Motion", level: 60 },
      { name: "CameraX", level: 65 },
      { name: "Room DB", level: 60 },
    ],
  },
];

/* ── Hobbies data ── */
const hobbies = [
  {
    label: "Coding",
    description: "Building side projects and learning new tech",
    iconPath: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
    color: "var(--accent)",
  },
  {
    label: "Reading Docs",
    description: "Always diving into official documentation",
    iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    color: "var(--accent-emerald)",
  },
  {
    label: "Gaming",
    description: "Strategy games when I need a break",
    iconPath: "M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z",
    color: "var(--accent-secondary)",
  },
  {
    label: "Music",
    description: "Lo-fi beats while coding",
    iconPath: "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z",
    color: "var(--accent-warm)",
  },
  {
    label: "Experimenting",
    description: "Trying new libraries and frameworks",
    iconPath: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    color: "var(--accent-emerald)",
  },
  {
    label: "Coffee",
    description: "Fuel for late-night coding sessions",
    iconPath: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    color: "var(--accent-coral)",
  },
];

/* ── Animated timeline line ── */
function AnimatedTimeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative ml-4">
      {/* Background line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      {/* Animated progress line */}
      <motion.div
        className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent-secondary to-accent-warm"
        style={{ scaleY, height: "100%" }}
      />
      {children}
    </div>
  );
}

/* ── Animated skill bar ── */
function SkillBar({ level, delay }: { level: number; delay: number }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-border">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default function AboutClient() {
  return (
    <Container className="py-24 sm:py-32">
      {/* ── Hero / Avatar Section ── */}
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left">
        <SlideUp direction="left">
          <div className="relative mb-8 sm:mb-0">
            <div className="relative h-40 w-40 shrink-0">
              <div
                className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-accent-secondary to-accent-warm"
                style={{ padding: "3px" }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-bg">
                  <SVGDraw
                    paths={["M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"]}
                    className="h-16 w-16 text-accent"
                    strokeColor="var(--accent)"
                    duration={2}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-bg bg-emerald-500">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              </div>
            </div>
          </div>
        </SlideUp>

        <div className="max-w-2xl">
          <TextReveal
            text="Nabin Pariyar"
            as="h1"
            className="text-3xl font-bold tracking-tight text-text sm:text-4xl"
            splitBy="char"
          />
          <SlideUp delay={0.2}>
            <p className="mt-2 text-lg font-medium text-accent">
              Mobile & Web Systems Engineer
            </p>
          </SlideUp>
          <SlideUp delay={0.3}>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              <Badge color="accent">Android Developer</Badge>
              <Badge color="secondary">Web Developer</Badge>
              <Badge color="emerald">Based in Nepal</Badge>
            </div>
          </SlideUp>
          <SlideUp delay={0.4}>
            <p className="mt-6 text-lg leading-8 text-text-muted">
              I&apos;m a self-taught developer who fell in love with building
              things that people actually use. Six months ago, I wrote my first
              line of Kotlin — today I have three apps on the Google Play Store
              and I&apos;m expanding into web development.
            </p>
          </SlideUp>
          <SlideUp delay={0.5}>
            <p className="mt-4 text-lg leading-8 text-text-muted">
              I believe great software should feel invisible: fast, intuitive,
              and reliable. Every day I&apos;m learning, shipping, and getting
              better.
            </p>
          </SlideUp>
        </div>
      </div>

      {/* ── Journey Timeline ── */}
      <div className="mt-24">
        <SectionHeading
          title="My Journey"
          subtitle="Zero to 3 Play Store apps in 6 months"
          accentColor="warm"
        />
        <AnimatedTimeline>
          {timeline.map((item, i) => (
            <SlideUp
              key={item.title}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className="relative mb-10 pl-10 last:mb-0">
                <div className="absolute left-0 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-border bg-bg">
                  <SVGDraw
                    paths={[item.iconPath, ...(("iconPath2" in item && item.iconPath2) ? [item.iconPath2] : [])]}
                    className="h-4 w-4"
                    strokeColor={item.color}
                    duration={0.8}
                    stagger={0.1}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: item.color }}>
                    {item.period}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </SlideUp>
          ))}
        </AnimatedTimeline>
      </div>

      {/* ── Interactive Skills Grid ── */}
      <div className="mt-24">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies I work with"
        />
        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, catIndex) => (
            <StaggerItem
              key={cat.label}
              direction={catIndex % 2 === 0 ? "left" : "right"}
            >
              <SpotlightCard className="h-full p-6">
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cat.color} opacity-50`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${cat.accentBg}`}>
                      <SVGDraw
                        paths={cat.iconPaths}
                        className="h-5 w-5"
                        strokeColor={cat.iconColor}
                        duration={1}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: cat.iconColor }}>
                      {cat.label}
                    </h3>
                  </div>
                  <div className="mt-5 space-y-3">
                    {cat.skills.map((skill, skillIdx) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-sm text-text">
                            {skill.name}
                          </span>
                          <span className="text-xs text-text-muted">
                            {skill.level}%
                          </span>
                        </div>
                        <SkillBar
                          level={skill.level}
                          delay={catIndex * 0.2 + skillIdx * 0.1}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* ── Beyond Code ── */}
      <div className="mt-24">
        <SectionHeading
          title="Beyond Code"
          subtitle="What I enjoy when I'm not coding"
          accentColor="emerald"
        />
        <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {hobbies.map((hobby, i) => (
            <StaggerItem key={hobby.label} direction="up" scale>
              <ScaleIn delay={i * 0.05}>
                <div className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `color-mix(in srgb, ${hobby.color} 15%, transparent)` }}>
                    <SVGDraw
                      paths={[hobby.iconPath]}
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-125"
                      strokeColor={hobby.color}
                      duration={0.8}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-text">
                    {hobby.label}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted">
                    {hobby.description}
                  </p>
                </div>
              </ScaleIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Container>
  );
}
