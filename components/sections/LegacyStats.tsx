import { GoldDivider } from "@/components/art/Ornaments";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { institutions, legacyStats } from "@/data/buliTrulku";

/** Three honest numbers, exactly as supplied. Nothing added. */
export function LegacyStats() {
  return (
    <SectionShell id="legacy" tone="night" from="maroon" aria-labelledby="legacy-title">
      <SectionHeading
        id="legacy-title"
        light
        eyebrow="Today"
        title={legacyStats.heading}
      />

      <Reveal className="mx-auto mt-10 max-w-2xl text-center">
        <p className="font-display text-2xl italic leading-[1.55] text-ivory/85">
          {legacyStats.intro}
        </p>
      </Reveal>

      <dl className="mt-20 grid gap-14 md:grid-cols-3 md:gap-0">
        {legacyStats.stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={0.15 * i}
            className="relative flex flex-col px-6 text-center md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-gold/30"
          >
            <dt className="order-2 mx-auto mt-4 max-w-[15rem] font-display text-xl leading-snug text-ivory">
              {s.label}
            </dt>
            <dd className="order-1 m-0">
              <CountUp
                to={s.value}
                suffix={s.suffix}
                className="gold-text-light block font-display text-8xl font-medium leading-none sm:text-[9rem]"
              />
              <span className="eyebrow mt-3 block text-[0.6rem] text-gold-light/80">
                {s.note}
              </span>
            </dd>
          </Reveal>
        ))}
      </dl>

      <div className="mt-28">
        <GoldDivider tone="light" />
        <p className="eyebrow mt-8 text-center text-[0.65rem] text-gold-light">
          Institutions named in this biography
        </p>
        <ul className="mx-auto mt-8 grid max-w-4xl gap-px border border-gold/25 bg-gold/25 sm:grid-cols-2">
          {institutions.map((inst) => (
            <li key={inst.id} className="bg-night px-6 py-6">
              <p className="font-display text-xl leading-snug text-ivory">{inst.name}</p>
              <p className="eyebrow mt-2 text-[0.6rem] text-gold-light">
                {[inst.year, inst.location].filter(Boolean).join(" · ") || " "}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
