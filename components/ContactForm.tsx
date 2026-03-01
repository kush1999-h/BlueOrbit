"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null,
  );

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
          className={`rounded-lg p-4 text-sm ${
            message.type === "success"
              ? "border border-green-500/30 bg-green-500/10 text-green-300"
              : "border border-red-500/30 bg-red-500/10 text-red-300"
          }`}
        >
          {message.text}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="+880 1234 567890"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="How can we help?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
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

