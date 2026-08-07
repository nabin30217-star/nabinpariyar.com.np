import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getAllBlogPosts } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Engineering Notes",
  description: "Technical notes from Nabin Pariyar’s Android product work: parsing, FFmpeg, background processing, Compose, and device protocols.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <p className="utility-label text-accent">Notes / from shipped work</p>
        <div>
          <h1 className="display-title text-text">Write down the hard part while it is still specific.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl sm:leading-9">I write technical notes about decisions inside my Android products and the work of translating real operational systems into code.</p>
        </div>
      </div>

      <ol className="divide-y divide-border border-b border-border">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group grid min-h-44 gap-5 py-9 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
              <span className="font-utility text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-utility text-[0.7rem] uppercase tracking-[0.06em] text-text-muted">
                  <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time> / {post.readingTime}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em] text-text sm:text-4xl">{post.title}</h2>
                <p className="mt-3 max-w-3xl leading-7 text-text-muted">{post.description}</p>
              </div>
              <span aria-hidden="true" className="text-2xl text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
}
