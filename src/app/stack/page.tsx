import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Laptop, Monitor, Smartphone, Code2, Database, Paintbrush } from "lucide-react";

export const metadata: Metadata = {
  title: "My Stack & Uses",
  description: "A detailed list of the hardware, software, and tools I use for development.",
};

const stackCategories = [
  {
    title: "Hardware",
    icon: <Laptop className="w-5 h-5" />,
    items: [
      { name: "Primary Machine", desc: "Custom Windows Build (Ryzen 7, 32GB RAM) for heavy Android builds." },
      { name: "Monitors", desc: "Dual 27-inch 4K IPS Displays for maximum code real estate." },
      { name: "Test Devices", desc: "Samsung Galaxy S23 Ultra, Google Pixel 6a." },
    ]
  },
  {
    title: "Development Tools",
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: "Android Studio", desc: "Primary IDE for Kotlin & Jetpack Compose development." },
      { name: "VS Code", desc: "For Next.js, React, and TypeScript web development." },
      { name: "Git & GitHub", desc: "Version control and CI/CD pipelines." },
      { name: "Postman", desc: "For API testing and integration." },
    ]
  },
  {
    title: "Software & Design",
    icon: <Paintbrush className="w-5 h-5" />,
    items: [
      { name: "Figma", desc: "UI/UX design and prototyping before writing code." },
      { name: "Notion", desc: "Project management, documentation, and brain dumps." },
      { name: "DaVinci Resolve", desc: "For editing promotional app videos." },
    ]
  }
];

export default function StackPage() {
  return (
    <Container className="py-24 sm:py-32 max-w-4xl">
      <SectionHeading
        title="Uses / Stack"
        subtitle="A curated list of the hardware, software, and tools I rely on daily to build, design, and ship products."
      />

      <div className="mt-16 space-y-16">
        {stackCategories.map((category) => (
          <section key={category.title} className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-text">{category.title}</h2>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div 
                  key={item.name}
                  className="p-5 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors"
                >
                  <h3 className="font-semibold text-text mb-2">{item.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
