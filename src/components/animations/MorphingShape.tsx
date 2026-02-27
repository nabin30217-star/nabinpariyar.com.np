"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const blobPaths = [
  "M45.3,-51.2C58.3,-40.9,68.2,-26.3,71.4,-10.2C74.5,5.9,70.8,23.5,61.1,36.2C51.4,48.9,35.7,56.7,19.2,60.6C2.7,64.5,-14.6,64.5,-29.7,58.4C-44.8,52.3,-57.7,40.1,-64.3,25.1C-70.9,10.1,-71.2,-7.7,-65.1,-22.7C-59,-37.7,-46.5,-49.9,-33,-57.3C-19.5,-64.7,-5,-67.3,8.1,-65.2C21.2,-63.1,32.3,-61.5,45.3,-51.2Z",
  "M39.7,-48.5C50.8,-38.7,58.8,-25.8,62.2,-11.5C65.6,2.8,64.4,18.5,57.1,30.4C49.8,42.3,36.4,50.4,21.8,55.8C7.2,61.2,-8.6,63.9,-22.7,59.7C-36.8,55.5,-49.2,44.4,-56.8,30.8C-64.4,17.2,-67.2,1.1,-63.4,-12.8C-59.6,-26.7,-49.2,-38.4,-37.1,-48C-25,-57.6,-11.2,-65.1,2.2,-67.7C15.6,-70.3,28.6,-58.3,39.7,-48.5Z",
  "M42.1,-53.6C54.2,-43.7,63.3,-30.6,67.2,-15.8C71.1,-1,69.8,15.5,62.4,28.3C55,41.1,41.5,50.2,27,55.3C12.5,60.4,-3,61.5,-17.8,57.6C-32.6,53.7,-46.7,44.8,-55.2,32C-63.7,19.2,-66.6,2.5,-63,-12.2C-59.4,-26.9,-49.3,-39.6,-37.2,-49.5C-25.1,-59.4,-11.1,-66.5,2.5,-69.4C16.1,-72.3,30,-63.5,42.1,-53.6Z",
];

export default function MorphingShape({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 0.2, 0, 0.8]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.2, 1, 0.2, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.2, 1, 0.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.95]);

  if (prefersReduced) {
    return (
      <div className={`relative ${className}`}>
        <svg viewBox="-100 -100 200 200" className="h-full w-full">
          <path
            d={blobPaths[0]}
            fill="var(--accent)"
            fillOpacity="0.08"
            transform="translate(0, 0)"
          />
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ rotate, scale }}
    >
      <svg viewBox="-100 -100 200 200" className="h-full w-full">
        <motion.path
          d={blobPaths[0]}
          fill="var(--accent)"
          style={{ opacity: opacity1 }}
          fillOpacity="0.1"
        />
        <motion.path
          d={blobPaths[1]}
          fill="var(--accent-secondary)"
          style={{ opacity: opacity2 }}
          fillOpacity="0.08"
        />
        <motion.path
          d={blobPaths[2]}
          fill="var(--accent-warm)"
          style={{ opacity: opacity3 }}
          fillOpacity="0.06"
        />
      </svg>
    </motion.div>
  );
}
