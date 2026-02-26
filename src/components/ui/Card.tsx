"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  if (!hover) {
    return (
      <div
        className={`rounded-xl border border-border bg-card p-6 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:glow ${className}`}
    >
      {children}
    </motion.div>
  );
}
