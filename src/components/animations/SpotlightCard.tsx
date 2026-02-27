"use client";

import { useRef, useCallback } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor,
  spotlightSize = 400,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty("--spotlight-x", `${x}px`);
      ref.current.style.setProperty("--spotlight-y", `${y}px`);
      ref.current.style.setProperty("--spotlight-opacity", "1");
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.setProperty("--spotlight-opacity", "0");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 ease-out md:hover:-translate-y-1 md:hover:shadow-xl ${className}`}
      style={
        {
          "--spotlight-color": spotlightColor ?? undefined,
          "--spotlight-size": `${spotlightSize}px`,
        } as React.CSSProperties
      }
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
