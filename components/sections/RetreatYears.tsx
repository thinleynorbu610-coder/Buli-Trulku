import { MapPin } from "lucide-react";
import { HimalayaScene } from "@/components/art/HimalayaScene";
import { IncenseSmoke } from "@/components/art/Ornaments";
import { MonasteryImage } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { places, retreat } from "@/data/buliTrulku";

export function RetreatYears() {
  const retreatPlaces = retreat.places.map((r) => ({
    ...r,
    image: places.find((p) => p.name === r.name)?.image,
  }));

  return (
    <SectionShell
      id="retreat"
      tone="mist"
      from="parchment"
      aria-labelledby="retreat-title"
      backdrop={
        <>
          <HimalayaScene
            variant="mist"
            monastery={false}
            className="mask-fade-t absolute inset-x-0 bottom-0 h-[75%] w-full opacity-60"
          />
          <IncenseSmoke count={6} className="opacity-60" />
        </>
      }
    >
      <div className="relative">
        <SectionHeading
          id="retreat-title"
          light
          eyebrow="In the mountains"
          title={retreat.heading}
        />

        <Reveal className="mx-auto mt-10 max-w-xl text-center">
          <p className="font-display text-2xl italic leading-[1.5] text-ivory/90">
            {retreat.intro}
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {retreatPlaces.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={0.1 * i} className="h-full">
                <div className="h-full border border-gold/40 bg-night/40 p-4 backdrop-blur-[2px]">
                  <MonasteryImage
                    variant="landscape"
                    tone="dark"
                    compact
                    src={p.image}
                    alt={`${p.name}, a place named in connection with the retreat years`}
                    hideCaption
                  />
                  <h3 className="mt-5 flex items-center gap-2 font-display text-2xl text-ivory">
                    <MapPin className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                    {p.name}
                  </h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mx-auto mt-14 max-w-lg text-center">
          <p className="text-sm leading-relaxed tracking-wide text-ivory/70">{retreat.note}</p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
