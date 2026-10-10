import type { ReactNode } from "react";
import { cn, toneClass, toneColor, type Tone } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  tone: Tone;
  /** Tone of the previous section — draws a soft fade so scenes melt into each other */
  from?: Tone;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
  /** Remove the default vertical padding */
  flush?: boolean;
  /** Full-bleed decoration (scenes, smoke) drawn behind the content, edge to edge of the section */
  backdrop?: ReactNode;
}

/**
 * Every story chapter sits in a SectionShell. The `tone` sets the backdrop
 * (night → parchment → mist → maroon → gold) and `from` fades the top edge
 * from the previous section's colour, keeping the transitions gentle.
 */
export function SectionShell({
  id,
  tone,
  from,
  className,
  innerClassName,
  children,
  flush,
  backdrop,
  ...rest
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={rest["aria-labelledby"]}
      className={cn("relative overflow-hidden", toneClass[tone], className)}
    >
      {backdrop && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {backdrop}
        </div>
      )}
      {from && from !== tone && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32"
          style={{
            background: `linear-gradient(180deg, ${toneColor[from]} 0%, ${toneColor[from]}00 100%)`,
          }}
        />
      )}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10",
          !flush && "py-24 sm:py-32 lg:py-40",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
