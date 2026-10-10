import { cn } from "@/lib/utils";

/** Thin gold divider with a small lotus-diamond at its centre. */
export function GoldDivider({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  const stroke = tone === "light" ? "#d6b566" : "#b8923a";
  return (
    <svg
      viewBox="0 0 320 24"
      className={cn("mx-auto h-6 w-72 max-w-full", className)}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="12" x2="122" y2="12" stroke={stroke} strokeWidth="0.8" opacity="0.8" />
      <line x1="198" y1="12" x2="320" y2="12" stroke={stroke} strokeWidth="0.8" opacity="0.8" />
      <circle cx="128" cy="12" r="1.6" fill={stroke} />
      <circle cx="192" cy="12" r="1.6" fill={stroke} />
      {/* central lotus-diamond */}
      <path d="M160 3 170 12 160 21 150 12Z" fill="none" stroke={stroke} strokeWidth="1" />
      <path d="M160 7 165 12 160 17 155 12Z" fill={stroke} opacity="0.85" />
      <circle cx="140" cy="12" r="1" fill={stroke} opacity="0.7" />
      <circle cx="180" cy="12" r="1" fill={stroke} opacity="0.7" />
    </svg>
  );
}

/** Corner ornaments for parchment frames. Rendered in the four corners of a relatively-positioned parent. */
export function CornerOrnaments({ className }: { className?: string }) {
  const corner = (rot: string, pos: string) => (
    <svg
      viewBox="0 0 40 40"
      className={cn("absolute h-7 w-7", pos, rot, className)}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 38V8c0-3.500 2.500-6 6-6h30" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M8 38V14c0-3 3-6 6-6h24" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      <circle cx="6" cy="6" r="1.600" fill="currentColor" />
    </svg>
  );
  return (
    <>
      {corner("", "left-2 top-2")}
      {corner("rotate-90", "right-2 top-2")}
      {corner("rotate-180", "bottom-2 right-2")}
      {corner("-rotate-90", "bottom-2 left-2")}
    </>
  );
}

/** Rising incense smoke — decorative, calm, disabled for reduced-motion. */
export function IncenseSmoke({
  className,
  count = 4,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-full overflow-hidden", className)}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="smoke-puff"
          style={{
            left: `${12 + (i * 76) / Math.max(count - 1, 1)}%`,
            animationDelay: `${i * 2.3}s`,
            animationDuration: `${8 + (i % 3) * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Soft glowing butter-lamp flame */
export function ButterLamp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" className={cn("h-14 w-10", className)} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="lampglow" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0" stopColor="#f6d98b" stopOpacity="0.9" />
          <stop offset="1" stopColor="#f6d98b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#lampglow)" className="animate-glow" />
      <path
        d="M20 6c3.500 4.500 5 8 2.500 12-1.200 2-3.800 2-5 0C15 14 16.500 10.500 20 6Z"
        fill="#f1c777"
        className="origin-bottom animate-flicker"
      />
      <path d="M8 30h24c0 8-5 13-12 13S8 38 8 30Z" fill="#b8923a" />
      <path d="M13 43h14v5H13z" fill="#8c6a22" />
    </svg>
  );
}
