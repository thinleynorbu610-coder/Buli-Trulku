"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { lifeEvents } from "@/data/buliTrulku";
import { cn } from "@/lib/utils";

/** The eight milestones of the life of His Eminence, along a golden thread. */
export function LifeTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 });

  return (
    <SectionShell tone="parchment" from="night" aria-labelledby="timeline-title">
      <h2 id="timeline-title" className="sr-only">
        Major events in the life of His Eminence Lama Sonam Loday
      </h2>

      <ol ref={ref} className="relative">
        <span aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-gold/30 lg:left-1/2" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: fill }}
          className="absolute bottom-0 left-5 top-0 w-[2px] -translate-x-1/2 origin-top bg-gradient-to-b from-gold-light via-gold to-gold-ink lg:left-1/2"
        />

        {lifeEvents.map((e, i) => {
          const left = i % 2 === 0;
          const isPresent = e.when === "Present";
          return (
            <li key={e.id} className="relative py-10 sm:py-14">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-5 top-14 z-10 h-4 w-4 -translate-x-1/2 rotate-45 border border-gold-ink lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2",
                  isPresent ? "bg-gold" : "bg-parchment shadow-[0_0_0_6px_#eee2c8]",
                )}
              />
              <div className="grid gap-4 pl-14 lg:grid-cols-2 lg:gap-x-24 lg:pl-0">
                <Reveal
                  x={left ? -26 : 26}
                  className={cn(
                    left ? "lg:col-start-1 lg:text-right" : "lg:col-start-2",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="gold-text block font-display text-6xl font-medium leading-none sm:text-8xl"
                  >
                    {e.when}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                    <span className="sr-only">{e.when}: </span>
                    {e.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.85] text-brown/85">{e.description}</p>
                  <Link
                    href={e.anchor}
                    className="eyebrow mt-4 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-[0.62rem] text-gold-ink transition hover:text-brown"
                  >
                    Read in the story <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
