"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

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

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setRotateX((0.5 - y) * maxTilt);
        setRotateY((x - 0.5) * maxTilt);
        setGlarePos({ x: x * 100, y: y * 100 });
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlarePos({ x: 50, y: 50 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateX,
                rotateY,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative overflow-hidden rounded-xl border border-border bg-card ${className}`}
        >
            {children}
            {/* Glare overlay */}
            {glare && (
                <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
                        opacity: Math.abs(rotateX) + Math.abs(rotateY) > 0.5 ? 0.6 : 0,
                        transition: "opacity 0.3s ease",
                    }}
                />
            )}
        </motion.div>
    );
}
