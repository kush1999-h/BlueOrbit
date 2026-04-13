import {
  BriefcaseBusiness,
  CloudCog,
  Factory,
  Globe,
  Handshake,
  PlugZap,
  Shield,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Services | Blue Orbit Solutions",
  description:
    "Explore Blue Orbit services across Odoo, applications, AI solutions, websites, cloud, cyber security, training, and business/government consultancy.",
};

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  impactTitle: string;
  impactDescription: string;
  icon: LucideIcon;
};

const SERVICES: ServiceItem[] = [
  {
    id: "implementation",
    title: "Odoo Implementation",
    description:
      "Full lifecycle implementation from discovery to go-live, with training and adoption support.",
    highlights: [
      "Requirements gathering and workshops",
      "Module configuration and fit-gap alignment",
      "Data migration from legacy systems",
      "User training and change management",
      "Go-live support and stabilization",
    ],
    impactTitle: "Reliable ERP Rollout",
    impactDescription:
      "Get a structured implementation path that reduces rollout risk and improves adoption across teams.",
    icon: Wrench,
  },
  {
    id: "customization",
    title: "Odoo Customization & Integration",
    description:
      "Tailor Odoo to your processes with custom modules and third-party integrations.",
    highlights: [
      "Custom module development",
      "Workflow automation",
      "API integrations (payment, logistics, CRM)",
      "Advanced reporting and analytics",
    ],
    impactTitle: "Process Fit, Not Process Friction",
    impactDescription:
      "Adapt Odoo to your operations so teams spend less time on workarounds and more time on execution.",
    icon: PlugZap,
  },
  {
    id: "applications",
    title: "Applications & AI Solutions",
    description:
      "Custom softwares for SMEs and also for education institutes, hospitals, agriculture, and other sectors.",
    highlights: [
      "AI solutions and data-driven business decision making",
      "Vision-based AI projects with surveillance and auto-attendance",
      "Integration with CCTV and smart operational systems",
      "Custom internal applications and workflow automation",
    ],
    impactTitle: "Smarter Decisions at Runtime",
    impactDescription:
      "Combine custom applications with AI models to improve planning accuracy and day-to-day decision quality.",
    icon: Sparkles,
  },
  {
    id: "websites",
    title: "Business Websites & Portals",
    description:
      "Corporate websites, portals, eCommerce, and customer-facing digital experiences.",
    highlights: [
      "Corporate websites for brand and lead generation",
      "Customer and partner portals",
      "eCommerce experiences with operational alignment",
      "Integrated web journeys across teams",
    ],
    impactTitle: "Digital Presence That Converts",
    impactDescription:
      "Create customer-facing platforms that improve trust, engagement, and conversion while staying operationally aligned.",
    icon: Globe,
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Deployment pipelines, hosting, monitoring, backup, and day-to-day cloud operations.",
    highlights: [
      "Cloud deployment and workload management",
      "CI/CD pipelines and release automation",
      "Backup, monitoring, and recovery workflows",
      "Performance optimization and reliability operations",
    ],
    impactTitle: "Operational Stability at Scale",
    impactDescription:
      "Run critical workloads with stronger uptime, faster release cycles, and predictable infrastructure performance.",
    icon: CloudCog,
  },
  {
    id: "consultancy-business",
    title: "Consultancy as a Service (Business)",
    description:
      "Specialized consultancy for turnkey, end-to-end business enhancement tailored to the UAE market.",
    highlights: [
      "End-to-end business enhancement consulting",
      "Turnkey planning and implementation advisory",
      "Operational strategy with execution pathways",
      "UAE market-focused guidance and delivery planning",
    ],
    impactTitle: "Turnkey Business Acceleration",
    impactDescription:
      "Move from strategy to implementation with practical, market-aware consulting tailored to UAE-focused programs.",
    icon: BriefcaseBusiness,
  },
  {
    id: "security",
    title: "Cyber Security Audit & AI-Powered Surveillance",
    description:
      "Security assessment, posture review, risk identification, and improvement guidance with AI-enabled surveillance support.",
    highlights: [
      "Cyber security audit and risk identification",
      "Security posture review and improvement roadmap",
      "AI-powered surveillance integration with CCTV",
      "Smarter security operations using connected devices",
    ],
    impactTitle: "Stronger Security Posture",
    impactDescription:
      "Improve protection maturity with audit-led fixes and AI-enabled surveillance support for higher-risk environments.",
    icon: Shield,
  },
  {
    id: "training",
    title: "IT Training",
    description:
      "User training, team enablement, and practical knowledge transfer for business systems.",
    highlights: [
      "Role-based user training",
      "Operational team enablement",
      "Admin and super-user readiness",
      "Hands-on adoption support",
    ],
    impactTitle: "Faster Team Enablement",
    impactDescription:
      "Build internal capability so teams can adopt systems faster and sustain long-term usage with less dependency.",
    icon: Users,
  },
  {
    id: "consultancy-government",
    title: "Consultancy as a Service (Government)",
    description:
      "Expert consultancy for government agencies looking to modernize, automate, and optimize their operations.",
    highlights: [
      "Government modernization and automation planning",
      "Process transformation with practical implementation guidance",
      "Cross-department operating model improvements",
      "Structured roadmap support for long-term optimization",
    ],
    impactTitle: "Public-Sector Transformation Support",
    impactDescription:
      "Guide modernization programs with clear execution roadmaps that improve service delivery and operational efficiency.",
    icon: Handshake,
  },
  {
    id: "satellite-iot",
    title: "Satellite IoT Solutions",
    description:
      "Partner-led connectivity and specialized satellite-enabled solutions for Bangladesh.",
    highlights: [
      "Satellite-enabled connectivity solutions",
      "Partner-led specialized implementation",
      "Remote and distributed operation use cases",
      "Bangladesh-focused deployment pathways",
    ],
    impactTitle: "Connectivity Beyond Traditional Limits",
    impactDescription:
      "Enable dependable communication for remote and distributed operations through specialized satellite IoT pathways.",
    icon: Factory,
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does implementation usually take?",
    a: "Most engagements run in phased milestones depending on scope, integrations, process readiness, and data quality.",
  },
  {
    q: "Do you provide AI-based solutions beyond dashboards?",
    a: "Yes. We deliver AI solutions for decision support, vision-based automation, and surveillance use cases integrated with business operations.",
  },
  {
    q: "Can you support both business and government consultancy programs?",
    a: "Yes. We provide Consultancy as a Service for both business programs and government modernization initiatives.",
  },
  {
    q: "Do you provide post-go-live support and training?",
    a: "Yes. We provide structured support, optimization, and team training to sustain long-term adoption.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="bg-ui-page">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-ui-heading mb-6 text-5xl font-bold md:text-6xl">
              Our Services
            </h1>
            <p className="text-ui-body mx-auto max-w-3xl text-xl">
              End-to-end delivery across Odoo, applications, AI solutions,
              websites, cloud, cyber security, training, and strategic
              consultancy.
            </p>
          </div>
        </section>

        {SERVICES.map((service, idx) => {
          const Icon = service.icon;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`px-4 py-16 sm:px-6 lg:px-8 md:py-24 ${
                idx % 2 === 0 ? "border-ui bg-ui-surface border-t" : ""
              }`}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="text-ui-heading mb-4 text-4xl font-bold">
                    {service.title}
                  </h2>
                  <p className="text-ui-body mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span className="text-ui-body">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ui-card flex h-full flex-col justify-center rounded-xl p-8">
                  <div className="mb-4 inline-flex w-fit rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-cyan-300">
                    {service.impactTitle}
                  </h3>
                  <p className="text-ui-muted text-sm">
                    {service.impactDescription}
                  </p>
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-ui border-t px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-ui-heading mb-12 text-center text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.q} className="ui-card rounded-xl p-6">
                  <h3 className="mb-3 font-bold text-cyan-300">{faq.q}</h3>
                  <p className="text-ui-muted text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
