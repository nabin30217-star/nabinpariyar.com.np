"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Only show on desktop
        if (window.matchMedia("(pointer: fine)").matches === false) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleHover = () => setIsHovering(true);
        const handleLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        // Track interactive elements
        const interactiveElements = document.querySelectorAll(
            "a, button, [role='button'], input, textarea, select"
        );
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main dot */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
                style={{ x, y }}
            >
                <motion.div
                    className="rounded-full bg-white"
                    animate={{
                        width: isHovering ? 48 : 10,
                        height: isHovering ? 48 : 10,
                        x: isHovering ? -24 : -5,
                        y: isHovering ? -24 : -5,
                        opacity: isHovering ? 0.5 : 0.8,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
            </motion.div>
        </>
    );
}
