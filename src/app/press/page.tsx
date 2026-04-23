import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Download, Image as ImageIcon, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press & Media Kit",
  description: "Downloadable assets, app icons, and branding materials for Nabin Pariyar.",
};

export default function PressPage() {
  return (
    <Container className="py-24 sm:py-32 max-w-4xl">
      <SectionHeading
        title="Press & Media Kit"
        subtitle="High-resolution assets, app icons, and official bio for publications, blogs, and reviewers."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Bio Section */}
        <div className="p-8 rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-text">Official Bio</h2>
          </div>
          <div className="prose prose-invert prose-p:text-text-muted">
            <p>
              <strong>Short:</strong> Nabin Pariyar is a self-taught Android and Web Developer from Nepal, creating highly-rated utility apps on the Google Play Store using Kotlin and Jetpack Compose.
            </p>
            <p className="mt-4">
              <strong>Long:</strong> Nabin Pariyar is an independent Android and Web Developer based in Nepal. With a focus on clean architecture and premium UI/UX, he has published multiple successful applications on the Google Play Store, including Smart Calculator and Vixit Video Compressor. Completely self-taught, Nabin specializes in Kotlin, Jetpack Compose, and Next.js, building tools that solve real-world problems with elegance and efficiency.
            </p>
          </div>
        </div>

        {/* Assets Section */}
        <div className="p-8 rounded-2xl border border-border bg-card flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-emerald/10 text-accent-emerald">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-text">Brand Assets</h2>
            </div>
            <p className="text-text-muted mb-6">
              Download high-resolution app icons, screenshots, and promotional materials for use in articles and reviews.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center justify-between p-3 rounded-lg bg-bg border border-border">
                <span className="text-sm font-medium text-text">Profile Photos</span>
                <span className="text-xs text-text-muted">JPG • 5MB</span>
              </li>
              <li className="flex items-center justify-between p-3 rounded-lg bg-bg border border-border">
                <span className="text-sm font-medium text-text">App Icons & Logos</span>
                <span className="text-xs text-text-muted">PNG/SVG • 12MB</span>
              </li>
              <li className="flex items-center justify-between p-3 rounded-lg bg-bg border border-border">
                <span className="text-sm font-medium text-text">Product Screenshots</span>
                <span className="text-xs text-text-muted">PNG • 25MB</span>
              </li>
            </ul>
          </div>
          
          <button className="mt-8 w-full flex items-center justify-center gap-2 py-3 px-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            Download Full Press Kit (.ZIP)
          </button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-text-muted">
          For press inquiries or interview requests, please <Link href="/contact" className="text-accent hover:underline">contact me here</Link>.
        </p>
      </div>
    </Container>
  );
}
