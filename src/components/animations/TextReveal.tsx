"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    splitBy?: "word" | "char";
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

const containerVariants: Variants = {
    hidden: {},
    visible: (delay: number) => ({
        transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
        },
    }),
};

const wordVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: -60,
        filter: "blur(6px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
};

const charVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
};

export default function TextReveal({
    text,
    className = "",
    delay = 0,
    splitBy = "word",
    as: Tag = "p",
}: TextRevealProps) {
    const items = splitBy === "word" ? text.split(" ") : text.split("");
    const variants = splitBy === "word" ? wordVariants : charVariants;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={delay}
            variants={containerVariants}
            style={{ perspective: 600 }}
        >
            <Tag className={className}>
                {items.map((item, i) => (
                    <motion.span
                        key={`${item}-${i}`}
                        variants={variants}
                        className="inline-block"
                        style={{ transformOrigin: "bottom center" }}
                    >
                        {item === " " ? "\u00A0" : item}
                        {splitBy === "word" && i < items.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                ))}
            </Tag>
        </motion.div>
    );
}

/** Animated counter — counts up from 0 to target on scroll */
interface CountUpProps {
    target: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export function CountUp({
    target,
    duration = 2,
    suffix = "",
    className = "",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!spanRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(spanRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;
        let startTime: number;
        let frame: number;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min(
                (timestamp - startTime) / (duration * 1000),
                1
            );
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [hasStarted, target, duration]);

    return (
        <span ref={spanRef} className={className}>
            {count}
            {suffix}
        </span>
    );
}
