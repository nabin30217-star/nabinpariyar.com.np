"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glare?: boolean;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  glare = true,
  maxTilt = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();

  const updateTilt = useCallback(
    (clientX: number, clientY: number) => {
      if (!ref.current || prefersReducedMotion) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      setRotateX((0.5 - y) * maxTilt);
      setRotateY((x - 0.5) * maxTilt);
      setGlarePos({ x: x * 100, y: y * 100 });
    },
    [maxTilt, prefersReducedMotion]
  );

  const resetTilt = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateTilt(e.clientX, e.clientY);
    },
    [updateTilt]
  );

  // Touch support with reduced tilt
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      const touch = e.touches[0];
      if (!touch) return;
      updateTilt(touch.clientX, touch.clientY);
    },
    [updateTilt]
  );

  if (prefersReducedMotion) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-border bg-card ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onTouchMove={handleTouchMove}
      onTouchEnd={resetTilt}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className={`relative overflow-hidden rounded-xl border border-border bg-card ${className}`}
    >
      {children}
      {/* Glare overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
            opacity:
              Math.abs(rotateX) + Math.abs(rotateY) > 0.5 ? 0.6 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </motion.div>
  );
}
