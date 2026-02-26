interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl font-semibold text-text underline decoration-accent decoration-2 underline-offset-8">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
