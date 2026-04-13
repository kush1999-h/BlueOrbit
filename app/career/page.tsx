import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Career | Blue Orbit Solutions",
  description:
    "Join Blue Orbit Solutions' team of Odoo experts, engineers, and consultants. Explore open roles and apply.",
};

type CareerJob = {
  id: string;
  title: string;
  location: string;
  type: string;
  shortDescription: string;
  slug: string;
};

const jobs: CareerJob[] = [];

export default function Career() {
  return (
    <>
      <Navbar />
      <main className="bg-ui-page">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-ui-heading mb-6 text-5xl font-bold md:text-6xl">Join Our Team</h1>
            <p className="text-ui-body mx-auto max-w-3xl text-xl">
              Work on real ERP transformation projects with a multidisciplinary Odoo and cloud team.
            </p>
          </div>
        </section>

        <section className="border-ui bg-ui-surface border-t px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-ui-heading mb-12 text-center text-4xl font-bold">Why Work at Blue Orbit</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Learn & Grow",
                  desc: "Work with experienced consultants, architects, and engineers.",
                },
                {
                  title: "Meaningful Impact",
                  desc: "Help businesses modernize their operations end to end.",
                },
                {
                  title: "Flexible Culture",
                  desc: "Hybrid-friendly environment focused on high ownership.",
                },
              ].map((benefit) => (
                <div key={benefit.title} className="ui-card rounded-xl p-6">
                  <h3 className="mb-2 font-bold text-cyan-300">{benefit.title}</h3>
                  <p className="text-ui-muted text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-ui border-t px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-ui-heading mb-12 text-center text-4xl font-bold">Open Positions</h2>
            {jobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {jobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            ) : (
              <div className="ui-card mx-auto max-w-2xl rounded-xl p-8 text-center">
                <p className="text-ui-body text-lg font-semibold">No open position.</p>
                <p className="text-ui-muted mt-2 text-sm">Keep checking for updates.</p>
              </div>
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

