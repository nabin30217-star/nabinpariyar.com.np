import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { getAllCaseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Deep dives into how Nabin Pariyar builds apps and solves problems.",
};

export default function CaseStudiesPage() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading
        title="Case Studies"
        subtitle="Deep dives into how I build things"
      />

      {getAllCaseStudies().length === 0 ? (
        <p className="text-text-muted">Case studies coming soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {getAllCaseStudies().map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-text">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {study.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium text-accent">
                  Read Case Study &rarr;
                </p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
}
