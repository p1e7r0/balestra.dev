import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { identity } from "@/data/cv";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://balestra.dev";
const SITE_TITLE = "Pietro Balestra — Senior Software Engineer · Switzerland";
const SITE_DESCRIPTION =
  "Senior software engineer based in Ticino, Switzerland. 11+ years shipping TypeScript/React and Java/Spring Boot in a microservices + microfrontend platform at EOC healthcare. Mobile, computer vision, AR, robotics.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "balestra.dev",
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  publisher: identity.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Pietro",
    lastName: "Balestra",
    username: identity.handle,
    url: SITE_URL,
    siteName: "balestra.dev",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  category: "technology",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  url: SITE_URL,
  email: `mailto:${identity.email}`,
  telephone: identity.phoneTel,
  jobTitle: "Senior Software Engineer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: identity.domicile,
    addressRegion: "Ticino",
    addressCountry: "CH",
  },
  nationality: identity.nation,
  sameAs: [`https://github.com/${identity.github}`],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SUPSI — Scuola universitaria professionale della Svizzera italiana",
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Java",
    "Spring Boot",
    "Microservices",
    "Microfrontends",
    "Computer Vision",
    "Augmented Reality",
    "Robotics",
    "Mobile Development",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data payload
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        {children}
      </body>
    </html>
  );
}
