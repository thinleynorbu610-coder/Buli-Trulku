"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";

export function Providers({ children }: { children: ReactNode }) {
  return (
    // "user" → transform/layout animations are skipped for visitors who prefer reduced motion
    <MotionConfig reducedMotion="user">
      <LanguageProvider>{children}</LanguageProvider>
    </MotionConfig>
  );
}
