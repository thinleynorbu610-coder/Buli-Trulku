import { Calendar, MapPin } from "lucide-react";
import { GoldDivider } from "@/components/art/Ornaments";
import { RinpocheImage } from "@/components/images";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { images, present } from "@/data/buliTrulku";

/** Chapter 11 — the largest, most important section of the story. */
export function PresentIncarnation() {
  return (
    <SectionShell
      id="chapter-11"
      tone="maroon"
      from="maroon"
      aria-labelledby="present-title"
      innerClassName="max-w-[88rem]"
    >
      <Reveal className="text-center">
        <p className="eyebrow text-gold-light">The present incarnation</p>
        <span
          aria-hidden="true"
          className="gold-text-light mt-2 block font-display text-[9rem] font-medium leading-[0.85] sm:text-[15rem]"
        >
          11
        </span>
        <h2
          id="present-title"
          className="text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.1em] sm:text-6xl lg:text-7xl"
        >
          <span className="sr-only">Chapter 11: </span>
          {present.name}
        </h2>
        <p className="mt-5 font-display text-2xl italic text-gold-soft sm:text-4xl">
          &ldquo;{present.honorific}&rdquo;
        </p>
        <GoldDivider tone="light" className="mt-8" />
      </Reveal>

      <div className="mt-20 grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Portrait */}
        <Reveal className="lg:col-span-5" scale={0.97} duration={1.4}>
          <Parallax distance={50}>
            <div className="relative mx-auto w-full max-w-md">
              <span
                aria-hidden="true"
                className="absolute -inset-4 border border-gold/40"
              />
              <RinpocheImage
                variant="portrait"
                tone="dark"
                src={images.present}
                alt="Portrait of His Eminence Lama Sonam Loday, the present Buli Trulku"
                placeholderLabel="His Eminence Lama Sonam Loday"
                priority
              />
            </div>
          </Parallax>
        </Reveal>

        {/* Birth and biography */}
        <div id="birth" className="lg:col-span-7 lg:pt-10">
          <Reveal>
            <dl className="grid gap-8 border-t border-gold/60 pt-8">
              <div>
                <dt className="eyebrow flex items-center gap-2 text-[0.65rem] text-gold-light">
                  <Calendar className="h-4 w-4" aria-hidden="true" /> Born
                </dt>
                <dd className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
                  {present.born}
                </dd>
              </div>
              <div>
                <dt className="eyebrow flex items-center gap-2 text-[0.65rem] text-gold-light">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> Birthplace
                </dt>
                <dd className="mt-2 font-display text-2xl leading-snug sm:text-3xl">
                  {present.birthplace}
                </dd>
              </div>
            </dl>
          </Reveal>

          <div className="mt-12 space-y-6 border-t border-gold/30 pt-10">
            {present.biography.map((p, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p
                  className={
                    i === 0
                      ? "drop-cap text-lg leading-[1.95] text-ivory/90"
                      : "text-lg leading-[1.95] text-ivory/85"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
