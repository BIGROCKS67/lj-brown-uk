import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  showTagline?: boolean;
  linked?: boolean;
};

const sizes = {
  sm: { mark: 42, name: 17 },
  md: { mark: 50, name: 20 },
  lg: { mark: 72, name: 26 },
};

function LogoInner({
  size = "sm",
  showTagline = true,
}: Pick<LogoProps, "size" | "showTagline">) {
  const dims = sizes[size];
  const taglineClass =
    size === "lg"
      ? "text-sm tracking-[0.14em] sm:text-[15px]"
      : size === "md"
        ? "text-[11px] tracking-[0.12em] sm:text-xs"
        : "text-[10px] tracking-[0.1em] sm:text-[11px]";

  return (
    <>
      <Image
        src="/logo-mark-only.png"
        alt=""
        width={dims.mark}
        height={dims.mark}
        className="shrink-0 object-contain self-center"
        style={{ height: dims.mark, width: "auto" }}
        priority
      />
      <span className="flex min-w-0 flex-col items-start justify-center text-left">
        <Image
          src="/logo-name-only.png"
          alt="LJ Brown UK Ltd"
          width={200}
          height={dims.name}
          className="object-contain object-left"
          style={{ height: dims.name, width: "auto" }}
          priority
        />
        {showTagline && (
          <span
            className={cn(
              "mt-1.5 flex flex-col font-semibold uppercase leading-[1.2] text-gold-light",
              taglineClass
            )}
          >
            <span>Groundworks &</span>
            <span>Civil Engineers</span>
          </span>
        )}
      </span>
    </>
  );
}

export function Logo({
  size = "sm",
  className,
  showTagline = true,
  linked = true,
}: LogoProps) {
  const classes = cn(
    "inline-flex items-center gap-2.5 touch-manipulation sm:gap-3",
    className
  );

  if (!linked) {
    return (
      <div className={classes} aria-label="LJ Brown UK Ltd">
        <LogoInner size={size} showTagline={showTagline} />
      </div>
    );
  }

  return (
    <Link href="/" className={classes} aria-label="LJ Brown UK Ltd home">
      <LogoInner size={size} showTagline={showTagline} />
    </Link>
  );
}
