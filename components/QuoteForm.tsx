"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

export function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null,
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const services = [
    "Implementation",
    "Customization & Integration",
    "DevOps & Cloud",
    "Analytics & BI",
    "ML Models",
  ];

  const modules = [
    "Accounting",
    "Sales & CRM",
    "Inventory",
    "HR & Payroll",
    "POS",
    "Manufacturing",
    "eCommerce",
  ];

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  }

  function toggleModule(module: string) {
    setSelectedModules((prev) =>
      prev.includes(module)
        ? prev.filter((m) => m !== module)
        : [...prev, module],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      industry: formData.get("industry"),
      servicesNeeded: selectedServices,
      modulesInterested: selectedModules,
      usersCount: formData.get("usersCount"),
      timeline: formData.get("timeline"),
      budgetRange: formData.get("budgetRange"),
      notes: formData.get("notes"),
      honeypot: formData.get("honeypot"),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        e.currentTarget.reset();
        setSelectedServices([]);
        setSelectedModules([]);
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
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
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
            Email Address *
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
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Your company"
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
            Industry
          </label>
          <input
            type="text"
            name="industry"
            className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            placeholder="e.g., Manufacturing, Retail"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of Users
          </label>
          <input
            type="number"
            name="usersCount"
            min="1"
            className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            placeholder="50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Services Needed
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service) => (
            <label key={service} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className="h-4 w-4 rounded border-cyan-500 bg-orbit-dark text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-sm text-gray-300">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Modules Interested In
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {modules.map((module) => (
            <label key={module} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedModules.includes(module)}
                onChange={() => toggleModule(module)}
                className="h-4 w-4 rounded border-cyan-500 bg-orbit-dark text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-sm text-gray-300">{module}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Implementation Timeline
          </label>
          <select
            name="timeline"
            className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (0-1 months)</option>
            <option value="short">Short term (1-3 months)</option>
            <option value="medium">Medium term (3-6 months)</option>
            <option value="longterm">Long term (6+ months)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            name="budgetRange"
            className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          >
            <option value="">Select budget</option>
            <option value="under-100k">Under $100K</option>
            <option value="100k-300k">$100K - $300K</option>
            <option value="300k-500k">$300K - $500K</option>
            <option value="500k-plus">$500K+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          placeholder="Tell us more about your project..."
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
          "Submitting..."
        ) : (
          <>
            Get Your Quote <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

