"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { MotifIcon } from "@/components/art/Motifs";
import { LineagePortrait } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { lineage } from "@/data/buliTrulku";
import { chapterId, cn, pad } from "@/lib/utils";

/**
 * All eleven lineage holders, together. Click a name to jump to its chapter
 * in the story; hover or focus a name to preview it.
 */
export function LineageOverview() {
  const [active, setActive] = useState(lineage.length - 1);
  const current = lineage[active];

  return (
    <SectionShell tone="parchment" from="night" aria-labelledby="overview-title">
      <h2 id="overview-title" className="sr-only">
        The eleven lineage holders
      </h2>

      <div className="grid gap-16 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-24">
        {/* The chain */}
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-gold/20 via-gold to-gold"
          />
          {lineage.map((holder, i) => {
            const isPresent = holder.number === 11;
            return (
              <li key={holder.id} className="relative">
                <Reveal delay={Math.min(i * 0.04, 0.3)} y={14}>
                  <Link
                    href={`/#${chapterId(holder.number)}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-label={`Chapter ${holder.number}: ${holder.name}. Jump to this chapter in the story.`}
                    className={cn(
                      "group relative flex items-start gap-6 py-5 pr-4 transition-colors",
                      active === i ? "text-brown" : "text-brown/80",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-ivory transition-all duration-500",
                        active === i
                          ? "scale-110 border-gold-ink text-gold-ink"
                          : "border-gold text-gold",
                        isPresent && "bg-gold text-night",
                      )}
                    >
                      <MotifIcon motif={holder.symbol} className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="eyebrow block text-[0.6rem] text-gold-ink">
                        Chapter {pad(holder.number)}
                      </span>
                      <span
                        className={cn(
                          "block font-display uppercase tracking-[0.06em] transition-transform duration-500 group-hover:translate-x-1",
                          isPresent ? "text-3xl font-semibold sm:text-4xl" : "text-2xl sm:text-3xl",
                        )}
                      >
                        {holder.name}
                      </span>
                      {isPresent && (
                        <span className="block font-display text-lg italic text-brown/70">
                          {holder.title}
                        </span>
                      )}
                      {/* summary visible on small screens, where there is no preview panel */}
                      <span className="mt-1 block text-[0.95rem] leading-snug text-brown/70 lg:hidden">
                        {holder.summary}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-3 hidden h-5 w-5 shrink-0 -translate-x-2 text-gold-ink opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 sm:block"
                    />
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Preview panel (desktop) */}
        <aside
          aria-live="polite"
          className="sticky top-28 hidden self-start lg:block"
        >
          <div className="parchment-card p-6">
            <LineagePortrait
              key={current.id}
              src={current.image}
              alt={current.imageAlt}
              placeholderLabel={current.imageLabel}
              motif={current.symbol}
              hideCaption
            />
            <p className="eyebrow mt-6 text-[0.62rem] text-gold-ink">
              Chapter {pad(current.number)}
            </p>
            <h3 className="mt-1 font-display text-3xl font-semibold uppercase tracking-[0.05em]">
              {current.name}
            </h3>
            {current.place && (
              <p className="mt-3 flex items-start gap-2 text-sm text-gold-ink">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {current.place}
              </p>
            )}
            <p className="mt-4 font-display text-lg italic leading-snug text-brown/80">
              {current.summary}
            </p>
            <Link
              href={`/#${chapterId(current.number)}`}
              className="eyebrow mt-6 inline-flex items-center gap-2 border-b border-gold pb-1 text-[0.65rem] text-brown transition hover:text-gold-ink"
            >
              Read this chapter <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
