"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

/**
 * Calm entrance: fade + slow slide (+ optional gentle scale).
 * Reduced-motion is honoured globally by <MotionConfig reducedMotion="user">.
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  x = 0,
  scale,
  duration = 1,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale: scale ?? 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
