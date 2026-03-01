import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/data/blog";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    return (
        <Container className="py-24 sm:py-32">
            <Button href="/blog" variant="ghost" className="mb-6">
                &larr; All Posts
            </Button>

            <article className="mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
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

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                        {post.title}
                    </h1>

                    <p className="mt-4 text-lg text-text-muted">{post.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="mb-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Content — render markdown-like content */}
                <div className="prose-custom space-y-6">
                    {post.content.split("\n\n").map((paragraph, i) => {
                        // Headings
                        if (paragraph.startsWith("## ")) {
                            return (
                                <h2 key={i} className="mt-10 text-xl font-bold text-text">
                                    {paragraph.replace("## ", "")}
                                </h2>
                            );
                        }

                        // Bold text with ** markers
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                            return (
                                <p key={i} className="font-semibold text-text">
                                    {paragraph.replace(/\*\*/g, "")}
                                </p>
                            );
                        }

                        // Regular paragraphs — handle inline **bold** and `code`
                        const parts = paragraph.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
                        return (
                            <p key={i} className="leading-7 text-text-muted">
                                {parts.map((part, j) => {
                                    if (part.startsWith("**") && part.endsWith("**")) {
                                        return (
                                            <strong key={j} className="font-semibold text-text">
                                                {part.replace(/\*\*/g, "")}
                                            </strong>
                                        );
                                    }
                                    if (part.startsWith("`") && part.endsWith("`")) {
                                        return (
                                            <code
                                                key={j}
                                                className="rounded bg-surface px-1.5 py-0.5 text-sm font-mono text-accent"
                                            >
                                                {part.replace(/`/g, "")}
                                            </code>
                                        );
                                    }
                                    return part;
                                })}
                            </p>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-16 rounded-xl border border-border bg-card p-6 text-center">
                    <p className="text-lg font-semibold text-text">Enjoyed this post?</p>
                    <p className="mt-2 text-sm text-text-muted">
                        I&apos;m available for freelance Android and web development projects.
                    </p>
                    <div className="mt-4">
                        <Button href="/contact">Get in Touch &rarr;</Button>
                    </div>
                </div>
            </article>
        </Container>
    );
}
