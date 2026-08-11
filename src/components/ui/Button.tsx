import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const variants = {
    primary: "bg-gold text-ink hover:bg-gold-light shadow-md hover:shadow-lg",
    secondary: "bg-ink text-white hover:bg-ink-soft",
    outline: "border-2 border-white/70 text-white hover:border-gold hover:bg-gold/10",
    ghost: "border-2 border-gold text-gold hover:bg-gold hover:text-ink",
  };

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 touch-manipulation",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
