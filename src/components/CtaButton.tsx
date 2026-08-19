import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary:
    "bg-ink text-canvas hover:bg-white hover:shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] hover:-translate-y-px rounded-lg",
  secondary:
    "bg-surface-raised text-ink border border-border-strong hover:border-ink/40 hover:-translate-y-px rounded-lg",
  ghost:
    "text-ink-secondary hover:text-ink hover:bg-surface rounded-md",
};

const sizes: Record<string, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
