interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "glass" | "elevated";
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`border border-border bg-card p-6 ${className}`}>
      {children}
    </div>
  );
}
