interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  eyebrow?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  return (
    <header className={`mb-12 border-b border-border pb-10 ${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && <p className="utility-label mb-4 text-accent">{eyebrow}</p>}
      <h1 className="section-title text-text">
        {title}
      </h1>
      {subtitle && (
        <p className={`mt-5 max-w-3xl text-lg leading-8 text-text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
