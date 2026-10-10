import { ImageResponse } from "next/og";

export const alt = "Kyabje Buli Trulku Rinpoche | Life, Lineage & Legacy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg,#13151c 0%,#2d3350 55%,#5a1a20 100%)",
          color: "#f7f0e0",
          fontFamily: "Georgia, serif",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 10, color: "#d6b566", textTransform: "uppercase" }}>
          The Living Lineage
        </div>
        <div style={{ width: 120, height: 2, background: "#b8923a", margin: "34px 0" }} />
        <div style={{ fontSize: 68, letterSpacing: 6, textTransform: "uppercase", lineHeight: 1.15 }}>
          Kyabje Buli Trulku Rinpoche
        </div>
        <div style={{ fontSize: 28, marginTop: 34, fontStyle: "italic", color: "#ead7a3" }}>
          An unbroken journey of compassion, wisdom and devotion
        </div>
      </div>
    ),
    size,
  );
}
