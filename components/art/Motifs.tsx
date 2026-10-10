import type { Motif } from "@/data/types";

interface MotifProps {
  className?: string;
  strokeWidth?: number;
}

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function LotusMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M32 50c-6-5-9-12-9-20 4 3 7 8 9 14 2-6 5-11 9-14 0 8-3 15-9 20Z" />
      <path d="M32 44c-3-7-3-17 0-26 3 9 3 19 0 26Z" />
      <path d="M23 44c-7-1-13-6-15-14 7 0 13 3 17 8" />
      <path d="M41 44c7-1 13-6 15-14-7 0-13 3-17 8" />
      <path d="M12 52h40" />
    </svg>
  );
}

export function WheelMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  const spokes = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="16" />
      <circle cx="32" cy="32" r="4" />
      {spokes.map((a, i) => (
        <line
          key={i}
          x1={32 + Math.cos(a) * 5}
          y1={32 + Math.sin(a) * 5}
          x2={32 + Math.cos(a) * 16}
          y2={32 + Math.sin(a) * 16}
        />
      ))}
      {spokes.map((a, i) => (
        <circle
          key={`d${i}`}
          cx={32 + Math.cos(a) * 19}
          cy={32 + Math.sin(a) * 19}
          r="1.2"
        />
      ))}
    </svg>
  );
}

export function MountainMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M6 50 22 24l8 12 8-16 20 30Z" />
      <path d="m17 33 5-9 5 8" />
      <path d="m33 28 5-8 5 8" />
      <circle cx="46" cy="14" r="4" />
    </svg>
  );
}

export function LampMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M32 8c4 5 6 9 3 14-1.500 2.500-4.500 2.500-6 0-3-5-1-9 3-14Z" />
      <path d="M20 30h24c0 8-5 14-12 14s-12-6-12-14Z" />
      <path d="M26 44v6h12v-6" />
      <path d="M22 54h20" />
    </svg>
  );
}

export function ManuscriptMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <rect x="6" y="20" width="52" height="24" rx="1.500" />
      <path d="M6 26h52M6 38h52" />
      <path d="M16 31h8M28 31h14M46 31h6M16 33.500h12M32 33.500h10" />
      <circle cx="12" cy="32" r="2" />
    </svg>
  );
}

export function MonasteryMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M8 54h48" />
      <path d="M12 54V32h40v22" />
      <path d="M16 32V24h32v8" />
      <path d="M22 24v-6h20v6" />
      <path d="M10 32l6-4h32l6 4" />
      <path d="M14 24l8-4h20l8 4" />
      <path d="M28 54V42h8v12" />
      <path d="M32 18v-8" />
      <circle cx="32" cy="9" r="1.500" />
    </svg>
  );
}

/** Simplified endless knot */
export function KnotMotif({ className, strokeWidth = 1.4 }: MotifProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M20 14h24l6 6v8l-6 6h-8l-6-6" />
      <path d="M44 50H20l-6-6v-8l6-6h8l6 6" />
      <path d="M14 36V20l6-6" />
      <path d="M50 28v16l-6 6" />
    </svg>
  );
}

const map: Record<Motif, (p: MotifProps) => React.JSX.Element> = {
  lotus: LotusMotif,
  wheel: WheelMotif,
  mountain: MountainMotif,
  lamp: LampMotif,
  manuscript: ManuscriptMotif,
  monastery: MonasteryMotif,
  knot: KnotMotif,
};

export function MotifIcon({
  motif,
  ...props
}: MotifProps & { motif: Motif }) {
  const Cmp = map[motif];
  return <Cmp {...props} />;
}
