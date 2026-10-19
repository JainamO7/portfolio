export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Media & Streaming" | "FinTech & SaaS" | "EdTech" | "Healthcare" | "IoT & Hardware";
  role: string;
  overview: string;
  metrics: string[];
  technologies: string[];
  keyFeatures: string[];
  architecturalHighlights: string[];
  defaultDevice: "mobile" | "tablet" | "monitor";
  screenshotUrl?: string; // Users can drop screenshots in /public/screenshots/ and link here
  gallery?: { label: string; url: string }[]; // Multiple screenshots gallery
  liveUrl?: string; // Direct link to CodeCanyon or Play Store to watch/view the app
  appDetails: {
    themeColor: string;
    accentColor: string;
    platform: "Android & iOS" | "Cross-Platform" | "Google Play";
    status: "Production" | "Shipped" | "Live Client App";
  };
}

export const PROJECTS: Project[] = [
  {
    id: "videoflex",
    title: "VideoFlex Video Player",
    subtitle: "High-Performance Media Streaming & Reels",
    category: "Media & Streaming",
    role: "Lead Mobile Developer",
    overview:
      "A feature-rich video streaming and local playback powerhouse supporting high-bitrate streaming, short-form reels, offline cache downloads, and dark/light dynamic theming.",
    metrics: ["1080p/4K Playback", "Zero Frame Drop Caching", "Sub-200ms Search Index"],
    technologies: ["Flutter", "Dart", "REST APIs", "SQLite", "ExoPlayer Bridge", "GetX"],
    keyFeatures: [
      "Dynamic category & subcategory curation with trending feed",
      "Short video reels with instant vertical swipe navigation",
      "Robust background offline download manager with pause/resume",
      "Instant fuzzy search with recent query history",
      "Multilingual UI and custom light/dark theme switcher",
    ],
    architecturalHighlights: [
      "Custom video buffer management reducing memory pressure by 38%",
      "LRU cached thumbnail loading pipeline for instantaneous scroll rendering",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "", // Drop real image in public/screenshots/videoflex.png
    liveUrl: "https://codecanyon.net/item/online-offline-android-video-player/22633586",
    appDetails: {
      themeColor: "#FF3366",
      accentColor: "#FF5E7E",
      platform: "Android & iOS",
      status: "Production",
    },
  },
  {
    id: "audify",
    title: "Audify Music Player",
    subtitle: "Audiophile-Grade Audio Engine & Equalizer",
    category: "Media & Streaming",
    role: "Lead Mobile Developer",
    overview:
      "Cross-platform music player engineered for seamless background playback, customizable 10-band audio equalization, synced time-stamped lyrics, and playlist architectures.",
    metrics: ["10-Band EQ Engine", "Gapless Background Audio", "Synced Lyrics Engine"],
    technologies: ["Flutter", "Dart", "Audio Service", "Firebase Cloud Messaging", "AdMob", "MobX"],
    keyFeatures: [
      "Real-time visual audio equalizer with bass-boost and 3D reverb presets",
      "Synchronized karaoke-style lyric scrolling engine",
      "Smart queue management with repeat, shuffle, and favorites",
      "FCM push notifications for trending releases and offline playlist management",
      "Seamless lock-screen audio widget controls and Bluetooth metadata sync",
    ],
    architecturalHighlights: [
      "Native background audio service lifecycle handling preventing OS memory kills",
      "FFT audio frequency analyzer binding for reactive 60fps equalizer canvas",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "", // Drop real image in public/screenshots/audify.png
    liveUrl: "https://codecanyon.net/item/online-audio-player/22045856?s_rank=2",
    appDetails: {
      themeColor: "#00E5FF",
      accentColor: "#18FFFF",
      platform: "Android & iOS",
      status: "Production",
    },
  },
  {
    id: "dealer-saas",
    title: "PrepaidIQ Dealer SaaS",
    subtitle: "Multi-Carrier SIM Activation, POS Cart & Dealer Operations",
    category: "FinTech & SaaS",
    role: "Flutter Architect / Mobile Engineer",
    overview:
      "Enterprise telecommunications management SaaS portal engineered with Flutter for PrepaidIQ Technology Service Provider. Deployed across nationwide US retail dealer stores to orchestrate end-to-end cellular carrier operations—including multi-carrier SIM activations (AT&T, T-Mobile, Verizon, Cricket, Culture Wireless, MobileX, Qué Tal Móvil), POS cart checkout with cash/credit card splits and automated 911 state surcharges, real-time sales KPI analytics, dealer servicing tools (SIM swaps, Wi-Fi calling provisioning, number ports, vanity numbers), and secure multi-tenant role-based access.",
    metrics: ["Multi-Carrier POS Hub", "16+ Carrier Integrations", "Split Cash/Card Checkout"],
    technologies: ["Flutter Web/Desktop", "Dart", "PrepaidIQ Carrier APIs", "Stripe & NMI", "POS Cart Engine", "GetX"],
    keyFeatures: [
      "Comprehensive multi-carrier activation catalog supporting AT&T, Verizon, T-Mobile, Cricket, MobileX, and Qué Tal Móvil",
      "Full POS checkout cart with physical SIM selection, zipcode coverage checks, discount coupon codes, state tax & 911 surcharge auto-calculation, and cash/card split payments",
      "Real-time dealer KPI dashboard tracking MTD sales, gross revenue, order transactions, daily sales curves, and carrier breakdown charts",
      "Dedicated Carrier Dealer Tools hub powering live SIM swaps, Wi-Fi calling provisioning, line details, vanity number purchases, and expiration monitoring",
      "Enterprise dealer sign-in portal with remembered session authentication and direct dealer support line integration",
    ],
    architecturalHighlights: [
      "Dual payment rails with PCI-compliant tokenized transactions and instant pos cash reconciliation",
      "Idempotent activation transaction pipeline preventing duplicate cellular carrier provisioning across retail store networks",
    ],
    defaultDevice: "monitor",
    screenshotUrl: "/screenshots/dealer/dealer-dashboard.png",
    gallery: [
      { label: "Sales & KPI Dashboard", url: "/screenshots/dealer/dealer-dashboard.png" },
      { label: "Carrier Directory", url: "/screenshots/dealer/dealer-carriers.png" },
      { label: "Activation & POS Cart", url: "/screenshots/dealer/dealer-activation-cart.png" },
      { label: "Carrier Dealer Tools", url: "/screenshots/dealer/dealer-tools.png" },
      { label: "Dealer Sign In", url: "/screenshots/dealer/dealer-signin.png" },
    ],
    appDetails: {
      themeColor: "#0066FF",
      accentColor: "#10B981",
      platform: "Cross-Platform",
      status: "Live Client App",
    },
  },
  {
    id: "study-unify",
    title: "Study Unify Ecosystem",
    subtitle: "Student Learning & Administrative Governance Platform",
    category: "EdTech",
    role: "Mobile App Architect",
    overview:
      "A dual-application EdTech ecosystem consisting of a high-engagement student mobile client and an administrative governance platform published on Google Play.",
    metrics: ["Published on Google Play", "Offline SQLite Sync", "Dual-Role Ecosystem"],
    technologies: ["Flutter", "Dart", "REST APIs", "GetX", "SQLite", "Google Play Release"],
    keyFeatures: [
      "Student app with interactive lectures, assignment trackers, and offline study materials",
      "Local-first SQLite caching enabling students to study without active cellular data",
      "Admin app with centralized user management, content publishing, and analytics",
      "Automated push notifications for upcoming exams and platform announcements",
      "Fluid responsive layout tested across compact phones and widescreen tablets",
    ],
    architecturalHighlights: [
      "Clean separation of concerns with GetX dependency injection and reactive state streams",
      "Two-way conflict resolution engine for SQLite local caches and remote REST endpoints",
    ],
    defaultDevice: "tablet",
    screenshotUrl: "", // Drop real image in public/screenshots/study-unify.png
    appDetails: {
      themeColor: "#F59E0B",
      accentColor: "#FBBF24",
      platform: "Google Play",
      status: "Shipped",
    },
  },
  {
    id: "quetal",
    title: "Qué Tal Móvil",
    subtitle: "US Carrier SIM Activation & Mobile FinTech Checkout",
    category: "FinTech & SaaS",
    role: "Mobile Application Developer",
    overview:
      "Production MVNO telecommunications and mobile fintech application built with Flutter for Qué Tal Móvil. Features end-to-end SIM card activation, 4-step streamlined checkout with tax calculation and Auto-Pay authorization, live IMEI device compatibility verification (Dial *#06#), multi-country roaming plan selection (Cuba, Mexico, Brazil, Colombia), dynamic bilingual English/Spanish localization, and complete subscriber account management.",
    metrics: ["4-Step SIM Checkout", "IMEI Network Check", "Bilingual EN / ES"],
    technologies: ["Flutter", "Dart", "Stripe SDK", "MVNO Carrier APIs", "Bilingual Localization", "GetX"],
    keyFeatures: [
      "4-step SIM checkout pipeline with automatic tax calculation ($11.96 total) and Auto-Pay authorization",
      "Interactive plan browser with international roaming bundles (Cuba, Mexico, Brazil, Colombia) & Keep/New number options",
      "Instant IMEI device compatibility lookup with carrier network verification and *#06# dial helper",
      "Real-time bilingual localization switcher between English and Spanish with persistent state",
      "Subscriber profile hub managing active lines, saved payment cards, transaction history, and account governance",
    ],
    architecturalHighlights: [
      "Secure PCI-compliant payment tokenization and recurring billing authorization pipeline",
      "Reactive GetX state management coordinating multi-step SIM activation workflows and dynamic carrier responses",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "/screenshots/quetal/quetal-checkout.png",
    gallery: [
      { label: "SIM Checkout", url: "/screenshots/quetal/quetal-checkout.png" },
      { label: "Plan & Roaming", url: "/screenshots/quetal/quetal-plan.png" },
      { label: "IMEI Compatibility", url: "/screenshots/quetal/quetal-compatibility.png" },
      { label: "Language Switcher", url: "/screenshots/quetal/quetal-language.png" },
      { label: "Subscriber Profile", url: "/screenshots/quetal/quetal-profile.png" },
    ],
    appDetails: {
      themeColor: "#EF4444",
      accentColor: "#0D9488",
      platform: "Android & iOS",
      status: "Production",
    },
  },
  {
    id: "bmra-medical",
    title: "BMRA Medical Rep",
    subtitle: "Doctor Appointment Scheduling & Field Operations App",
    category: "Healthcare",
    role: "Lead Flutter Developer",
    overview:
      "Enterprise mobile application engineered at Adite Technologies for Medical Representatives (MRs) to search doctors, inspect clinic timings and availability quotas, schedule service appointments, and manage booking history with real-time status tracking.",
    metrics: ["49+ Doctors Indexed", "Instant Slot Booking", "Adite Tech Shipped"],
    technologies: ["Flutter", "Dart", "REST APIs", "MVVM", "GetX", "Appointment Engine"],
    keyFeatures: [
      "Live doctor search with specialization filters (Consulting Physician, Neurology, etc.)",
      "Doctor details with clinic address (Bajarangdas Bapa Arogyadham), morning/evening timings & availability quotas",
      "Interactive appointment booking calendar with service date selection",
      "Real-time appointment history ledger (Booked, Waiting, Cancel) with exchange and cancellation workflows",
      "MR profile & identity management with BMRA ID and Adite Tech company binding",
    ],
    architecturalHighlights: [
      "Custom appointment slot reservation engine with concurrency and conflict checks",
      "Clean MVVM presentation architecture with GetX reactive controller bindings",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "/screenshots/bmra/bmra-doctor-list.png",
    gallery: [
      { label: "Doctor Directory", url: "/screenshots/bmra/bmra-doctor-list.png" },
      { label: "Doctor Details", url: "/screenshots/bmra/bmra-doctor-details.png" },
      { label: "Appointment History", url: "/screenshots/bmra/bmra-history.png" },
      { label: "Service Booking", url: "/screenshots/bmra/bmra-booking.png" },
      { label: "MR Profile", url: "/screenshots/bmra/bmra-profile.png" },
    ],
    appDetails: {
      themeColor: "#0EA5E9",
      accentColor: "#38BDF8",
      platform: "Android & iOS",
      status: "Production",
    },
  },
  {
    id: "smart-iot-alarm",
    title: "Smart WiFi Alarm",
    subtitle: "IoT Device Governance & Real-Time Live Audio Broadcast",
    category: "IoT & Hardware",
    role: "Flutter Developer",
    overview:
      "Enterprise IoT mobile application engineered with Flutter for Adioteq Technologies. Connects directly to hardware Smart WiFi Alarm units across residential and commercial deployments. Features multi-unit status monitoring (Online/Offline/Inactive metrics), one-tap physical device ringing, hardware activation provisioning, real-time live microphone broadcast with playback scrubber, automated hardware time synchronization, and subscription renewal management.",
    metrics: ["Multi-Device IoT Hub", "Live Audio Broadcast", "Automated Time Sync"],
    technologies: ["Flutter", "Dart", "IoT WebSockets", "Audio Streaming", "REST APIs", "GetX"],
    keyFeatures: [
      "Real-time IoT telemetry dashboard categorizing total, online, inactive, and offline alarm hardware units",
      "One-tap physical device ringing & activation provisioning directly over wireless network",
      "Live Announcement studio with real-time mic recording, waveform scrubber, and multi-device broadcast target selection",
      "Automated device hardware time-synchronization engine with audit logs and subscription renewal invoicing",
      "Secure enterprise authentication with Adioteq Technologies cloud platform",
    ],
    architecturalHighlights: [
      "Low-latency audio streaming pipeline encoding microphone input for concurrent broadcast across networked IoT hardware",
      "Reactive hardware state synchronization engine maintaining live socket connections to multiple alarm units without UI thread lag",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "/screenshots/alarm/alarm-dashboard.png",
    gallery: [
      { label: "IoT Dashboard", url: "/screenshots/alarm/alarm-dashboard.png" },
      { label: "Live Announcement", url: "/screenshots/alarm/alarm-announcement.png" },
      { label: "Device Alerts & Sync", url: "/screenshots/alarm/alarm-alerts.png" },
      { label: "Sign In", url: "/screenshots/alarm/alarm-login.png" },
      { label: "Splash Screen", url: "/screenshots/alarm/alarm-splash.png" },
    ],
    appDetails: {
      themeColor: "#0066FF",
      accentColor: "#00E5FF",
      platform: "Android & iOS",
      status: "Production",
    },
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Flutter Developer",
    company: "Adite Technologies LLP",
    period: "2023 - Present",
    location: "India",
    summary:
      "Architecting and shipping production Android & iOS applications across media streaming, FinTech payments, healthcare logistics, and IoT hardware companions.",
    highlights: [
      "Integrated end-to-end payment rails with Stripe and NMI, supporting tokenized multi-tier billing.",
      "Engineered low-latency real-time communication modules powered by WebSockets.",
      "Built native background playback engines, audio equalizer visualizers, and offline media downloaders.",
      "Diagnosed and resolved critical production performance bottlenecks, maintaining 99.8% crash-free sessions.",
    ],
    technologies: ["Flutter", "Dart", "Stripe", "NMI", "WebSockets", "Firebase", "ExoPlayer", "GetX", "MobX"],
  },
  {
    role: "Flutter Developer",
    company: "JDK Group",
    period: "2022 - 2023",
    location: "India",
    summary:
      "Spearheaded the development and Google Play launch of the Study Unify educational ecosystem, spanning student and administrative applications.",
    highlights: [
      "Built responsive, adaptive UI for students and educators deployed on Google Play Store.",
      "Architected offline-first SQLite synchronization for uninterrupted student learning without active internet.",
      "Built the administrative dashboard app for real-time user management and content curation.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "GetX", "SQLite", "Google Play Console"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Gujarat Technological University (GTU), GMIT",
    year: "2024",
    highlights: "Advanced Software Architecture, Cloud Systems, Distributed Databases & Mobile Computing",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)",
    college: "Shree Swaminarayan College of Computer Science",
    year: "2022",
    highlights: "Core Object-Oriented Programming, Data Structures, Algorithms, Web & Mobile Foundations",
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Mobile Engineering",
    icon: "Smartphone",
    skills: [
      { name: "Flutter & Dart", level: "Production / Core", highlighted: true },
      { name: "Android (Kotlin/Java Bridge)", level: "Production" },
      { name: "iOS (Swift/ObjC Bridge)", level: "Production" },
      { name: "Responsive & Adaptive Layouts", level: "Expert", highlighted: true },
      { name: "Offline-First Architectures", level: "Advanced" },
    ],
  },
  {
    category: "AI & Agentic Engineering",
    icon: "Bot",
    skills: [
      { name: "Claude Code", level: "Agentic CLI / Core", highlighted: true },
      { name: "Google Antigravity", level: "Autonomous Workflows", highlighted: true },
      { name: "OpenAI Codex & Copilot", level: "Daily Pair-Programming", highlighted: true },
      { name: "Multi-Agent System Orchestration", level: "Advanced", highlighted: true },
      { name: "AI-Assisted Architecture & Rapid Debugging", level: "Expert", highlighted: true },
    ],
  },
  {
    category: "State Management & Architecture",
    icon: "Layers",
    skills: [
      { name: "GetX State & DI", level: "Mastery", highlighted: true },
      { name: "MobX & Observables", level: "Advanced" },
      { name: "Clean MVVM Architecture", level: "Expert", highlighted: true },
      { name: "Repository & Service Patterns", level: "Advanced" },
      { name: "Dependency Injection", level: "Advanced" },
    ],
  },
  {
    category: "Integrations & FinTech",
    icon: "CreditCard",
    skills: [
      { name: "Stripe Payment Gateway", level: "Production", highlighted: true },
      { name: "NMI Payment Gateway", level: "Production", highlighted: true },
      { name: "WebSockets Real-Time", level: "Advanced", highlighted: true },
      { name: "REST APIs & JSON Parsing", level: "Expert" },
      { name: "Firebase Cloud Messaging", level: "Advanced" },
      { name: "Google AdMob", level: "Production" },
    ],
  },
  {
    category: "Data & Storage",
    icon: "Database",
    skills: [
      { name: "SQLite & Local Cache", level: "Advanced", highlighted: true },
      { name: "Firebase Firestore / Realtime", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Shared Preferences & Secure Storage", level: "Expert" },
    ],
  },
];
