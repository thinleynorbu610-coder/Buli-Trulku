"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PathDiagramProps {
  stops: string[];
  /** The last stop is emphasised (the destination) */
  emphasizeLast?: boolean;
  light?: boolean;
  className?: string;
  /** Accessible description */
  label: string;
}

/**
 * A golden line connecting named stops — used for the journey from Tibet to
 * Bumthang, and the connection Buli Trulku → Lam Longdrol → Kalimpong →
 * Kyabje Dudjom Rinpoche. Vertical on mobile, horizontal on larger screens.
 */
export function PathDiagram({
  stops,
  emphasizeLast = true,
  light,
  className,
  label,
}: PathDiagramProps) {
  return (
    <ol
      aria-label={label}
      className={cn(
        "relative flex flex-col gap-0 sm:flex-row sm:items-start sm:justify-between",
        className,
      )}
    >
      {stops.map((stop, i) => {
        const last = i === stops.length - 1;
        const emphasized = emphasizeLast && last;
        return (
          <li
            key={stop}
            className="relative flex items-center gap-4 pb-8 sm:flex-1 sm:flex-col sm:gap-3 sm:pb-0 sm:text-center"
          >
            {/* connecting line */}
            {!last && (
              <>
                <motion.span
                  aria-hidden="true"
                  className="absolute left-[0.4rem] top-5 h-full w-px origin-top bg-gold sm:hidden"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: i * 0.25 }}
                />
                <motion.span
                  aria-hidden="true"
                  className="absolute left-1/2 top-[0.4rem] hidden h-px w-full origin-left bg-gold sm:block"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: i * 0.25 }}
                />
              </>
            )}
            <span
              aria-hidden="true"
              className={cn(
                "relative z-10 block h-[0.85rem] w-[0.85rem] shrink-0 rotate-45 border border-gold",
                emphasized ? "scale-150 bg-gold" : light ? "bg-night" : "bg-ivory",
              )}
            />
            <span
              className={cn(
                "font-display text-lg leading-tight sm:text-xl",
                emphasized
                  ? light
                    ? "font-semibold text-gold-light"
                    : "font-semibold text-gold-ink"
                  : light
                    ? "text-ivory/90"
                    : "text-brown",
              )}
            >
              {stop}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
