import type { ComponentType } from "react";
import { BadgeCheck, CloudCog, Languages, LifeBuoy, Rocket, Waypoints } from "lucide-react";

type ValueCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>; 
};

const defaultValues: ValueCard[] = [
  {
    title: "Local Implementation Team in Bangladesh",
    description: "Expert team based in Dhaka with deep local context.",
    icon: Waypoints,
  },
  {
    title: "Bangla & English Training",
    description: "Training and documentation in both Bangla and English.",
    icon: Languages,
  },
  {
    title: "Secure Cloud Hosting & Automated Backups",
    description: "Enterprise-grade infrastructure with backup discipline.",
    icon: CloudCog,
  },
  {
    title: "Structured Implementation Methodology",
    description: "Proven delivery process to reduce risk and surprises.",
    icon: BadgeCheck,
  },
  {
    title: "Fast Support with Clear SLAs",
    description: "Defined response windows with accountable support.",
    icon: LifeBuoy,
  },
  {
    title: "Migration from Excel & Legacy Systems",
    description: "Safe migration plans and staged cutover support.",
    icon: Rocket,
  },
];

type WhyBlubitProps = {
  values?: ValueCard[];
};

export function WhyBlubit({ values = defaultValues }: WhyBlubitProps) {
  return (
    <section className="bg-orbit-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Why Blubit</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            We combine local execution strength with enterprise-grade ERP delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6 transition hover:border-cyan-400/60 hover:bg-orbit-card/80 hover:shadow-glow-cyan"
            >
              <div className="mb-4 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-3 text-cyan-300">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-bold text-white">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

