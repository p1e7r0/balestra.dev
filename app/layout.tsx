import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BALESTRA.P // SYS.CV",
  description:
    "Pietro Balestra — software engineer shipping TypeScript/React and Java/Spring Boot across healthcare microservices + microfrontends at EOC since 2019. M.Sc. ICT (SUPSI).",
  metadataBase: new URL("https://balestra.dev"),
  openGraph: {
    title: "BALESTRA.P // SYS.CV",
    description:
      "Cyberpunk HUD CV — software engineer operating at the seam of healthcare platforms, mobile systems, and computer vision.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
