"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowRight, BarChart3, CloudCog, PlugZap, Sparkles, Wrench } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type ServiceCardProps = {
  title: string;
  description?: string;
  bullets: string[];
  anchorId?: string;
};

type ServiceCardsGridProps = {
  services?: ServiceCardProps[];
};

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

const ICONS = [Wrench, PlugZap, CloudCog, BarChart3, Sparkles];

function getSummary(service: ServiceCardProps) {
  if (service.description) return service.description;
  return service.bullets.slice(0, 2).join(" / ");
}

export function ServiceCardsGrid({ services = defaultServices }: ServiceCardsGridProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={clsx(
        "relative overflow-hidden py-12 md:py-14",
        isDark ? "bg-orbit-dark" : "bg-slate-50",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0",
          isDark
            ? "bg-[radial-gradient(circle_at_15%_20%,rgba(0,199,255,0.16),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(56,189,248,0.12),transparent_40%)]"
            : "bg-[radial-gradient(circle_at_15%_20%,rgba(8,145,178,0.12),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(14,116,144,0.10),transparent_40%)]",
        )}
      />
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:52px_52px]",
          isDark ? "opacity-[0.08]" : "opacity-[0.05]",
        )}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:px-8">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <p
            className={clsx(
              "mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.2em]",
              isDark
                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                : "border-cyan-800/25 bg-cyan-100/70 text-cyan-900",
            )}
          >
            CORE DELIVERY
          </p>
          <h2 className={clsx("mb-3 max-w-xl text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-slate-900")}>
            What We Do
          </h2>
          <p className={clsx("max-w-xl text-sm md:text-base", isDark ? "text-gray-300" : "text-slate-700")}>
            Structured implementation, engineering, and intelligence services designed to move your ERP from plan to measurable results.
          </p>
          <Link
            href="/services"
            className={clsx(
              "mt-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition",
              isDark
                ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-200 hover:border-cyan-300/70 hover:bg-cyan-400/15"
                : "border-cyan-800/25 bg-cyan-100/70 text-cyan-900 hover:border-cyan-700/45 hover:bg-cyan-100",
            )}
          >
            Explore Full Service Catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>

        <div className="space-y-3.5 md:space-y-4">
          {services.map((service, idx) => {
            const Icon = ICONS[idx] ?? Wrench;
            const tags = service.bullets.slice(0, 2);
            const extraTags = Math.max(service.bullets.length - tags.length, 0);

            return (
              <article
                key={service.title}
                className={clsx(
                  "group relative min-h-[152px] overflow-hidden rounded-2xl border p-4 transition duration-300 hover:-translate-y-0.5",
                  isDark
                    ? "border-cyan-500/30 bg-orbit-card hover:border-cyan-300/70 hover:shadow-glow-cyan"
                    : "border-cyan-800/20 bg-orbit-card hover:border-cyan-700/40 hover:shadow-[0_0_24px_rgba(14,116,144,0.16)]",
                )}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div
                  className={clsx(
                    "absolute left-0 top-0 h-full w-1 transition",
                    isDark ? "bg-cyan-500/35 group-hover:bg-cyan-300/80" : "bg-cyan-700/30 group-hover:bg-cyan-700/70",
                  )}
                />
                <div
                  className={clsx(
                    "pointer-events-none absolute right-4 top-2 text-[2.4rem] font-bold md:text-[3.4rem]",
                    isDark ? "text-cyan-200/10" : "text-cyan-900/10",
                  )}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="relative grid grid-cols-1 gap-3 md:grid-cols-[auto_1fr] md:items-center">
                  <div
                    className={clsx(
                      "inline-flex h-10 w-10 items-center justify-center rounded-xl border",
                      isDark
                        ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                        : "border-cyan-700/25 bg-cyan-100/70 text-cyan-800",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className={clsx("text-base font-bold md:text-lg", isDark ? "text-white" : "text-slate-900")}>{service.title}</h3>
                    <p className={clsx("mt-1 text-sm line-clamp-2", isDark ? "text-gray-300" : "text-slate-700")}>{getSummary(service)}</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={clsx(
                            "rounded-full border px-2 py-0.5 text-xs font-medium",
                            isDark
                              ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-200"
                              : "border-cyan-800/25 bg-cyan-100/70 text-cyan-900",
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                      {extraTags > 0 && (
                        <span
                          className={clsx(
                            "rounded-full border px-2 py-0.5 text-xs font-medium",
                            isDark
                              ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-200"
                              : "border-cyan-800/25 bg-cyan-100/70 text-cyan-900",
                          )}
                        >
                          +{extraTags} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
