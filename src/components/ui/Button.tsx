"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:glow",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "text-text-muted hover:text-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2"
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
