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

export function ModulesGrid({ modules = defaultModules }: ModulesGridProps) {
  return (
    <section className="bg-orbit-darker py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Modules Spotlight
          </h2>
          <p className="text-gray-400">
            Every module your business needs, unified in one ERP.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="group rounded-xl border border-cyan-500/30 bg-orbit-card p-8 text-center transition hover:border-cyan-400/60 hover:bg-orbit-card/80 hover:shadow-glow-cyan"
            >
              <div className="mb-4 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-3 text-cyan-300 transition group-hover:scale-105">
                <module.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{module.title}</h3>
              <p className="text-sm text-gray-400">{module.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

