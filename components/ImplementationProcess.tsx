import { CheckCircle } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Workshop",
    description: "Understand your business processes and requirements",
  },
  {
    step: 2,
    title: "Solution Blueprint",
    description: "Design the tailored solution for your needs",
  },
  {
    step: 3,
    title: "Configuration & Data Migration",
    description: "Set up modules and migrate your business data",
  },
  {
    step: 4,
    title: "Custom Development",
    description: "Build custom features and integrations if needed",
  },
  {
    step: 5,
    title: "Testing & UAT",
    description: "Comprehensive testing with your team",
  },
  {
    step: 6,
    title: "Go-Live",
    description: "Launch your new Odoo system into production",
  },
  {
    step: 7,
    title: "Ongoing Support",
    description: "Continuous support and optimization",
  },
];

export function ImplementationProcess() {
  return (
    <section className="py-16 md:py-24 bg-orbit-darker">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Implementation Process
          </h2>
          <p className="text-gray-400">
            A structured methodology ensuring successful deployment
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile: Vertical timeline */}
          <div className="md:hidden">
            <div className="space-y-6">
              {steps.map((item) => (
                <div key={item.step} className="relative pl-8">
                  {/* Timeline dot and line */}
                  <div className="absolute -left-2 top-0 h-6 w-6 rounded-full border-2 border-cyan-400 bg-orbit-dark" />
                  {item.step < steps.length && (
                    <div className="absolute left-1 top-6 w-0.5 h-12 bg-gradient-to-b from-cyan-400/60 to-cyan-400/20" />
                  )}

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-cyan-300">
                        Step {item.step}
                      </span>
                    </div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Horizontal timeline */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 relative">
              {/* Connecting line */}
              <div className="absolute -top-12 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/20 via-cyan-400/60 to-cyan-400/20 hidden lg:block" />

              {steps.map((item) => (
                <div key={item.step} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className="relative mb-4 z-10">
                    <div className="h-14 w-14 rounded-full border-3 border-cyan-400 bg-orbit-dark flex items-center justify-center">
                      <span className="font-bold text-cyan-300 text-lg">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-bold text-white mb-2 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Faster Time to Value",
              desc: "Go live in weeks, not months",
            },
            {
              title: "Reduced Risk",
              desc: "Proven methodology minimizes implementation risks",
            },
            {
              title: "Maximum Adoption",
              desc: "Proper training ensures team buy-in",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-cyan-500/30 bg-orbit-card p-4"
            >
              <CheckCircle className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-white">{benefit.title}</h4>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

