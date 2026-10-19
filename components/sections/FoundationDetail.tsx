import { Compass, Eye, Users } from "lucide-react";
import { GoldDivider } from "@/components/art/Ornaments";
import { RinpocheImage } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionShell } from "@/components/ui/SectionShell";
import { foundation, foundationPage, images } from "@/data/buliTrulku";

/** The full foundation page: launch, vision & mission, objectives, membership. */
export function FoundationDetail() {
  const { launch, vision, mission, objectives, membership } = foundationPage;

  return (
    <>
      {/* Launch */}
      <SectionShell tone="ivory" from="night" aria-labelledby="launch-title">
        <SectionHeading id="launch-title" date={foundation.date} title={launch.heading} />

        <div className="mt-20 grid items-start gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-5">
            <Reveal>
              <RinpocheImage
                src={images.foundationLaunch}
                alt="H.E. Buli Trulku Rinpoche at the launch of the foundation"
                placeholderLabel="H.E. Buli Trulku Rinpoche"
                caption="H.E. Buli Trulku Rinpoche"
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-16">
              <RinpocheImage
                src={images.foundationKhenpo}
                alt="Khenpo Rinpoche at the launch of the foundation"
                placeholderLabel="Khenpo Rinpoche"
                caption="Khenpo Rinpoche"
              />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow leading-relaxed text-gold-ink">{launch.place}</p>
              <div className="my-7 h-px w-24 bg-gold-ink/60" />
            </Reveal>
            <div className="space-y-5">
              {launch.text.map((p, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <p className="text-lg leading-[1.95] text-brown">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Vision & mission */}
      <SectionShell tone="maroon" from="ivory" aria-labelledby="purpose-title">
        <SectionHeading id="purpose-title" eyebrow="Purpose" title="Vision & Mission" light />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {[
            { label: "Vision", text: vision, Icon: Eye },
            { label: "Mission", text: mission, Icon: Compass },
          ].map(({ label, text, Icon }, i) => (
            <Reveal key={label} delay={0.1 * i} className="h-full">
              <div className="h-full border border-gold/40 p-8 sm:p-10">
                <Icon className="h-7 w-7 text-gold-light" aria-hidden="true" />
                <h3 className="eyebrow mt-5 text-gold-light">{label}</h3>
                <p className="mt-4 font-display text-xl italic leading-[1.6] text-ivory/90 sm:text-2xl">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* Objectives */}
      <SectionShell tone="parchment" from="maroon" aria-labelledby="objectives-title">
        <SectionHeading
          id="objectives-title"
          eyebrow="What the foundation works towards"
          title="Objectives"
        />
        <ol className="mx-auto mt-16 max-w-3xl divide-y divide-gold/40 border-y border-gold/40">
          {objectives.map((o, i) => (
            <li key={i}>
              <Reveal delay={Math.min(i * 0.05, 0.25)} className="flex gap-6 py-6">
                <span className="font-display text-3xl leading-none text-gold-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-[1.8] text-brown">{o}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </SectionShell>

      {/* Membership */}
      <SectionShell tone="gold" from="parchment" aria-labelledby="membership-title">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Users className="mx-auto h-9 w-9 text-gold-ink" aria-hidden="true" />
          <h2
            id="membership-title"
            className="mt-5 font-display text-4xl font-medium uppercase tracking-[0.08em] sm:text-5xl"
          >
            Membership
          </h2>
          <GoldDivider className="mt-6" />
          <div className="mt-8 space-y-5">
            {membership.map((p, i) => (
              <p key={i} className="text-lg leading-[1.9] text-brown">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </SectionShell>
    </>
  );
}
