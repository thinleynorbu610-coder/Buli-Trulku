import Link from "next/link";
import { GoldDivider } from "@/components/art/Ornaments";
import { PrayerFlags } from "@/components/art/HimalayaScene";
import { nav, site } from "@/data/buliTrulku";

const footerLinks = nav.filter((n) => n.key !== "legacy");

export function Footer() {
  return (
    <footer className="tone-night relative overflow-hidden border-t border-gold/20">
      <PrayerFlags className="absolute inset-x-0 top-0 h-14 w-full opacity-70" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-14 pt-28 text-center sm:px-10">
        <p className="tibetan mb-5 text-3xl text-gold-light" lang="bo">
          {site.tibetanName}
        </p>
        <h2 className="font-display text-2xl font-medium uppercase tracking-[0.3em] text-ivory sm:text-3xl">
          {site.name}
        </h2>
        <p className="mt-4 font-display text-lg italic text-ivory/70">
          {site.footerLine}
        </p>

        <GoldDivider tone="light" className="my-10" />

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((l) => (
              <li key={l.key}>
                <Link
                  href={l.href}
                  className="eyebrow text-[0.68rem] text-ivory/75 transition hover:text-gold-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-14 text-sm text-ivory/60">{site.copyright}</p>
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-ivory/40">
          {site.disclaimer}
        </p>
      </div>
    </footer>
  );
}
