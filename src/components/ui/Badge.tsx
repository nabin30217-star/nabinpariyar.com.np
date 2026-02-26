interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent ${className}`}
    >
      {children}
    </span>
  );
}
