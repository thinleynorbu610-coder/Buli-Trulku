import { LotusMotif } from "@/components/art/Motifs";
import { GoldDivider } from "@/components/art/Ornaments";
import { RinpocheImage } from "@/components/images";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { finalMessage, images } from "@/data/buliTrulku";
import type { Tone } from "@/lib/utils";

export function FinalMessage({ from = "gold" }: { from?: Tone } = {}) {
  return (
    <SectionShell id="journey-continues" tone="night" from={from} aria-labelledby="final-title">
      <Reveal className="text-center">
        <LotusMotif className="mx-auto mb-8 h-14 w-14 text-gold-light" />
        <h2
          id="final-title"
          className="text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.1em] sm:text-6xl lg:text-7xl"
        >
          {finalMessage.heading}
        </h2>
        <GoldDivider tone="light" className="mt-8" />
      </Reveal>

      <div className="mx-auto mt-14 max-w-2xl space-y-8 text-center">
        {finalMessage.text.map((p, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <p
              className={
                i === 0
                  ? "font-display text-2xl italic leading-[1.6] text-ivory sm:text-[1.7rem]"
                  : "text-lg leading-[1.95] text-ivory/80"
              }
            >
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-24 max-w-[17rem] sm:max-w-sm" scale={0.96} duration={1.5}>
        <Parallax distance={40}>
          <div className="relative">
            <span aria-hidden="true" className="absolute -inset-4 border border-gold/40" />
            <RinpocheImage
              // 3:4 matches the photograph, so almost nothing is cropped
              variant="tall"
              tone="dark"
              src={images.final}
              imgClassName="object-[50%_20%]"
              alt="Portrait of Kyabje Buli Trulku Rinpoche, Lama Sonam Loday"
              placeholderLabel="Kyabje Buli Trulku Rinpoche"
              hideCaption
            />
          </div>
        </Parallax>
      </Reveal>

      <Reveal className="mt-16 text-center">
        <p className="font-display text-3xl font-medium uppercase tracking-[0.2em] text-gold-soft sm:text-5xl">
          {finalMessage.honorific}
        </p>
        <p className="mt-3 font-display text-2xl italic text-ivory/80 sm:text-3xl">
          {finalMessage.name}
        </p>
      </Reveal>
    </SectionShell>
  );
}
