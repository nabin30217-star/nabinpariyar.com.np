"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";

export default function LatestPosts() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading title="Latest Posts" />
        <FadeIn>
          <Card hover={false}>
            <p className="text-text-muted">
              Blog coming soon. I&apos;ll be writing about Android development, web
              engineering, and lessons from building apps.
            </p>
            <a
              href="/blog"
              className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Stay tuned &rarr;
            </a>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
