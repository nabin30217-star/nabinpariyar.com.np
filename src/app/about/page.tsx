import type { Metadata } from "next";
import AboutClient from "@/components/sections/AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nabin Pariyar — a self-taught developer from Nepal building Android apps and web experiences.",
};

export default function AboutPage() {
  return <AboutClient />;
}
