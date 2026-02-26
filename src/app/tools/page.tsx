import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tools",
  description: "Developer utilities by Nabin Pariyar.",
};

export default function ToolsPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.34 8.09A2.25 2.25 0 013 6.318V3.75a.75.75 0 01.75-.75h2.568a2.25 2.25 0 011.772.862l4.08 5.058m0 0l6.08 6.08a2.25 2.25 0 010 3.182l-.53.53a2.25 2.25 0 01-3.182 0l-6.08-6.08" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-text">Tools</h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        Developer utilities coming soon!
      </p>
      <p className="mt-2 text-sm text-text-muted">
        This section is under construction. Check back soon!
      </p>
      <div className="mt-8">
        <Button href="/" variant="outline">&larr; Back to Home</Button>
      </div>
    </Container>
  );
}
