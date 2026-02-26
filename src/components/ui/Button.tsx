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
    "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-bg cursor-pointer hover:scale-[1.02] active:scale-[0.98]";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
    outline: "border border-accent text-accent hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    ghost: "text-text-muted hover:text-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const rippleEl = ripple && (
    <span
      className="absolute animate-ripple rounded-full bg-white/25 pointer-events-none"
      style={{
        left: ripple.left,
        top: ripple.top,
        width: ripple.width,
        height: ripple.height,
      }}
    />
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

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
          {children}
          {rippleEl}
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
        {children}
        {rippleEl}
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
      {children}
      {rippleEl}
    </button>
  );
}
