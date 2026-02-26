import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Android Lab",
  description: "Android experiments and demos by Nabin Pariyar.",
};

export default function AndroidLabPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-text">Android Lab</h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        Android experiments coming soon!
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
