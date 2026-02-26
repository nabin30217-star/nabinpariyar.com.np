import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Nabin Pariyar — a self-taught developer from Nepal building Android apps and web experiences.",
};

const timeline = [
  "Started learning Kotlin & Android development",
  "Published first app on Google Play Store",
  "Grew to 3 published apps",
  "Started learning web development (Next.js, TypeScript)",
  "Built this portfolio website",
];

const skillCategories = [
  {
    label: "Languages",
    skills: ["Kotlin", "Java", "TypeScript", "JavaScript", "XML"],
  },
  {
    label: "Frameworks",
    skills: ["Jetpack Compose", "Next.js", "React"],
  },
  {
    label: "Tools",
    skills: ["Android Studio", "Firebase", "Git", "GitHub", "Vercel"],
  },
  {
    label: "Other",
    skills: ["REST APIs", "CI/CD", "Material Design", "AdMob", "OpenCV"],
  },
];

export default function AboutPage() {
  return (
    <Container className="py-24 sm:py-32">
      {/* Bio */}
      <SectionHeading title="About Me" />
      <div className="max-w-3xl">
        <p className="text-lg leading-8 text-text-muted">
          I&apos;m a self-taught developer from Nepal who fell in love with
          building things that people actually use. Six months ago, I wrote my
          first line of Kotlin — today I have three apps on the Google Play Store
          and I&apos;m expanding into web development.
        </p>
        <p className="mt-4 text-lg leading-8 text-text-muted">
          I believe great software should feel invisible: fast, intuitive, and
          reliable. Every day I&apos;m learning, shipping, and getting better.
        </p>
        <p className="mt-4 text-lg leading-8 text-text-muted">
          When I&apos;m not coding, I&apos;m probably exploring new
          technologies, reading documentation, or thinking about how to make
          apps that feel effortless to use.
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="mt-20">
        <h2 className="mb-8 text-2xl font-semibold text-text">My Journey</h2>
        <div className="relative border-l-2 border-accent/30 pl-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
              <p className="text-text-muted">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-20">
        <h2 className="mb-8 text-2xl font-semibold text-text">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <Card key={cat.label} hover={false}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
