"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  screens?: number;
}

export default function HorizontalScroll({
  children,
  className = "",
  screens = 3,
}: HorizontalScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((screens - 1) / screens) * 100}%`]
  );

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <div className="flex flex-wrap">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: `${screens * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
