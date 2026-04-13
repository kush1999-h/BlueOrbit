"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null,
  );
  const { theme } = useTheme();
  const isDark = theme === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        e.currentTarget.reset();
      } else {
        setMessage({
          type: "error",
          text: result.message || "Something went wrong",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div
          aria-live="polite"
          className={clsx(
            "rounded-lg p-4 text-sm",
            message.type === "success"
              ? isDark
                ? "border border-green-500/30 bg-green-500/10 text-green-300"
                : "border border-green-700/35 bg-green-50 text-green-800"
              : isDark
                ? "border border-red-500/30 bg-red-500/10 text-red-300"
                : "border border-red-700/35 bg-red-50 text-red-800",
          )}
        >
          {message.text}
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className={clsx("mb-2.5 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className={clsx(
            "w-full rounded-lg px-4 py-2.5 text-sm transition-all",
            isDark
              ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              : "border border-ui bg-ui-card text-ui-body placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 shadow-sm",
          )}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={clsx("mb-2.5 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className={clsx(
            "w-full rounded-lg px-4 py-2.5 text-sm transition-all",
            isDark
              ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              : "border border-ui bg-ui-card text-ui-body placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 shadow-sm",
          )}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className={clsx("mb-2.5 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          className={clsx(
            "w-full rounded-lg px-4 py-2.5 text-sm transition-all",
            isDark
              ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              : "border border-ui bg-ui-card text-ui-body placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 shadow-sm",
          )}
          placeholder="+880 1234 567890"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className={clsx("mb-2.5 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          name="subject"
          required
          className={clsx(
            "w-full rounded-lg px-4 py-2.5 text-sm transition-all",
            isDark
              ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              : "border border-ui bg-ui-card text-ui-body placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 shadow-sm",
          )}
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={clsx("mb-2.5 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={clsx(
            "w-full rounded-lg px-4 py-2.5 text-sm transition-all resize-none",
            isDark
              ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              : "border border-ui bg-ui-card text-ui-body placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 shadow-sm",
          )}
          placeholder="Tell us more about your inquiry..."
        />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="honeypot"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-semibold transition hover:shadow-glow-cyan-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

