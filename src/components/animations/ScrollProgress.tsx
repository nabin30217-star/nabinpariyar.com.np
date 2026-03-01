"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const prefersReduced = useReducedMotion();

    if (prefersReduced) return null;

    return (
        <motion.div
            className="fixed top-0 right-0 left-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent via-accent-secondary to-accent"
            style={{ scaleX }}
        />
    );
}
