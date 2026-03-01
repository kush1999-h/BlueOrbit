"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { LogoSVG } from "@/components/LogoSVG";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-500/20 bg-orbit-darker">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div>
            <LogoSVG className="h-12" />
            <p className="mt-4 text-sm text-gray-400">
              Complete ERP solutions powered by Odoo. Implementation, customization,
              and intelligent business analytics for Bangladesh and beyond.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-300">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 transition hover:text-cyan-300">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 transition hover:text-cyan-300">Services</Link></li>
              <li><Link href="/career" className="text-gray-400 transition hover:text-cyan-300">Career</Link></li>
              <li><Link href="/contact" className="text-gray-400 transition hover:text-cyan-300">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-300">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/services#implementation" className="text-gray-400 transition hover:text-cyan-300">Odoo Implementation</Link></li>
              <li><Link href="/services#customization" className="text-gray-400 transition hover:text-cyan-300">Customization</Link></li>
              <li><Link href="/services#devops" className="text-gray-400 transition hover:text-cyan-300">DevOps & Cloud</Link></li>
              <li><Link href="/services#analytics" className="text-gray-400 transition hover:text-cyan-300">Analytics & ML</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-cyan-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400"><Mail className="h-4 w-4" /> <span>sales@blubit.com</span></li>
              <li className="flex items-center gap-2 text-gray-400"><Phone className="h-4 w-4" /> <span>+880 1234-567890</span></li>
              <li className="flex items-start gap-2 text-gray-400"><MapPin className="mt-0.5 h-4 w-4" /> <span>Dhaka, Bangladesh</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col border-t border-cyan-500/20 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">? {currentYear} Blubit. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a href="https://facebook.com" className="text-gray-400 transition hover:text-cyan-300" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="https://linkedin.com" className="text-gray-400 transition hover:text-cyan-300" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="https://twitter.com" className="text-gray-400 transition hover:text-cyan-300" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

