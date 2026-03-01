import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { JobApplyForm } from "@/components/JobApplyForm";
import { JobCard } from "@/components/JobCard";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Career | Blubit",
  description:
    "Join Blubit's team of Odoo experts, engineers, and consultants. Explore open roles and apply.",
};

const jobs = [
  {
    id: "1",
    title: "Senior Odoo Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    shortDescription: "Build custom Odoo modules and integrations",
    slug: "senior-odoo-developer",
  },
  {
    id: "2",
    title: "Solutions Architect",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    shortDescription: "Design scalable Odoo solutions for enterprise clients",
    slug: "solutions-architect",
  },
  {
    id: "3",
    title: "Cloud DevOps Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    shortDescription: "Manage cloud infrastructure and deployment reliability",
    slug: "cloud-devops-engineer",
  },
  {
    id: "4",
    title: "Data Scientist / ML Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    shortDescription: "Build forecasting and analytics models",
    slug: "data-scientist",
  },
];

export default function Career() {
  return (
    <>
      <Navbar />
      <main className="bg-orbit-dark">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Join Our Team</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Work on real ERP transformation projects with a multidisciplinary Odoo and cloud team.
            </p>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 bg-orbit-darker px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">Why Work at Blubit</h2>
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
                <div key={benefit.title} className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                  <h3 className="mb-2 font-bold text-cyan-300">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">Open Positions</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 bg-orbit-darker px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-4xl rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
            <h2 className="mb-3 text-3xl font-bold text-white">Apply Directly</h2>
            <p className="mb-6 text-sm text-gray-400">Submit your profile and we will follow up if there is a match.</p>
            <JobApplyForm />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

