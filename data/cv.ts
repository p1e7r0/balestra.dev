export type StackTier = "primary" | "supporting" | "legacy";

export type StackItem = { name: string; percent: number; tier: StackTier };

export type DomainCard = { icon: string; title: string; description: string };

export type Locale = {
  language: string;
  level: string;
  filled: number;
  total: number;
};

export type ExperienceEntry = {
  dateRange: string;
  sideLabel: string;
  sideLabelColor?: "accent" | "warn" | "dim";
  title: string;
  company: string;
  address: string;
  role: string;
  stack: Array<{ label: string; alt?: boolean }>;
  dim?: boolean;
};

export type EducationCard = {
  badge: string;
  dateRange: string;
  title: string;
  institution: string;
  detail: string;
  span?: boolean;
};

export const identity = {
  name: "Pietro Balestra",
  handle: "BALESTRA.DEV",
  title: "Software Engineer",
  scope: "Microfrontend & Microservices Architecture in Healthcare Platforms",
  coordinates: "32°10'15.2\"N 110°51'18.7\"W",
  locationCode: "CH-TI",
  domicile: "Sementina",
  timezone: "CET+00",
  phone: "+41 79 443 49 65",
  phoneTel: "+41794434965",
  email: "pietro@balestra.dev",
  github: "p1e7r0",
  address: "Vicolo Toppie 6 / 6954 Sementina / CH",
  nation: "Swiss",
  dateOfBirth: "07.01.1991",
  idLine: "ID//CH-1991-07-01",
  affiliation: "CH / SUPSI ALUMNI",
  tagline:
    "Senior software engineer at EOC since 2019, shipping TypeScript/React front ends and Java/Spring Boot services in a microservices + microfrontends architecture for Swiss healthcare. In parallel, founder & CTO of Rentobuy.ch.",
};

export const stackItems: StackItem[] = [
  { name: "TypeScript / React", percent: 95, tier: "primary" },
  { name: "Java / Spring Boot", percent: 90, tier: "primary" },
  { name: "Module Federation 2.0", percent: 90, tier: "primary" },
  { name: "Next.js", percent: 80, tier: "primary" },
  { name: "Electron", percent: 75, tier: "primary" },
  { name: "JavaScript", percent: 90, tier: "supporting" },
  { name: "HTML / CSS", percent: 88, tier: "supporting" },
  { name: "SQL", percent: 82, tier: "supporting" },
  { name: "C / C++", percent: 80, tier: "legacy" },
];

const ACTIVE_SINCE_YEAR = 2015;
const ACTIVE_SINCE_MONTH = 10;

function computeYearsActive(): number {
  const now = new Date();
  const years = now.getFullYear() - ACTIVE_SINCE_YEAR;
  return now.getMonth() + 1 < ACTIVE_SINCE_MONTH ? years - 1 : years;
}

export const domains: DomainCard[] = [
  {
    icon: "◆",
    title: "Healthcare Platforms",
    description:
      "Production clinical systems for a Swiss cantonal hospital group since 2019. Patient admission and discharge, ward management, billing, clinical coding — delivered as microservices behind a microfrontends shell.",
  },
  {
    icon: "◎",
    title: "Microfrontend Architecture",
    description:
      "Module Federation 2.0 at production scale. Compatibility enforcement, resiliency, caching, dynamic remote loading — the unglamorous tooling that keeps a multi-team federated frontend from breaking in production.",
  },
  {
    icon: "◈",
    title: "Full-stack Web",
    description:
      "React + TypeScript on the front, Java and Spring Boot on the back. REST API design, authentication, behavior testing for legacy integration, continuous delivery.",
  },
  {
    icon: "◇",
    title: "Founder-mode Product",
    description:
      "Founder & CTO of Rentobuy.ch — a rent-to-buy real estate platform for the Italian-Swiss market. Owning product shape, Next.js architecture, SEO-driven acquisition, and Swiss legal framing (CO Art. 216/216a) end to end.",
  },
];

export const locales: Locale[] = [
  { language: "Italian", level: "MOTHER_TONGUE", filled: 5, total: 5 },
  { language: "English", level: "B2 // FCE", filled: 4, total: 5 },
  { language: "French", level: "B1", filled: 3, total: 5 },
  { language: "German", level: "B1", filled: 3, total: 5 },
];

