import { cn } from "@/lib/utils";

type BrandDividerProps = {
  label?: string;
  light?: boolean;
  className?: string;
};

export function BrandDivider({ label, light = false, className }: BrandDividerProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-px flex-1", light ? "bg-gold/50" : "bg-gold/60")} />
      {label && (
        <span
          className={cn(
            "shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs",
            light ? "text-gold-light" : "text-gold-dark"
          )}
        >
          {label}
        </span>
      )}
      <span className={cn("h-px flex-1", light ? "bg-gold/50" : "bg-gold/60")} />
    </div>
  );
}
