"use client";

import { useEffect, useState } from "react";

export type ImageStatus = "loading" | "loaded" | "error";

/**
 * Preloads `src` and reports whether it exists.
 * Works even if the file 404s *before* React hydrates (a plain onError would miss that).
 * No `src`, or a missing file → "error" → the parchment placeholder is shown.
 */
export function useImageStatus(src?: string): ImageStatus {
  const [status, setStatus] = useState<ImageStatus>(src ? "loading" : "error");

  useEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    let cancelled = false;
    setStatus("loading");
    const img = new window.Image();
    img.onload = () => !cancelled && setStatus("loaded");
    img.onerror = () => !cancelled && setStatus("error");
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return status;
}
