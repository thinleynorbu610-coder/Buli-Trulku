"use client";

import { useImageStatus } from "@/hooks/useImageStatus";
import { WheelMotif } from "@/components/art/Motifs";
import { ButterLamp, GoldDivider, IncenseSmoke } from "@/components/art/Ornaments";
import { MonasteryImage } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { foundation, images } from "@/data/buliTrulku";

/** Foundation logo — shows your logo file if present, otherwise a quiet placeholder. */
function FoundationLogo() {
  const status = useImageStatus(images.foundationLogo);
  return (
    <div
      className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-gold-ink/60 bg-ivory/60 shadow-[0_18px_50px_-20px_rgba(122,90,26,0.6)]"
      role="img"
      aria-label={status === "loaded" ? "Duejom Terling Shedra Foundation logo" : "Foundation logo — coming soon"}
    >
      {status === "loaded" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={images.foundationLogo} alt="" className="h-28 w-28 object-contain" />
      ) : (
        <div className="flex flex-col items-center text-gold-ink">
          <WheelMotif className="h-14 w-14" />
          <span className="eyebrow mt-1 text-[0.5rem]">Logo coming soon</span>
        </div>
      )}
    </div>
  );
}

export function FoundationSection() {
  return (
    <SectionShell
      id="foundation"
      tone="gold"
      from="night"
      aria-labelledby="foundation-title"
      backdrop={<IncenseSmoke count={5} className="opacity-50 mix-blend-soft-light" />}
    >
      <div className="relative">
        <Reveal className="text-center">
          <FoundationLogo />
          <p className="eyebrow mt-10 text-gold-ink">{foundation.date}</p>
          <h2
            id="foundation-title"
            className="mt-4 text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.08em] sm:text-6xl lg:text-7xl"
          >
            {foundation.heading}
          </h2>
          <GoldDivider className="mt-8" />
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <MonasteryImage
              src={images.foundationMonastery}
              alt="A monastery supported by the Duejom Terling Shedra Foundation"
              placeholderLabel="Foundation"
              scene={false}
              caption={foundation.name}
              year="2014"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                {foundation.name}
              </p>
              <div className="my-7 h-px w-24 bg-gold-ink/60" />
            </Reveal>
            <div className="space-y-5">
              {foundation.text.map((p, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <p className="text-lg leading-[1.95] text-brown">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3} className="mt-10 flex items-end gap-6" >
              <ButterLamp />
              <ButterLamp className="scale-90 opacity-90" />
              <ButterLamp />
            </Reveal>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
