import { BarChart3, Briefcase, Building2, Mail, Newspaper, Users } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLogoutButton } from "@/components/AdminLogoutButton";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/adminAuth";

export const metadata = {
  title: "Admin Dashboard | Blue Orbit Solutions",
  description: "Blue Orbit Solutions admin portal dashboard.",
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

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!sessionToken || !verifyAdminSessionToken(sessionToken)) {
    redirect("/admin/login");
  }

  return (
    <>
      <Navbar />
      <main className="bg-ui-page min-h-[calc(100vh-80px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-ui-heading text-4xl font-bold">Admin Dashboard</h1>
              <p className="text-ui-muted mt-2">Manage website content and review captured leads.</p>
            </div>
            <AdminLogoutButton />
          </header>

          <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <article key={metric.label} className="ui-card rounded-xl p-5">
                <div className="mb-3 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-2 text-cyan-300">
                  <metric.icon className="h-5 w-5" />
                </div>
                <p className="text-ui-muted text-sm">{metric.label}</p>
                <p className="mt-1 text-3xl font-bold text-cyan-300">{metric.value}</p>
              </article>
            ))}
          </section>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <section className="ui-card rounded-xl p-6">
              <h2 className="text-ui-heading mb-4 text-xl font-bold">Content Management</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contentSections.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="border-ui bg-ui-surface text-ui-body hover:border-ui-strong hover:text-ui-link rounded-lg border px-4 py-3 text-left text-sm transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <section className="ui-card rounded-xl p-6">
              <h2 className="text-ui-heading mb-4 text-xl font-bold">Recent Lead Sources</h2>
              <div className="space-y-3">
                {[
                  { source: "Request Quote", count: 8, icon: Building2 },
                  { source: "Contact Form", count: 24, icon: Mail },
                  { source: "Career Apply", count: 12, icon: Users },
                ].map((item) => (
                  <div
                    key={item.source}
                    className="border-ui bg-ui-surface flex items-center justify-between rounded-lg border px-4 py-3"
                  >
                    <span className="text-ui-body inline-flex items-center gap-2">
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

