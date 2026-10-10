import { useId } from "react";

/**
 * An original, code-drawn Himalayan landscape used wherever the story needs
 * "mountain imagery" before real photographs are added. Deterministic (no
 * Math.random) so server and client render identically.
 */

const W = 1600;
const H = 900;

interface Ridge {
  base: number;
  amp: number;
  seed: number;
  sharp: number; // 0 = soft hills, 1 = jagged peaks
}

function ridgePath(ridge: Ridge) {
  const pts: string[] = [];
  const step = 16;
  for (let x = 0; x <= W; x += step) {
    pts.push(`${x},${ridgeY(x, ridge).toFixed(1)}`);
  }
  return `M0,${H} L${pts.join(" L")} L${W},${H} Z`;
}

function ridgeY(x: number, { base, amp, seed, sharp }: Ridge) {
  const t = x / W;
  const soft =
    Math.sin(t * 5.1 + seed) * 0.5 +
    Math.sin(t * 11.3 + seed * 2.1) * 0.28 +
    Math.sin(t * 23.7 + seed * 3.7) * 0.12;
  const jag =
    (1 - Math.abs(Math.sin(t * 6.2 + seed))) * 0.62 +
    (1 - Math.abs(Math.sin(t * 13.9 + seed * 1.7))) * 0.28 +
    Math.sin(t * 31 + seed) * 0.05 -
    0.45;
  const h = soft * (1 - sharp) + jag * sharp;
  return base - h * amp;
}

type Variant = "dawn" | "dusk" | "mist";

const palettes: Record<
  Variant,
  {
    skyTop: string;
    skyMid: string;
    skyLow: string;
    sun: string;
    far: [string, string];
    mid: string;
    near: string;
    front: string;
  }
> = {
  dawn: {
    skyTop: "#10131c",
    skyMid: "#2d3350",
    skyLow: "#c98a4b",
    sun: "#f1c777",
    far: ["#d8dde6", "#43556b"],
    mid: "#2b3a4d",
    near: "#1d2733",
    front: "#10151d",
  },
  dusk: {
    skyTop: "#0c0f17",
    skyMid: "#2a2440",
    skyLow: "#8a4a45",
    sun: "#e0a35e",
    far: ["#bcc4d2", "#3a4860"],
    mid: "#252f42",
    near: "#18202c",
    front: "#0d1118",
  },
  mist: {
    skyTop: "#27394b",
    skyMid: "#5d7487",
    skyLow: "#d2c3a1",
    sun: "#f4e3b8",
    far: ["#eef1f4", "#6b8194"],
    mid: "#4c6377",
    near: "#33475a",
    front: "#223140",
  },
};

