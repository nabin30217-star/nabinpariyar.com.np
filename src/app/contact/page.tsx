import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { SOCIAL_LINKS } from "@/lib/constants";
import { EmailIcon, GitHubIcon, PlayIcon } from "@/components/ui/Icons";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nabin Pariyar for freelance work, collaborations, or conversations.",
};

const contactMethods = [
  {
    label: "Email",
    value: "nabin30217@gmail.com",
    href: SOCIAL_LINKS.email,
    icon: <EmailIcon className="h-6 w-6 text-accent" />,
  },
  {
    label: "GitHub",
    value: "github.com/nabin30217-star",
    href: SOCIAL_LINKS.github,
    icon: <GitHubIcon className="h-6 w-6 text-accent" />,
  },
  {
    label: "Play Store",
    value: "TheMixzone Developer Page",
    href: SOCIAL_LINKS.playStore,
    icon: <PlayIcon className="h-6 w-6 text-accent" />,
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

      <ContactForm />
    </Container>
  );
}
