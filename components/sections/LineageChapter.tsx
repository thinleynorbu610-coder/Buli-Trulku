import { MapPin } from "lucide-react";
import { MotifIcon } from "@/components/art/Motifs";
import { GoldDivider } from "@/components/art/Ornaments";
import { LineagePortrait, MonasteryImage } from "@/components/images";
import { Parallax } from "@/components/ui/Parallax";
import { PathDiagram } from "@/components/ui/PathDiagram";
import { Reveal } from "@/components/ui/Reveal";
import type { LineageHolder } from "@/data/types";
import { chapterId, cn, pad } from "@/lib/utils";

/** The marker where a chapter touches the golden line */
function Node({ holder }: { holder: LineageHolder }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-5 top-6 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-gold bg-ivory text-gold-ink shadow-[0_0_0_6px_rgba(238,226,200,1)] lg:left-1/2 lg:top-8"
    >
      <MotifIcon motif={holder.symbol} className="h-6 w-6" />
    </span>
  );
}

function Portrait({ holder }: { holder: LineageHolder }) {
  if (holder.layout === "landscape") {
    return (
      <MonasteryImage
        variant="landscape"
        src={holder.image}
        alt={holder.imageAlt}
        placeholderLabel={holder.imageLabel}
      />
    );
  }
  return (
    <LineagePortrait
      src={holder.image}
      alt={holder.imageAlt}
      placeholderLabel={holder.imageLabel}
      motif={holder.symbol}
    />
  );
}

export function LineageChapter({ holder }: { holder: LineageHolder }) {
  const n = holder.number;
  const textLeft = n % 2 === 1; // odd → text on the left (desktop)
  const minimal = holder.layout === "minimal";
  const titleId = `${holder.id}-title`;

  const text = (
    <div className={cn(minimal && "text-center")}>
      {holder.label && (
        <p className="eyebrow mb-2 text-gold-ink">{holder.label}</p>
      )}
      <span aria-hidden="true" className="gold-text block font-display text-[6.5rem] font-medium leading-[0.9] sm:text-[8.5rem]">
        {pad(n)}
      </span>
      <h3
        id={titleId}
        className="mt-3 text-balance font-display text-4xl font-semibold uppercase tracking-[0.06em] text-brown sm:text-5xl"
      >
        <span className="sr-only">Chapter {n}: </span>
        {holder.name}
      </h3>
      {holder.title && (
        <p className="mt-2 font-display text-xl italic text-brown/70">
          {holder.title}
        </p>
      )}
      {holder.place && (
        <p
          className={cn(
            "mt-5 flex items-start gap-2 text-sm tracking-wide text-gold-ink",
            minimal && "flex-col items-center gap-1",
          )}
        >
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{holder.place}</span>
        </p>
      )}

      <GoldDivider className={cn("my-7", !minimal && "mx-0 w-56")} />

      <div className="space-y-5">
        {holder.story.map((p, i) => (
          <p key={i} className="text-lg leading-[1.9] text-brown/90">
            {p}
          </p>
        ))}
      </div>

      {holder.facts && holder.facts.length > 0 && (
        <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-gold/40 pt-6 sm:grid-cols-2">
          {holder.facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow text-[0.62rem] text-gold-ink">{f.label}</dt>
              <dd className="mt-1 font-display text-lg leading-snug text-brown">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {holder.highlight && (
        <div className="relative mt-10 border border-gold bg-gradient-to-br from-gold-soft via-[#e9d28f] to-gold-light p-7 text-center shadow-[0_20px_50px_-25px_rgba(122,90,26,0.7)]">
          <span aria-hidden="true" className="pointer-events-none absolute inset-1.5 border border-gold-ink/30" />
          <MotifIcon motif="wheel" className="mx-auto mb-3 h-8 w-8 text-gold-ink" />
          <p className="font-display text-xl font-semibold uppercase leading-snug tracking-[0.12em] text-brown sm:text-2xl">
            {holder.highlight}
          </p>
        </div>
      )}

      {holder.parents && (
        <div className="mt-8 border border-gold/50 bg-ivory/70 p-6">
          <p className="eyebrow mb-4 text-[0.62rem] text-gold-ink">Born to</p>
          <dl className="space-y-4">
            <div>
              <dt className="eyebrow text-[0.6rem] text-brown/60">Father</dt>
              <dd className="font-display text-xl leading-snug">{holder.parents.father}</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.6rem] text-brown/60">Mother</dt>
              <dd className="font-display text-xl leading-snug">{holder.parents.mother}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );

  /* ───────── Quiet, minimal chapter ───────── */
  if (minimal) {
    return (
      <article
        id={chapterId(n)}
        aria-labelledby={titleId}
        className="relative py-16 sm:py-24"
      >
        <Node holder={holder} />
        <Reveal className="relative z-10 mx-auto ml-14 max-w-xl border border-gold/40 bg-ivory px-8 py-14 shadow-[0_24px_60px_-30px_rgba(58,42,30,0.5)] lg:ml-auto lg:px-14">
          <div className="mx-auto mb-10 w-36">
            <LineagePortrait
              src={holder.image}
              alt={holder.imageAlt}
              placeholderLabel={holder.imageLabel}
              motif={holder.symbol}
              compact
              hideCaption
            />
          </div>
          {text}
        </Reveal>
      </article>
    );
  }

  /* ───────── Standard alternating chapter ───────── */
  return (
    <article
      id={chapterId(n)}
      aria-labelledby={titleId}
      className="relative py-16 sm:py-24"
    >
      <Node holder={holder} />

      <div className="grid items-center gap-12 pl-14 lg:grid-cols-2 lg:gap-x-28 lg:pl-0">
        <Reveal
          x={textLeft ? -28 : 28}
          className={cn("lg:order-1", !textLeft && "lg:order-2")}
        >
          {text}
        </Reveal>

        <Reveal
          x={textLeft ? 28 : -28}
          delay={0.15}
          className={cn("max-w-md lg:max-w-none lg:order-2", !textLeft && "lg:order-1")}
        >
          <Parallax distance={36}>
            <Portrait holder={holder} />
          </Parallax>
        </Reveal>
      </div>

      {holder.journey && (
        <Reveal className="mt-20 pl-14 lg:pl-0">
          <p className="eyebrow mb-8 text-center text-[0.65rem] text-gold-ink lg:text-center">
            The journey, as told in the lineage account
          </p>
          <PathDiagram
            stops={holder.journey}
            label={`Journey of ${holder.name}: ${holder.journey.join(", then ")}`}
          />
        </Reveal>
      )}
    </article>
  );
}
