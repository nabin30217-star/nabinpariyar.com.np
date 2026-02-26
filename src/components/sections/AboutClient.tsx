"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import TiltCard from "@/components/animations/TiltCard";
import SlideUp, {
    ClipReveal,
    RotateIn,
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
        icon: "🔥",
    },
    {
        period: "Late 2025",
        title: "First App on Play Store",
        description:
            "Published Smart Calculator on Google Play Store. First time seeing real users download something I built.",
        icon: "🚀",
    },
    {
        period: "2025",
        title: "3 Apps Published",
        description:
            "Shipped Vixit Video Compressor and Samsung TV Remote. Learned real-world challenges: AdMob, privacy policies, user feedback.",
        icon: "📱",
    },
    {
        period: "Late 2025",
        title: "Expanded to Web Development",
        description:
            "Started learning Next.js, TypeScript, and Tailwind CSS. Full-stack ambitions unlocked.",
        icon: "🌐",
    },
    {
        period: "2026",
        title: "Built This Portfolio",
        description:
            "Designed and coded nabinpariyar.com.np from scratch with Next.js 16, Framer Motion, and Vercel deployment.",
        icon: "✨",
    },
];

/* ── Skills data ── */
const skillCategories = [
    {
        label: "Mobile",
        icon: "📱",
        color: "from-blue-500/20 to-blue-600/5",
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
        icon: "🌐",
        color: "from-emerald-500/20 to-emerald-600/5",
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
        icon: "⚙️",
        color: "from-purple-500/20 to-purple-600/5",
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
        icon: "📦",
        color: "from-orange-500/20 to-orange-600/5",
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
    { emoji: "💻", label: "Coding", description: "Building side projects and learning new tech" },
    { emoji: "📚", label: "Reading Docs", description: "Always diving into official documentation" },
    { emoji: "🎮", label: "Gaming", description: "Strategy games when I need a break" },
    { emoji: "🎵", label: "Music", description: "Lo-fi beats while coding" },
    { emoji: "🧪", label: "Experimenting", description: "Trying new libraries and frameworks" },
    { emoji: "☕", label: "Coffee", description: "Fuel for late-night coding sessions" },
];

export default function AboutClient() {
    return (
        <Container className="py-24 sm:py-32">
            {/* ── Bio ── */}
            <SectionHeading title="About Me" />
            <div className="max-w-3xl">
                <TextReveal
                    text="I'm a self-taught developer from Nepal who fell in love with building things that people actually use."
                    as="p"
                    className="text-lg leading-8 text-text-muted"
                />
                <SlideUp delay={0.2}>
                    <p className="mt-4 text-lg leading-8 text-text-muted">
                        Six months ago, I wrote my first line of Kotlin — today I have three
                        apps on the Google Play Store and I&apos;m expanding into web
                        development. I believe great software should feel invisible: fast,
                        intuitive, and reliable.
                    </p>
                </SlideUp>
                <SlideUp delay={0.3}>
                    <p className="mt-4 text-lg leading-8 text-text-muted">
                        Every day I&apos;m learning, shipping, and getting better. My goal is
                        to become a full-stack engineer who can build anything from a mobile
                        app to a complete web platform.
                    </p>
                </SlideUp>
            </div>

            {/* ── Journey Timeline ── */}
            <div className="mt-24">
                <SectionHeading title="My Journey" subtitle="Zero to 3 Play Store apps in 6 months" />
                <div className="relative ml-4">
                    {/* Vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-secondary to-accent/20" />

                    {timeline.map((item, i) => (
                        <SlideUp
                            key={item.title}
                            delay={i * 0.1}
                            direction={i % 2 === 0 ? "left" : "right"}
                        >
                            <div className="relative mb-10 pl-10 last:mb-0">
                                {/* Dot on the line */}
                                <div className="absolute left-0 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-bg text-sm">
                                    {item.icon}
                                </div>

                                {/* Content card */}
                                <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                                    <span className="text-xs font-semibold tracking-wider text-accent uppercase">
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
                </div>
            </div>

            {/* ── Interactive Skills Grid ── */}
            <div className="mt-24">
                <SectionHeading title="Technical Skills" subtitle="Technologies I work with" />
                <StaggerContainer className="grid gap-6 sm:grid-cols-2">
                    {skillCategories.map((cat, catIndex) => (
                        <StaggerItem
                            key={cat.label}
                            direction={catIndex % 2 === 0 ? "left" : "right"}
                        >
                            <TiltCard className="h-full p-6" maxTilt={6}>
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${cat.color} opacity-50`} />
                                <div className="relative">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{cat.icon}</span>
                                        <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                                            {cat.label}
                                        </h3>
                                    </div>
                                    <div className="mt-5 space-y-3">
                                        {cat.skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="mb-1 flex items-center justify-between">
                                                    <span className="text-sm text-text">{skill.name}</span>
                                                    <span className="text-xs text-text-muted">{skill.level}%</span>
                                                </div>
                                                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary transition-all duration-1000"
                                                        style={{ width: `${skill.level}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            {/* ── Beyond Code ── */}
            <div className="mt-24">
                <SectionHeading title="Beyond Code" subtitle="What I enjoy when I'm not coding" />
                <StaggerContainer className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {hobbies.map((hobby, i) => (
                        <StaggerItem key={hobby.label} direction="up" scale>
                            <ScaleIn delay={i * 0.05}>
                                <div className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                                    <span className="text-3xl transition-transform duration-300 group-hover:scale-125">
                                        {hobby.emoji}
                                    </span>
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
