"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface SVGDrawProps {
  paths: string[];
  viewBox?: string;
  className?: string;
  duration?: number;
  stagger?: number;
  strokeColor?: string;
  strokeWidth?: number;
  fillAfterDraw?: boolean;
  fillColor?: string;
}

export default function SVGDraw({
  paths,
  viewBox = "0 0 24 24",
  className = "",
  duration = 1.2,
  stagger = 0.2,
  strokeColor = "currentColor",
  strokeWidth = 1.5,
  fillAfterDraw = false,
  fillColor = "currentColor",
}: SVGDrawProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReduced = useReducedMotion();

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d, i) =>
        prefersReduced ? (
          <path
            key={i}
            d={d}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={fillAfterDraw ? fillColor : "none"}
          />
        ) : (
          <motion.path
            key={i}
            d={d}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    pathLength: 1,
                    opacity: 1,
                    fill: fillAfterDraw ? fillColor : "none",
                  }
                : {}
            }
            transition={{
              pathLength: {
                duration,
                delay: i * stagger,
                ease: "easeInOut",
              },
              opacity: { duration: 0.2, delay: i * stagger },
              fill: {
                duration: 0.5,
                delay: duration + i * stagger,
              },
            }}
          />
        )
      )}
    </svg>
  );
}
