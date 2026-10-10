import { HimalayaScene } from "@/components/art/HimalayaScene";
import { GoldDivider } from "@/components/art/Ornaments";
import { HistoricalImage, RinpocheImage } from "@/components/images";
import { PathDiagram } from "@/components/ui/PathDiagram";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { dudjom, images } from "@/data/buliTrulku";

/** One of the most cinematic sections: 1964, Kalimpong, Kyabje Dudjom Rinpoche. */
export function DudjomMeeting() {
  return (
    <SectionShell
      id="dudjom-rinpoche"
      tone="dusk"
      from="night"
      aria-labelledby="dudjom-title"
      backdrop={
        <HimalayaScene
          variant="dusk"
          monastery={false}
          className="mask-fade-t absolute inset-x-0 bottom-0 h-[70%] w-full opacity-40"
        />
      }
    >
      <div className="relative">
        <Reveal className="text-center">
          <span
            aria-hidden="true"
            className="gold-text-light block font-display text-[7rem] font-medium leading-[0.9] sm:text-[13rem]"
          >
            {dudjom.year}
          </span>
          <p className="eyebrow mt-4 text-gold-light">Age {dudjom.age} · Kalimpong, India</p>
          <h2
            id="dudjom-title"
            className="mt-6 text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.08em] sm:text-6xl lg:text-7xl"
          >
            <span className="sr-only">{dudjom.year}: </span>
            {dudjom.heading}
          </h2>
          <GoldDivider tone="light" className="mt-8" />
        </Reveal>

        {/* Two figures joined by a gold line */}
        <div className="mx-auto mt-20 grid max-w-4xl items-center gap-10 sm:grid-cols-[1fr_auto_1fr]">
          <Reveal x={-30} className="mx-auto w-full max-w-[16rem]">
            <RinpocheImage
              tone="dark"
              src={images.age16}
              alt="Buli Trulku as a young man of sixteen"
              placeholderLabel="Buli Trulku, aged sixteen"
              hideCaption
            />
          </Reveal>

          <div aria-hidden="true" className="relative flex h-14 items-center justify-center sm:h-auto sm:w-28">
            <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-gold-light to-gold sm:bottom-auto sm:left-0 sm:right-0 sm:top-1/2 sm:h-px sm:w-auto sm:bg-gradient-to-r" />
            <span className="relative block h-3 w-3 rotate-45 border border-gold-light bg-night" />
          </div>

          <Reveal x={30} className="mx-auto w-full max-w-[16rem]">
            <HistoricalImage
              tone="dark"
              src={images.dudjom}
              alt="Portrait of Kyabje Dudjom Rinpoche"
              placeholderLabel="Kyabje Dudjom Rinpoche"
              hideCaption
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-2xl space-y-6 text-center">
          {dudjom.text.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <p
                className={
                  i === 0
                    ? "font-display text-2xl italic leading-[1.55] text-ivory/95 sm:text-[1.7rem]"
                    : "text-lg leading-[1.9] text-ivory/80"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        {/* The two names */}
        <Reveal className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
          <div className="border border-gold/50 px-8 py-5 text-center">
            <p className="eyebrow text-[0.6rem] text-gold-light">Named by Dudjom Rinpoche</p>
            <p className="mt-1 font-display text-3xl text-ivory">{dudjom.names[0]}</p>
          </div>
          <span className="eyebrow text-[0.65rem] text-gold-light" aria-hidden="true">
            and later
          </span>
          <span className="sr-only">and later</span>
          <div className="border border-gold/50 px-8 py-5 text-center">
            <p className="eyebrow text-[0.6rem] text-gold-light">Named</p>
            <p className="mt-1 font-display text-3xl text-ivory">{dudjom.names[1]}</p>
          </div>
        </Reveal>

        {/* Lineage connection */}
        <div className="mx-auto mt-24 max-w-4xl">
          <p className="eyebrow mb-10 text-center text-[0.65rem] text-gold-light">
            The connection
          </p>
          <PathDiagram
            light
            stops={dudjom.path}
            label={`The connection: ${dudjom.path.join(", then ")}`}
          />
        </div>
      </div>
    </SectionShell>
  );
}
