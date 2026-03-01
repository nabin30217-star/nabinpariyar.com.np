"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, MotionValue } from "framer-motion";

interface Emote {
    symbol: string;
    x: number; // base x percentage (relative to container)
    y: number; // base y percentage 
    rotate: number; // base rotation
    parallaxDepth: number; // how much it moves with the mouse
    size: "sm" | "md" | "lg";
}

const emotes: Emote[] = [
    { symbol: "🚀", x: 10, y: 15, rotate: -15, parallaxDepth: 0.08, size: "lg" },
    { symbol: "💻", x: 80, y: 10, rotate: 15, parallaxDepth: -0.05, size: "md" },
    { symbol: "✨", x: 75, y: 85, rotate: 25, parallaxDepth: 0.1, size: "sm" },
    { symbol: "📱", x: 15, y: 80, rotate: -10, parallaxDepth: -0.06, size: "md" },
    { symbol: "💡", x: 90, y: 50, rotate: 10, parallaxDepth: 0.04, size: "sm" },
];

function EmoteItem({ emote, smoothX, smoothY, index }: { emote: Emote, smoothX: MotionValue<number>, smoothY: MotionValue<number>, index: number }) {
    const xOffset = useTransform(smoothX, (v) => v * emote.parallaxDepth);
    const yOffset = useTransform(smoothY, (v) => v * emote.parallaxDepth);

    const sizeClasses = {
        sm: "text-3xl",
        md: "text-4xl",
        lg: "text-6xl",
    };

    return (
        <motion.div
            className={`absolute drop-shadow-2xl ${sizeClasses[emote.size]}`}
            style={{
                left: `${emote.x}%`,
                top: `${emote.y}%`,
                x: xOffset,
                y: yOffset,
                willChange: "transform",
            }}
            initial={{ opacity: 0, scale: 0, rotate: emote.rotate - 30 }}
            animate={{ opacity: 0.9, scale: 1, rotate: emote.rotate }}
            transition={{
                duration: 0.8,
                delay: 1.2 + index * 0.15,
                ease: [0.23, 1, 0.32, 1],
            }}
        >
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                }}
                className="will-change-transform"
            >
                {emote.symbol}
            </motion.div>
        </motion.div>
    );
}

export default function FloatingEmotes() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const prefersReduced = useReducedMotion();

    useEffect(() => {
        if (prefersReduced) return;

        let rafId = 0;
        const handleMouseMove = (e: MouseEvent) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth) * 2 - 1;
                const y = (e.clientY / window.innerHeight) * 2 - 1;
                mouseX.set(x * 100);
                mouseY.set(y * 100);
                rafId = 0;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, [mouseX, mouseY, prefersReduced]);

    if (prefersReduced) return null;

    return (
        <div className="pointer-events-none absolute inset-0 z-20">
            {emotes.map((emote, index) => (
                <EmoteItem
                    key={index}
                    emote={emote}
                    smoothX={smoothX}
                    smoothY={smoothY}
                    index={index}
                />
            ))}
        </div>
    );
}
