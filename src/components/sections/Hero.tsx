"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TypeWriter from "@/components/animations/TypeWriter";
import { ChevronDownIcon } from "@/components/ui/Icons";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="animate-blob-delay-2 absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-accent-secondary/8 blur-3xl" />
        <div className="animate-blob-delay-4 absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg)_70%)]" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium tracking-widest text-accent uppercase"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Nabin{" "}
            <span className="gradient-text">Pariyar</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-6 h-8 text-lg text-text-muted sm:text-xl">
            <TypeWriter
              words={[
                "Android Developer",
                "3 Apps on Google Play Store",
                "Kotlin & Jetpack Compose",
                "Learning. Shipping. Growing.",
              ]}
              className="font-semibold text-accent"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-8 text-text-muted"
          >
            Self-taught developer from Nepal with 3 published apps on the Play
            Store. I build Android apps with Kotlin and Jetpack Compose, and
            I&apos;m currently expanding into web development with Next.js.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex gap-4">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium tracking-widest text-text-muted/70 uppercase">Scroll</span>
          <ChevronDownIcon className="h-5 w-5 text-text-muted/70" />
        </div>
      </motion.div>
    </section>
  );
}
