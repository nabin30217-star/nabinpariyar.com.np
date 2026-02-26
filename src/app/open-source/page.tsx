import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open-source contributions by Nabin Pariyar.",
};

export default function OpenSourcePage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-text">Open Source</h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        GitHub projects coming soon!
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
