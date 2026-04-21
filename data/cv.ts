export type StackLanguage = { name: string; percent: number };

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
  scope: "Mobile + CV + Robotics",
  coordinates: "46.0488°N / 8.9417°E",
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
    "Senior software engineer operating at the seam of healthcare platforms. Shipping TypeScript/React front ends and Java/Spring Boot services in a microservices + microfrontend architecture at EOC since 2019.",
};

export const kpis = [
  { label: "Years.active", value: "11", unit: "y", caption: "since '13" },
  { label: "Languages", value: "14", unit: "+", caption: "TS to C" },
  { label: "Engagements", value: "07", unit: "", caption: "2013 → now" },
  { label: "Award", value: "01", unit: "", caption: "SWEN '15" },
];

export const stackLanguages: StackLanguage[] = [
  { name: "TypeScript / React", percent: 95 },
  { name: "Java / Spring Boot", percent: 93 },
  { name: "C / C++", percent: 88 },
  { name: "JavaScript", percent: 90 },
  { name: "Qt", percent: 80 },
  { name: "HTML / CSS", percent: 88 },
  { name: "SQL", percent: 82 },
  { name: "C#", percent: 72 },
  { name: "Python", percent: 70 },
  { name: "Jira", percent: 65 },
];

export const domains: DomainCard[] = [
  {
    icon: "◆",
    title: "Mobile",
    description:
      "Native Android/Java pipelines. Field-grade clients, offline sync, background services, OTA updates.",
  },
  {
    icon: "◎",
    title: "Computer Vision",
    description:
      "Machine-vision loop for robotic weld torches. Real-time image analysis, calibration, fiducial tracking.",
  },
  {
    icon: "◈",
    title: "AR / Tracking",
    description:
      "Marker + markerless AR overlays for industrial HMIs. Sensor fusion and pose estimation.",
  },
  {
    icon: "◇",
    title: "Web Services",
    description:
      "Java EE + Spring back ends. REST surfaces, auth, deployment pipelines, database modeling.",
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
    title: "Rentobuy.ch",
    company: "Switzerland · Chief Technology Officer",
    role: "Technology lead for rentobuy.ch. Owning architecture, platform direction, and engineering practice from the ground up.",
    stack: [
      { label: "CTO", alt: true },
      { label: "Platform", alt: true },
      { label: "Architecture", alt: true },
    ],
  },
  {
    dateRange: "[2019.01 → NOW]",
    sideLabel: "● ACTIVE",
    sideLabelColor: "warn",
    title: "EOC — Ente Ospedaliero Cantonale",
    company: "Ticino, Switzerland · Software Engineer",
    role: "Full-stack engineering inside a microservices / microfrontend platform. TypeScript + React on the front; Java + Spring Boot services on the back. Production healthcare systems, distributed architecture, continuous delivery.",
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
    dateRange: "[2017.09 → 2020]",
    sideLabel: "~3 YR",
    title: "Ander Group SA",
    company: "Agno, Switzerland · Freelance Software Engineer",
    role: "Mobile application engineering on a freelance contract. Built Java EE back ends and web front ends against established product pipelines.",
    stack: [
      { label: "Java EE" },
      { label: "JavaScript" },
      { label: "HTML" },
      { label: "CSS" },
      { label: "Freelance", alt: true },
    ],
  },
  {
    dateRange: "[2017.06 → 2017.10]",
    sideLabel: "05 MO",
    title: "Globotics SA",
    company: "Bellinzona, Switzerland · R&D Engineer",
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
    title: "Goodcode GmbH",
    company: "Agno, Switzerland · Software Engineer / Project Manager",
    role: "Led development on mobile, augmented-reality, and computer-vision projects. Planned sprints, owned architecture, and wrote production code across Java, C/C++, and JS/HTML/CSS. Full-stack mobile delivery with Java EE services and release coordination.",
    stack: [
      { label: "Java" },
      { label: "Java EE" },
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
    title: "SarMAP",
    company: "Purasca, Switzerland · Internship",
    role: "Scientific software internship — geospatial / remote-sensing workflows.",
    stack: [{ label: "C++" }, { label: "IDL" }],
    dim: true,
  },
  {
    dateRange: "[2006.09 → 2010.06]",
    sideLabel: "04 YR",
    title: "SAMB — Scuola d'Arte e Mestieri",
    company: "Bellinzona, Switzerland · Operatore in automazione",
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
    badge: "M.Sc.",
    dateRange: "[2014.09]",
    title: "M.Sc. Engineering — ICT",
    institution: "SUPSI // DTI — Manno, Switzerland",
    detail: "Info & Communication Technologies",
  },
  {
    badge: "B.Sc.",
    dateRange: "[2011.09 → 2014.06]",
    title: "B.Sc. Ingegneria Informatica",
    institution: "SUPSI // DTI — Manno, Switzerland",
    detail: "Computer Engineering",
  },
  {
    badge: "CERT",
    dateRange: "[2015.04 → 2015.07]",
    title: "First Certificate in English",
    institution: "English Language Center — Vancouver, CA",
    detail: "Level B2 // Cambridge FCE",
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
    span: true,
  },
];

export const award = {
  label: "◆ HONOR //\nSWEN.2014",
  title: "Premio SWEN 2014 — Software Engineering Network",
  subtitle:
    'Thesis: "Analisi di immagini per ambienti di videosorveglianza intelligenti" — Università della Svizzera Italiana (USI), Lugano',
  year: "2015",
};

export const bootLines: Array<{ html: string; delay: number }> = [
  {
    html: '<span class="prompt">boot</span> <span class="dim">--profile=balestra.p --mode=cv</span>',
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
  { html: "      edu     : M.Sc. ICT — SUPSI '14", delay: 80 },
  { html: "      domain  : healthcare / web / cv / ar / robotics", delay: 80 },
  {
    html: '<span class="tag">[NET]</span> scanning stack ............................. <span class="bar"><span></span></span> <span class="ok">14 pkg</span>',
    delay: 140,
  },
  {
    html: "      TS · React · Java · Spring Boot · C · C++ · Qt · JS · HTML · CSS · SQL · Py · C# · PHP",
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
