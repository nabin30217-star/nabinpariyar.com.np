import { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Nabin Pariyar",
  title: "Nabin Pariyar — Android & Web Developer",
  description:
    "Self-taught developer from Nepal with 3 published apps on Google Play Store. Building Android apps with Kotlin and web experiences with Next.js.",
  url: "https://nabinpariyar.com.np",
  email: "nabin30217@gmail.com",
  supportEmail: "nabin30217@gmail.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Support", href: "/support" },
  ],
};

export const SOCIAL_LINKS = {
  github: "https://github.com/nabin30217-star",
  playStore: "https://play.google.com/store/apps/developer?id=TheMixzone",
  email: "mailto:nabin30217@gmail.com",
};
