import { HimalayaScene, PrayerFlags } from "@/components/art/HimalayaScene";
import { GoldDivider } from "@/components/art/Ornaments";
import { Reveal } from "@/components/ui/Reveal";

/** The dark, cinematic opening used at the top of every subpage. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  variant = "dusk",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: "dawn" | "dusk" | "mist";
}) {
  return (
    <header className="tone-night relative overflow-hidden">
      <HimalayaScene
        variant={variant}
        monastery={false}
        className="absolute inset-0 h-full w-full opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/40 to-night"
      />
      <PrayerFlags className="absolute inset-x-0 top-16 h-12 w-full opacity-50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-44 text-center sm:px-10 sm:pb-32 sm:pt-52">
        <Reveal>
          <p className="eyebrow text-gold-light">{eyebrow}</p>
          <h1 className="mt-5 text-balance font-display text-5xl font-medium uppercase leading-[1.05] tracking-[0.1em] text-ivory sm:text-7xl">
            {title}
          </h1>
          <GoldDivider tone="light" className="mt-8" />
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl font-display text-xl italic leading-relaxed text-ivory/80 sm:text-2xl">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}
