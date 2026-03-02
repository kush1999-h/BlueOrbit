"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { LogoSVG } from "@/components/LogoSVG";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/20 bg-orbit-darker">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(0,199,255,0.10),transparent_35%),radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.08),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-10 py-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <LogoSVG className="h-14 md:h-16" />
            <p className="mt-5 max-w-xs text-sm leading-[1.55] text-gray-400">
              Complete ERP solutions powered by Odoo. Implementation, customization,
              and intelligent business analytics for Bangladesh and beyond.
            </p>
          </div>

          <div className="md:col-span-2 md:border-l md:border-cyan-500/15 md:pl-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/about" className="text-gray-400 transition hover:text-cyan-200">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 transition hover:text-cyan-200">Services</Link></li>
              <li><Link href="/career" className="text-gray-400 transition hover:text-cyan-200">Career</Link></li>
              <li><Link href="/contact" className="text-gray-400 transition hover:text-cyan-200">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 md:border-l md:border-cyan-500/15 md:pl-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/services#implementation" className="text-gray-400 transition hover:text-cyan-200">Odoo Implementation</Link></li>
              <li><Link href="/services#customization" className="text-gray-400 transition hover:text-cyan-200">Customization</Link></li>
              <li><Link href="/services#devops" className="text-gray-400 transition hover:text-cyan-200">DevOps & Cloud</Link></li>
              <li><Link href="/services#analytics" className="text-gray-400 transition hover:text-cyan-200">Analytics & ML</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 md:border-l md:border-cyan-500/15 md:pl-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400"><Mail className="h-4 w-4" /> <span>sales@blueorbit.com</span></li>
              <li className="flex items-center gap-2 text-gray-400"><Phone className="h-4 w-4" /> <span>+880 1234-567890</span></li>
              <li className="flex items-start gap-2 text-gray-400"><MapPin className="mt-0.5 h-4 w-4" /> <span>Dhaka, Bangladesh</span></li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col border-t border-cyan-500/20 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">&copy; {currentYear} Blue Orbit. All rights reserved.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a href="https://facebook.com" className="rounded-lg border border-cyan-500/25 p-2 text-gray-400 transition hover:border-cyan-400/60 hover:text-cyan-200" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="https://linkedin.com" className="rounded-lg border border-cyan-500/25 p-2 text-gray-400 transition hover:border-cyan-400/60 hover:text-cyan-200" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            <a href="https://twitter.com" className="rounded-lg border border-cyan-500/25 p-2 text-gray-400 transition hover:border-cyan-400/60 hover:text-cyan-200" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

