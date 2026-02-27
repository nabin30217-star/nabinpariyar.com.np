"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";

interface RippleStyle {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  color?: "accent" | "warm" | "emerald";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const colorVariants = {
  accent: {
    primary:
      "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    outline:
      "border border-accent text-accent hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    ghost: "text-text-muted hover:text-accent",
    glow: "bg-accent text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]",
  },
  warm: {
    primary:
      "bg-accent-warm text-white hover:bg-accent-warm-hover hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    outline:
      "border border-accent-warm text-accent-warm hover:bg-accent-warm/10 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    ghost: "text-text-muted hover:text-accent-warm",
    glow: "bg-accent-warm text-white shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]",
  },
  emerald: {
    primary:
      "bg-accent-emerald text-white hover:bg-accent-emerald-hover hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
    outline:
      "border border-accent-emerald text-accent-emerald hover:bg-accent-emerald/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    ghost: "text-text-muted hover:text-accent-emerald",
    glow: "bg-accent-emerald text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]",
  },
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  color = "accent",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [ripple, setRipple] = useState<RippleStyle | null>(null);

  const handleRipple = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    setRipple({
      left: e.clientX - rect.left - size / 2,
      top: e.clientY - rect.top - size / 2,
      width: size,
      height: size,
    });
    setTimeout(() => setRipple(null), 600);
  }, []);

  const baseStyles =
    "group/btn relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer hover:scale-[1.02] active:scale-[0.98]";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const rippleEl = ripple && (
    <span
      className="pointer-events-none absolute animate-ripple rounded-full bg-white/25"
      style={{
        left: ripple.left,
        top: ripple.top,
        width: ripple.width,
        height: ripple.height,
      }}
    />
  );

  const variantStyle = colorVariants[color][variant];
  const classes = `${baseStyles} ${variantStyle} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="inline-flex items-center gap-1 [&>.arrow]:transition-transform [&>.arrow]:duration-200 [&>.arrow]:group-hover/btn:translate-x-1">
        {children}
      </span>
      {rippleEl}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onMouseDown={handleRipple}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseDown={handleRipple}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseDown={handleRipple}
    >
      {content}
    </button>
  );
}
