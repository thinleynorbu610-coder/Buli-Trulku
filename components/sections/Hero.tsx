"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { HimalayaScene, PrayerFlags } from "@/components/art/HimalayaScene";
import { GoldDivider } from "@/components/art/Ornaments";
import { useImageStatus } from "@/hooks/useImageStatus";
import { images, site } from "@/data/buliTrulku";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const photo = useImageStatus(images.hero);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="tone-night relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background: your photograph if present, otherwise the painted Himalaya */}
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[6%] h-[112%]">
        {photo === "loaded" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images.hero}
            alt="Prayer flags fluttering against a clear Himalayan sky"
            // Dimmed and desaturated so the ivory and gold lettering stays legible
            className="h-full w-full object-cover brightness-[0.42] saturate-[0.75]"
          />
        ) : (
          <HimalayaScene variant="dawn" className="h-full w-full" />
        )}
      </motion.div>

      {/* Dark translucent overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night/75 via-night/35 to-night/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,21,28,0.55)_0%,transparent_70%)]"
      />

      {photo !== "loaded" && (
        <PrayerFlags className="absolute inset-x-0 top-16 h-14 w-full opacity-60 sm:top-20" />
      )}

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-28 text-center"
      >
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-display font-medium uppercase text-ivory"
        >
          <span className="block text-xl tracking-[0.55em] text-gold-soft sm:text-3xl">
            Kyabje
          </span>
          <span className="mt-3 block text-[2.7rem] leading-[1.08] tracking-[0.1em] sm:text-7xl sm:tracking-[0.14em] lg:text-[5.25rem]">
            Buli Trulku
          </span>
          <span className="block text-[2.7rem] leading-[1.08] tracking-[0.1em] sm:text-7xl sm:tracking-[0.14em] lg:text-[5.25rem]">
            Rinpoche
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1 }}
          lang="bo"
          className="tibetan mt-6 text-4xl text-gold-light sm:text-5xl"
        >
          {site.tibetanName}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.3 }}
        >
          <GoldDivider tone="light" className="my-8" />
          <p className="font-display text-2xl font-medium uppercase tracking-[0.36em] text-gold-soft sm:text-3xl">
            The Living Lineage
          </p>
          <p className="mx-auto mt-6 max-w-xl font-display text-xl italic leading-relaxed text-ivory/80 sm:text-2xl">
            Tracing a journey of compassion, wisdom and devotion through
            generations of spiritual heritage.
          </p>

          <a href="#story" className="btn-gold mt-12 group">
            {t("hero.begin")}
            <ArrowDown
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* A single thread of gold leading the eye down into the story */}
      <motion.span
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-0 left-1/2 h-16 w-px origin-top bg-gradient-to-b from-gold-light to-transparent"
      />
    </section>
  );
}
