"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { 
  Search, 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  FileText, 
  Smartphone, 
  ShieldAlert,
  MenuSquare,
  Laptop,
  History,
  DownloadCloud
} from "lucide-react";
import "./command-palette.css";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <Command 
        className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="flex items-center px-4 border-b border-border">
          <Search className="w-5 h-5 text-text-muted" />
          <Command.Input 
            autoFocus
            className="w-full bg-transparent border-0 px-4 py-4 text-text placeholder-text-muted focus:ring-0 focus:outline-none"
            placeholder="Type a command or search..." 
          />
          <button 
            onClick={() => setOpen(false)}
            className="text-xs bg-bg border border-border rounded px-2 py-1 text-text-muted hover:text-text"
          >
            ESC
          </button>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-smooth">
          <Command.Empty className="py-6 text-center text-sm text-text-muted">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-medium text-text-muted px-2 py-2">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/about"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <User className="w-4 h-4" />
              <span>About Me</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/projects"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Projects & Apps</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/case-studies"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Case Studies</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/services"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Code className="w-4 h-4" />
              <span>Services</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/contact"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Developer" className="text-xs font-medium text-text-muted px-2 py-2">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/stack"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Laptop className="w-4 h-4" />
              <span>Uses & Stack</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/changelog"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <History className="w-4 h-4" />
              <span>Changelog</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/press"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <DownloadCloud className="w-4 h-4" />
              <span>Press Kit</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Apps" className="text-xs font-medium text-text-muted px-2 py-2">
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://play.google.com/store/apps/details?id=smartcalculator.calculators", "_blank"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>Smart Calculator</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://play.google.com/store/apps/details?id=com.vixit.studio.converter", "_blank"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>Vixit Video Compressor</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open("https://play.google.com/store/apps/details?id=com.smart.samtvremote", "_blank"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>Samsung TV Remote</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Legal & Policy" className="text-xs font-medium text-text-muted px-2 py-2">
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/data-deletion"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Data Deletion Policy</span>
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => router.push("/privacy-policy"))}
              className="flex items-center gap-3 px-3 py-2 text-sm text-text rounded-md aria-selected:bg-accent/10 aria-selected:text-accent cursor-pointer transition-colors"
            >
              <MenuSquare className="w-4 h-4" />
              <span>Privacy Policy</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
