import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description?: string;
  bullets: string[];
  anchorId?: string;
}

export function ServiceCard({
  title,
  description,
  bullets,
  anchorId,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-cyan-500/30 bg-orbit-card p-6 transition hover:border-cyan-400/60 hover:bg-orbit-card/80 hover:shadow-glow-cyan">
      {/* Background gradient on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 transition group-hover:opacity-100 -z-10 rounded-xl" />

      <h3 className="text-xl font-bold text-cyan-300 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-400 mb-4">{description}</p>
      )}

      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-gray-300"
          >
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services${anchorId ? `#${anchorId}` : ""}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1 group-hover:text-cyan-200"
      >
        View Services <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

interface ServiceCardsGridProps {
  services?: ServiceCardProps[];
}

const defaultServices: ServiceCardProps[] = [
  {
    title: "Odoo Implementation",
    bullets: [
      "Requirement workshops",
      "Module configuration",
      "Data migration",
      "User setup & testing",
      "Go-live support",
    ],
    anchorId: "implementation",
  },
  {
    title: "Odoo Customization & Integration",
    bullets: [
      "Custom modules & automation",
      "Advanced reporting",
      "API integrations",
      "Payment & third-party integrations",
    ],
    anchorId: "customization",
  },
  {
    title: "DevOps & Cloud Infrastructure",
    bullets: [
      "Cloud deployment & VPS setup",
      "Containerized environments",
      "CI/CD pipelines",
      "Automated backups",
      "Performance monitoring",
    ],
    anchorId: "devops",
  },
  {
    title: "Data Analytics & Business Intelligence",
    bullets: [
      "KPI dashboards",
      "Sales & financial analysis",
      "Inventory optimization insights",
      "Custom reporting systems",
    ],
    anchorId: "analytics",
  },
  {
    title: "Personalized Predictive ML Models",
    bullets: [
      "Sales trend prediction",
      "Demand forecasting",
      "Customer churn analysis",
      "Inventory forecasting models",
      "Custom ML models trained on business data",
    ],
    anchorId: "ml",
  },
];

export function ServiceCardsGrid({
  services = defaultServices,
}: ServiceCardsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-orbit-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive Odoo solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

