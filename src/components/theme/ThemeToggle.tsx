"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icons";

type Theme = "light" | "dark";
const themeEvent = "portfolio-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(themeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): Theme {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event(themeEvent));
  };

  const nextLabel = theme === "light" ? "Switch to black theme" : "Switch to white theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border text-text transition-colors hover:border-accent hover:text-accent"
      aria-label={nextLabel}
      title={nextLabel}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
