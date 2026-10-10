import { GoldDivider } from "@/components/art/Ornaments";
import { RinpocheImage, LineagePortrait } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { images, lamaKarpo } from "@/data/buliTrulku";

/** Teacher → disciple: a visual of transmission. */
export function LamaKarpo() {
  return (
    <SectionShell id="lama-karpo" tone="parchment" from="dusk" aria-labelledby="karpo-title">
      <SectionHeading
        id="karpo-title"
        eyebrow="Root teacher"
        title={lamaKarpo.heading}
      />

      <div className="mx-auto mt-20 grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_1.2fr_1fr]">
        <Reveal x={-26} className="mx-auto w-full max-w-[17rem]">
          <LineagePortrait
            src="/images/teachers/lama-karpo.jpg"
            alt="Portrait of Lama Karpo of Yongphula"
            placeholderLabel="Lama Karpo — teacher"
            motif="lamp"
            hideCaption
          />
          <p className="mt-4 text-center font-display text-2xl">Lama Karpo</p>
          <p className="eyebrow text-center text-[0.6rem] text-gold-ink">Yongphula, Tashigang</p>
        </Reveal>

        {/* transmission */}
        <Reveal className="text-center">
          <p className="eyebrow mb-4 text-[0.62rem] text-gold-ink">Transmission</p>
          <div className="relative mx-auto flex max-w-xs flex-col items-center">
            <span aria-hidden="true" className="hidden h-px w-full bg-gold md:block" />
            <ul className="my-5 grid grid-cols-2 gap-2 md:my-6 md:grid-cols-1 md:gap-1.5">
              {lamaKarpo.received.map((r) => (
                <li key={r} className="border border-gold/60 bg-ivory px-6 py-1.5 font-display text-xl">
                  {r}
                </li>
              ))}
            </ul>
            <span aria-hidden="true" className="hidden h-px w-full bg-gold md:block" />
          </div>
          <p className="mx-auto mt-5 max-w-[16rem] font-display text-lg italic leading-snug text-brown/80">
            on {lamaKarpo.on}
          </p>
        </Reveal>

        <Reveal x={26} className="mx-auto w-full max-w-[17rem]">
          <RinpocheImage
            src={images.present}
            alt="His Eminence Lama Sonam Loday"
            placeholderLabel="His Eminence — disciple"
            hideCaption
          />
          <p className="mt-4 text-center font-display text-2xl">Lama Sonam Loday</p>
          <p className="eyebrow text-center text-[0.6rem] text-gold-ink">His Eminence</p>
        </Reveal>
      </div>

      <GoldDivider className="mt-20" />

      <div className="mx-auto mt-14 max-w-2xl space-y-6">
        {lamaKarpo.text.map((p, i) => (
          <Reveal key={i} delay={0.08 * i}>
            <p className="reading text-lg text-brown/90">{p}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
