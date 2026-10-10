/**
 * A map-inspired topographic illustration. It is deliberately NOT a
 * geographic map — it does not claim any real position or distance.
 * Contour rings are drawn deterministically around a single marked place.
 */
export function ContourMap({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const rings = Array.from({ length: 11 }, (_, i) => {
    const r = 34 + i * 26;
    const pts: string[] = [];
    const steps = 90;
    for (let s = 0; s <= steps; s++) {
      const a = (s / steps) * Math.PI * 2;
      const wobble =
        Math.sin(a * 3 + i * 0.6) * (4 + i * 1.6) +
        Math.sin(a * 5 + i * 1.3) * (2 + i * 0.9) +
        Math.sin(a * 2 - i * 0.4) * (3 + i * 1.2);
      const rr = r + wobble;
      pts.push(`${(300 + Math.cos(a) * rr * 1.18).toFixed(1)},${(260 + Math.sin(a) * rr).toFixed(1)}`);
    }
    return `M${pts.join(" L")} Z`;
  });

  return (
    <svg
      viewBox="0 0 600 520"
      role="img"
      aria-label={label}
      className={className}
    >
      <rect width="600" height="520" fill="none" />
      {rings.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#b8923a"
          strokeWidth={i % 4 === 0 ? 1.4 : 0.8}
          opacity={0.18 + (10 - i) * 0.04}
        />
      ))}
      {/* compass tick marks */}
      <g stroke="#7a5a1a" strokeWidth="0.8" opacity="0.5">
        <line x1="300" y1="14" x2="300" y2="34" />
        <line x1="300" y1="486" x2="300" y2="506" />
        <line x1="14" y1="260" x2="34" y2="260" />
        <line x1="566" y1="260" x2="586" y2="260" />
      </g>
      {/* marker */}
      <circle cx="300" cy="260" r="26" fill="none" stroke="#b8923a" strokeWidth="1" opacity="0.6" className="animate-glow" />
      <circle cx="300" cy="260" r="14" fill="none" stroke="#b8923a" strokeWidth="1" />
      <path d="M300 248 312 260 300 272 288 260Z" fill="#7a5a1a" />
    </svg>
  );
}
