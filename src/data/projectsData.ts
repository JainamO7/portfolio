export interface ProjectScreenshot {
  url: string;
  label: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  platform: string;
  company: string;
  role: string;
  oneLiner: string;
  overview: string;
  whatIBuilt: string[];
  challenges: string[];
  technologies: string[];
  links?: {
    label: string;
    url: string;
  }[];
  screenshots: ProjectScreenshot[];
}

export interface ClientProject {
  id: string;
  title: string;
  platform: string;
  company: string;
  role: string;
  oneLiner: string;
  technologies: string[];
  features: string[];
  ndaNote?: string;
  playStoreLink?: string;
  screenshots: ProjectScreenshot[];
}

export const PERSONAL_INFO = {
  name: "Jainam Kikani",
  title: "Flutter Developer | Mobile Application Developer",
  location: "Bhavnagar, Gujarat, India",
  locationNotice: "Open to remote or relocation",
  email: "kikanijainam7@gmail.com",
  phone: "+91 7490075875",
  whatsappUrl: "https://wa.me/917490075875",
  linkedinUrl: "https://www.linkedin.com/in/jainam-kikani-678198230/",
  githubUrl: "https://github.com/JainamO7",
  resumePath: "/Jainam_Kikani_Resume.pdf",
  summaryHeadline:
    "Flutter developer building cross-platform Android and iOS apps for media, payments, education, and IoT.",
  aboutParagraphs: [
    "I am a Flutter developer with hands-on experience shipping cross-platform applications for Android and iOS across education, media playback, payment workflows, and IoT hardware companions. My daily work revolves around reliable state management with GetX and MobX, secure payment integrations with Stripe and NMI, and real-time connectivity using WebSockets and REST APIs.",
    "I focus on writing clean, maintainable Dart code and creating responsive user interfaces that feel native on every screen. In my development workflow, I regularly use AI-assisted tools like Claude Code, OpenAI Codex, and Google Antigravity to speed up implementation, trace bugs, and refine application logic.",
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "videoflex",
    title: "VideoFlex Video Player",
    platform: "Android & iOS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer",
    oneLiner:
      "Cross-platform mobile video player with category feeds, short videos, offline downloads, and multilingual support.",
    overview:
      "VideoFlex is a video playback application built for Android and iOS. It provides organized video catalogues by category and subcategory, a feed for short videos, offline media downloads, and customizable viewing themes.",
    whatIBuilt: [
      "Built video playback workflows with category, subcategory, and recently played sections.",
      "Developed short videos browsing interface with dedicated vertical playback controls.",
      "Implemented live video search, offline video downloads, and playback controls.",
      "Integrated push notifications and multilingual language support.",
      "Built responsive user interfaces supporting both light and dark themes.",
      "Integrated REST APIs with JSON parsing for remote catalog and video data.",
    ],
    challenges: [
      "Ensuring responsive playback controls and smooth state transitions between catalogue browsing and fullscreen video.",
      "Managing local video storage reliably while keeping playback status synchronized with local SQLite storage.",
    ],
    technologies: ["Flutter", "Dart", "REST APIs", "GetX", "Video Playback", "SQLite"],
    links: [
      {
        label: "View on CodeCanyon",
        url: "https://codecanyon.net/item/online-offline-android-video-player/22633586?s_rank=1",
      },
    ],
    screenshots: [],
  },
  {
    slug: "audify",
    title: "Audify Music Player",
    platform: "Android & iOS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer",
    oneLiner:
      "Mobile audio player featuring audio equalizer controls, playlists, synced lyrics, and offline playback.",
    overview:
      "Audify Music Player is a cross-platform mobile music player for Android and iOS. It provides local and online music playback, equalizer adjustments, playlist curation, and synced lyrics display.",
    whatIBuilt: [
      "Built and maintained music playback controls, repeat, shuffle, and background playback handling.",
      "Built and maintained the audio equalizer interface and frequency adjustments.",
      "Implemented synced lyrics display, artist sections, playlists, and offline music caching.",
      "Integrated Firebase Cloud Messaging (FCM) for push notifications and AdMob where applicable.",
      "Supported theme customization and responsive layout rendering across mobile screen sizes.",
    ],
    challenges: [
      "Managing uninterrupted background audio playback lifecycles across different Android and iOS battery-saver policies.",
      "Coordinating low-latency equalizer parameter changes with MobX reactive state management.",
    ],
    technologies: ["Flutter", "Dart", "MobX", "Audio Equalizer", "Firebase FCM", "AdMob"],
    links: [
      {
        label: "View on CodeCanyon",
        url: "https://codecanyon.net/item/online-audio-player/22045856?s_rank=2",
      },
    ],
    screenshots: [],
  },
  {
    slug: "study-unify",
    title: "Study Unify (Student App & Admin)",
    platform: "Android (Google Play)",
    company: "JDK Group",
    role: "Flutter Developer",
    oneLiner:
      "Educational ecosystem apps published on Google Play for students, teachers, and administrators.",
    overview:
      "Study Unify is an educational mobile platform consisting of a dedicated Student App for coursework, assignments, and offline learning, alongside an Admin App for institutional content and user management.",
    whatIBuilt: [
      "Built and maintained mobile application features for students and teachers with a responsive UI in the Student App.",
      "Integrated REST APIs via HTTP, structured state management with GetX, and local persistence with SQLite.",
      "Built administration features in the Study Unify Admin application using Flutter and GetX for user and content management.",
      "Supported application maintenance and updates published on the Google Play Store.",
    ],
    challenges: [
      "Providing dependable offline access to educational materials using SQLite local storage with remote synchronization.",
      "Organizing large form workflows and permission states cleanly between student and administrative contexts.",
    ],
    technologies: ["Flutter", "Dart", "HTTP REST APIs", "GetX", "SQLite", "Google Play"],
    links: [
      {
        label: "Student App on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.jdkgroup.study",
      },
      {
        label: "Admin App on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.jdkgroup.studyunifyadmin",
      },
    ],
    screenshots: [],
  },
];

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    id: "smart-iot-alarm",
    title: "Smart IoT Alarm",
    platform: "Android & iOS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer",
    oneLiner:
      "Companion mobile app for a connected IoT alarm product with real-time hardware status, scheduling, and device alerts.",
    technologies: ["Flutter", "Dart", "WebSockets", "REST APIs", "GetX"],
    features: [
      "Developed and maintained the Flutter companion app for a connected hardware alarm product.",
      "Implemented real-time device status monitoring and WebSocket communication.",
      "Built multi-profile alarm scheduling, ring duration controls, and announcement management.",
      "Connected device alerts and network synchronization.",
    ],
    ndaNote: "Client work — features described under project requirements.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.adioteq.smartiotalarm",
    screenshots: [
      {
        url: "/screenshots/alarm/alarm-dashboard.png",
        label: "IoT Dashboard",
        alt: "Smart IoT Alarm hardware status dashboard",
      },
      {
        url: "/screenshots/alarm/alarm-announcement.png",
        label: "Live Announcement",
        alt: "Smart IoT Alarm live audio announcement broadcast screen",
      },
      {
        url: "/screenshots/alarm/alarm-alerts.png",
        label: "Device Alerts",
        alt: "Smart IoT Alarm device alert notifications screen",
      },
      {
        url: "/screenshots/alarm/alarm-login.png",
        label: "Device Sign In",
        alt: "Smart IoT Alarm device authentication screen",
      },
      {
        url: "/screenshots/alarm/alarm-splash.png",
        label: "Splash Screen",
        alt: "Smart IoT Alarm application splash screen",
      },
    ],
  },
  {
    id: "dealer-saas",
    title: "Dealer Management SaaS",
    platform: "Android & iOS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer",
    oneLiner:
      "Mobile solution for mobile recharge services, US carrier workflows, dealer product sales, and dual payment gateways.",
    technologies: ["Flutter", "Dart", "Stripe", "NMI", "WebSockets", "GetX", "REST APIs"],
    features: [
      "Built mobile features supporting recharge services, US carrier packages, and dealer product sales.",
      "Integrated Stripe and NMI payment gateways for card transactions.",
      "Implemented WebSocket functionality for real-time sales and status communication.",
      "Contributed to supplier management and dealer activation workflows.",
    ],
    ndaNote: "Client work — features described under project requirements.",
    screenshots: [
      {
        url: "/screenshots/dealer/dealer-dashboard.png",
        label: "Sales Dashboard",
        alt: "Dealer SaaS sales and KPI dashboard screen",
      },
      {
        url: "/screenshots/dealer/dealer-carriers.png",
        label: "Carrier Directory",
        alt: "Dealer SaaS US carrier selection screen",
      },
      {
        url: "/screenshots/dealer/dealer-activation-cart.png",
        label: "Activation Cart",
        alt: "Dealer SaaS activation cart and POS checkout screen",
      },
      {
        url: "/screenshots/dealer/dealer-tools.png",
        label: "Carrier Tools",
        alt: "Dealer SaaS carrier management tools",
      },
      {
        url: "/screenshots/dealer/dealer-signin.png",
        label: "Dealer Sign In",
        alt: "Dealer SaaS secure dealer authentication screen",
      },
    ],
  },
  {
    id: "quetal",
    title: "Quetal",
    platform: "Android & iOS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer",
    oneLiner:
      "Cross-platform mobile application featuring Stripe payment integration, SIM plan management, and REST API workflows.",
    technologies: ["Flutter", "Dart", "Stripe", "REST APIs", "GetX"],
    features: [
      "Integrated and maintained Stripe payment functionality for mobile transactions.",
      "Built mobile application features for plan and roaming selection, SIM activation, and checkout.",
      "Implemented IMEI compatibility checking and multi-language switcher.",
      "Integrated REST APIs for subscriber profiles and account information.",
    ],
    ndaNote: "Client work — features described under project requirements.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.prepaidiq.quetal",
    screenshots: [
      {
        url: "/screenshots/quetal/quetal-checkout.png",
        label: "Checkout Flow",
        alt: "Quetal checkout and payment screen showing Stripe integration",
      },
      {
        url: "/screenshots/quetal/quetal-plan.png",
        label: "Plan & Roaming",
        alt: "Quetal mobile plan and roaming selection screen",
      },
      {
        url: "/screenshots/quetal/quetal-compatibility.png",
        label: "IMEI Compatibility",
        alt: "Quetal device IMEI compatibility check screen",
      },
      {
        url: "/screenshots/quetal/quetal-language.png",
        label: "Language Switcher",
        alt: "Quetal multi-language selection interface",
      },
      {
        url: "/screenshots/quetal/quetal-profile.png",
        label: "Subscriber Profile",
        alt: "Quetal subscriber account and profile screen",
      },
    ],
  },
  {
    id: "brms-medical",
    title: "BRMS — Medical Representative Management",
    platform: "Android & iOS",
    company: "Adite Technologies LLP",
    role: "Flutter Developer",
    oneLiner:
      "Mobile application supporting doctor appointment management, scheduling, and availability-checking workflows.",
    technologies: ["Flutter", "Dart", "REST APIs", "MVVM", "GetX"],
    features: [
      "Built and maintained doctor appointment management and scheduling workflows for authorized users.",
      "Implemented real-time doctor availability checking and appointment booking.",
      "Integrated REST APIs with JSON parsing for doctor directories and visit history.",
      "Structured application logic using MVVM architecture and GetX state controllers.",
    ],
    ndaNote: "Client work — features described under project requirements.",
    screenshots: [
      {
        url: "/screenshots/bmra/bmra-doctor-list.png",
        label: "Doctor Directory",
        alt: "BRMS doctor directory and search list screen",
      },
      {
        url: "/screenshots/bmra/bmra-doctor-details.png",
        label: "Doctor Details",
        alt: "BRMS doctor profile and clinic schedule screen",
      },
      {
        url: "/screenshots/bmra/bmra-history.png",
        label: "Appointment History",
        alt: "BRMS medical rep appointment history screen",
      },
      {
        url: "/screenshots/bmra/bmra-booking.png",
        label: "Service Booking",
        alt: "BRMS doctor appointment slot booking screen",
      },
      {
        url: "/screenshots/bmra/bmra-profile.png",
        label: "MR Profile",
        alt: "BRMS medical representative profile screen",
      },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    role: "Flutter Developer",
    company: "Adite Technologies LLP",
    dates: "Aug 2025 – Oct 2026",
    location: "Bhavnagar, Gujarat, India",
    bullets: [
      "Built and maintained Flutter apps for Android and iOS, from UI development to API integration and release support.",
      "Implemented payment flows with Stripe and NMI and real-time communication using WebSockets.",
      "Delivered media features: video and music playback, offline downloads, background playback, and push notifications.",
      "Debugged production issues and improved app stability and performance.",
    ],
    technologies: ["Flutter", "Dart", "Stripe", "NMI", "WebSockets", "GetX", "MobX", "SQLite", "Firebase FCM"],
  },
  {
    role: "Flutter Developer",
    company: "JDK Group",
    dates: "Feb 2024 – Jul 2025",
    location: "India",
    bullets: [
      "Built and maintained features for the Study Unify apps published on Google Play.",
      "Integrated REST APIs via HTTP, structured state management using GetX, and handled SQLite local storage.",
      "Supported the Study Unify Admin application using Flutter and GetX for managing content and users.",
    ],
    technologies: ["Flutter", "Dart", "HTTP", "GetX", "SQLite", "Google Play"],
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Android", "iOS", "Responsive UI"],
  },
  {
    category: "Architecture",
    skills: ["GetX", "MobX", "MVVM"],
  },
  {
    category: "Integrations",
    skills: [
      "REST APIs",
      "JSON parsing",
      "WebSockets",
      "Stripe",
      "NMI",
      "Firebase Cloud Messaging",
      "AdMob",
    ],
  },
  {
    category: "Data",
    skills: ["SQLite", "Firebase", "MongoDB"],
  },
  {
    category: "Other Languages",
    skills: ["Python", "PHP", "Java"],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "Debugging",
      "Performance optimization",
      "Claude Code",
      "OpenAI Codex",
      "Google Antigravity",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Gujarat Technological University (GTU)",
    college: "GMIT",
    year: "2024",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)",
    college: "Shree Swaminarayan College of Computer Science",
    year: "2022",
  },
];
