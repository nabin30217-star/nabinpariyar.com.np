"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Shape {
  type: "circle" | "triangle" | "square" | "ring" | "cross" | "dot";
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
  color: string;
  opacity: number;
  blur?: number;
  rotate?: number;
}

const defaultShapes: Shape[] = [
  { type: "ring", size: 40, x: "8%", y: "18%", delay: 0, duration: 22, color: "var(--accent)", opacity: 0.06 },
  { type: "triangle", size: 14, x: "82%", y: "12%", delay: 2, duration: 26, color: "var(--accent-secondary)", opacity: 0.08, rotate: 15 },
  { type: "dot", size: 5, x: "75%", y: "65%", delay: 1, duration: 18, color: "var(--accent)", opacity: 0.15 },
  { type: "cross", size: 12, x: "18%", y: "72%", delay: 3, duration: 24, color: "var(--accent-warm)", opacity: 0.08, rotate: 45 },
  { type: "square", size: 10, x: "55%", y: "25%", delay: 1.5, duration: 20, color: "var(--accent-secondary)", opacity: 0.06, rotate: 30 },
  { type: "dot", size: 4, x: "30%", y: "45%", delay: 0.5, duration: 16, color: "var(--accent-emerald)", opacity: 0.12 },
  { type: "ring", size: 24, x: "65%", y: "80%", delay: 2.5, duration: 28, color: "var(--accent-warm)", opacity: 0.05 },
  { type: "triangle", size: 8, x: "42%", y: "88%", delay: 4, duration: 19, color: "var(--accent)", opacity: 0.07, rotate: -20 },
  { type: "dot", size: 3, x: "90%", y: "40%", delay: 1, duration: 15, color: "var(--accent-secondary)", opacity: 0.1 },
  { type: "cross", size: 8, x: "50%", y: "55%", delay: 3.5, duration: 21, color: "var(--accent-emerald)", opacity: 0.06, rotate: 0 },
];

function ShapeRenderer({
  type,
  size,
  color,
  opacity,
}: {
  type: Shape["type"];
  size: number;
  color: string;
  opacity: number;
}) {
  const style = { opacity };

  switch (type) {
    case "circle":
      return (
        <div
          style={{
            ...style,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
      );
    case "dot":
      return (
        <div
          style={{
            ...style,
            width: size,
            height: size,
            borderRadius: "50%",
            backgroundColor: color,
          }}
        />
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
          <polygon
            points="12,2 22,22 2,22"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
          />
        </svg>
      );
    case "square":
      return (
        <div
          style={{
            ...style,
            width: size,
            height: size,
            border: `1.5px solid ${color}`,
          }}
        />
      );
    case "ring":
      return (
        <div
          style={{
            ...style,
            width: size,
            height: size,
            borderRadius: "50%",
            border: `1.5px solid ${color}`,
          }}
        />
      );
    case "cross":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
          <line x1="12" y1="4" x2="12" y2="20" stroke={color} strokeWidth="1.5" />
          <line x1="4" y1="12" x2="20" y2="12" stroke={color} strokeWidth="1.5" />
        </svg>
      );
  }
}

export default function AnimatedBackground({
  shapes = defaultShapes,
  className = "",
}: {
  shapes?: Shape[];
  className?: string;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            filter: shape.blur ? `blur(${shape.blur}px)` : undefined,
            willChange: "transform",
          }}
          animate={{
            y: [0, -20, 10, -15, 0],
            rotate: [shape.rotate ?? 0, (shape.rotate ?? 0) + 360],
          }}
          transition={{
            y: {
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            },
            rotate: {
              duration: shape.duration * 2,
              repeat: Infinity,
              ease: "linear",
              delay: shape.delay,
            },
          }}
        >
          <ShapeRenderer
            type={shape.type}
            size={shape.size}
            color={shape.color}
            opacity={shape.opacity}
          />
        </motion.div>
      ))}
    </div>
  );
}

export type { Shape };
