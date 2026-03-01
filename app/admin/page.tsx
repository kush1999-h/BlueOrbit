import { BarChart3, Briefcase, Building2, Mail, Newspaper, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Admin Dashboard | Blubit",
  description: "Blubit admin portal dashboard.",
};

const metrics = [
  { label: "Contact submissions", value: "24", icon: Mail },
  { label: "Quote requests", value: "8", icon: BarChart3 },
  { label: "Job applications", value: "12", icon: Briefcase },
  { label: "Newsletter subscribers", value: "145", icon: Newspaper },
];

const contentSections = [
  "Services",
  "Modules",
  "Testimonials",
  "Team Members",
  "Jobs",
  "Proof Stats",
];

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-80px)] bg-orbit-dark px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
            <p className="mt-2 text-gray-400">Manage website content and review captured leads.</p>
          </header>

          <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-xl border border-cyan-500/30 bg-orbit-card p-5">
                <div className="mb-3 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-2 text-cyan-300">
                  <metric.icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-gray-400">{metric.label}</p>
                <p className="mt-1 text-3xl font-bold text-cyan-300">{metric.value}</p>
              </article>
            ))}
          </section>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <section className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
              <h2 className="mb-4 text-xl font-bold text-white">Content Management</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contentSections.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-lg border border-cyan-500/25 bg-orbit-dark px-4 py-3 text-left text-sm text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
              <h2 className="mb-4 text-xl font-bold text-white">Recent Lead Sources</h2>
              <div className="space-y-3">
                {[
                  { source: "Request Quote", count: 8, icon: Building2 },
                  { source: "Contact Form", count: 24, icon: Mail },
                  { source: "Career Apply", count: 12, icon: Users },
                ].map((item) => (
                  <div
                    key={item.source}
                    className="flex items-center justify-between rounded-lg border border-cyan-500/25 bg-orbit-dark px-4 py-3"
                  >
                    <span className="inline-flex items-center gap-2 text-gray-300">
                      <item.icon className="h-4 w-4 text-cyan-300" />
                      {item.source}
                    </span>
                    <span className="text-sm font-semibold text-cyan-300">{item.count}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

