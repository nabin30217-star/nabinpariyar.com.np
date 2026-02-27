interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accentColor?: "default" | "warm" | "emerald";
  className?: string;
}

const gradientMap = {
  default: "from-accent to-accent-secondary",
  warm: "from-accent-warm to-accent-coral",
  emerald: "from-accent-emerald to-accent",
};

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  accentColor = "default",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-12 overflow-hidden rounded-full sm:w-16 ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        <div
          className={`h-full w-[200%] bg-gradient-to-r ${gradientMap[accentColor]} animate-[gradient-slide_3s_linear_infinite]`}
          style={{ backgroundSize: "200% auto" }}
        />
      </div>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
