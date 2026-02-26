interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 ${
        hover
          ? "gradient-border shadow-lg shadow-black/5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
