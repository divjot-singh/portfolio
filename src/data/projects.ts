export const projects = [
  {
    title: "Intelligence Hub",

    category: "Enterprise AI Platform",

    company: "Tredence Analytics",

    role: "Manager - Application Development",
    lessons:
  "This project reinforced the importance of designing reusable frameworks instead of solving individual business problems. Investing in extensibility early significantly accelerated future feature delivery.",
    architecture:
  "Designed a Micro UI architecture with reusable widget components backed by configuration-driven SQL generation, MCP services, AI agents, and reusable personalization modules.",
    accent:"#2563eb",

    team: "5 Engineers",
    duration: "Aug 2025 – Jun 2026",
    image: "/projects/intelligence-hub.png",
    outcome:
  "Successfully delivered Phase 1 of the Intelligence Hub platform for over 30 enterprise users and contributed to the architecture that scaled to 100+ users in Phase 2. Established reusable widget frameworks, personalization, and Micro UI foundations for future enterprise use cases.",

    description:
      "Led engineering delivery of Intelligence Hub, an AI-powered enterprise analytics platform designed to replace traditional BI dashboards with conversational analytics, reusable widget frameworks, AI-generated insights, and Micro UI architecture. Delivered production use cases while evolving the platform into a reusable framework supporting 30+ users in Phase 1 and 100+ users in Phase 2.",

    challenge:
      "Delivering multiple enterprise use cases within aggressive timelines while simultaneously designing a scalable architecture supporting reusable widgets, AI agents, Micro UIs, MCP servers, and independent domain teams.",

    contributions: [
      "Led application development for enterprise deliveries",
      "Designed reusable Widget Framework",
      "Architected Widget Configuration → SQL engine",
      "Designed Security Module",
      "Designed Page Context architecture",
      "Built automated UI validation using Playwright & Athena",
      "Contributed to Micro UI architecture",
      "Designed MCP registration workflows",
      "Implemented Personalization architecture"
    ],

    stack: [
      "React",
      "TypeScript",
      "LLMs",
      "MCP",
      "Micro Frontends",
      "Playwright",
      "Amazon Athena"
    ],
    slug: "intelligence-hub",

subtitle: "Enterprise AI Analytics Platform",

metrics: [
  {
    value: "100+",
    label: "Enterprise Users"
  },
  {
    value: "5",
    label: "Engineers"
  },
  {
    value: "2",
    label: "Platform Versions"
  }
],

    featured: true
  },

  {
    title: "Microsoft 365 Action Message Extensions",

    category: "Enterprise Platform",

    company: "Microsoft",
    duration: "Jan 2022 – May 2025",
    architecture:
  "Implemented a platform-independent framework using reusable SDKs, adapter patterns, Adaptive Cards, and shared abstractions across Teams, Outlook, and Copilot.",

    role: "Software Engineer II",
    lessons:
  "Working on Microsoft 365 taught me how adapter patterns and shared abstractions can dramatically reduce maintenance across multiple products.",
    accent:"#0f766e",
    slug: "microsoft-action-message-extensions",
    outcome:
  "Delivered reusable Action Message Extensions powering integrations across Microsoft Teams, Outlook, and Copilot while enabling third-party developers to build platform-independent experiences.",

subtitle: "Action Message Extensions Platform",

metrics: [
  {
    value: "Millions",
    label: "Daily Users"
  },
  {
    value: "3",
    label: "Microsoft Products"
  },
  {
    value: "5",
    label: "Engineers"
  }
],

    team: "5 Engineers",

    image: "/projects/microsoft.png",

    description:
      "Designed and implemented the platform-independent Action Message Extensions framework enabling third-party developers to integrate applications across Microsoft Teams, Outlook, and Copilot. Built reusable SDKs, adapters, and Adaptive Card workflows powering Microsoft 365 extensibility.",

    challenge:
      "Designing reusable architecture capable of supporting multiple Microsoft products while minimizing platform-specific implementations through shared SDKs and adapter patterns.",

    contributions: [
      "Implemented Action Message Extensions",
      "Implemented Search Message Extensions",
      "Built Copilot integrations",
      "Developed reusable Hub SDK",
      "Designed adapter architecture",
      "Implemented Adaptive Card workflows",
      "Built Link Unfurling for Outlook",
      "Contributed across Teams, Outlook & Copilot"
    ],

    stack: [
      "React",
      "TypeScript",
      "Azure Bots",
      "Adaptive Cards",
      "Microsoft 365",
      "Copilot"
    ],

    featured: true
  },

  {
    title: "GreyOrange GStore",

    category: "Retail Operations Platform",

    company: "GreyOrange",

    lessons:
  "Large enterprise migrations require careful backward compatibility planning. Technical implementation is often easier than change management.",
    role: "Senior Full Stack Engineer",
    accent:"#7c3aed",

    team: "6 Engineers",
    duration: "May 2025 - Apr 2026",
    architecture:
  "Built a multi-tenant feature configuration platform supporting hierarchical tenant, country, and store overrides with React, Flutter, and NestJS.",

    image: "/projects/greyorange.png",
    outcome:
  "Successfully migrated feature management from LaunchDarkly to an internal platform, improving configurability across tenants, countries, and stores without disrupting production.",
    slug: "greyorange-gstore",

subtitle: "Retail Operations Platform",

metrics: [
  {
    value: "Enterprise",
    label: "Retail Platform"
  },
  {
    value: "6",
    label: "Engineers"
  },
  {
    value: "Multi",
    label: "Tenant Support"
  }
],

    description:
      "Developed enterprise retail applications across Flutter, React and NestJS powering warehouse and store operations. Contributed to both mobile applications and web administration portals while improving platform configurability for multiple enterprise tenants.",

    challenge:
      "Designing and executing the migration from LaunchDarkly to an in-house feature management platform supporting tenant, country and store-level configurations without impacting production deployments.",

    contributions: [
      "Designed feature flag migration strategy",
      "Implemented tenant configuration platform",
      "Developed Feature Management UI",
      "Built Flutter store operations features",
      "Developed React administration portal",
      "Worked closely with Product on configuration modelling"
    ],

    stack: [
      "Flutter",
      "React",
      "NestJS",
      "Feature Flags"
    ],

    featured: true,

    website: "https://www.greyorange.com/gstore/"
  },

  {
    title: "Smart Slot AI",

    category: "Healthcare SaaS",

    company: "Mindfusion Studios",

    role: "Founder & Lead Engineer",
    duration: "May 2025 – Jul 2025",
    accent:"#2563eb",
outcome:
  "Built and launched a multi-tenant healthcare scheduling platform integrating conversational WhatsApp booking with provider dashboards and appointment automation.",
    slug: "smart-slot-ai",

subtitle: "Healthcare Scheduling Platform",

metrics: [
  {
    value: "Multi",
    label: "Tenant"
  },
  {
    value: "2",
    label: "Engineers"
  },
  {
    value: "WhatsApp",
    label: "Automation"
  }
],
    team: "2 Engineers",

    image: "/projects/smartslot.png",

    description:
      "Designed and built a multi-tenant healthcare appointment platform enabling clinics and practitioners to manage bookings directly through WhatsApp using conversational scheduling, provider dashboards, and workflow automation.",

    challenge:
      "Researching Twilio's WhatsApp ecosystem while designing a scalable multi-tenant backend supporting providers, clinics, conversational booking, and operational dashboards.",

    contributions: [
      "Designed complete application architecture",
      "Developed NestJS backend",
      "Built React dashboard",
      "Implemented WhatsApp integration",
      "Designed multi-tenant architecture",
      "Led engineering delivery"
    ],

    stack: [
      "React",
      "NestJS",
      "MongoDB",
      "Twilio",
      "WhatsApp"
    ],

    featured: true
  },

  {
    title: "Zap",

    category: "Conversational Commerce",

    company: "Mindfusion Studios",

    role: "Founder & Lead Engineer",
    slug: "zap",

subtitle: "WhatsApp Commerce Platform",
outcome:
  "Designed and built a conversational commerce platform allowing merchants to receive and manage customer orders entirely through WhatsApp.",
metrics: [
  {
    value: "WhatsApp",
    label: "Commerce"
  },
  {
    value: "2",
    label: "Engineers"
  },
  {
    value: "React",
    label: "Dashboard"
  }
],

    duration: "May 2025 – Jul 2025",

    accent:"#0f766e",
    team: "2 Engineers",

    image: "/projects/zap.png",

    description:
      "Built a conversational commerce platform enabling businesses to receive, manage and fulfil customer orders entirely through WhatsApp with dedicated merchant dashboards and order management workflows.",

    challenge:
      "Designing intuitive conversational commerce experiences while integrating WhatsApp messaging and merchant workflows into a scalable backend platform.",

    contributions: [
      "Designed complete architecture",
      "Built merchant dashboard",
      "Implemented WhatsApp ordering",
      "Designed order lifecycle",
      "Led engineering delivery"
    ],

    stack: [
      "React",
      "NestJS",
      "MongoDB",
      "Twilio"
    ],

    featured: false
  },

  {
    title: "Game.tv Tournament Platform",
    lessons:
  "Building an MVP in 45 days taught me to prioritize architecture that enables rapid iteration instead of premature optimization.",

    category: "Gaming Platform",

    company: "Game.tv",

    duration: "Sep 2019 – Jan 2022",
    outcome:
  "Delivered a production Flutter application within 45 days that helped power an esports platform with over 100K iOS downloads.",
    accent:"#7c3aed",

    role: "Senior Software Engineer",

    team: "7 Engineers",

    image: "/projects/gametv.png",
    slug: "game-tv",

subtitle: "Esports Tournament Platform",

metrics: [
  {
    value: "100K+",
    label: "iOS Downloads"
  },
  {
    value: "45 Days",
    label: "MVP Delivery"
  },
  {
    value: "7",
    label: "Engineers"
  }
],

    description:
      "Developed a large-scale esports tournament platform enabling players to create tournaments, automate brackets, manage competitions, and distribute rewards. The application exceeded 100K downloads on iOS while supporting community-created tournaments.",

    challenge:
      "Learning Flutter from scratch and delivering a production-ready MVP within 45 days while building scalable tournament workflows executed entirely through backend services.",

    contributions: [
      "Developed Flutter application",
      "Built FastAPI backend services",
      "Implemented tournament automation",
      "Designed player workflows",
      "Built profile management",
      "Contributed to NFT Marketplace platform"
    ],

    stack: [
      "Flutter",
      "FastAPI",
      "Firebase",
      "Node.js"
    ],

    featured: false,

    website: "https://www.game.tv/"
  }
];