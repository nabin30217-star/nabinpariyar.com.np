"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/animations/TextReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/SlideUp";

const stats = [
    { value: 3, suffix: "", label: "Apps on Play Store", icon: "📱" },
    { value: 6, suffix: " mo", label: "Self-Taught Journey", icon: "🚀" },
    { value: 3, suffix: "K+", label: "Lines of Kotlin", icon: "💻" },
    { value: 1, suffix: "", label: "Portfolio Website Built", icon: "🌐" },
];

export default function Stats() {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <SectionHeading
                    title="By the Numbers"
                    subtitle="What I've accomplished in my journey so far"
                />
                <StaggerContainer className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {stats.map((stat, i) => (
                        <StaggerItem
                            key={stat.label}
                            direction={i % 2 === 0 ? "left" : "right"}
                        >
                            <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                                {/* Background glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative">
                                    <span className="text-3xl">{stat.icon}</span>
                                    <div className="mt-3 text-4xl font-bold text-text">
                                        <CountUp target={stat.value} duration={2} suffix={stat.suffix} />
                                    </div>
                                    <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
}
