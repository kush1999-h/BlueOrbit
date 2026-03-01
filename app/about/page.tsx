import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { DEFAULT_TEAM } from "@/lib/data";

export const metadata = {
  title: "About Us | Blubit",
  description:
    "Learn about Blubit, an Odoo-first implementation partner in Bangladesh focused on structured ERP delivery.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-orbit-dark">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">Our Story</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Blubit was founded to make enterprise-grade Odoo delivery practical for businesses in Bangladesh.
            </p>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 bg-orbit-darker py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-4 text-gray-300">
              <h2 className="text-3xl font-bold text-white">Who We Are</h2>
              <p>
                We are an Odoo-first implementation and engineering company with expertise across consulting,
                customization, DevOps, and analytics.
              </p>
              <p>
                Our teams combine business process design with practical technical execution, ensuring ERP projects
                reach production and remain maintainable.
              </p>
              <p>
                We support organizations moving from manual workflows, spreadsheets, and legacy systems into integrated
                Odoo operations.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
              <div className="space-y-6">
                <div>
                  <div className="mb-2 text-4xl font-bold text-cyan-300">50+</div>
                  <p className="text-gray-400">Client engagements</p>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold text-cyan-300">120+</div>
                  <p className="text-gray-400">Implementation milestones delivered</p>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold text-cyan-300">10+</div>
                  <p className="text-gray-400">Years of collective ERP experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">Our Approach</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Methodology-Driven",
                  desc: "Structured phases and checkpoints from discovery to support.",
                },
                {
                  title: "Local + Global",
                  desc: "Bangladesh-grounded execution with enterprise engineering standards.",
                },
                {
                  title: "Outcome-Focused",
                  desc: "Focus on adoption, data quality, and measurable operational results.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                  <h3 className="mb-2 text-lg font-bold text-cyan-300">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 bg-orbit-darker py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">Team Preview</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {DEFAULT_TEAM.map((member) => (
                <div key={member.name} className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    width={72}
                    height={72}
                    className="mb-4 rounded-full"
                  />
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-cyan-300">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

