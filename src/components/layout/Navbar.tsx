"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
      <Container>
        <nav className="flex h-18 items-center justify-between" aria-label="Primary navigation">
          <Link
            href="/"
            prefetch={false}
            onClick={() => setMobileOpen(false)}
            className="inline-flex min-h-11 items-center font-display text-xl font-semibold tracking-[-0.02em] text-text"
          >
            {SITE_CONFIG.name}
          </Link>

          <div className="flex items-center gap-2">
            <div className="hidden items-center md:flex">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center px-4 font-utility text-xs uppercase tracking-[0.08em] transition-colors ${
                      active ? "text-accent" : "text-text-muted hover:text-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center border border-border text-text md:hidden"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>
      </Container>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[4.5rem] min-h-[calc(100svh-4.5rem)] border-t border-border bg-bg md:hidden"
        >
          <Container className="flex min-h-[calc(100svh-4.5rem)] flex-col py-6">
            {NAV_LINKS.map((link, index) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="grid min-h-20 grid-cols-[2.5rem_1fr] items-center border-b border-border font-display text-3xl font-semibold text-text"
                >
                  <span className="font-utility text-xs text-accent">0{index + 1}</span>
                  {link.label}
                </Link>
              );
            })}
            <p className="mt-auto pt-8 font-utility text-xs uppercase tracking-[0.1em] text-text-muted">
              Kathmandu time / building from Nepal
            </p>
          </Container>
        </div>
      )}
    </header>
  );
}
