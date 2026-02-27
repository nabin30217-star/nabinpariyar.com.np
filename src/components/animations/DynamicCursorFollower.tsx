"use client";

import dynamic from "next/dynamic";

const CursorFollower = dynamic(
    () => import("@/components/animations/CursorFollower"),
    { ssr: false }
);

export default function DynamicCursorFollower() {
    return <CursorFollower />;
}
