import { BarChart3, CloudCog, PlugZap, Sparkles, Wrench } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Services | Blubit",
  description:
    "Discover Blubit's Odoo services: implementation, customization, DevOps, analytics, and predictive ML models.",
};

const ICONS = [Wrench, PlugZap, CloudCog, BarChart3, Sparkles];

export default function Services() {
  const services = [
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
    },
    {
      id: "devops",
      title: "DevOps & Cloud Infrastructure",
      description:
        "Enterprise-grade hosting, deployment automation, and monitoring for ERP reliability.",
      highlights: [
        "Cloud deployment (AWS, Azure, VPS)",
        "Containerized environments",
        "CI/CD pipelines and release automation",
        "Backup and disaster recovery",
        "Performance optimization and scaling",
      ],
    },
    {
      id: "analytics",
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform operational data into dashboards and decision-ready insights.",
      highlights: [
        "Executive KPI dashboards",
        "Sales and revenue analysis",
        "Financial and inventory insights",
        "Custom BI reporting systems",
      ],
    },
    {
      id: "ml",
      title: "Personalized Predictive ML Models",
      description:
        "Apply ML to forecast trends and optimize performance with ERP-native data.",
      highlights: [
        "Sales forecasting",
        "Demand prediction",
        "Customer churn analysis",
        "Inventory forecasting",
        "Custom ML models for your data",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-orbit-dark">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Our Services</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              End-to-end Odoo delivery covering implementation, infrastructure, and intelligence.
            </p>
          </div>
        </section>

        {services.map((service, idx) => {
          const Icon = ICONS[idx];

          return (
            <section
              key={service.id}
              id={service.id}
              className={`px-4 py-16 sm:px-6 lg:px-8 md:py-24 ${
                idx % 2 === 0 ? "border-t border-cyan-500/20 bg-orbit-darker" : ""
              }`}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-4xl font-bold text-white">{service.title}</h2>
                  <p className="mb-6 text-lg text-gray-300">{service.description}</p>
                  <div className="space-y-3">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex h-full flex-col justify-center rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
                  <div className="mb-4 inline-flex w-fit rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-cyan-300">Business Impact</h3>
                  <p className="text-sm text-gray-400">
                    Structured execution, measurable outcomes, and less operational friction.
                  </p>
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-t border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  q: "How long does an Odoo implementation take?",
                  a: "Most projects take 3-6 months depending on complexity, integrations, and data quality.",
                },
                {
                  q: "Do you handle migration from legacy systems?",
                  a: "Yes. We migrate data from Excel and legacy ERPs with staged validation.",
                },
                {
                  q: "Can you build custom modules?",
                  a: "Yes, including custom workflows, reports, and third-party integrations.",
                },
                {
                  q: "Do you provide post-go-live support?",
                  a: "Yes. We provide SLA-backed support and optimization packages.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl border border-cyan-500/30 bg-orbit-darker p-6">
                  <h3 className="mb-3 font-bold text-cyan-300">{faq.q}</h3>
                  <p className="text-sm text-gray-400">{faq.a}</p>
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

