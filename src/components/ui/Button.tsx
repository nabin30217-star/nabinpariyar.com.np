import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  color?: "accent" | "warm" | "emerald";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
  disabled = false,
}: ButtonProps) {
  const variants = {
    primary: "border border-accent bg-accent text-accent-contrast hover:bg-accent-hover hover:border-accent-hover",
    glow: "border border-accent bg-accent text-accent-contrast hover:bg-accent-hover hover:border-accent-hover",
    outline: "border border-border bg-transparent text-text hover:border-text-muted hover:bg-surface",
    ghost: "border border-transparent text-text-muted hover:text-text hover:bg-surface",
  };
  const sizes = {
    sm: "min-h-10 px-4 py-2 text-sm",
    md: "min-h-11 px-6 py-3 text-sm",
    lg: "min-h-12 px-7 py-3.5 text-base",
  };
  const classes = `inline-flex items-center justify-center font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
