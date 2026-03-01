import type { Job, ModuleItem, ProofStat, Service, TeamMember, Testimonial } from "@/types/content";

export const HERO_SLIDES = [
  {
    title: "Odoo ERP Implementation",
    support: "From discovery to go-live and training.",
    image: "/placeholders/slide-1.svg",
  },
  {
    title: "Modules That Fit Your Business",
    support: "Accounting, Inventory, Sales, HR, POS, MRP, eCommerce.",
    image: "/placeholders/slide-2.svg",
  },
  {
    title: "Secure Hosting & DevOps",
    support: "Backups, monitoring, CI/CD, performance tuning.",
    image: "/placeholders/slide-3.svg",
  },
  {
    title: "Data Analytics & Forecasting",
    support: "Dashboards and personalized prediction models powered by your ERP data.",
    image: "/placeholders/slide-4.svg",
  },
] as const;

export const DEFAULT_SERVICES: Service[] = [
  {
    id: 1,
    title: "Odoo Implementation",
    slug: "odoo-implementation",
    shortDesc: "Requirement workshops to go-live support.",
    bullets: [
      "Requirement workshops",
      "Module configuration",
      "Data migration",
      "User setup & testing",
      "Go-live support",
    ],
    displayOrder: 1,
  },
  {
    id: 2,
    title: "Odoo Customization & Integration",
    slug: "odoo-customization-integration",
    shortDesc: "Custom modules, reports, and API integrations.",
    bullets: [
      "Custom modules & automation",
      "Advanced reporting",
      "API integrations",
      "Payment & third-party integrations",
    ],
    displayOrder: 2,
  },
  {
    id: 3,
    title: "DevOps & Cloud Infrastructure",
    slug: "devops-cloud-infrastructure",
    shortDesc: "Reliable cloud hosting and automation.",
    bullets: [
      "Cloud deployment & VPS setup",
      "Containerized environments",
      "CI/CD pipelines",
      "Automated backups",
      "Performance monitoring",
    ],
    displayOrder: 3,
  },
  {
    id: 4,
    title: "Data Analytics & Business Intelligence",
    slug: "data-analytics-business-intelligence",
    shortDesc: "KPI dashboards and data-backed insights.",
    bullets: [
      "KPI dashboards",
      "Sales & financial analysis",
      "Inventory optimization insights",
      "Custom reporting systems",
    ],
    displayOrder: 4,
  },
  {
    id: 5,
    title: "Personalized Predictive ML Models",
    slug: "predictive-ml-models",
    shortDesc: "Forecasting and prediction tailored to your ERP data.",
    bullets: [
      "Sales trend prediction",
      "Demand forecasting",
      "Customer churn analysis",
      "Inventory forecasting models",
      "Custom ML models trained on business data",
    ],
    displayOrder: 5,
  },
];

export const DEFAULT_MODULES: ModuleItem[] = [
  { id: 1, title: "Accounting & Invoicing", benefit: "Accurate books and faster closing.", iconName: "Calculator", displayOrder: 1 },
  { id: 2, title: "Sales & CRM", benefit: "Pipeline visibility and conversion tracking.", iconName: "Handshake", displayOrder: 2 },
  { id: 3, title: "Inventory & Warehouse", benefit: "Live stock and reorder control.", iconName: "Boxes", displayOrder: 3 },
  { id: 4, title: "Purchase", benefit: "Smarter vendor and procurement workflows.", iconName: "ShoppingCart", displayOrder: 4 },
  { id: 5, title: "HR & Payroll", benefit: "Streamlined employee and salary operations.", iconName: "Users", displayOrder: 5 },
  { id: 6, title: "POS", benefit: "Quick checkout with unified reporting.", iconName: "ScanLine", displayOrder: 6 },
  { id: 7, title: "Manufacturing (MRP)", benefit: "Production planning with traceability.", iconName: "Factory", displayOrder: 7 },
  { id: 8, title: "Project & Timesheets", benefit: "Deliver projects on time and budget.", iconName: "Clock3", displayOrder: 8 },
  { id: 9, title: "Website & eCommerce", benefit: "Integrated storefront and order flow.", iconName: "Globe", displayOrder: 9 },
];

export const WHY_BLUBIT = [
  "Local Implementation Team in Bangladesh",
  "Bangla & English Training",
  "Secure Cloud Hosting & Automated Backups",
  "Structured Implementation Methodology",
  "Fast Support with Clear SLAs",
  "Migration from Excel & Legacy Systems",
];

export const PROCESS_STEPS = [
  "Discovery Workshop",
  "Solution Blueprint",
  "Configuration & Data Migration",
  "Custom Development",
  "Testing & UAT",
  "Go-Live",
  "Ongoing Support",
];

export const DEFAULT_PROOF_STATS: ProofStat[] = [
  { id: 1, label: "Go-lives completed", value: "45+", displayOrder: 1 },
  { id: 2, label: "Average delivery speed-up", value: "32%", displayOrder: 2 },
  { id: 3, label: "Support SLA adherence", value: "99.2%", displayOrder: 3 },
  { id: 4, label: "Client retention", value: "93%", displayOrder: 4 },
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Farhan Islam",
    role: "COO",
    company: "Delta Retail BD",
    quote: "Blubit migrated us from spreadsheets to a clean Odoo workflow with minimal downtime.",
  },
  {
    id: 2,
    name: "Nadia Rahman",
    role: "Finance Lead",
    company: "Orbit Fashion House",
    quote: "Our finance, inventory, and POS now run in one system with reliable reporting.",
  },
];

export const DEFAULT_TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Tanmoy Hasan",
    role: "ERP Solutions Architect",
    bio: "Leads Odoo architecture and business process mapping for enterprise deployments.",
    photoUrl: "/placeholders/team-1.svg",
  },
  {
    id: 2,
    name: "Maliha Anjum",
    role: "DevOps Engineer",
    bio: "Designs secure cloud infrastructure, backup strategy, and release automation.",
    photoUrl: "/placeholders/team-2.svg",
  },
  {
    id: 3,
    name: "Raiyan Kabir",
    role: "Data & BI Consultant",
    bio: "Builds KPI dashboards, forecasting models, and executive reporting systems.",
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
      "Lead discovery workshops, map business processes, configure Odoo modules, and support UAT/go-live.",
    isActive: true,
  },
  {
    id: 2,
    title: "DevOps Engineer",
    slug: "devops-engineer",
    location: "Remote (Bangladesh)",
    type: "Full-time",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, monitoring, backups, and deployment reliability for ERP stacks.",
    isActive: true,
  },
];

export const TRUST_LINE =
  "Accounting · CRM · Inventory · HR · POS · Manufacturing · eCommerce";

