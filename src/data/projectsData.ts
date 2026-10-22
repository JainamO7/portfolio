export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Media & Streaming" | "FinTech & SaaS" | "EdTech" | "Healthcare" | "IoT & Hardware";
  company?: string;
  role: string;
  overview: string;
  metrics: string[];
  technologies: string[];
  keyFeatures: string[];
  architecturalHighlights: string[];
  defaultDevice: "mobile" | "tablet" | "monitor";
  screenshotUrl?: string;
  gallery?: { label: string; url: string }[];
  liveUrl?: string;
  appDetails: {
    themeColor: string;
    accentColor: string;
    platform: "Android & iOS" | "Cross-Platform" | "Google Play";
    status: "Production" | "Shipped" | "Live Client App";
  };
}

export const PROJECTS: Project[] = [
  {
    id: "quetal",
    title: "Quetal — Android & iOS",
    subtitle: "Mobile Application with Stripe Payment Integration",
    category: "FinTech & SaaS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer / App Developer",
    overview:
      "Worked on the Flutter application for Android and iOS. Integrated or maintained Stripe payment functionality, contributing to mobile application features, API integration, and ongoing maintenance.",
    metrics: ["Stripe Payment Integration", "Android & iOS", "Play Store Link"],
    technologies: ["Flutter", "Dart", "Stripe", "REST APIs", "GetX"],
    keyFeatures: [
      "Worked on the Flutter application for Android and iOS (Play Store Link)",
      "Integrated and maintained Stripe payment functionality",
      "Contributed to mobile application features, API integration, and maintenance",
      "Designed responsive UI flows for plan selection, SIM activation, and checkout",
    ],
    architecturalHighlights: [
      "Secure Stripe payment gateway integration with tokenized transactions",
      "GetX state management for reactive form validation and multi-step activation",
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
    id: "dealer-saas",
    title: "Dealer Management SaaS",
    subtitle: "Mobile Recharge Services, US Carriers & Dealer Product Sales",
    category: "FinTech & SaaS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer / App Developer",
    overview:
      "Worked on a dealer management solution supporting mobile recharge services, US carriers, and dealer product sales. Contributed to supplier management and related dealer workflows with Stripe & NMI payment integrations and WebSocket real-time communication.",
    metrics: ["Stripe & NMI Payments", "WebSockets Real-Time", "Supplier & Dealer Workflows"],
    technologies: ["Flutter", "Dart", "Stripe", "NMI", "WebSockets", "GetX", "REST APIs"],
    keyFeatures: [
      "Worked on a dealer management solution supporting mobile recharge services, US carriers, and dealer product sales",
      "Contributed to supplier management and related dealer workflows",
      "Worked with Stripe and NMI payment gateway integrations",
      "Worked with WebSocket-related functionality for real-time communication",
      "Engineered responsive dealer dashboards and POS checkout workflows",
    ],
    architecturalHighlights: [
      "Dual payment gateway integration (Stripe & NMI) for card processing and transactions",
      "Real-time WebSocket event bus handling live dealer sales updates and recharge status",
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
    id: "videoflex",
    title: "VideoFlex Video Player",
    subtitle: "Video Playback & Short Videos — Android & iOS",
    category: "Media & Streaming",
    company: "Adite Technologies LLP | CodeCanyon",
    role: "Flutter Developer / App Developer",
    overview:
      "Developed and maintained the Flutter mobile application (VideoFlex Video Player by AditeTechnologies | CodeCanyon). Worked with video playback, categories and subcategories, recently played content, and short videos with offline downloads and multilingual support.",
    metrics: ["Video Playback Engine", "Offline Downloads", "Light & Dark Themes"],
    technologies: ["Flutter", "Dart", "REST API", "GetX", "Video Playback", "SQLite"],
    keyFeatures: [
      "Developed and maintained the Flutter mobile application for Android & iOS",
      "Worked with video playback, categories and subcategories, recently played content, and short videos",
      "Worked on live search, offline downloads, playback controls, notifications, and multilingual support",
      "Supported light and dark themes and responsive user interfaces",
      "Integrated REST APIs and implemented features based on project requirements",
    ],
    architecturalHighlights: [
      "Efficient local storage caching and state management with GetX",
      "Responsive UI rendering across various Android & iOS screen form factors",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "",
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
    subtitle: "Music Playback & Audio Equalizer — Android & iOS",
    category: "Media & Streaming",
    company: "Adite Technologies LLP | CodeCanyon",
    role: "Flutter Developer / App Developer",
    overview:
      "Developed and maintained the Flutter music-player application (Audify Music Player by AditeTechnologies | CodeCanyon). Worked on music playback controls, audio equalizer functionality, synced lyrics, and offline music features.",
    metrics: ["Audio Equalizer", "Background Playback", "Synced Lyrics Engine"],
    technologies: ["Flutter", "Dart", "MobX", "Audio Equalizer", "Firebase FCM", "AdMob"],
    keyFeatures: [
      "Developed and maintained the Flutter music-player application for Android & iOS",
      "Worked on music playback controls, playlists, artist sections, and offline music features",
      "Worked on audio equalizer functionality and its maintenance",
      "Contributed to features involving synced lyrics, repeat and shuffle, background playback, notifications, and theme customization",
      "Worked with Firebase Cloud Messaging (FCM) and AdMob where applicable",
    ],
    architecturalHighlights: [
      "Reactive state management using MobX observables and actions",
      "Native background audio playback lifecycle and equalizer parameter handling",
    ],
    defaultDevice: "mobile",
    screenshotUrl: "",
    liveUrl: "https://codecanyon.net/item/online-audio-player/22045856?s_rank=2",
    appDetails: {
      themeColor: "#00E5FF",
      accentColor: "#18FFFF",
      platform: "Android & iOS",
      status: "Production",
    },
  },
  {
    id: "brms-medical",
    title: "BRMS — Medical Representative Management",
    subtitle: "Doctor Appointment Management & Scheduling Workflows",
    category: "Healthcare",
    company: "Adite Technologies LLP",
    role: "Flutter Developer / App Developer",
    overview:
      "Worked on an application designed for medical representatives. Supported doctor appointment management, scheduling, and availability-checking workflows for authorized users.",
    metrics: ["Doctor Appointment Management", "Scheduling Workflows", "Authorized Access Control"],
    technologies: ["Flutter", "Dart", "REST APIs", "MVVM", "GetX"],
    keyFeatures: [
      "Worked on an application designed for medical representatives (BRMS)",
      "Supported doctor appointment management, scheduling, and availability-checking workflows",
      "Contributed to application functionality for authorized users",
      "Integrated REST APIs with JSON parsing for doctor schedules and clinic timings",
    ],
    architecturalHighlights: [
      "MVVM software architecture maintaining clean separation between views and business logic",
      "GetX reactive controller bindings for dynamic appointment slot availability",
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
    title: "Smart IoT Alarm",
    subtitle: "Connected Alarm & IoT Mobile Application (Play Store Link)",
    category: "IoT & Hardware",
    company: "Adite Technologies LLP",
    role: "Flutter Developer / App Developer",
    overview:
      "Worked on the Flutter mobile application associated with a connected alarm/IoT product (Play Store Link). Contributed to mobile application development and maintenance according to project requirements.",
    metrics: ["IoT Connected Alarm", "WebSockets Telemetry", "Play Store Link"],
    technologies: ["Flutter", "Dart", "WebSockets", "REST APIs", "GetX"],
    keyFeatures: [
      "Worked on the Flutter mobile application associated with a connected alarm/IoT product",
      "Contributed to mobile application development and maintenance according to project requirements",
      "Supported real-time hardware status monitoring, ringing, and device configuration",
      "Integrated WebSocket communication for instant device telemetry and alerts",
    ],
    architecturalHighlights: [
      "WebSocket stream handlers ensuring low-latency communication with connected IoT units",
      "Clean UI component design optimized for quick one-tap physical hardware control",
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
  {
    id: "study-unify",
    title: "Study Unify (Student App & Admin)",
    subtitle: "Educational Ecosystem by JDK Group — Published on Google Play",
    category: "EdTech",
    company: "JDK Group",
    role: "Application Developer / Flutter Developer",
    overview:
      "Developed and maintained Flutter application features for students and teachers in the Study Unify Student App, and worked on the Study Unify Admin application using GetX, published on Google Play.",
    metrics: ["Published on Google Play", "Offline SQLite Storage", "GetX State Management"],
    technologies: ["Flutter", "Dart", "REST APIs", "HTTP", "GetX", "SQLite", "Google Play"],
    keyFeatures: [
      "Study Unify — Student App: Developed and maintained Flutter application features for students and teachers",
      "Integrated REST APIs using HTTP, GetX state management, and SQLite local storage",
      "Study Unify Admin: Worked on the Flutter administration application supporting the Study Unify platform using GetX",
      "Student App on Google Play: https://play.google.com/store/apps/details?id=com.jdkgroup.study",
      "Admin App on Google Play: https://play.google.com/store/apps/details?id=com.jdkgroup.studyunifyadmin",
    ],
    architecturalHighlights: [
      "SQLite local storage integration enabling offline access to study materials",
      "GetX reactive dependency injection and navigation architecture",
    ],
    defaultDevice: "tablet",
    screenshotUrl: "",
    liveUrl: "https://play.google.com/store/apps/details?id=com.jdkgroup.study",
    appDetails: {
      themeColor: "#F59E0B",
      accentColor: "#FBBF24",
      platform: "Google Play",
      status: "Shipped",
    },
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Flutter Developer / App Developer",
    company: "Adite Technologies LLP",
    period: "1 Year Experience",
    location: "Bhavnagar, Gujarat, India",
    summary:
      "Developed and maintained cross-platform Flutter mobile applications for Android and iOS across media streaming, FinTech payments, dealer management, appointment management, and IoT-connected products.",
    highlights: [
      "Developed and maintained Flutter mobile applications for Android and iOS.",
      "Integrated REST APIs and implemented application features based on project requirements.",
      "Worked on video playback, music playback, application state management, payment integration, and user-interface development.",
      "Contributed to application maintenance, debugging, and feature improvements.",
      "Worked with AI-assisted development tools to support coding, debugging, and development workflows.",
    ],
    keyProjects: [
      "VideoFlex Video Player — Android & iOS",
      "Audify Music Player — Android & iOS",
      "Quetal — Android & iOS",
      "Dealer Management SaaS",
      "BRMS — Medical Representative Management",
      "Smart IoT Alarm",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "GetX",
      "MobX",
      "MVVM",
      "SQLite",
      "Firebase",
      "WebSockets",
      "Stripe",
      "NMI",
    ],
  },
  {
    role: "Application Developer / Flutter Developer",
    company: "JDK Group",
    period: "Google Play Shipped",
    location: "India",
    summary:
      "Developed and maintained Flutter application features for students, educators, and administrative personnel across the Study Unify platform published on Google Play.",
    highlights: [
      "Developed and maintained Flutter application features for students and teachers (Study Unify — Student App).",
      "Integrated REST APIs using HTTP, GetX state management, and SQLite local storage.",
      "Worked on the Flutter administration application supporting the Study Unify platform using GetX (Study Unify Admin).",
      "Published and maintained applications on Google Play Store.",
    ],
    keyProjects: [
      "Study Unify — Student App (Google Play)",
      "Study Unify Admin (Google Play)",
    ],
    technologies: ["Flutter", "Dart", "HTTP REST APIs", "GetX", "SQLite", "Google Play"],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Gujarat Technological University (GTU)",
    college: "GMIT",
    year: "2024",
    passingYearText: "Passing Year: 2024",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)",
    college: "Shree Swaminarayan College of Computer Science",
    year: "2022",
    passingYearText: "Passing Year: 2022",
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Mobile App Development",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: "Core / Production", highlighted: true },
      { name: "Android", level: "Production", highlighted: true },
      { name: "iOS", level: "Production", highlighted: true },
      { name: "Cross-Platform Development", level: "Core", highlighted: true },
      { name: "Responsive UI", level: "Production" },
    ],
  },
  {
    category: "Programming Languages",
    icon: "Terminal",
    skills: [
      { name: "Dart", level: "Core / Production", highlighted: true },
      { name: "Python", level: "Familiar" },
      { name: "PHP", level: "Familiar" },
      { name: "Java", level: "Familiar" },
    ],
  },
  {
    category: "State Management & Architecture",
    icon: "Layers",
    skills: [
      { name: "GetX", level: "Production", highlighted: true },
      { name: "MobX", level: "Production", highlighted: true },
      { name: "MVVM Architecture", level: "Core Pattern", highlighted: true },
    ],
  },
  {
    category: "API & Integrations",
    icon: "CreditCard",
    skills: [
      { name: "REST API & HTTP", level: "Production", highlighted: true },
      { name: "JSON Parsing", level: "Production" },
      { name: "WebSockets", level: "Production", highlighted: true },
      { name: "Stripe Payment Gateway", level: "Integrated", highlighted: true },
      { name: "NMI Payment Gateway", level: "Integrated", highlighted: true },
    ],
  },
  {
    category: "Database, Local Storage & Cloud",
    icon: "Database",
    skills: [
      { name: "SQLite", level: "Production", highlighted: true },
      { name: "Firebase", level: "Production", highlighted: true },
      { name: "Firebase Cloud Messaging (FCM)", level: "Production" },
      { name: "Push Notifications", level: "Production" },
    ],
  },
  {
    category: "AI-Assisted Development Tools",
    icon: "Bot",
    skills: [
      { name: "OpenAI Codex", level: "Workflow Support", highlighted: true },
      { name: "Claude Code", level: "Workflow Support", highlighted: true },
      { name: "Google Antigravity", level: "Workflow Support", highlighted: true },
    ],
  },
  {
    category: "Development Tools & Practices",
    icon: "Cpu",
    skills: [
      { name: "Git & Version Control", level: "Daily Use", highlighted: true },
      { name: "Debugging & Troubleshooting", level: "Core Practice", highlighted: true },
      { name: "Application Maintenance", level: "Core Practice" },
      { name: "Performance Optimization", level: "Core Practice" },
    ],
  },
];
