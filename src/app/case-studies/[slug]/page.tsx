import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { caseStudies } from "@/lib/data/case-studies";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.description,
  };
}

const smartCalculatorSections = [
  {
    title: "Overview",
    content:
      "Smart Calculator is an all-in-one calculator app for Android, offering a clean UI with multiple useful tools beyond basic arithmetic. Built with Kotlin and Jetpack Compose, it follows modern Android architecture patterns and Material Design 3 guidelines.",
  },
  {
    title: "Problem",
    content:
      "Most calculator apps on the Play Store are either too simple (just basic math) or overloaded with features buried in confusing menus. Users needed a calculator that's fast to open, easy to use, but powerful enough for everyday tasks like unit conversion, percentage calculations, and more — all in one place.",
  },
  {
    title: "Architecture",
    content:
      "The app is built with a single-activity architecture using Jetpack Compose for the entire UI layer. It follows MVVM with clean architecture principles: UI layer (Compose screens + ViewModels), Domain layer (use cases), and Data layer (repositories). Dependency injection is handled through manual constructor injection to keep the APK size minimal.",
  },
  {
    title: "Technical Challenges",
    content:
      "Expression parsing was the biggest challenge — building a reliable math parser that handles operator precedence, parentheses, and edge cases (like division by zero) without relying on heavy third-party libraries. The solution was a custom recursive descent parser that's both fast and lightweight. Another challenge was making the UI responsive across hundreds of different Android screen sizes and densities.",
  },
  {
    title: "Performance Optimization",
    content:
      "The app prioritizes instant startup time and smooth animations. Compose's lazy composition means only visible UI elements are rendered. The APK size is kept under 5MB by avoiding unnecessary dependencies. ProGuard/R8 shrinking removes unused code, and all assets are optimized for size.",
  },
  {
    title: "Results",
    content:
      "Published on the Google Play Store with positive user reception. The app maintains a fast startup time, small install size, and stable crash-free rate. It continues to receive updates based on user feedback and Play Console analytics.",
  },
];

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  // For now, only Smart Calculator has detailed content
  const sections = slug === "smart-calculator" ? smartCalculatorSections : [];

  return (
    <Container className="py-24 sm:py-32">
      {/* Header */}
      <div className="mb-12">
        <Button href="/case-studies" variant="ghost" className="mb-6">
          &larr; All Case Studies
        </Button>
        <h1 className="text-4xl font-bold tracking-tight text-text">
          {study.title}
        </h1>
        <p className="mt-4 text-lg text-text-muted">{study.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.length > 0 ? (
        <div className="space-y-8">
          {sections.map((section, i) => (
            <Card key={i} hover={false}>
              <h2 className="text-xl font-semibold text-text">
                {i + 1}. {section.title}
              </h2>
              <p className="mt-3 leading-7 text-text-muted">{section.content}</p>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-text-muted">
          Detailed case study content coming soon.
        </p>
      )}
    </Container>
  );
}
