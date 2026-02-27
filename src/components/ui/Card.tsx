interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "glass" | "elevated";
}

const variantStyles = {
  default: "bg-card",
  glass: "bg-card/60 backdrop-blur-xl",
  elevated: "bg-surface-elevated shadow-xl shadow-black/10",
};

export default function Card({
  children,
  className = "",
  hover = true,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border p-6 ${variantStyles[variant]} ${
        hover
          ? "gradient-border shadow-lg shadow-black/5 transition-[transform,box-shadow,border-color] duration-300 ease-out md:hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
