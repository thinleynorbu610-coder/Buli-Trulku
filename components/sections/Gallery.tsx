"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SacredImage, type ImageVariant } from "@/components/images/SacredImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { gallery, galleryCategories } from "@/data/buliTrulku";
import type { GalleryCategory, GalleryItem } from "@/data/types";
import { cn } from "@/lib/utils";

const codes: Record<GalleryCategory, string> = {
  Portraits: "PRT",
  "Early Life": "ELF",
  Teachers: "TCH",
  Monasteries: "MON",
  Retreats: "RTR",
  Teachings: "TCG",
  Ceremonies: "CER",
  Foundation: "FND",
  "Historical Photographs": "HIS",
};

const pattern: ImageVariant[] = ["portrait", "landscape", "square", "landscape", "portrait", "square"];

interface Catalogued extends GalleryItem {
  code: string;
  variant: ImageVariant;
}

function variantFor(item: GalleryItem, i: number): ImageVariant {
  if (item.ratio === "portrait") return "portrait";
  if (item.ratio === "landscape") return "landscape";
  if (item.ratio === "square") return "square";
  return pattern[i % pattern.length];
}

/** A high-end museum archive: catalogued frames, a quiet filter, and a lightbox. */
export function Gallery() {
  const [category, setCategory] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const catalogue: Catalogued[] = useMemo(() => {
    const counters: Partial<Record<GalleryCategory, number>> = {};
    return gallery.map((g, i) => {
      counters[g.category] = (counters[g.category] ?? 0) + 1;
      return {
        ...g,
        code: `BT·${codes[g.category]}·${String(counters[g.category]).padStart(2, "0")}`,
        variant: variantFor(g, i),
      };
    });
  }, []);

  const visible = useMemo(
    () => (category === "All" ? catalogue : catalogue.filter((g) => g.category === category)),
    [catalogue, category],
  );

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) =>
      setOpenIndex((i) => (i === null ? i : (i + d + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const active = openIndex !== null ? visible[openIndex] : null;

  return (
    <SectionShell tone="night" from="night" aria-labelledby="gallery-intro">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p id="gallery-intro" className="font-display text-2xl italic leading-[1.55] text-ivory/85">
          An archive in waiting. Every frame is catalogued and ready — add a
          photograph at its path and it takes its place.
        </p>
      </Reveal>

      {/* Filter */}
      <div
        role="group"
        aria-label="Filter the archive by category"
        className="mt-14 flex flex-wrap justify-center gap-x-2 gap-y-3"
      >
        {(["All", ...galleryCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={category === c}
            onClick={() => {
              setCategory(c);
              setOpenIndex(null);
            }}
            className={cn(
              "eyebrow border px-4 py-2 text-[0.62rem] transition-colors duration-500",
              category === c
                ? "border-gold bg-gold text-night"
                : "border-gold/30 text-ivory/75 hover:border-gold hover:text-gold-light",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="eyebrow mt-8 text-center text-[0.6rem] text-gold-light/70" aria-live="polite">
        {visible.length} {visible.length === 1 ? "plate" : "plates"}
        {category !== "All" && ` · ${category}`}
      </p>

      {/* Archive */}
      <ul className="mt-12 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>li]:mb-10 [&>li]:break-inside-avoid">
        {visible.map((g, i) => (
          <li key={g.id}>
            <Reveal delay={Math.min((i % 3) * 0.08, 0.2)} y={16}>
              <button
                type="button"
                onClick={(e) => {
                  triggerRef.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                aria-label={`Open ${g.title}, catalogue ${g.code}`}
                className="group block w-full border border-gold/30 bg-night-soft p-3 text-left transition-colors duration-500 hover:border-gold"
              >
                <SacredImage
                  variant={g.variant}
                  tone="dark"
                  compact
                  src={g.src}
                  alt={g.caption ?? g.title}
                  placeholderLabel={g.title}
                  hideCaption
                />
                <span className="mt-3 flex items-baseline justify-between gap-3 px-1">
                  <span className="font-display text-lg leading-tight text-ivory">{g.title}</span>
                  <span className="eyebrow shrink-0 text-[0.52rem] text-gold-light/80">{g.code}</span>
                </span>
                {(g.year || g.location) && (
                  <span className="eyebrow mt-1 block px-1 text-[0.55rem] text-ivory/50">
                    {[g.year, g.location].filter(Boolean).join(" · ")}
                  </span>
                )}
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}, catalogue ${active.code}`}
          className="fixed inset-0 z-[85] flex flex-col items-center justify-center bg-night/95 px-4 py-6 backdrop-blur-sm sm:px-16"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-ivory/80 transition hover:text-gold-light"
          >
            <X className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous plate"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-ivory/70 transition hover:text-gold-light sm:left-6"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next plate"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-ivory/70 transition hover:text-gold-light sm:right-6"
          >
            <ChevronRight className="h-9 w-9" />
          </button>

          <div
            className="w-full max-w-xl border border-gold/40 bg-night-soft p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <SacredImage
              key={active.id}
              variant={active.variant}
              tone="dark"
              src={active.src}
              alt={active.caption ?? active.title}
              placeholderLabel={active.title}
              hideCaption
              className="mx-auto max-h-[60vh] [&>div]:max-h-[60vh]"
            />
            <div className="mt-4 px-1">
              <p className="eyebrow text-[0.58rem] text-gold-light">{active.code} · {active.category}</p>
              <p className="mt-1 font-display text-2xl text-ivory">{active.title}</p>
              {active.caption && <p className="mt-1 text-sm text-ivory/75">{active.caption}</p>}
              {(active.year || active.location) && (
                <p className="eyebrow mt-2 text-[0.58rem] text-ivory/55">
                  {[active.year, active.location].filter(Boolean).join(" · ")}
                </p>
              )}
              {active.credit && (
                <p className="mt-1 text-xs text-ivory/50">Photograph: {active.credit}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </SectionShell>
  );
}
