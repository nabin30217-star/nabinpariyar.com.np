interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: "accent" | "warm" | "emerald" | "coral" | "secondary";
}

const colorStyles = {
  accent: "bg-accent/15 text-accent",
  warm: "bg-accent-warm/15 text-accent-warm",
  emerald: "bg-accent-emerald/15 text-accent-emerald",
  coral: "bg-accent-coral/15 text-accent-coral",
  secondary: "bg-accent-secondary/15 text-accent-secondary",
};

export default function Badge({
  children,
  className = "",
  color = "accent",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colorStyles[color]} ${className}`}
    >
      {children}
    </span>
  );
}
