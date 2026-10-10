import { cn } from "@/lib/utils";
import { GoldDivider } from "@/components/art/Ornaments";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  id?: string;
  align?: "center" | "left";
  /** Light text for dark sections */
  light?: boolean;
  /** e.g. "1960 · Age 12" printed in gold above the title */
  date?: string;
  divider?: boolean;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = "center",
  light,
  date,
  divider = true,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={cn(center ? "text-center" : "text-left", className)}>
      {(date || eyebrow) && (
        <p
          className={cn(
            "eyebrow mb-5",
            light ? "text-gold-light" : "text-gold-ink",
          )}
        >
          {[date, eyebrow].filter(Boolean).join("  ·  ")}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-balance font-display text-[2.6rem] font-medium uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl lg:text-7xl",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 font-display text-xl italic sm:text-2xl",
            light ? "text-ivory/75" : "text-brown/75",
            center && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
      {divider && (
        <GoldDivider
          tone={light ? "light" : "gold"}
          className={cn("mt-8", !center && "mx-0")}
        />
      )}
    </Reveal>
  );
}
