import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { MonasteryImage } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { lineage, places } from "@/data/buliTrulku";
import type { Place } from "@/data/types";
import { chapterId, pad } from "@/lib/utils";

function PlaceCard({ place, i }: { place: Place; i: number }) {
  return (
    <Reveal delay={Math.min((i % 3) * 0.08, 0.2)} className="h-full">
      <article
        id={place.id}
        aria-labelledby={`${place.id}-name`}
        className="parchment-card flex h-full flex-col p-4"
      >
        <MonasteryImage
          variant="landscape"
          src={place.image}
          alt={place.name}
          placeholderLabel={place.name}
          hideCaption
          compact
        />
        <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
          {(place.year || place.region) && (
            <p className="eyebrow text-[0.58rem] leading-relaxed text-gold-ink">
              {[place.year, place.region].filter(Boolean).join("  ·  ")}
            </p>
          )}
          <h3 id={`${place.id}-name`} className="mt-1 font-display text-2xl font-semibold leading-tight">
            {place.name}
          </h3>
          <p className="mt-3 flex-1 text-[0.97rem] leading-relaxed text-brown/85">
            {place.description}
          </p>
          {place.mapUrl && (
            <a
              href={place.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow mt-4 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-[0.6rem] text-gold-ink transition hover:text-brown"
            >
              View on map <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function PlaceSection() {
  const main = places.filter((p) => p.group === "Life & teachings");
  const retreat = places.filter((p) => p.group === "Retreat places");
  const birthplaces = lineage.filter((l) => l.place && l.number < 11);

  return (
    <SectionShell tone="ivory" from="night" aria-labelledby="places-intro">
      <Reveal className="mx-auto max-w-2xl text-center">
        <MapPin className="mx-auto mb-5 h-9 w-9 text-gold" aria-hidden="true" />
        <p id="places-intro" className="font-display text-2xl italic leading-[1.55] text-brown">
          The monasteries and places named in the story. Photographs and map
          links can be added to each card at any time.
        </p>
      </Reveal>

      <section aria-labelledby="places-main" className="mt-20">
        <h2 id="places-main" className="sr-only">Places in the life and teachings</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {main.map((p, i) => (
            <PlaceCard key={p.id} place={p} i={i} />
          ))}
        </div>
      </section>

      <section aria-labelledby="places-retreat" className="mt-28">
        <Reveal className="mb-10 border-b border-gold/50 pb-5">
          <h2 id="places-retreat" className="font-display text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl">
            Places of retreat
          </h2>
          <p className="mt-2 text-brown/70">
            Named in the biography in connection with the years of retreat.
          </p>
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {retreat.map((p, i) => (
            <PlaceCard key={p.id} place={p} i={i} />
          ))}
        </div>
      </section>

      <section aria-labelledby="places-lineage" className="mt-28">
        <Reveal className="mb-10 border-b border-gold/50 pb-5">
          <h2 id="places-lineage" className="font-display text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl">
            Places of the earlier incarnations
          </h2>
          <p className="mt-2 text-brown/70">
            Birthplaces and associations from the lineage account. Each links to its chapter.
          </p>
        </Reveal>
        <ul className="grid gap-px border border-gold/40 bg-gold/40 sm:grid-cols-2">
          {birthplaces.map((l) => (
            <li key={l.id} className="bg-ivory">
              <Link
                href={`/#${chapterId(l.number)}`}
                className="group block px-6 py-5 transition hover:bg-parchment"
              >
                <span className="eyebrow block text-[0.58rem] text-gold-ink">
                  Chapter {pad(l.number)} · {l.name}
                </span>
                <span className="mt-1 block font-display text-xl leading-snug transition-transform duration-500 group-hover:translate-x-1">
                  {l.place}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionShell>
  );
}
