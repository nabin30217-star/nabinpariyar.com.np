interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: "accent" | "warm" | "emerald" | "coral" | "secondary";
}

const colorStyles = {
  accent: "border-accent/50 text-accent",
  warm: "border-border text-text-muted",
  emerald: "border-border text-text-muted",
  coral: "border-border text-text-muted",
  secondary: "border-border text-text-muted",
};

export default function Badge({
  children,
  className = "",
  color = "accent",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border px-3 py-1 font-utility text-[0.68rem] uppercase tracking-[0.06em] ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
