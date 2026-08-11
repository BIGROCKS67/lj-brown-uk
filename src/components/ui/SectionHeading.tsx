import { cn } from "@/lib/utils";
import { BrandDivider } from "@/components/brand/BrandDivider";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 sm:mb-12", align === "center" && "text-center")}>
      {label && (
        <BrandDivider
          label={label}
          light={light}
          className={cn(
            "mb-4 sm:mb-5",
            align === "center" ? "mx-auto max-w-[16rem] sm:max-w-xs" : "max-w-[16rem] sm:max-w-xs"
          )}
        />
      )}
      <h2
        className={cn(
          "font-display text-2xl font-bold tracking-wide sm:text-3xl lg:text-4xl",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-base leading-relaxed normal-case tracking-normal sm:mt-4 sm:text-lg",
            align === "center" && "mx-auto",
            light ? "text-steel-light" : "text-steel"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
