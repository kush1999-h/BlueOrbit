import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Blubit",
  description:
    "Get in touch with Blubit. We're here to answer your questions about Odoo implementation and services.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-orbit-dark">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions about Odoo or want to discuss your project? We'd
                love to hear from you. Drop us a message and we'll get back
                within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 border-t border-cyan-500/20 bg-orbit-darker px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Cards */}
              <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Email</h3>
                    <p className="text-sm text-gray-400">
                      <a
                        href="mailto:sales@blubit.com"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        sales@blubit.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-400">
                      <a
                        href="mailto:support@blubit.com"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        support@blubit.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Phone</h3>
                    <p className="text-sm text-gray-400">
                      <a
                        href="tel:+8801234567890"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        +880 1234-567890
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Available Mon-Fri, 9 AM - 6 PM BDT
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-cyan-500/30 bg-orbit-card p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-2">Address</h3>
                    <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Remote-friendly global team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto rounded-xl border border-cyan-500/30 bg-orbit-card p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