export const experience: ExperienceEntry[] = [
  {
    dateRange: "[2025.10 → NOW]",
    sideLabel: "● ACTIVE",
    sideLabelColor: "warn",
    title: "Founder & CTO",
    company: "Rentobuy.ch",
    address: "Switzerland",
    role: "Rent-to-buy real estate platform for the Italian-Swiss market. Owning product, architecture, and engineering. Swiss legal framework (CO Art. 216/216a), SEO-driven acquisition, Next.js platform.",
    stack: [
      { label: "Next.js" },
      { label: "React" },
      { label: "TypeScript" },
      { label: "SEO", alt: true },
      { label: "Founder", alt: true },
      { label: "Architecture", alt: true },
    ],
  },
  {
    dateRange: "[2019.01 → NOW]",
    sideLabel: "● ACTIVE",
    sideLabelColor: "warn",
    title: "Senior Software Engineer",
    company: "EOC — Ente Ospedaliero Cantonale",
    address: "Ticino, Switzerland",
    role: "Full-stack engineering inside a microservices / microfrontends platform. TypeScript + React on the front; Java + Spring Boot services on the back. Production healthcare systems, distributed architecture, continuous delivery.",
    stack: [
      { label: "TypeScript" },
      { label: "React" },
      { label: "Java" },
      { label: "Spring Boot" },
      { label: "Microservices", alt: true },
      { label: "Microfrontends", alt: true },
    ],
  },
  {
    dateRange: "[2017.09 → 2021.12]",
    sideLabel: "~3 YR",
    title: "Freelance Software Engineer",
    company: "Ander Group SA",
    address: "Agno, Switzerland",
    role: "Mobile application engineering on a freelance contract. Built Java back ends and web front ends against established product pipelines.",
    stack: [
      { label: "Java" },
      { label: "JavaScript" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "Freelance", alt: true },
    ],
  },
  {
    dateRange: "[2017.06 → 2017.10]",
    sideLabel: "05 MO",
    title: "Summer R&D Engineer — Machine Vision",
    company: "Globotics SA",
    address: "Bellinzona, Switzerland",
    role: "R&D on a machine-vision system driving a robotic welding torch. Closed-loop image analysis, calibration, and real-time actuation.",
    stack: [
      { label: "C" },
      { label: "C++" },
      { label: "Computer Vision", alt: true },
      { label: "Robotics", alt: true },
    ],
  },
  {
    dateRange: "[2015.10 → 2017.08]",
    sideLabel: "~2 YR",
    title: "Software Engineer / Project Manager",
    company: "Goodcode GmbH",
    address: "Agno, Switzerland",
    role: "Led development on mobile, augmented-reality, and computer-vision projects. Planned sprints, owned architecture, and wrote production code across Java, C/C++, and JS/HTML/CSS. Full-stack mobile delivery with Java services and release coordination.",
    stack: [
      { label: "Java" },
      { label: "C" },
      { label: "C++" },
      { label: "JavaScript" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "AR", alt: true },
      { label: "Computer Vision", alt: true },
      { label: "PM", alt: true },
    ],
  },
  {
    dateRange: "[2013.06 → 2013.09]",
    sideLabel: "04 MO",
    title: "Research Intern",
    company: "SarMAP",
    address: "Purasca, Switzerland",
    role: "Scientific software internship — geospatial / remote-sensing workflows.",
    stack: [{ label: "C++" }, { label: "IDL" }],
    dim: true,
  },
  {
    dateRange: "[2006.09 → 2010.06]",
    sideLabel: "04 YR",
    title: "Operatore in automazione",
    company: "SAMB — Scuola d'Arte e Mestieri",
    address: "Bellinzona, Switzerland",
    role: "Automation-technician training. Hands-on foundation across PLCs, electronics, and control systems — the bedrock under every line of code since.",
    stack: [
      { label: "Automation", alt: true },
      { label: "PLC", alt: true },
      { label: "Electronics", alt: true },
    ],
    dim: true,
  },
];

