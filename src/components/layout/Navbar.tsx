"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useTheme } from "@/components/theme/ThemeProvider";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-text"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-text-muted hover:text-accent-hover"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 cursor-pointer rounded-lg p-2 text-text-muted transition-colors hover:text-accent-hover"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer rounded-lg p-2 text-text-muted md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-accent"
                        : "text-text-muted hover:text-accent-hover"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={toggleTheme}
                  className="mt-2 cursor-pointer rounded-lg px-3 py-2 text-left text-sm font-medium text-text-muted transition-colors hover:text-accent-hover"
                >
                  {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
