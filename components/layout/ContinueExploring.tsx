"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GoldDivider } from "@/components/art/Ornaments";
import { nav } from "@/data/buliTrulku";
import { useLang, type MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Previous / next page cards at the foot of every subpage, so the site reads
 * like a book: Story → Lineage → … → Legacy → back to the Story.
 * Hidden on the homepage, which is the story itself.
 */
export function ContinueExploring() {
  const pathname = usePathname();
  const { t } = useLang();

  const path = pathname.replace(/\/$/, "");
  const index = nav.findIndex((n) => !n.href.startsWith("/#") && n.href === path);
  if (index === -1) return null;

  const prev = nav[(index - 1 + nav.length) % nav.length];
  const next = nav[(index + 1) % nav.length];

  const card = (item: (typeof nav)[number], dir: "prev" | "next") => (
    <Link
      href={item.href}
      className={cn(
        "group relative flex flex-col border border-gold/25 bg-night/60 px-7 py-8 transition-colors duration-500 hover:border-gold/60 hover:bg-night",
        dir === "next" && "sm:items-end sm:text-right",
      )}
    >
      <span className="eyebrow flex items-center gap-2 text-[0.6rem] text-gold-light/80">
        {dir === "prev" && (
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-x-1" />
        )}
        {dir === "prev" ? "Previous" : "Continue"}
        {dir === "next" && (
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        )}
      </span>
      <span className="mt-3 font-display text-3xl font-medium uppercase tracking-[0.08em] text-ivory transition-colors group-hover:text-gold-light sm:text-4xl">
        {t(`nav.${item.key}` as MessageKey)}
      </span>
      <span className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/60">{item.blurb}</span>
    </Link>
  );

  return (
    <nav aria-label="Continue exploring" className="tone-night border-t border-gold/15">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <p className="eyebrow text-center text-[0.65rem] text-gold-light">Continue the journey</p>
        <GoldDivider tone="light" className="mt-5" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {card(prev, "prev")}
          {card(next, "next")}
        </div>
      </div>
    </nav>
  );
}
