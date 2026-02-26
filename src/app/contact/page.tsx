import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nabin Pariyar for freelance work, collaborations, or conversations.",
};

const contactMethods = [
  {
    label: "Email",
    value: "nabin30217@gmail.com",
    href: SOCIAL_LINKS.email,
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/nabin30217-star",
    href: SOCIAL_LINKS.github,
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    label: "Play Store",
    value: "TheMixzone Developer Page",
    href: SOCIAL_LINKS.playStore,
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading title="Get in Touch" />
      <p className="mb-10 max-w-xl text-lg text-text-muted">
        I&apos;m available for freelance work, collaborations, and interesting
        conversations.
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.label !== "Email" ? "_blank" : undefined}
            rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
          >
            <Card className="h-full text-center">
              <div className="mb-3 flex justify-center">{method.icon}</div>
              <h3 className="text-sm font-semibold text-text">{method.label}</h3>
              <p className="mt-1 text-sm text-text-muted">{method.value}</p>
            </Card>
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-text-muted">
        I typically respond within 24 hours.
      </p>
    </Container>
  );
}
