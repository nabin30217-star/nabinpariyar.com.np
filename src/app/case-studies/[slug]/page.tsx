import type { Metadata } from "next";
import Image from "next/image";
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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <Container className="py-24 sm:py-32">
      {/* Header */}
      <div className="mb-12">
        <Button href="/case-studies" variant="ghost" className="mb-6">
          &larr; All Case Studies
        </Button>
        <div className="flex items-center gap-4">
          <Image
            src={`/images/projects/${study.slug}.png`}
            alt={study.title}
            width={64}
            height={64}
            className="h-16 w-16 rounded-2xl shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text">
              {study.title}
            </h1>
            <p className="mt-2 text-lg text-text-muted">{study.description}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Sections */}
      {study.sections.length > 0 ? (
        <div className="space-y-8">
          {study.sections.map((section, i) => (
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
