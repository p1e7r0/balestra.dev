import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 96,
          fontWeight: 900,
          letterSpacing: -4,
        }}
      >
        <span style={{ color: "#8aa89a" }}>&gt;</span>
        <span style={{ color: "#39ff14" }}>P</span>
        <span style={{ color: "#e8f5ec" }}>_</span>
      </div>
    ),
    { ...size },
  );
}
