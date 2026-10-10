import { ContourMap } from "@/components/art/ContourMap";
import { MonasteryImage } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { images, zangthi } from "@/data/buliTrulku";

/** 1983 — a full-width timeline chapter with a map-inspired illustration. */
export function Zangthi() {
  return (
    <SectionShell id="zangthi" tone="beige" from="ivory" aria-labelledby="zangthi-title">
      {/* full-width timeline rule */}
      <Reveal className="relative -mx-6 mb-14 sm:-mx-10">
        <div aria-hidden="true" className="relative h-px bg-gold">
          <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold bg-beige" />
        </div>
      </Reveal>

      <Reveal className="text-center">
        <span
          aria-hidden="true"
          className="gold-text block font-display text-[7rem] font-medium leading-[0.9] sm:text-[13rem]"
        >
          {zangthi.year}
        </span>
        <h2
          id="zangthi-title"
          className="mt-4 text-balance font-display text-4xl font-medium uppercase leading-[1.1] tracking-[0.08em] sm:text-6xl lg:text-7xl"
        >
          <span className="sr-only">{zangthi.year}: </span>
          {zangthi.heading}
        </h2>
      </Reveal>

      <div className="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* map-inspired */}
        <Reveal className="relative">
          <ContourMap
            label="A topographic illustration centred on Zangthi (not a geographic map)"
            className="w-full"
          />
          <ol
            aria-label="Where Zangthi sits"
            className="absolute right-0 top-4 space-y-2 text-right sm:right-4"
          >
            {zangthi.hierarchy.map((h, i, arr) => (
              <li
                key={h}
                className={
                  i === arr.length - 1
                    ? "font-display text-2xl font-semibold text-gold-ink"
                    : "eyebrow text-[0.6rem] text-brown/70"
                }
              >
                {h}
              </li>
            ))}
          </ol>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-gold-ink">Called by</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <li className="border border-gold/60 bg-ivory/70 px-5 py-4 font-display text-lg leading-snug">
                The instruction of his root teacher, Lama Karpo
              </li>
              <li className="border border-gold/60 bg-ivory/70 px-5 py-4 font-display text-lg leading-snug">
                The repeated requests of the people of Shingkhar Lauri
              </li>
            </ul>
          </Reveal>

          <div className="mt-10 space-y-5">
            {zangthi.text.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="text-lg leading-[1.95] text-brown/90">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10">
            <MonasteryImage
              src={images.zangthi}
              alt="Kinga Jigdrel Singye Chholing Monastery at Zangthi"
              placeholderLabel={zangthi.monastery}
              caption={zangthi.monastery}
              year="1983"
              location="Zangthi, Lauri Gewog"
            />
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
