import { blogPosts, type BlogPost } from "./blog";
import { caseStudies } from "./case-studies";
import type { CaseStudy } from "@/types";

const retiredPostSlugs = new Set(["why-i-built-my-portfolio-with-nextjs"]);

// Blog helpers
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => !retiredPostSlugs.has(post.slug));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  if (retiredPostSlugs.has(slug)) return undefined;
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug);
}

// Case study helpers
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

// Re-export types
export type { BlogPost } from "./blog";
export type { CaseStudy } from "@/types";
