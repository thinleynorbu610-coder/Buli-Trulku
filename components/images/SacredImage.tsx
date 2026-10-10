"use client";

import { useImageStatus } from "@/hooks/useImageStatus";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Motif } from "@/data/types";
import { CornerOrnaments } from "@/components/art/Ornaments";
import { MotifIcon } from "@/components/art/Motifs";
import { HimalayaScene } from "@/components/art/HimalayaScene";

export type ImageVariant =
  | "portrait"
  | "landscape"
  | "monastery"
  | "historical"
  | "square"
  | "wide"
  | "tall";

export interface SacredImageProps {
  /** Path inside /public, e.g. "/images/lineage/01-phagpa-magapa.jpg". Missing or empty → placeholder. */
  src?: string;
  /** Describe the photograph for screen readers. Always provide this. */
  alt: string;
  caption?: string;
  year?: string;
  location?: string;
  credit?: string;
  /** Small label printed on the placeholder, e.g. the person's name */
  placeholderLabel?: string;
  variant?: ImageVariant;
  motif?: Motif;
  /** "dark" placeholders sit better on night / maroon sections */
  tone?: "light" | "dark";
  /** Show the scene painting inside landscape placeholders */
  scene?: boolean;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Hide the figcaption (useful in grids that print their own captions) */
  hideCaption?: boolean;
  /** Smaller placeholder typography, for thumbnails and small figures */
  compact?: boolean;
}

const ratio: Record<ImageVariant, string> = {
  portrait: "aspect-[4/5]",
  historical: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  landscape: "aspect-[16/11]",
  monastery: "aspect-[3/2]",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

const defaultMotif: Record<ImageVariant, Motif> = {
  portrait: "lotus",
  historical: "manuscript",
  tall: "lotus",
  landscape: "mountain",
  monastery: "monastery",
  square: "wheel",
  wide: "mountain",
};

export function SacredImage({
  src,
  alt,
  caption,
  year,
  location,
  credit,
  placeholderLabel,
  variant = "portrait",
  motif,
  tone = "light",
  scene,
  priority,
  className,
  imgClassName,
  hideCaption,
  compact,
}: SacredImageProps) {
  const status = useImageStatus(src);
  const { t } = useLang();
  const dark = tone === "dark";
  const showScene = scene ?? (variant === "landscape" || variant === "wide" || variant === "monastery");
  const hasMeta = Boolean(caption || year || location || credit);

  return (
    <figure className={cn("group relative", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden border",
          ratio[variant],
          dark ? "border-gold/40 bg-black/30" : "border-gold/50 bg-parchment",
        )}
      >
        {status === "loaded" && src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]",
              variant === "historical" && "sepia-[0.15]",
              imgClassName,
            )}
          />
        ) : (
          <div
            role="img"
            aria-label={`${alt} — ${t("image.soon")}`}
            className={cn(
              "absolute inset-0 flex flex-col items-center justify-center text-center",
              dark ? "text-gold-soft" : "text-gold-ink parchment-texture",
              status === "loading" && "animate-glow",
            )}
          >
            {showScene && (
              <HimalayaScene
                variant={dark ? "dusk" : "mist"}
                monastery={variant === "monastery"}
                mistLayers={false}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover",
                  dark ? "opacity-70" : "opacity-[0.38]",
                )}
              />
            )}
            <div
              className={cn(
                "absolute border",
                compact ? "inset-1.5" : "inset-3",
                dark ? "border-gold/30" : "border-gold/40",
              )}
            />
            {!compact && (
              <CornerOrnaments className={dark ? "text-gold-light" : "text-gold"} />
            )}
            <div className="relative z-10 flex flex-col items-center px-6">
              <MotifIcon
                motif={motif ?? defaultMotif[variant]}
                className={cn(
                  compact ? "mb-1.5 h-6 w-6" : "mb-4 h-10 w-10 sm:h-12 sm:w-12",
                  dark ? "text-gold-light" : "text-gold",
                )}
              />
              <span
                className={cn(
                  "font-display italic leading-tight",
                  compact ? "text-[0.8rem] sm:text-sm" : "text-xl sm:text-2xl",
                )}
              >
                {t("image.soon")}
              </span>
              {placeholderLabel && !compact && (
                <span
                  className={cn(
                    "eyebrow mt-3 max-w-[16rem] text-[0.62rem] leading-relaxed",
                    dark ? "text-ivory/70" : "text-brown/70",
                  )}
                >
                  {placeholderLabel}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {!hideCaption && hasMeta && (
        <figcaption
          className={cn(
            "mt-3 text-sm leading-relaxed",
            dark ? "text-ivory/75" : "text-brown/80",
          )}
        >
          {caption && <span className="block font-display text-base italic">{caption}</span>}
          {(year || location) && (
            <span
              className={cn(
                "eyebrow block text-[0.62rem]",
                dark ? "text-gold-light" : "text-gold-ink",
              )}
            >
              {[year, location].filter(Boolean).join(" · ")}
            </span>
          )}
          {credit && (
            <span className="block text-xs opacity-70">Photograph: {credit}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