export function HimalayaScene({
  variant = "dawn",
  monastery = true,
  className,
  mistLayers = true,
}: {
  variant?: Variant;
  monastery?: boolean;
  className?: string;
  mistLayers?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const p = palettes[variant];

  const far = { base: 560, amp: 330, seed: 1.3, sharp: 0.95 };
  const mid = { base: 650, amp: 250, seed: 4.1, sharp: 0.7 };
  const near = { base: 735, amp: 150, seed: 2.2, sharp: 0.3 };
  const front = { base: 820, amp: 90, seed: 5.6, sharp: 0.05 };

  // Place a small monastery on the "near" ridge
  const mx = 1130;
  const my = ridgeY(mx, near) + 6;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.skyTop} />
          <stop offset="0.55" stopColor={p.skyMid} />
          <stop offset="1" stopColor={p.skyLow} />
        </linearGradient>
        <radialGradient id={`sun-${uid}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={p.sun} stopOpacity="0.95" />
          <stop offset="0.35" stopColor={p.sun} stopOpacity="0.35" />
          <stop offset="1" stopColor={p.sun} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`snow-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.far[0]} />
          <stop offset="0.5" stopColor={p.far[1]} />
          <stop offset="1" stopColor={p.mid} />
        </linearGradient>
        <linearGradient id={`mistg-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4ead2" stopOpacity="0" />
          <stop offset="0.5" stopColor="#f4ead2" stopOpacity="0.2" />
          <stop offset="1" stopColor="#f4ead2" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width={W} height={H} fill={`url(#sky-${uid})`} />

      {/* Stars — only for the darker variants */}
      {variant !== "mist" &&
        Array.from({ length: 46 }, (_, i) => {
          const x = (i * 197.3) % W;
          const y = (i * 83.7) % 300;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 7 === 0 ? 1.6 : 0.9}
              fill="#f4ead2"
              opacity={0.25 + ((i * 13) % 50) / 100}
            />
          );
        })}

      {/* Sun glow behind the far peaks */}
      <circle cx="560" cy="520" r="360" fill={`url(#sun-${uid})`} />
      <circle cx="560" cy="520" r="42" fill={p.sun} opacity="0.9" />

      <path d={ridgePath(far)} fill={`url(#snow-${uid})`} />

      {mistLayers && (
        <g className="origin-center animate-drift-slow">
          <rect x="-200" y="470" width={W + 400} height="150" fill={`url(#mistg-${uid})`} />
        </g>
      )}

      <path d={ridgePath(mid)} fill={p.mid} />

      {mistLayers && (
        <g className="origin-center animate-drift">
          <rect x="-200" y="600" width={W + 400} height="130" fill={`url(#mistg-${uid})`} />
        </g>
      )}

      <path d={ridgePath(near)} fill={p.near} />

      {monastery && (
        <g transform={`translate(${mx} ${my})`} fill={p.front}>
          {/* terraced dzong silhouette */}
          <rect x="-86" y="-34" width="172" height="40" />
          <rect x="-66" y="-62" width="132" height="30" />
          <rect x="-42" y="-88" width="84" height="28" />
          {/* roofs */}
          <path d="M-96 -34 -80 -46H80L96 -34Z" />
          <path d="M-76 -62 -62 -72H62L76 -62Z" />
          <path d="M-52 -88 -40 -98H40L52 -88Z" />
          {/* golden finials */}
          <path d="M-8 -98 0 -118 8 -98Z" fill="#d6b566" />
          <rect x="-1.500" y="-128" width="3" height="12" fill="#d6b566" />
          <rect x="-96" y="-37" width="192" height="3" fill="#b8923a" opacity="0.8" />
          <rect x="-76" y="-65" width="152" height="3" fill="#b8923a" opacity="0.8" />
          {/* lit windows */}
          {[-60, -36, -12, 12, 36, 60].map((x) => (
            <rect key={x} x={x - 3} y="-22" width="6" height="9" fill="#f1c777" opacity="0.85" className="animate-glow" />
          ))}
          {[-40, -14, 14, 40].map((x) => (
            <rect key={x} x={x - 3} y="-52" width="6" height="8" fill="#f1c777" opacity="0.7" className="animate-glow" />
          ))}
        </g>
      )}

      <path d={ridgePath(front)} fill={p.front} />
    </svg>
  );
}

/** A quiet line of muted prayer flags, drawn across the top of a section. */
export function PrayerFlags({ className }: { className?: string }) {
  const colors = ["#4f7ea3", "#e9e2d0", "#a8402f", "#4f8a63", "#d3a640"];
  const count = 31;
  return (
    <svg
      viewBox="0 0 1600 90"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 14 Q 800 74 1600 14" fill="none" stroke="#b8923a" strokeWidth="1.2" opacity="0.7" />
      {Array.from({ length: count }, (_, i) => {
        const t = (i + 0.5) / count;
        const x = t * 1600;
        const y = 14 + 4 * 60 * t * (1 - t);
        const c = colors[i % 5];
        return (
          <path
            key={i}
            d={`M${x - 15} ${y + 2} L${x + 15} ${y + 2} L${x + 14} ${y + 30} L${x - 14} ${y + 30} Z`}
            fill={c}
            opacity="0.42"
          />
        );
      })}
    </svg>
  );
}
