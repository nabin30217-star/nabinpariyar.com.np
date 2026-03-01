import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from './blog';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'blog');

/**
 * Retrieves all blog posts from the local file system.
 * Expected file format: .md or .mdx with frontmatter matching BlogPost schema.
 */
export function getMarkdownBlogPosts(): BlogPost[] {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
        console.warn(`[DATA_LAYER] Content directory not found: ${POSTS_DIRECTORY}. Returning empty array until migrated.`);
        return [];
    }

    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    const posts: BlogPost[] = fileNames
        .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, '');
            const fullPath = path.join(POSTS_DIRECTORY, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // gray-matter parses the frontmatter YAML block and the markdown body
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || 'Untitled',
                description: data.description || '',
                publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
                readingTime: data.readingTime || '5 min read',
                tags: data.tags || [],
                content,
            };
        })
        .sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));

    return posts;
}

/**
 * Retrieves a single blog post by its slug from the filesystem.
 */
export function getMarkdownBlogPost(slug: string): BlogPost | undefined {
    const posts = getMarkdownBlogPosts();
    return posts.find((post) => post.slug === slug);
}
