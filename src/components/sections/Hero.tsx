"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TypeWriter from "@/components/animations/TypeWriter";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import TextScramble from "@/components/animations/TextScramble";
const AnimatedBackground = dynamic(
  () => import("@/components/animations/AnimatedBackground"),
  { ssr: false }
);
const MorphingShape = dynamic(
  () => import("@/components/animations/MorphingShape"),
  { ssr: false }
);
import { ChevronDownIcon } from "@/components/ui/Icons";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();

  // Parallax: orbs move slower than scroll
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // Content fades/moves on scroll
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="noise-animated relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <AnimatedBackground className="z-[1]" />

      {/* Parallax gradient orbs (keeping 2 for depth) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : orbY1, willChange: "transform" }}
          className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-[0.07]"
        >
          <div className="h-full w-full rounded-full bg-accent" style={{ filter: "blur(80px)" }} />
        </motion.div>
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : orbY2, willChange: "transform" }}
          className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full opacity-[0.07]"
        >
          <div className="h-full w-full rounded-full bg-accent-secondary" style={{ filter: "blur(80px)" }} />
        </motion.div>
      </div>

      {/* Grid background with parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          y: prefersReducedMotion ? 0 : useTransform(scrollYProgress, [0, 1], [0, -50]),
        }}
      />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg)_70%)]" />

      {/* Content with parallax fade */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full"
      >
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left column — Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-medium tracking-widest text-accent uppercase"
              >
                Hi, I&apos;m
              </motion.p>

              {/* Split text reveal for name */}
              <motion.div variants={fadeUp}>
                <TextReveal
                  text="Nabin Pariyar"
                  as="h1"
                  className="gradient-text-animated mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
                  splitBy="char"
                  delay={0.4}
                />
              </motion.div>

              {/* Scramble subtitle then TypeWriter */}
              <motion.div
                variants={fadeUp}
                className="mt-6 h-8 text-lg text-text-muted sm:text-xl"
              >
                <TextScramble
                  text="Mobile & Web Systems Engineer"
                  className="font-semibold text-accent"
                  duration={1200}
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-2 h-8 text-lg text-text-muted sm:text-xl"
              >
                <TypeWriter
                  words={[
                    "Android Developer",
                    "3 Apps on Google Play Store",
                    "Next.js Enthusiast",
                    "Learning. Shipping. Growing.",
                  ]}
                  className="font-semibold text-accent-secondary"
                />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg leading-8 text-text-muted"
              >
                Self-taught developer from Nepal with 3 published apps on the
                Play Store. I build Android apps with Kotlin and Jetpack
                Compose, and I&apos;m currently expanding into web development
                with Next.js.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex gap-4">
                <MagneticButton>
                  <Button href="/projects">View Projects</Button>
                </MagneticButton>
                <MagneticButton>
                  <Button href="/contact" variant="outline">
                    Get in Touch
                  </Button>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Right column — Morphing Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="hidden lg:block"
            >
              <MorphingShape className="h-[500px] w-full" />
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: {
            delay: 1.5,
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-accent-warm/70 uppercase">
            Scroll
          </span>
          <ChevronDownIcon className="h-5 w-5 text-accent-warm/70" />
        </div>
      </motion.div>
    </section>
  );
}
