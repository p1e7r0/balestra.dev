export const identity = {
  name: "Pietro Balestra",
  firstName: "PIETRO",
  lastName: "BALESTRA",
  idTag: "ID//CH-1991-07-01",
  origin: "CH / SUPSI ALUMNI",
  role: "Software Engineer // Mobile + CV + Robotics",
  tagline:
    "Senior software engineer operating at the seam of healthcare platforms, mobile systems, and computer vision. M.Sc. ICT (SUPSI). Shipping TypeScript/React front ends and Java/Spring Boot services in a microservices + microfrontend architecture at EOC since 2019.",
  email: "pie.balestra@gmail.com",
  phone: "+41 79 443 49 65",
  phoneDial: "+41794434965",
  skype: "pie.balestra",
  address: "C.P. 7 / 6954 Bigorio / CH",
  nationality: "Swiss",
  dob: "07.01.1991",
  coords: "46.0488°N / 8.9417°E",
  loc: "CH-TI",
} as const;

export type Kpi = { label: string; value: string; unit?: string; sub: string };
export const kpis: readonly Kpi[] = [
  { label: "Years.active", value: "11", unit: "y", sub: "since '13" },
  { label: "Languages", value: "14", unit: "+", sub: "TS to C" },
  { label: "Engagements", value: "07", sub: "2013 → now" },
  { label: "Award", value: "01", sub: "SWEN '15" },
];

export type Skill = { id: string; name: string; pct: number };
export const skills: readonly Skill[] = [
  { id: "00", name: "TypeScript / React", pct: 95 },
  { id: "01", name: "Java / Spring Boot", pct: 93 },
  { id: "02", name: "C / C++", pct: 88 },
  { id: "03", name: "JavaScript", pct: 90 },
  { id: "04", name: "Qt", pct: 80 },
  { id: "05", name: "HTML / CSS", pct: 88 },
  { id: "06", name: "SQL", pct: 82 },
  { id: "07", name: "C#", pct: 72 },
  { id: "08", name: "Python", pct: 70 },
  { id: "09", name: "PHP", pct: 65 },
];

export type Domain = { ico: string; name: string; body: string };
export const domains: readonly Domain[] = [
  {
    ico: "◆",
    name: "Mobile",
    body: "Native Android/Java pipelines. Field-grade clients, offline sync, background services, OTA updates.",
  },
  {
    ico: "◎",
    name: "Computer Vision",
    body: "Machine-vision loop for robotic weld torches. Real-time image analysis, calibration, fiducial tracking.",
  },
  {
    ico: "◈",
    name: "AR / Tracking",
    body: "Marker + markerless AR overlays for industrial HMIs. Sensor fusion and pose estimation.",
  },
  {
    ico: "◇",
    name: "Web Services",
    body: "Java EE + Spring back ends. REST surfaces, auth, deployment pipelines, database modeling.",
  },
];

export type Locale = { language: string; level: string; dots: number };
export const locales: readonly Locale[] = [
  { language: "Italian", level: "MOTHER_TONGUE", dots: 5 },
  { language: "English", level: "B2 // FCE", dots: 4 },
  { language: "French", level: "B1", dots: 3 },
  { language: "German", level: "B1", dots: 3 },
];

export type ExperienceEntry = {
  date: string;
  duration: string;
  durationWarn?: boolean;
  dim?: boolean;
  title: string;
  company: string;
  role: string;
  stack: readonly { label: string; alt?: boolean }[];
};
export const experiences: readonly ExperienceEntry[] = [
  {
    date: "[2019 → NOW]",
    duration: "● ACTIVE",
    durationWarn: true,
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
    date: "[2017.09 → 2020]",
    duration: "~3 YR",
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
    date: "[2017.06 → 2017.10]",
    duration: "05 MO",
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
    date: "[2016.10 → 2017.08]",
    duration: "11 MO",
    title: "Goodcode GmbH",
    company: "Agno, Switzerland · Software Engineer / Project Manager",
    role: "Led development on mobile, augmented-reality, and computer-vision projects. Planned sprints, owned architecture, and wrote production code across Java and C/C++.",
    stack: [
      { label: "Java" },
      { label: "C" },
      { label: "C++" },
      { label: "AR", alt: true },
      { label: "Computer Vision", alt: true },
      { label: "PM", alt: true },
    ],
  },
  {
    date: "[2015.10 → 2016.09]",
    duration: "12 MO",
    title: "Flexenergy SA",
    company: "Agno, Switzerland · Software Engineer",
    role: "Full-stack mobile app delivery. Java EE services, JS/HTML/CSS front ends, and release coordination.",
    stack: [
      { label: "Java EE" },
      { label: "JavaScript" },
      { label: "HTML" },
      { label: "CSS" },
    ],
  },
  {
    date: "[2013.06 → 2013.09]",
    duration: "04 MO",
    dim: true,
    title: "SarMAP",
    company: "Purasca, Switzerland · Internship",
    role: "Scientific software internship — geospatial / remote-sensing workflows.",
    stack: [{ label: "C++" }, { label: "IDL" }],
  },
  {
    date: "[2006.09 → 2010.06]",
    duration: "04 YR",
    dim: true,
    title: "SAMB — Scuola d'Arte e Mestieri",
    company: "Bellinzona, Switzerland · Operatore in automazione",
    role: "Automation-technician training. Hands-on foundation across PLCs, electronics, and control systems — the bedrock under every line of code since.",
    stack: [
      { label: "Automation", alt: true },
      { label: "PLC", alt: true },
      { label: "Electronics", alt: true },
    ],
  },
];

