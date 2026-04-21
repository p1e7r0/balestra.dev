import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageAlt = "Pietro Balestra — Senior Software Engineer · Switzerland";
export const ogImageContentType = "image/png";

const COLOR_BACKGROUND = "#000000";
const COLOR_PANEL = "#0a0f0d";
const COLOR_INK = "#e8f5ec";
const COLOR_INK_DIM = "#8aa89a";
const COLOR_ACCENT = "#39ff14";
const COLOR_WARN = "#ffb800";
const COLOR_DANGER = "#ff3b6b";
const COLOR_HAIR = "rgba(57, 255, 20, 0.22)";
const COLOR_GRID = "rgba(57, 255, 20, 0.08)";

const JETBRAINS_MONO_REGULAR_URL =
  "https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf";
const JETBRAINS_MONO_BOLD_URL =
  "https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Bold.ttf";

async function loadFont(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);
  return response.arrayBuffer();
}

export async function renderOgImage(): Promise<ImageResponse> {
  const [regular, bold] = await Promise.all([
    loadFont(JETBRAINS_MONO_REGULAR_URL),
    loadFont(JETBRAINS_MONO_BOLD_URL),
  ]);

  return new ImageResponse(<OgImageMarkup />, {
    ...ogImageSize,
    fonts: [
      { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
      { name: "JetBrains Mono", data: bold, weight: 700, style: "normal" },
    ],
  });
}

function OgImageMarkup() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: COLOR_BACKGROUND,
        color: COLOR_INK,
        fontFamily: "JetBrains Mono",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(${COLOR_GRID} 1px, transparent 1px), linear-gradient(90deg, ${COLOR_GRID} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "18px 32px",
          borderBottom: `1px solid ${COLOR_HAIR}`,
          fontSize: 18,
          color: COLOR_INK_DIM,
          letterSpacing: 2,
        }}
      >
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 12, height: 12, background: COLOR_DANGER, borderRadius: 999 }} />
          <div style={{ width: 12, height: 12, background: COLOR_WARN, borderRadius: 999 }} />
          <div style={{ width: 12, height: 12, background: COLOR_ACCENT, borderRadius: 999 }} />
        </div>
        <div style={{ display: "flex", marginLeft: 20 }}>BALESTRA.DEV // SYS.CV</div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "44px 64px 56px 64px",
          gap: 24,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", color: COLOR_ACCENT, fontSize: 22 }}>
          &gt; pietro@balestra.dev
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            color: COLOR_ACCENT,
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          <div style={{ display: "flex" }}>PIETRO</div>
          <div style={{ display: "flex" }}>
            <span>BALESTRA</span>
            <span style={{ color: COLOR_INK }}>_</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div style={{ display: "flex", fontSize: 30, color: COLOR_INK }}>
            Senior Software Engineer
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: COLOR_INK_DIM,
              letterSpacing: 2,
            }}
          >
            SEMENTINA · TICINO · SWITZERLAND
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 64,
            display: "flex",
            fontSize: 18,
            color: COLOR_INK_DIM,
            letterSpacing: 3,
          }}
        >
          balestra.dev
        </div>
      </div>
    </div>
  );
}

function OgImageKpi({
  label,
  value,
  unit,
  caption,
}: {
  label: string;
  value: string;
  unit: string;
  caption: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${COLOR_HAIR}`,
        background: COLOR_PANEL,
        padding: "14px 24px",
        minWidth: 220,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 12,
          color: COLOR_INK_DIM,
          letterSpacing: 2,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", marginTop: 6 }}>
        <span style={{ fontSize: 60, fontWeight: 700, color: COLOR_ACCENT, lineHeight: 1 }}>
          {value}
        </span>
        <span style={{ fontSize: 24, color: COLOR_INK_DIM, marginLeft: 6 }}>{unit}</span>
      </div>
      <div style={{ display: "flex", fontSize: 12, color: COLOR_INK_DIM, marginTop: 4 }}>
        {caption}
      </div>
    </div>
  );
}
