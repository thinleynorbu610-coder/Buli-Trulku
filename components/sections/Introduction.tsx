import { LotusMotif } from "@/components/art/Motifs";
import { GoldDivider } from "@/components/art/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { intro } from "@/data/buliTrulku";

export function Introduction() {
  const [lead, ...rest] = intro.paragraphs;
  return (
    <SectionShell id="story" tone="ivory" from="night" aria-labelledby="intro-title">
      <Reveal className="text-center">
        <LotusMotif className="mx-auto mb-6 h-12 w-12 text-gold" />
        <p className="eyebrow text-gold-ink">{intro.eyebrow}</p>
        <h2
          id="intro-title"
          className="mt-5 text-balance font-display text-[2.6rem] font-medium uppercase leading-[1.05] tracking-[0.04em] sm:text-6xl lg:text-7xl"
        >
          {intro.heading}
        </h2>
        <GoldDivider className="mt-8" />
      </Reveal>

      <div className="mx-auto mt-16 max-w-3xl">
        <Reveal>
          <p className="text-balance text-center font-display text-2xl italic leading-[1.5] text-brown sm:text-[1.9rem]">
            {lead}
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {rest.map((p, i) => (
            <Reveal key={i} delay={0.1}>
              <p className={`reading ${i === 0 ? "drop-cap" : ""} text-brown/90`}>{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-md border-t border-gold/50 pt-6 text-center font-display text-lg italic text-brown/65">
            {intro.note}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
