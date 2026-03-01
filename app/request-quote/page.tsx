import { ClipboardList, ShieldCheck, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = {
  title: "Request a Quote | Blubit",
  description:
    "Get a detailed quote for your Odoo implementation project. Fill out our form and receive a proposal within 24-48 hours.",
};

export default function RequestQuote() {
  const infoCards = [
    {
      icon: Zap,
      title: "Fast Response",
      desc: "We get back to you within 24-48 hours.",
    },
    {
      icon: ClipboardList,
      title: "Detailed Proposal",
      desc: "Custom quote tailored to your requirements.",
    },
    {
      icon: ShieldCheck,
      title: "No Spam",
      desc: "Only relevant project communication.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-orbit-dark">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Request Your Odoo Quote
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Tell us about your project and we will prepare a structured proposal in 24-48 hours.
            </p>
          </div>
        </section>

        <section className="border-t border-cyan-500/20 bg-orbit-darker px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {infoCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-cyan-500/30 bg-orbit-card p-4 text-center"
                >
                  <div className="mx-auto mb-2 inline-flex rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-2 text-cyan-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-8 md:p-10">
              <QuoteForm />
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">
              Your information is used only for proposal preparation and project follow-up.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

