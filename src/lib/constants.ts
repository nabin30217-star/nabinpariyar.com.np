import { NavLink } from "@/types";

export const SITE_CONFIG = {
  name: "Nabin Pariyar",
  title: "Nabin Pariyar — Full-Stack Web & Android Developer",
  description:
    "I build full-stack business systems and native Android products, including a live private garment ERP and eight apps published through my TheMixzone account.",
  url: "https://nabinpariyar.com.np",
  email: "nabin30217@gmail.com",
  supportEmail: "nabin30217@gmail.com",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Notes", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Stack / Uses", href: "/stack" },
    { label: "Changelog", href: "/changelog" },
    { label: "Press Kit", href: "/press" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Support", href: "/support" },
    { label: "Delete Account", href: "/delete-account" },
    { label: "App Data Deletion", href: "/data-deletion" },
  ],
};

export const SOCIAL_LINKS = {
  github: "https://github.com/nabin30217-star",
  playStore: "https://play.google.com/store/apps/developer?id=TheMixzone",
  email: "mailto:nabin30217@gmail.com",
};
