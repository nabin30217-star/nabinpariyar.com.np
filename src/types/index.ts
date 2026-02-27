// Shared TypeScript interfaces

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  tags: string[];
  playStoreUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  publishedAt: string;
  sections: CaseStudySection[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
