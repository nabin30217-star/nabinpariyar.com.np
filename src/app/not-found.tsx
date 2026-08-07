import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
      <p className="utility-label mb-5 text-accent">Record 404 / route not found</p>
      <h1 className="font-display text-5xl font-semibold text-text sm:text-7xl">This route left the ledger.</h1>
      <p className="mt-3 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button href="/" variant="primary">
          Go Home
        </Button>
        <Button href="/projects" variant="outline">
          View Projects
        </Button>
      </div>
    </Container>
  );
}
