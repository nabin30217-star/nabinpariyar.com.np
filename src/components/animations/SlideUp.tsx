"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ── Direction variants ── */
type Direction = "up" | "down" | "left" | "right";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

/* ── Stagger container ── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ── Individual item (with direction support) ── */
function makeItemVariants(direction: Direction, scale = false): Variants {
  const offset = offsets[direction];
  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      ...(scale ? { scale: 0.9 } : {}),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(scale ? { scale: 1 } : {}),
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };
}

/* ── Scale-in variant ── */
const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── Clip-path reveal ── */
const clipRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0% 100% 0% 0%)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
  },
};

/* ── Rotate-in variant ── */
const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -3, y: 30 },
  visible: {
    opacity: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ────────── Components ────────── */

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  scale?: boolean;
}

/** Wrap a single element — animates in from given direction on scroll */
export default function SlideUp({
  children,
  delay = 0,
  className = "",
  direction = "up",
  scale = false,
}: SlideUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = makeItemVariants(direction, scale);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as Record<string, unknown>),
          transition: {
            ...((variants.visible as Record<string, unknown>).transition as Record<string, unknown>),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scale-in on scroll */
export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: scaleInVariants.hidden,
        visible: {
          ...(scaleInVariants.visible as Record<string, unknown>),
          transition: {
            ...((scaleInVariants.visible as Record<string, unknown>).transition as Record<string, unknown>),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Clip-path horizontal reveal on scroll */
export function ClipReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: clipRevealVariants.hidden,
        visible: {
          ...(clipRevealVariants.visible as Record<string, unknown>),
          transition: {
            ...((clipRevealVariants.visible as Record<string, unknown>).transition as Record<string, unknown>),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Rotate + slide in on scroll */
export function RotateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: rotateInVariants.hidden,
        visible: {
          ...(rotateInVariants.visible as Record<string, unknown>),
          transition: {
            ...((rotateInVariants.visible as Record<string, unknown>).transition as Record<string, unknown>),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Wrap a list container — staggers children on scroll */
export function StaggerContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Each child inside StaggerContainer — supports direction */
export function StaggerItem({
  children,
  className = "",
  direction = "up",
  scale = false,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  scale?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={makeItemVariants(direction, scale)} className={className}>
      {children}
    </motion.div>
  );
}
