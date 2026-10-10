import { MapPin, Users } from "lucide-react";
import { MonasteryImage } from "@/components/images";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { images, yongphula } from "@/data/buliTrulku";

export function Yongphula() {
  return (
    <SectionShell id="yongphula" tone="ivory" from="mist" aria-labelledby="yongphula-title">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7" scale={0.97} duration={1.3}>
          <Parallax distance={40}>
            <MonasteryImage
              src={images.yongphula}
              alt="Yongphula Thegchok Darjey Goenpa"
              placeholderLabel="Yongphula Thegchok Darjey Goenpa"
              location={yongphula.location}
            />
          </Parallax>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-gold-ink">A monastery established</p>
            <h2
              id="yongphula-title"
              className="mt-4 text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.05em] sm:text-5xl"
            >
              {yongphula.heading}
            </h2>
            <div className="my-7 h-px w-24 bg-gold" />
            {yongphula.text.map((p, i) => (
              <p key={i} className="text-lg leading-[1.95] text-brown/90">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid gap-6 border-t border-gold/50 pt-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
                <div>
                  <dt className="eyebrow text-[0.62rem] text-gold-ink">Location</dt>
                  <dd className="font-display text-2xl">{yongphula.location}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="mt-1 h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
                <div>
                  <dt className="eyebrow text-[0.62rem] text-gold-ink">Disciples</dt>
                  <dd className="font-display text-2xl">Many disciples</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
