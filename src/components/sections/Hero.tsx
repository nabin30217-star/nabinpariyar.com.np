"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SlideUp from "@/components/animations/SlideUp";
import TypeWriter from "@/components/animations/TypeWriter";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative z-10">
        <SlideUp>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest text-accent uppercase">
              Hi, I&apos;m
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl">
              Nabin Pariyar
            </h1>
            <div className="mt-6 h-8 text-lg text-text-muted sm:text-xl">
              <TypeWriter
                words={[
                  "Mobile & Web Systems Engineer",
                  "Android Developer",
                  "Building for the Play Store",
                  "Learning. Shipping. Growing.",
                ]}
                className="font-semibold text-accent"
              />
            </div>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
              I build scalable, high-performance mobile and web applications.
              Currently focused on Android development with Kotlin and expanding
              into full-stack web engineering.
            </p>
            <div className="mt-10 flex gap-4">
              <Button href="/projects">View Projects</Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
        </SlideUp>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          className="h-6 w-6 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
