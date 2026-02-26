import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Nabin Pariyar.",
};

export default function ResumePage() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center sm:py-32">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-text">Resume</h1>
      <p className="mt-4 max-w-md text-lg text-text-muted">
        Interactive resume coming soon!
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
