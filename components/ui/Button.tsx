type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-[var(--radius)] px-5 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",

    secondary:
      "bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]",

    outline:
      "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]",

    ghost: "bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
