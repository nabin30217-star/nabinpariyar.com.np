import Link from "next/link";
import Container from "@/components/ui/Container";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { GitHubIcon } from "@/components/ui/Icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Support", href: "/support" },
  { label: "Delete Account", href: "/delete-account" },
];

export default function Footer() {
  return (
    <footer className="relative bg-surface">
      {/* Animated gradient top border */}
      <div className="h-px w-full overflow-hidden">
        <div
          className="h-full w-[200%] bg-gradient-to-r from-accent via-accent-secondary to-accent-warm animate-[gradient-slide_4s_linear_infinite]"
          style={{ backgroundSize: "200% auto" }}
        />
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-text">
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 text-sm text-text-muted">
              Android &amp; web developer from Nepal. Building useful apps for
              the Play Store and the web.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text">Legal</h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
