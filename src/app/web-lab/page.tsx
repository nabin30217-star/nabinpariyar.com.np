import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Web Lab",
  description: "Web experiments and demos by Nabin Pariyar.",
};

export default function WebLabPage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-text">Web Lab</h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        Experiments &amp; demos coming soon!
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
