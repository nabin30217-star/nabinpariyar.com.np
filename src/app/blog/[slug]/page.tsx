import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getAllBlogPosts, getBlogPost } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    type: "article",
  });
}

function renderInline(paragraph: string) {
  const parts = paragraph.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold text-text">{part.replace(/\*\*/g, "")}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <Container className="pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Link href="/blog" className="text-link">← All engineering notes</Link>

      <article className="mx-auto mt-8 max-w-4xl">
        <header className="border-b border-border pb-12">
          <p className="utility-label text-accent">
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time> / {post.readingTime}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-text sm:text-7xl">{post.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-text-muted sm:text-xl">{post.description}</p>
          <p className="mt-5 font-utility text-[0.7rem] uppercase leading-5 tracking-[0.06em] text-text-muted">{post.tags.join(" / ")}</p>
        </header>

        <div className="technical-copy pt-10">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return <h2 key={index} className="mt-12 font-display text-3xl font-semibold tracking-[-0.025em] text-text first:mt-0 sm:text-4xl">{paragraph.slice(3)}</h2>;
            }
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return <p key={index} className="mt-6 border-l-2 border-accent pl-5 text-lg font-semibold leading-8 text-text">{paragraph.replace(/\*\*/g, "")}</p>;
            }
            return <p key={index} className="mt-6 text-lg leading-8 text-text-muted">{renderInline(paragraph)}</p>;
          })}
        </div>

        <footer className="mt-16 border-t border-border pt-8">
          <p className="text-lg leading-8 text-text">Have a related parser, media, background-work, or device-protocol problem?</p>
          <Link href="/contact" className="text-link mt-3">Send me the constraint →</Link>
        </footer>
      </article>
    </Container>
  );
}
