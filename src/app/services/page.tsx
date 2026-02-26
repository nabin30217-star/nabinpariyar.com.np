import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { SmartphoneIcon, GlobeIcon, PaletteIcon, WrenchIcon } from "@/components/ui/Icons";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Services offered by Nabin Pariyar — Android development, web development, and more.",
};

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <SmartphoneIcon className="h-8 w-8 text-accent" />,
  globe: <GlobeIcon className="h-8 w-8 text-accent" />,
  palette: <PaletteIcon className="h-8 w-8 text-accent" />,
  wrench: <WrenchIcon className="h-8 w-8 text-accent" />,
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
