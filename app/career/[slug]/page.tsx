import Link from "next/link";
import { ArrowLeft, Briefcase, Building2, Check, MapPin } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const generateStaticParams = () => [
  { slug: "senior-odoo-developer" },
  { slug: "solutions-architect" },
  { slug: "cloud-devops-engineer" },
  { slug: "data-scientist" },
];

const jobsData: Record<
  string,
  {
    title: string;
    location: string;
    type: string;
    department: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
  }
> = {
  "senior-odoo-developer": {
    title: "Senior Odoo Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    department: "Development",
    description:
      "Lead custom Odoo module development, mentor engineers, and drive technical quality across client projects.",
    requirements: [
      "5+ years of Odoo development experience",
      "Strong Python and JavaScript skills",
      "Experience with REST APIs and integrations",
      "Database design knowledge",
      "Strong communication and collaboration",
    ],
    responsibilities: [
      "Develop custom modules",
      "Implement third-party integrations",
      "Perform code reviews and mentoring",
      "Collaborate with solution architects",
    ],
    benefits: [
      "Competitive salary and bonus",
      "Health insurance",
      "Professional development support",
      "Remote-friendly setup",
    ],
  },
  "solutions-architect": {
    title: "Solutions Architect",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    department: "Consulting",
    description:
      "Design scalable Odoo solutions, lead workshops, and translate business goals into delivery-ready blueprints.",
    requirements: [
      "7+ years of ERP implementation experience",
      "Deep Odoo process knowledge",
      "Strong client communication",
      "Experience leading enterprise projects",
    ],
    responsibilities: [
      "Lead requirement discovery",
      "Create solution blueprints",
      "Guide implementation teams",
      "Support proposal development",
    ],
    benefits: [
      "Performance incentives",
      "Health and life coverage",
      "Leadership development",
      "Flexible work arrangements",
    ],
  },
  "cloud-devops-engineer": {
    title: "Cloud DevOps Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    department: "Infrastructure",
    description:
      "Build secure, scalable cloud infrastructure for Odoo workloads with strong reliability and monitoring practices.",
    requirements: [
      "3+ years of DevOps/SRE experience",
      "Docker and Kubernetes experience",
      "CI/CD pipeline implementation",
      "Linux administration",
    ],
    responsibilities: [
      "Design infrastructure architecture",
      "Automate deployments",
      "Monitor availability and performance",
      "Maintain backup and recovery workflows",
    ],
    benefits: [
      "Certification support",
      "Flexible schedule",
      "Learning budget",
      "Career progression path",
    ],
  },
  "data-scientist": {
    title: "Data Scientist / ML Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    department: "Data & Analytics",
    description:
      "Build predictive models and analytics systems that help clients improve planning, forecasting, and execution.",
    requirements: [
      "2+ years of data science/ML experience",
      "Python and statistics fundamentals",
      "ML tooling experience",
      "Strong SQL skills",
    ],
    responsibilities: [
      "Develop predictive models",
      "Create dashboards and insights",
      "Collaborate on deployment",
      "Communicate findings to stakeholders",
    ],
    benefits: [
      "Bonus structure",
      "Health insurance",
      "Remote flexibility",
      "AI/ML growth opportunities",
    ],
  },
};

export const metadata = {
  title: "Job Details | Blubit Career",
  description: "Apply for open positions at Blubit.",
};

export default async function JobDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobsData[slug];

  if (!job) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-orbit-dark px-4 pb-24 pt-32 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-white">Job Not Found</h1>
          <p className="mb-8 text-gray-400">The role may have been closed or moved.</p>
          <Link
            href="/career"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-3 font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Careers
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-orbit-dark">
        <section className="border-b border-cyan-500/20 px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link href="/career" className="mb-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              <ArrowLeft className="h-4 w-4" /> Back to Careers
            </Link>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-300">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> {job.location}</span>
              <span className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4 text-cyan-300" /> {job.type}</span>
              <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-cyan-300" /> {job.department}</span>
            </div>
          </div>
        </section>

        <section className="bg-orbit-darker px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
              <h2 className="mb-4 text-2xl font-bold text-white">About the Role</h2>
              <p className="text-gray-300">{job.description}</p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                <h3 className="mb-4 text-xl font-bold text-cyan-300">Requirements</h3>
                <ul className="space-y-2">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                <h3 className="mb-4 text-xl font-bold text-cyan-300">Responsibilities</h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8 rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
              <h3 className="mb-4 text-xl font-bold text-cyan-300">Benefits</h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {job.benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-gray-300">
                    <Check className="h-5 w-5 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-white">Ready to Apply?</h3>
              <p className="mb-6 text-gray-300">Send your resume and brief cover letter to our hiring team.</p>
              <a
                href={`mailto:careers@blubit.com?subject=Application: ${job.title}`}
                className="inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-3 font-semibold text-white transition hover:shadow-glow-cyan-lg"
              >
                Apply by Email
              </a>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

