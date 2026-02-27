"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  chars?: string;
  duration?: number;
  triggerOnView?: boolean;
}

export default function TextScramble({
  text,
  className = "",
  chars = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  duration = 1500,
  triggerOnView = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(triggerOnView ? "\u00A0".repeat(text.length) : text);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const scramble = useCallback(() => {
    const length = text.length;
    const totalFrames = Math.floor(duration / 30);
    let frame = 0;

    const interval = setInterval(() => {
      const progress = frame / totalFrames;
      const resolved = Math.floor(progress * length);

      let result = "";
      for (let i = 0; i < length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < resolved) {
          result += text[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayText(result);
      frame++;

      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);

    cleanupRef.current = () => clearInterval(interval);
  }, [text, chars, duration]);

  useEffect(() => {
    if (!triggerOnView || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          scramble();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cleanupRef.current?.();
    };
  }, [triggerOnView, hasTriggered, scramble]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {displayText}
    </span>
  );
}
