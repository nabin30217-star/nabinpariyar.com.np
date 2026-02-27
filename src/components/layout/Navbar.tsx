"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { useTheme } from "@/components/theme/ThemeProvider";
import Container from "@/components/ui/Container";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "@/components/ui/Icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-border bg-bg/80 shadow-sm backdrop-blur-md"
        : "border-transparent bg-transparent"
        }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo + Availability */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-text"
            >
              {SITE_CONFIG.name}
            </Link>
            <span className="hidden items-center gap-1.5 rounded-full border border-accent-emerald/30 bg-accent-emerald/10 px-2.5 py-1 text-xs font-medium text-accent-emerald shadow-[0_0_12px_rgba(16,185,129,0.15)] sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
              </span>
              Available for Work
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`link-underline rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === link.href
                  ? "text-accent"
                  : "text-text-muted hover:text-accent-hover"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Theme toggle — only render icon after mount to avoid hydration mismatch */}
            <button
              onClick={toggleTheme}
              className="ml-2 cursor-pointer rounded-lg p-2 text-text-muted transition-colors hover:text-accent-hover"
              aria-label="Toggle theme"
            >
              {mounted ? (
                resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />
              ) : (
                <span className="inline-block h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer rounded-lg p-2 text-text-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
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
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === link.href
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
                  {mounted ? (resolvedTheme === "dark" ? "Light Mode" : "Dark Mode") : "Toggle Theme"}
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
