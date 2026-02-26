import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 text-8xl font-bold text-accent/20">404</div>
      <h1 className="text-2xl font-bold text-text sm:text-3xl">Page Not Found</h1>
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
