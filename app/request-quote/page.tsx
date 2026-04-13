import { ClipboardList, ShieldCheck, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { QuoteForm } from "@/components/QuoteForm";
import { InfoCard } from "@/components/InfoCard";

export const metadata = {
  title: "Request a Quote | Blue Orbit Solutions",
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
      <main className="bg-ui-page">
        <section className="px-4 pb-16 pt-32 sm:px-6 lg:px-8 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-ui-heading mb-6 text-5xl font-bold md:text-6xl">
              Request Your Odoo Quote
            </h1>
            <p className="text-ui-body mx-auto max-w-3xl text-xl">
              Tell us about your project and we will prepare a structured proposal in 24-48 hours.
            </p>
          </div>
        </section>

        <section className="border-ui bg-ui-surface border-t px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {infoCards.map((item) => (
                <InfoCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
              ))}
            </div>

            <div className="ui-card rounded-xl p-8 md:p-10">
              <QuoteForm />
            </div>

            <p className="text-ui-muted mt-6 text-center text-xs">
              Your information is used only for proposal preparation and project follow-up.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

