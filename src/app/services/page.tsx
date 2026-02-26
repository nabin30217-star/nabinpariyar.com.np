import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Services offered by Nabin Pariyar — Android development, web development, and more.",
};

const iconMap: Record<string, React.ReactNode> = {
  smartphone: (
    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  globe: (
    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  palette: (
    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  ),
  wrench: (
    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.34 8.09A2.25 2.25 0 013 6.318V3.75a.75.75 0 01.75-.75h2.568a2.25 2.25 0 011.772.862l4.08 5.058m0 0l6.08 6.08a2.25 2.25 0 010 3.182l-.53.53a2.25 2.25 0 01-3.182 0l-6.08-6.08" />
    </svg>
  ),
};

export default function ServicesPage() {
  return (
    <Container className="py-24 sm:py-32">
      <SectionHeading title="Services" subtitle="How I can help you" />

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <Card key={service.id} className="h-full">
            <div className="mb-4">
              {iconMap[service.icon] || null}
            </div>
            <h3 className="text-xl font-semibold text-text">{service.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{service.description}</p>
            <ul className="mt-4 space-y-1.5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="mb-6 text-lg text-text-muted">
          Let&apos;s discuss your project
        </p>
        <Button href="/contact">Contact Me &rarr;</Button>
      </div>
    </Container>
  );
}