export const education: EducationCard[] = [
  {
    badge: "PENDING",
    dateRange: "[2016.11]",
    title: "M.Sc. Engineering — ICT",
    institution: "SUPSI // DTI — Manno, Switzerland",
    detail: "Master of Science in Engineering (MSE)",
  },
  {
    badge: "CRS",
    dateRange: "[2021.03]",
    title: "Spring Boot Training",
    institution: "42talents GmbH",
    detail: "Professional training — Spring Boot",
  },
  {
    badge: "CERT",
    dateRange: "[2015.04 → 2015.07]",
    title: "First Certificate in English",
    institution: "English Language Center — Vancouver, CA",
    detail: "Level B2 // Cambridge FCE",
  },
  {
    badge: "B.Sc.",
    dateRange: "[2011.09 → 2014.06]",
    title: "B.Sc. Ingegneria Informatica",
    institution: "SUPSI // DTI — Manno, Switzerland",
    detail: "Bachelor of Science in Computer Science (BSc)",
  },
  {
    badge: "MPT",
    dateRange: "[2010.09 → 2011.06]",
    title: "Maturità Professionale Tecnica",
    institution: "CPQ — Trevano, Switzerland",
    detail: "Technical Vocational Maturity",
  },
  {
    badge: "AFC",
    dateRange: "[2006.09 → 2010.06]",
    title: "Operatore in Automazione — AFC",
    institution: "Scuola d'Arte e Mestieri — Bellinzona, Switzerland",
    detail: "Federal Automation Technician Certificate",
  },
];

export const award = {
  label: "◆ HONOR //\nSWEN.2014",
  title: "Premio SWEN 2014 — Software Engineering Network",
  subtitle:
    'Thesis: "Analisi di immagini per ambienti di videosorveglianza intelligenti" — Università della Svizzera Italiana (USI), Lugano',
  year: "2015",
};

export const kpis = [
  {
    label: "Years.active",
    value: String(computeYearsActive()).padStart(2, "0"),
    unit: "y",
    caption: "since '15",
  },
  {
    label: "Stack",
    value: String(stackItems.length).padStart(2, "0"),
    unit: "",
    caption: "TS to C",
  },
  {
    label: "Engagements",
    value: String(experience.length).padStart(2, "0"),
    unit: "",
    caption: "2006 → now",
  },
  { label: "Award", value: "01", unit: "", caption: "awarded '15" },
];

export const bootLines: Array<{ html: string; delay: number }> = [
  {
    html: '<span class="prompt">boot</span> <span class="dim">--profile=p1e7r0 --mode=cv</span>',
    delay: 120,
  },
  {
    html: '<span class="tag">[OK]</span> kernel.init .................................. <span class="ok">load</span>',
    delay: 90,
  },
  {
    html: '<span class="tag">[OK]</span> mount /dev/ticino ............................. <span class="ok">ok</span>',
    delay: 90,
  },
  {
    html: '<span class="tag">[OK]</span> link supsi.dti.edu ............................ <span class="ok">200</span>',
    delay: 110,
  },
  {
    html: '<span class="tag">[SYS]</span> loading identity package ..................... <span class="ok">✓</span>',
    delay: 120,
  },
  { html: "      name    : Pietro Balestra", delay: 70 },
  { html: "      nation  : Swiss / Ticino", delay: 70 },
  { html: "      edu     : B.Sc. ICT — SUPSI '14", delay: 80 },
  {
    html: "      domain  : healthcare / microfrontends / microservices / computer vision / robotics",
    delay: 80,
  },
  {
    html: `<span class="tag">[NET]</span> scanning stack ............................. <span class="bar"><span></span></span> <span class="ok">${stackItems.length} pkg</span>`,
    delay: 140,
  },
  {
    html: `      ${stackItems
      .filter((item) => item.tier !== "legacy")
      .map((item) => item.name.split(" / ")[0])
      .join(" · ")}`,
    delay: 80,
  },
  {
    html: '<span class="tag">[OK]</span> decrypt credentials ........................... <span class="ok">✓</span>',
    delay: 100,
  },
  {
    html: '<span class="tag">[OK]</span> establish uplink to recruiter ................. <span class="ok">LISTEN :443</span>',
    delay: 100,
  },
  { html: "", delay: 40 },
  {
    html: '<span class="prompt">ready</span><span class="dim"> — type / or press [G S E D C] to jump</span>',
    delay: 60,
  },
];
