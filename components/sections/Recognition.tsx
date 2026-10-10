import { MotifIcon } from "@/components/art/Motifs";
import { GoldDivider } from "@/components/art/Ornaments";
import { RinpocheImage, SacredImage } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { images, recognition } from "@/data/buliTrulku";

function Figure({ name, image, delay }: { name: string; image: string; delay: number }) {
  return (
    <Reveal delay={delay} className="mx-auto w-full max-w-[9.5rem] text-center">
      <SacredImage
        variant="square"
        tone="dark"
        compact
        src={image}
        alt={`Portrait of ${name}`}
        hideCaption
      />
      <p className="mt-3 font-display text-lg leading-tight text-ivory/90">{name}</p>
    </Reveal>
  );
}

export function Recognition() {
  const [a, b, c, d] = recognition.conductedBy;
  return (
    <SectionShell id="recognition" tone="night" from="parchment" aria-labelledby="recognition-title">
      <Reveal className="text-center">
        <span
          aria-hidden="true"
          className="gold-text-light block font-display text-[7rem] font-medium leading-[0.9] sm:text-[13rem]"
        >
          {recognition.year}
        </span>
        <p className="eyebrow mt-4 text-gold-light">Age {recognition.age}</p>
        <h2
          id="recognition-title"
          className="mt-6 text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.08em] sm:text-6xl lg:text-7xl"
        >
          <span className="sr-only">{recognition.year}: </span>
          {recognition.heading}
        </h2>
        <GoldDivider tone="light" className="mt-8" />
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-2xl text-center">
        <p className="font-display text-2xl italic leading-[1.55] text-ivory/90 sm:text-[1.7rem]">
          {recognition.text}
        </p>
      </Reveal>

      {/* Central image with the four who conducted the ceremony around it */}
      <div className="mt-20">
        <p className="eyebrow mb-10 text-center text-[0.65rem] text-gold-light">
          Conducted by
        </p>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(18rem,26rem)_1fr] lg:gap-12">
          <div className="order-2 grid grid-cols-2 gap-6 lg:order-1 lg:grid-cols-1 lg:gap-14">
            <Figure {...a} delay={0} />
            <Figure {...b} delay={0.1} />
          </div>

          <Reveal className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none" scale={0.96} duration={1.3}>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -inset-4 border border-gold/40"
              />
              <RinpocheImage
                variant="portrait"
                tone="dark"
                src={images.recognition}
                alt="The enthronement of Buli Trulku at Dechen Norbu Sergi Dramthang Goenpa in 1960"
                placeholderLabel="Enthronement, 1960"
                caption={recognition.place}
                year="1960"
              />
            </div>
          </Reveal>

          <div className="order-3 grid grid-cols-2 gap-6 lg:grid-cols-1 lg:gap-14">
            <Figure {...c} delay={0.2} />
            <Figure {...d} delay={0.3} />
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <MotifIcon motif="lamp" className="h-10 w-10 text-gold-light/80" />
        </div>
      </div>
    </SectionShell>
  );
}
