import { MapPin } from "lucide-react";
import { ManuscriptMotif } from "@/components/art/Motifs";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { earlyYears } from "@/data/buliTrulku";
import { cn } from "@/lib/utils";

const numerals = ["I", "II", "III", "IV", "V", "VI"];

/** A "learning journey" told as leaves of a Tibetan pecha (manuscript). */
export function EarlyYears() {
  return (
    <SectionShell id="early-years" tone="parchment" from="maroon" aria-labelledby="early-title">
      <SectionHeading
        id="early-title"
        title={earlyYears.heading}
        subtitle={earlyYears.subtitle}
        eyebrow="Age six"
      />

      <Reveal className="mx-auto mt-14 max-w-xl text-center">
        <MapPin className="mx-auto mb-4 h-6 w-6 text-gold-ink" aria-hidden="true" />
        <p className="font-display text-2xl italic leading-snug text-brown">
          {earlyYears.lead}
        </p>
      </Reveal>

      <ol className="relative mx-auto mt-20 max-w-3xl space-y-10">
        {/* thread running through the manuscript leaves */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-0 w-px border-l border-dashed border-gold sm:left-1/2"
        />
        {earlyYears.steps.map((step, i) => (
          <li key={step.title} className="relative">
            <Reveal
              x={i % 2 === 0 ? -24 : 24}
              className={cn(
                "relative ml-10 sm:ml-0 sm:w-[calc(50%-2.5rem)]",
                i % 2 === 1 && "sm:ml-auto",
              )}
            >
              {/* connector dot */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-10 h-3 w-3 rotate-45 border border-gold bg-parchment",
                  "-left-[2.1rem]",
                  i % 2 === 0
                    ? "sm:-right-[2.6rem] sm:left-auto"
                    : "sm:-left-[2.6rem]",
                )}
              />
              <div className="parchment-card px-7 py-7 pl-12">
                {/* cord holes of a pecha leaf */}
                <span aria-hidden="true" className="absolute left-4 top-6 h-3 w-3 rounded-full border border-gold bg-parchment" />
                <span aria-hidden="true" className="absolute bottom-6 left-4 h-3 w-3 rounded-full border border-gold bg-parchment" />

                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-3xl text-gold-ink">{numerals[i]}</span>
                  <ManuscriptMotif className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
                  {step.title}
                </h3>

                <p className="eyebrow mt-5 text-[0.6rem] text-gold-ink">From</p>
                <ul className="mt-1 space-y-0.5 font-display text-lg italic text-brown/90">
                  {step.from.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <p className="eyebrow mt-5 text-[0.6rem] text-gold-ink">Received</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {step.received.map((r) => (
                    <li
                      key={r}
                      className="border border-gold/60 bg-parchment/60 px-3 py-1 text-sm leading-snug"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
