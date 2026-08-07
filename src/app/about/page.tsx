import type { Metadata } from "next";
import AboutClient from "@/components/sections/AboutClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Me",
  description: "My experience across full-stack web development, native Android products, Google Play operations, ASO, publishing, and a private multi-shop ERP.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}
