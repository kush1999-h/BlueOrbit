import type {
  Job,
  ModuleItem,
  ProofStat,
  Service,
  TeamMember,
  Testimonial,
} from "@/types/content";

export const HERO_SLIDES = [
  {
    title: "Odoo ERP Sales, Supply & Implementation",
    support:
      "From requirement analysis and configuration to training and go-live support.",
    image: "/placeholders/slide-1.svg",
    video: "/hero-s1.mp4",
    panelTitle: "ERP delivery with local execution",
    panelItems: [
      "Discovery workshops",
      "Configuration & migration",
      "Training & support",
    ],
  },
  {
    title: "Software, Website & Custom Platform Delivery",
    support:
      "Business applications, web platforms, integrations, and tailored digital systems.",
    image: "/placeholders/slide-2.svg",
    video: "/hero-s2.mp4",
    panelTitle: "Digital systems built around operations",
    panelItems: [
      "Business software",
      "Corporate websites",
      "Integrated portals",
    ],
  },
  {
    title: "Infrastructure, Cloud & Security Operations",
    support:
      "DevOps, storage, servers, cloud solutions, audits, and secure enterprise deployments.",
    image: "/placeholders/slide-3.svg",
    video: "/hero-s3.mp4",
    panelTitle: "Enterprise reliability and cloud readiness",
    panelItems: ["Server & storage", "Cloud & DevOps", "Cyber audit"],
  },
  {
    title: "Strategic Technology Partnerships",
    support:
      "Beyond62, GalaxySpace, Huawei cloud solutions, and enterprise technology delivery for Bangladesh.",
    image: "/placeholders/slide-4.svg",
    video: "/hero-s4.mp4",
    panelTitle: "Regional partnerships for specialized delivery",
    panelItems: [
      "Satellite IoT",
      "Huawei solutions",
      "Bangladesh market execution",
    ],
  },
] as const;

export const AUTHORITY_ITEMS = [
  {
    name: "Odoo",
    label: "Official Odoo Learning Partner",
    description:
      "Learning partnership with ERP ecosystem alignment and implementation capability.",
    logo: "/odoo-logo.png",
  },
  {
    name: "Beyond62",
    label: "Beyond62 Bangkok Authorized Partner",
    description:
      "Authorized partnership for satellite IoT solutions and regional collaboration.",
    logo: "/beyond22_logo.jpg",
  },
  {
    name: "GalaxySpace",
    label: "GalaxySpace Authorized Reseller for Bangladesh",
    description:
      "Bangladesh-market reseller and partner for satellite technology offerings.",
    logo: "/GalaxySpace-logo.png",
  },
  {
    name: "Huawei",
    label: "Huawei Cloud & Enterprise Solutions Partner",
    description:
      "Cloud and enterprise solution alignment for infrastructure and business deployments.",
    logo: "/huawei_logo.jpg",
  },
] as const;

export const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    title: "Odoo Setup, Custom Modules & Business Systems",
    slug: "odoo-setup-custom-modules-business-systems",
    shortDesc:
      "End-to-end Odoo setup, module delivery, custom development, migration, training, and operational rollout.",
    bullets: [
      "Implementation, hosting, and go-live setup",
      "Custom modules, workflows, and integrations",
      "Migration, training, and long-term support",
      "Reporting, analytics, and decision systems",
    ],
    displayOrder: 1,
  },
  {
    id: 2,
    title: "Software Development",
    slug: "software-development",
    shortDesc:
      "Custom business software, internal systems, automation tools, and applications.",
    bullets: [
      "Business applications",
      "Internal systems",
      "Automation tools",
      "Custom integrations",
    ],
    displayOrder: 2,
  },
  {
    id: 3,
    title: "Website Development",
    slug: "website-development",
    shortDesc:
      "Corporate websites, portals, eCommerce platforms, and integrated web experiences.",
    bullets: [
      "Corporate websites",
      "Portals",
      "eCommerce",
      "Integrated web experiences",
    ],
    displayOrder: 3,
  },
  {
    id: 4,
    title: "DevOps, Cloud & Infrastructure",
    slug: "devops-cloud-infrastructure",
    shortDesc:
      "Deployment pipelines, monitoring, backup strategy, server setup, storage, and cloud operations.",
    bullets: [
      "DevOps pipelines",
      "Monitoring, backup, and recovery",
      "Cloud architecture",
      "Servers, storage, and infrastructure operations",
    ],
    displayOrder: 4,
  },
  {
    id: 5,
    title: "Data Analytics, ML Models & IT Advisory",
    slug: "data-analytics-ml-models-it-advisory",
    shortDesc:
      "Data analysis, custom ML models, cyber security review, and IT planning for future business decisions.",
    bullets: [
      "ERP and business data analysis",
      "Custom ML models for forecasting and decision support",
      "Cyber security audit and requirement analysis",
      "Technology planning and advisory",
    ],
    displayOrder: 5,
  },
];

