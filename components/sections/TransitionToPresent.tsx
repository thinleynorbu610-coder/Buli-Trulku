"use client";

import { motion } from "framer-motion";
import { LotusMotif } from "@/components/art/Motifs";
import { IncenseSmoke } from "@/components/art/Ornaments";
import { SectionShell } from "@/components/ui/SectionShell";

/** The breath between chapter ten and the present incarnation. */
export function TransitionToPresent() {
  return (
    <SectionShell
      tone="maroon"
      from="parchment"
      flush
      innerClassName="flex min-h-[80svh] flex-col items-center justify-center py-28 text-center"
      aria-labelledby="transition-title"
      backdrop={<IncenseSmoke count={5} className="opacity-70" />}
    >
      {/* the golden line arrives from above */}
      <motion.span
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.8 }}
        className="mb-10 block h-28 w-px origin-top bg-gradient-to-b from-gold to-gold-light"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 2, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <LotusMotif className="mx-auto mb-8 h-14 w-14 text-gold-light" />
        <h2
          id="transition-title"
          className="text-balance font-display text-3xl font-medium uppercase leading-[1.35] tracking-[0.22em] text-gold-soft sm:text-5xl sm:tracking-[0.26em]"
        >
          And then,
          <br />
          the present
          <br />
          incarnation&hellip;
        </h2>
      </motion.div>
    </SectionShell>
  );
}
