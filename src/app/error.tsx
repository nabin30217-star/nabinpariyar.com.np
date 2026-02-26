"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="mb-6">
        <svg className="mx-auto h-16 w-16 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-text sm:text-3xl">Something Went Wrong</h1>
      <p className="mt-3 max-w-md text-text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset} variant="primary">
          Try Again
        </Button>
        <Button href="/" variant="outline">
          Go Home
        </Button>
      </div>
    </Container>
  );
}