export const DEFAULT_MODULES: ModuleItem[] = [
  {
    id: 1,
    title: "Odoo ERP",
    benefit:
      "Setup, customization, migration, training, and support for core business operations.",
    iconName: "Calculator",
    displayOrder: 1,
  },
  {
    id: 2,
    title: "Applications",
    benefit:
      "Custom softwares for SMEs and also for education institutes, hospitals, agriculture, and more. AI Solutions & Data-Driven Business Decision Making: Leverage AI solutions and data-driven models to make informed business decisions. Vision-Based AI Projects: Implement AI-powered surveillance, auto-attendance, and more, using integration with CCTV and other systems.",
    iconName: "Handshake",
    displayOrder: 2,
  },
  {
    id: 3,
    title: "Business Websites",
    benefit:
      "Corporate websites, portals, eCommerce, and customer-facing digital experiences.",
    iconName: "Globe",
    displayOrder: 3,
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    benefit:
      "Deployment pipelines, hosting, monitoring, backup, and day-to-day cloud operations.",
    iconName: "ShoppingCart",
    displayOrder: 4,
  },
  {
    id: 5,
    title: "Consultancy as a Service (Business)",
    benefit:
      "Specialized consultancy for turnkey, end-to-end business enhancement tailored to the UAE market.",
    iconName: "Boxes",
    displayOrder: 5,
  },
  {
    id: 6,
    title: "Cyber Security Audit",
    benefit:
      "Security assessment, posture review, risk identification, and improvement guidance. AI-Powered Surveillance & Security: Enhance your security infrastructure with AI surveillance systems integrated with CCTV and other smart devices.",
    iconName: "ScanLine",
    displayOrder: 6,
  },
  {
    id: 7,
    title: "IT Training",
    benefit:
      "User training, team enablement, and practical knowledge transfer for business systems.",
    iconName: "Users",
    displayOrder: 7,
  },
  {
    id: 8,
    title: "Consultancy as a Service (Government)",
    benefit:
      "Expert consultancy for government agencies looking to modernize, automate, and optimize their operations.",
    iconName: "Clock3",
    displayOrder: 8,
  },
  {
    id: 9,
    title: "Satellite IoT Solutions",
    benefit:
      "Partner-led connectivity and specialized satellite-enabled solutions for Bangladesh.",
    iconName: "Factory",
    displayOrder: 9,
  },
];

export const WHY_BLUE_ORBIT = [
  "Official Odoo learning partnership with implementation capability",
  "Bangladesh market understanding for SME and enterprise delivery",
  "Capability across software, cloud, infrastructure, audit, and training",
  "Authorized strategic partnerships in satellite and enterprise solutions",
  "Requirement analysis and implementation discipline from planning to rollout",
  "Cross-functional execution instead of fragmented vendor coordination",
];

export const PROCESS_STEPS = [
  "Business Discovery",
  "Requirement Analysis",
  "Solution Design",
  "Supply / Build / Configure",
  "Testing & Validation",
  "Go-Live / Handover",
  "Training & Support",
];

export const DEFAULT_PROOF_STATS: ProofStat[] = [
  { id: 1, label: "Projects Supported", value: "50+", displayOrder: 1 },
  { id: 2, label: "Organizations Trained", value: "20+", displayOrder: 2 },
  { id: 3, label: "Support Responsiveness", value: "99%", displayOrder: 3 },
  { id: 4, label: "Strategic Partnerships", value: "4", displayOrder: 4 },
  {
    id: 5,
    label: "Bangladesh-Focused Delivery",
    value: "100%",
    displayOrder: 5,
  },
];

export const PARTNERSHIPS = [
  {
    name: "Odoo",
    title: "Official learning partnership and ERP ecosystem alignment.",
    logo: "/odoo-logo.png",
  },
  {
    name: "Beyond62 Bangkok",
    title:
      "Authorized partnership for satellite IoT solutions and regional collaboration.",
    logo: "/beyond22_logo.jpg",
  },
  {
    name: "GalaxySpace",
    title:
      "Authorized reseller and Bangladesh-market partner for satellite technology offerings.",
    logo: "/GalaxySpace-logo.png",
  },
  {
    name: "Huawei Cloud & Enterprise",
    title:
      "Cloud and enterprise solution alignment for business and infrastructure deployments.",
    logo: null,
  },
] as const;

export const INDUSTRIES = [
  "Manufacturing",
  "Retail & Distribution",
  "Services",
  "Trading Businesses",
  "Education & Training",
  "Health",
  "Enterprise Operations",
] as const;

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Farhan Islam",
    role: "COO",
    company: "Delta Retail BD",
    quote:
      "Blue Orbit helped us align systems, infrastructure, and operational delivery under one implementation partner.",
  },
  {
    id: 2,
    name: "Nadia Rahman",
    role: "Finance Lead",
    company: "Orbit Fashion House",
    quote:
      "From ERP planning to web and reporting needs, the execution felt structured and practical.",
  },
];

export const DEFAULT_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Rezwan Anwar",
    role: "CEO, Founder",
    bio: "Visionary leader driving Blue Orbit's mission to deliver enterprise-grade technology solutions in Bangladesh.",
    photoUrl: "/placeholders/team-1.svg",
  },
  {
    id: 2,
    name: "Sachitra Halder",
    role: "Technical Coordinator",
    bio: "Ensures technical excellence and seamless coordination across all implementation and delivery projects.",
    photoUrl: "/placeholders/team-2.svg",
  },
  {
    id: 3,
    name: "Muhaimin Rahman",
    role: "Lead Business Analyst",
    bio: "Specializes in understanding business requirements and translating them into strategic technical solutions.",
    photoUrl: "/placeholders/team-3.svg",
  },
];

export const DEFAULT_JOBS: Job[] = [
  {
    id: 1,
    title: "Odoo Functional Consultant",
    slug: "odoo-functional-consultant",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Lead business discovery, configure Odoo modules, support training, and guide implementation readiness.",
    isActive: true,
  },
  {
    id: 2,
    title: "DevOps Engineer",
    slug: "devops-engineer",
    location: "Remote (Bangladesh)",
    type: "Full-time",
    description:
      "Manage cloud operations, CI/CD, monitoring, and infrastructure reliability across enterprise workloads.",
    isActive: true,
  },
];

export const TRUST_LINE =
  "Odoo | DevOps | Web Development | IT Audit | Cyber Security | Server & Storage | Satellite IoT";
