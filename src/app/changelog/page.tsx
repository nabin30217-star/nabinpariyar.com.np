import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Changelog",
  description: "A timeline of updates and improvements to my apps and projects.",
};

const changelogData = [
  {
    version: "v1.2.0",
    date: "April 2026",
    app: "Vixit Video Compressor",
    changes: [
      "Integrated FFmpeg native library for 3x faster compression.",
      "Added support for batch video compression.",
      "Fixed UI glitches on Android 14.",
    ],
    type: "feature",
  },
  {
    version: "v2.0.0",
    date: "March 2026",
    app: "Samsung TV Remote",
    changes: [
      "Complete UI redesign with Glassmorphism and modern aesthetics.",
      "Added haptic feedback for button presses.",
      "Improved automatic TV discovery over local WiFi network.",
    ],
    type: "major",
  },
  {
    version: "v1.0.5",
    date: "January 2026",
    app: "Smart Calculator",
    changes: [
      "Added history tape feature to save previous calculations.",
      "Reduced app bundle size by 15%.",
      "Fixed floating point precision bugs.",
    ],
    type: "patch",
  },
];

export default function ChangelogPage() {
  return (
    <Container className="py-24 sm:py-32 max-w-3xl">
      <SectionHeading
        title="Changelog"
        subtitle="I don't just ship apps; I maintain and improve them. Here is a timeline of recent updates."
      />

      <div className="mt-16 space-y-12 border-l-2 border-border pl-6 ml-4">
        {changelogData.map((log, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-bg bg-accent shadow-[0_0_0_2px_var(--border)]" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-text">{log.app} <span className="text-accent">{log.version}</span></h3>
                {log.type === "major" && <Badge color="accent">Major Update</Badge>}
                {log.type === "feature" && <Badge color="emerald">New Features</Badge>}
                {log.type === "patch" && <Badge color="secondary">Bug Fixes</Badge>}
              </div>
              <span className="text-sm font-medium text-text-muted">{log.date}</span>
            </div>

            <ul className="space-y-3 mt-4">
              {log.changes.map((change, i) => (
                <li key={i} className="text-text-muted flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/50" />
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
