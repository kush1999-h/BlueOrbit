import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Blue Orbit Solutions",
  description:
    "Get in touch with Blue Orbit Solutions. We're here to answer your questions about Odoo implementation and services.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-ui-page">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-ui-heading mb-6 text-5xl font-bold md:text-6xl">
                Get In Touch
              </h1>
              <p className="text-ui-body mx-auto max-w-3xl text-xl">
                Have questions about Odoo or want to discuss your project?
                We&apos;d love to hear from you. Drop us a message and
                we&apos;ll get back within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-ui bg-ui-surface border-t px-4 py-16 sm:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Cards */}
              <div className="ui-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-ui-heading mb-2 font-bold">Email</h3>
                    <p className="text-ui-body text-sm">
                      <a
                        href="mailto:rezwan.anwar@blueorbitsolutions.net"
                        className="text-ui-link"
                      >
                        rezwan.anwar@blueorbitsolutions.net
                      </a>
                    </p>
                    <p className="text-ui-body text-sm">
                      <a
                        href="mailto:sachitra.halder@blueorbitsolutions.net"
                        className="text-ui-link"
                      >
                        sachitra.halder@blueorbitsolutions.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="ui-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-ui-heading mb-2 font-bold">Phone</h3>
                    <p className="text-ui-body text-sm">
                      <a href="tel:+8801730311503" className="text-ui-link">
                        +8801730311503
                      </a>
                    </p>
                    <p className="text-ui-muted mt-2 text-xs">
                      Available Mon-Fri, 9 AM - 6 PM BDT
                    </p>
                  </div>
                </div>
              </div>

              <div className="ui-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-ui-heading mb-2 font-bold">Address</h3>
                    <p className="text-ui-body text-sm">Dhaka, Bangladesh</p>
                    <p className="text-ui-muted mt-2 text-xs">
                      Remote-friendly global team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="ui-card mx-auto max-w-2xl rounded-xl p-8 md:p-10">
              <h2 className="text-ui-heading mb-6 text-3xl font-bold">
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