export type EducationEntry = {
  badge: string;
  date: string;
  title: string;
  institution: string;
  location: string;
  span?: boolean;
};
export const education: readonly EducationEntry[] = [
  {
    badge: "M.Sc.",
    date: "[2014.09]",
    title: "M.Sc. Engineering — ICT",
    institution: "SUPSI // DTI — Manno, Switzerland",
    location: "Info & Communication Technologies",
  },
  {
    badge: "B.Sc.",
    date: "[2011.09 → 2014.06]",
    title: "B.Sc. Ingegneria Informatica",
    institution: "SUPSI // DTI — Manno, Switzerland",
    location: "Computer Engineering",
  },
  {
    badge: "CERT",
    date: "[2015.04 → 2015.07]",
    title: "First Certificate in English",
    institution: "English Language Center — Vancouver, CA",
    location: "Level B2 // Cambridge FCE",
  },
  {
    badge: "MPT",
    date: "[2010.09 → 2011.06]",
    title: "Maturità Professionale Tecnica",
    institution: "CPQ — Trevano, Switzerland",
    location: "Technical Vocational Maturity",
  },
  {
    badge: "AFC",
    date: "[2006.09 → 2010.06]",
    title: "Operatore in Automazione — AFC",
    institution: "Scuola d'Arte e Mestieri — Bellinzona, Switzerland",
    location: "Federal Automation Technician Certificate",
    span: true,
  },
];

export const award = {
  tag: "◆ HONOR //\nSWEN.2014",
  title: "Premio SWEN 2014 — Software Engineering Network",
  thesis:
    'Thesis: "Analisi di immagini per ambienti di videosorveglianza intelligenti" — Università della Svizzera Italiana (USI), Lugano',
  year: "2015",
};

export type BootLine = { html: string; delay: number };
export const bootLines: readonly BootLine[] = [
  { html: '<span class="prompt">boot</span> <span class="dim">--profile=balestra.p --mode=cv</span>', delay: 120 },
  { html: '<span class="tag">[OK]</span> kernel.init .................................. <span class="ok">load</span>', delay: 90 },
  { html: '<span class="tag">[OK]</span> mount /dev/ticino ............................. <span class="ok">ok</span>', delay: 90 },
  { html: '<span class="tag">[OK]</span> link supsi.dti.edu ............................ <span class="ok">200</span>', delay: 110 },
  { html: '<span class="tag">[SYS]</span> loading identity package ..................... <span class="ok">✓</span>', delay: 120 },
  { html: "      name    : Pietro Balestra", delay: 70 },
  { html: "      nation  : Swiss / Ticino", delay: 70 },
  { html: "      edu     : M.Sc. ICT — SUPSI '14", delay: 80 },
  { html: "      domain  : healthcare / web / cv / ar / robotics", delay: 80 },
  { html: '<span class="tag">[NET]</span> scanning stack ............................. <span class="bar"><span></span></span> <span class="ok">14 pkg</span>', delay: 140 },
  { html: "      TS · React · Java · Spring Boot · C · C++ · Qt · JS · HTML · CSS · SQL · Py · C# · PHP", delay: 80 },
  { html: '<span class="tag">[OK]</span> decrypt credentials ........................... <span class="ok">✓</span>', delay: 100 },
  { html: '<span class="tag">[OK]</span> establish uplink to recruiter ................. <span class="ok">LISTEN :443</span>', delay: 100 },
  { html: "", delay: 40 },
  { html: '<span class="prompt">ready</span><span class="dim"> — type / or press [G S E D C] to jump</span>', delay: 60 },
];

export type NavLink = { id: string; num: string; label: string; key: string };
export const navLinks: readonly NavLink[] = [
  { id: "hero", num: "00", label: "ident", key: "G" },
  { id: "skills", num: "01", label: "stack", key: "S" },
  { id: "experience", num: "02", label: "log", key: "E" },
  { id: "education", num: "03", label: "edu", key: "D" },
  { id: "contact", num: "04", label: "link", key: "C" },
];

export const navKeyMap: Record<string, string> = {
  g: "hero",
  s: "skills",
  e: "experience",
  d: "education",
  c: "contact",
};
