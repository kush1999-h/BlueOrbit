import Link from "next/link";

export function CTABanner() {
  return (
    <section className="border-y border-cyan-500/30 bg-gradient-to-r from-orbit-dark via-cyan-950/30 to-orbit-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Ready to Implement Odoo in Your Business?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          Receive a structured proposal within 24-48 hours. Let us map the right ERP plan for your team.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/request-quote"
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-4 font-semibold text-white transition hover:shadow-glow-cyan-lg"
          >
            Get Started With a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border-2 border-cyan-500 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/10"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}

