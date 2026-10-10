"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { lineage } from "@/data/buliTrulku";
import { LineageChapter } from "./LineageChapter";

/**
 * Chapters 1–10: a cinematic vertical timeline with a golden line that
 * quietly fills as the visitor scrolls. Chapter 11 (the present Buli Trulku)
 * has its own, larger section.
 */
export function LineageTimeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 65%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 });

  const chapters = lineage.filter((l) => l.number <= 10);

  return (
    <SectionShell id="lineage" tone="parchment" from="ivory" aria-labelledby="lineage-title">
      <SectionHeading
        id="lineage-title"
        eyebrow="Phagpa Magapa to Khachap Dorji"
        title="The Lineage"
        subtitle="Eleven chapters of an extraordinary spiritual journey"
      />

      <div ref={listRef} className="relative mt-16 sm:mt-24">
        {/* The golden lineage line: faint track + filled progress */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-gold/30 lg:left-1/2"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute bottom-0 left-5 top-0 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-gold-light via-gold to-gold-ink lg:left-1/2"
        />

        <ol className="relative">
          {chapters.map((holder) => (
            <li key={holder.id}>
              <LineageChapter holder={holder} />
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
