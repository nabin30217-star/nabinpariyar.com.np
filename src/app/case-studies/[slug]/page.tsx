import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getAllCaseStudies, getCaseStudy } from "@/lib/data";
import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

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
            sizes="64px"
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-16">
        {/* Left Column: Text Sections */}
        <div className="lg:col-span-7 space-y-8">
          {study.sections.length > 0 ? (
            study.sections.map((section, i) => (
              <Card key={i} hover={false} className="p-8">
                <h2 className="text-2xl font-bold text-text mb-4">
                  <span className="text-accent/50 mr-2">{(i + 1).toString().padStart(2, '0')}.</span>
                  {section.title}
                </h2>
                <div className="prose prose-invert prose-p:text-text-muted prose-p:leading-8">
                  <p>{section.content}</p>
                </div>
              </Card>
            ))
          ) : (
            <p className="text-text-muted">
              Detailed case study content coming soon.
            </p>
          )}
        </div>

        {/* Right Column: Sticky Mockup */}
        <div className="hidden lg:block lg:col-span-5 sticky top-32">
          <div className="relative mx-auto w-[300px] h-[600px] rounded-[3rem] border-[8px] border-border bg-card shadow-2xl overflow-hidden flex items-center justify-center group">
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 w-32 mx-auto bg-border rounded-b-xl z-20" />
            
            {/* Phone Screen Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-accent-emerald/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Image
              src={`/images/projects/${study.slug}.png`}
              alt={`${study.title} screen`}
              width={250}
              height={500}
              className="object-contain drop-shadow-2xl z-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
