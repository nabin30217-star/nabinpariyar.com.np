"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Main dot — fast spring
  const x1 = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.5 });
  const y1 = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.5 });

  // Trail dot 1 — medium lag
  const x2 = useSpring(cursorX, { damping: 20, stiffness: 150, mass: 0.5 });
  const y2 = useSpring(cursorY, { damping: 20, stiffness: 150, mass: 0.5 });

  // Trail dot 2 — slow lag
  const x3 = useSpring(cursorX, { damping: 15, stiffness: 80, mass: 0.5 });
  const y3 = useSpring(cursorY, { damping: 15, stiffness: 80, mass: 0.5 });

  const handleHover = useCallback(() => setIsHovering(true), []);
  const handleLeave = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    // Only show on desktop with fine pointer (no touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;
    // Skip if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    // Use event delegation instead of attaching to every element
    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(true);
      }
    };
    const handlePointerOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.addEventListener("mouseout", handlePointerOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
    };
  }, [cursorX, cursorY, isVisible, handleHover, handleLeave]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{ x: x1, y: y1, willChange: "transform" }}
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

      {/* Trail dot 1 */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-difference"
        style={{ x: x2, y: y2, willChange: "transform" }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 0 : 6,
            height: isHovering ? 0 : 6,
            x: -3,
            y: -3,
            opacity: isHovering ? 0 : 0.4,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </motion.div>

      {/* Trail dot 2 */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997] mix-blend-difference"
        style={{ x: x3, y: y3, willChange: "transform" }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 0 : 4,
            height: isHovering ? 0 : 4,
            x: -2,
            y: -2,
            opacity: isHovering ? 0 : 0.2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </motion.div>
    </>
  );
}
