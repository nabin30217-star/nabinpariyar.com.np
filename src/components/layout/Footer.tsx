import Link from "next/link";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const portfolioLinks = [
  { label: "Work", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = FOOTER_LINKS.quickLinks.filter((link) =>
  ["/blog", "/stack", "/changelog", "/press"].includes(link.href),
);

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        prefetch={false}
        className="inline-flex min-h-11 min-w-11 items-center text-sm text-text-muted transition-colors hover:text-text"
      >
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link href="/" prefetch={false} className="inline-flex min-h-11 items-center font-display text-xl font-semibold text-text">
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              I build full-stack business systems and independently published Android apps.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5">
              <a href={SOCIAL_LINKS.playStore} target="_blank" rel="noopener noreferrer" className="text-link">
                Google Play ↗
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-link">
                GitHub ↗
              </a>
            </div>
          </div>

          <nav aria-label="Portfolio links">
            <h2 className="utility-label text-text">Portfolio</h2>
            <ul className="mt-2">
              {portfolioLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </nav>

          <nav aria-label="Resource links">
            <h2 className="utility-label text-text">Resources</h2>
            <ul className="mt-2">
              {resourceLinks.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </nav>

          <nav aria-label="App support and legal links">
            <h2 className="utility-label text-text">App &amp; legal</h2>
            <ul className="mt-2">
              {FOOTER_LINKS.legal.map((link) => <FooterLink key={link.href} {...link} />)}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 font-utility text-[0.7rem] uppercase tracking-[0.08em] text-text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}</p>
          <p>Web systems ↔ Android products / Nepal</p>
        </div>
      </Container>
    </footer>
  );
}
