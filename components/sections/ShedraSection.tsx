import { WheelMotif } from "@/components/art/Motifs";
import { GoldDivider } from "@/components/art/Ornaments";
import { MonasteryImage } from "@/components/images";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { images, shedra } from "@/data/buliTrulku";

/** 2005 — the Dharma continues. "60" is the heart of this chapter. */
export function ShedraSection() {
  return (
    <SectionShell
      id="shedra"
      tone="maroon"
      from="beige"
      aria-labelledby="shedra-title"
      backdrop={
        // a very faint wheel, static, behind everything
        <WheelMotif
          strokeWidth={0.35}
          className="absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.09]"
        />
      }
    >
      <div className="relative">
        <Reveal className="text-center">
          <p className="eyebrow text-gold-light">{shedra.year} · The First Sermon of Lord Buddha</p>
          <h2
            id="shedra-title"
            className="mt-5 text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.08em] sm:text-6xl lg:text-7xl"
          >
            {shedra.heading}
          </h2>
          <GoldDivider tone="light" className="mt-8" />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-display text-2xl italic leading-[1.55] text-ivory/90 sm:text-[1.7rem]">
            {shedra.text}
          </p>
        </Reveal>

        <Reveal className="mt-16 text-center" scale={0.94} duration={1.4}>
          <CountUp
            to={shedra.enrollment}
            className="gold-text-light block font-display text-[10rem] font-medium leading-[0.85] sm:text-[18rem]"
          />
          <p className="eyebrow mt-4 text-gold-soft">{shedra.enrollmentLabel}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-20 max-w-3xl">
          <MonasteryImage
            variant="wide"
            tone="dark"
            src={images.shedra}
            alt="Droduel Tshangchen Shedra"
            placeholderLabel="Droduel Tshangchen Shedra"
            caption="Droduel Tshangchen Shedra"
            year="2005"
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
