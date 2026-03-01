import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { blogPosts } from "@/lib/data/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on Android development, web engineering, and shipping apps.",
};

export default function BlogPage() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading
        title="Blog"
        subtitle="Lessons learned from building and shipping real products"
      />

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group h-full transition-all hover:border-accent/40">
              <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="mt-3 text-xl font-semibold text-text group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {post.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <p className="mt-4 text-sm font-medium text-accent">
                Read article &rarr;
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
