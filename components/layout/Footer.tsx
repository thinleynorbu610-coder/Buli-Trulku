import Link from "next/link";
import { ArrowRight, ArrowUp } from "lucide-react";
import { LotusMotif, WheelMotif } from "@/components/art/Motifs";
import { GoldDivider } from "@/components/art/Ornaments";
import { HimalayaScene, PrayerFlags } from "@/components/art/HimalayaScene";
import { foundation, foundationPage, nav, site } from "@/data/buliTrulku";

const explore = nav.filter((n) => n.key !== "story");

/** Chapters of the homepage story, for readers who want to jump back in. */
const chapters = [
  { label: "The Journey of a Lineage", href: "/#story" },
  { label: "The Present Incarnation", href: "/#chapter-11" },
  { label: "Kyabje Dudjom Rinpoche", href: "/#dudjom-rinpoche" },
  { label: "The Retreat Years", href: "/#retreat" },
  { label: "Droduel Tshangchen Shedra", href: "/legacy#shedra" },
];

function ColumnTitle({ children }: { children: string }) {
  return (
    <h3 className="eyebrow flex items-center gap-3 text-[0.62rem] text-gold-light">
      <span aria-hidden="true" className="h-px w-6 bg-gold/60" />
      {children}
    </h3>
  );
}

const linkClass =
  "group inline-flex items-center gap-2.5 font-display text-lg text-ivory/75 transition-colors duration-300 hover:text-gold-light";

/** A small gold diamond that fills on hover — the footer's link marker. */
const Marker = () => (
  <span
    aria-hidden="true"
    className="h-1.5 w-1.5 shrink-0 rotate-45 border border-gold/60 transition-colors duration-300 group-hover:bg-gold-light"
  />
);

export function Footer() {
  return (
    <footer className="tone-night relative overflow-hidden border-t border-gold/20">
      {/* Backdrop: distant ranges and a faint Dharma wheel */}
      <HimalayaScene
        variant="dusk"
        monastery={false}
        mistLayers={false}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night via-night/90 to-night/70"
      />
      <WheelMotif
        strokeWidth={0.35}
        className="pointer-events-none absolute -right-40 top-24 h-[34rem] w-[34rem] text-gold opacity-[0.06]"
      />
      <PrayerFlags className="absolute inset-x-0 top-0 h-14 w-full opacity-70" />

      <div className="relative z-10 mx-auto max-w-[88rem] px-6 pt-28 sm:px-10">
        {/* Crest */}
        <div className="text-center">
          <LotusMotif className="mx-auto mb-6 h-10 w-10 text-gold-light" />
          {/* Same type treatment as the homepage hero, one step smaller */}
          <p className="font-display font-medium uppercase text-ivory">
            <span className="block text-lg tracking-[0.55em] text-gold-soft sm:text-2xl">
              Kyabje
            </span>
            <span className="mt-2 block text-[2rem] leading-[1.1] tracking-[0.1em] sm:text-5xl sm:tracking-[0.14em]">
              Buli Trulku Rinpoche
            </span>
          </p>
          <p
            lang="bo"
            className="mx-auto mt-4 max-w-full px-2 font-jomolhari text-[clamp(1.5rem,4.5vw,2.75rem)] leading-[1.7] text-gold-light sm:px-4"
          >
            {site.tibetanName}
          </p>
          <GoldDivider tone="light" className="my-8" />
          <p className="font-display text-xl font-medium uppercase tracking-[0.36em] text-gold-soft sm:text-2xl">
            The Living Lineage
          </p>
          <p className="mx-auto mt-4 max-w-xl font-display text-lg italic leading-relaxed text-ivory/75 sm:text-xl">
            {site.footerLine}
          </p>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <ColumnTitle>About</ColumnTitle>
            <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-ivory/85">
              {site.subtitle}.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/55">
              {site.description}
            </p>
            <Link href="/#story" className="btn-gold mt-8">
              Begin the story
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <nav aria-label="Explore" className="lg:col-span-2">
            <ColumnTitle>Explore</ColumnTitle>
            <ul className="mt-6 space-y-3">
              {explore.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className={linkClass}>
                    <Marker />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Chapters of the story" className="lg:col-span-3">
            <ColumnTitle>The Story</ColumnTitle>
            <ul className="mt-6 space-y-3">
              {chapters.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={linkClass}>
                    <Marker />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <ColumnTitle>The Foundation</ColumnTitle>
            <div className="mt-6 border border-gold/25 bg-night/50 p-6">
              <p className="font-display text-xl leading-snug text-ivory">{foundation.name}</p>
              <p className="eyebrow mt-3 text-[0.58rem] text-gold-light/80">
                Established {foundation.date}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ivory/55">
                {foundationPage.launch.place}
              </p>
              <Link
                href="/foundation"
                className="group mt-5 inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-sacred text-gold-soft transition-colors hover:text-gold-light"
              >
                Vision &amp; mission
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Base bar */}
        <div className="mt-20 flex flex-col gap-6 border-t border-gold/15 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm text-ivory/60">{site.copyright}</p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-ivory/40">{site.disclaimer}</p>
          </div>
          <a
            href="#main"
            className="group inline-flex shrink-0 items-center gap-3 self-start text-[0.68rem] font-medium uppercase tracking-sacred text-ivory/60 transition-colors hover:text-gold-light"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center border border-gold/40 transition-colors group-hover:border-gold-light">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
