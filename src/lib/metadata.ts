import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: PageMetadataOptions): Metadata {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  const url = new URL(normalizedPath, SITE_CONFIG.url).toString();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} — full-stack web and Android engineer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
