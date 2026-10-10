"use client";

/**
 * Reusable image components. Each accepts:
 *   src, alt, caption, year, location, credit
 * plus `placeholderLabel`, `tone`, `className`.
 *
 * If `src` is empty or the file does not exist, a parchment-style
 * "Photograph coming soon" placeholder is shown instead.
 */
import { SacredImage, type SacredImageProps } from "./SacredImage";

type Props = Omit<SacredImageProps, "variant" | "motif">;

/** Portraits of His Eminence Lama Sonam Loday, ceremonies, teaching photographs. */
export function RinpocheImage(props: Props & { variant?: "portrait" | "tall" | "landscape" | "wide" }) {
  const { variant = "portrait", ...rest } = props;
  return <SacredImage variant={variant} motif="lotus" {...rest} />;
}

/** Portraits of the earlier incarnations. Never fill with stock imagery. */
export function LineagePortrait(props: Props & { motif?: SacredImageProps["motif"] }) {
  const { motif = "lotus", ...rest } = props;
  return <SacredImage variant="portrait" motif={motif} {...rest} />;
}

/** Monasteries, shedras, retreat places, landscapes. */
export function MonasteryImage(props: Props & { variant?: "monastery" | "landscape" | "wide" }) {
  const { variant = "monastery", ...rest } = props;
  return <SacredImage variant={variant} motif="monastery" {...rest} />;
}

/** Archival photographs — rendered with a faint sepia warmth. */
export function HistoricalImage(props: Props) {
  return <SacredImage variant="historical" motif="manuscript" {...props} />;
}

export { SacredImage };
