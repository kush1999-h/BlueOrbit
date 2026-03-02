"use client";

import clsx from "clsx";
import {
  Boxes,
  Calculator,
  Clock3,
  Factory,
  Globe,
  Handshake,
  ScanLine,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type ModuleTile = {
  title: string;
  benefit: string;
  icon: LucideIcon;
};

const defaultModules: ModuleTile[] = [
  {
    title: "Accounting & Invoicing",
    benefit: "Streamlined financial management and compliance.",
    icon: Calculator,
  },
  {
    title: "Sales & CRM",
    benefit: "Build stronger customer relationships and close faster.",
    icon: Handshake,
  },
  {
    title: "Inventory & Warehouse",
    benefit: "Optimize stock levels and warehouse operations.",
    icon: Boxes,
  },
  {
    title: "Purchase",
    benefit: "Efficient procurement and supplier management.",
    icon: ShoppingCart,
  },
  {
    title: "HR & Payroll",
    benefit: "Manage talent and payroll with clarity.",
    icon: Users,
  },
  {
    title: "POS",
    benefit: "Modern retail and restaurant operations.",
    icon: ScanLine,
  },
  {
    title: "Manufacturing (MRP)",
    benefit: "Production planning and resource control.",
    icon: Factory,
  },
  {
    title: "Project & Timesheets",
    benefit: "Track projects, time, and utilization.",
    icon: Clock3,
  },
  {
    title: "Website & eCommerce",
    benefit: "Launch online stores with ERP-native operations.",
    icon: Globe,
  },
];

type ModulesGridProps = {
  modules?: ModuleTile[];
};

const accentMap = [
  "from-cyan-400/30 to-sky-500/20",
  "from-blue-400/30 to-cyan-500/20",
  "from-teal-400/30 to-cyan-500/20",
  "from-indigo-400/30 to-blue-500/20",
];

const shapeMap = [
  "rounded-[1.5rem]",
  "rounded-[1.5rem] rounded-tr-[3rem]",
  "rounded-[1.5rem] rounded-bl-[3rem]",
  "rounded-[2.25rem] rounded-br-[0.75rem]",
];

export function ModulesGrid({ modules = defaultModules }: ModulesGridProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={clsx("py-16 md:py-24", isDark ? "bg-orbit-darker" : "bg-slate-100")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className={clsx("mb-4 text-4xl font-bold md:text-5xl", isDark ? "text-white" : "text-slate-900")}>
            Modules Spotlight
          </h2>
          <p className={clsx("mx-auto max-w-2xl", isDark ? "text-gray-400" : "text-slate-600")}>
            Business modules arranged into one connected ERP backbone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, idx) => {
            const accent = accentMap[idx % accentMap.length];
            const shape = shapeMap[idx % shapeMap.length];
            const isFeatured = idx % 3 === 0;

            return (
              <article
                key={module.title}
                className={clsx(
                  "group relative overflow-hidden border p-6 transition duration-300 hover:-translate-y-1",
                  shape,
                  isDark
                    ? isFeatured
                      ? "border-cyan-300/50 bg-orbit-card hover:border-cyan-200/80"
                      : "border-cyan-500/30 bg-orbit-card hover:border-cyan-300/70"
                    : isFeatured
                      ? "border-cyan-700/35 bg-white hover:border-cyan-700/55"
                      : "border-slate-200 bg-white hover:border-cyan-700/35",
                )}
              >
                <div className={clsx("pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br blur-xl", accent)} />
                <div
                  className={clsx(
                    "pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full blur-lg",
                    isDark ? "bg-cyan-400/10" : "bg-cyan-500/10",
                  )}
                />

                <div
                  className={clsx(
                    "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border transition group-hover:-translate-y-0.5",
                    isDark
                      ? "border-cyan-400/45 bg-cyan-400/10 text-cyan-300"
                      : "border-cyan-700/25 bg-cyan-100 text-cyan-800",
                  )}
                >
                  <module.icon className="h-6 w-6" />
                </div>

                <h3 className={clsx("mb-2 text-lg font-semibold", isDark ? "text-white" : "text-slate-900")}>{module.title}</h3>
                <p className={clsx("text-sm leading-6", isDark ? "text-gray-300" : "text-slate-600")}>{module.benefit}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
