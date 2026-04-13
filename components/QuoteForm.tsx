"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

export function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null,
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
  const labelClass = clsx(
    "mb-2.5 block text-sm font-semibold",
    isDark ? "text-gray-300" : "text-ui-heading"
  );
  const inputClass = clsx(
    "w-full rounded-lg px-4 py-2.5 text-sm transition-all",
    isDark
      ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
      : "border border-ui bg-ui-card text-ui-body placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/15 shadow-sm",
  );

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label className={labelClass}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className={labelClass}>
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            required
            className={inputClass}
            placeholder="Your company"
          />
        </div>

        <div>
          <label className={labelClass}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className={inputClass}
            placeholder="+880 1234 567890"
          />
        </div>

        <div>
          <label className={labelClass}>
            Industry
          </label>
          <input
            type="text"
            name="industry"
            className={inputClass}
            placeholder="e.g., Manufacturing, Retail"
          />
        </div>

        <div>
          <label className={labelClass}>
            Number of Users
          </label>
          <input
            type="number"
            name="usersCount"
            min="1"
            className={inputClass}
            placeholder="50"
          />
        </div>
      </div>

      <div>
        <label className={clsx("mb-3 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Services Needed
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service) => (
            <label key={service} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className={clsx(
                  "h-4 w-4 rounded border text-cyan-500 focus:ring-2 focus:ring-offset-1 transition-all",
                  isDark ? "border-cyan-500 bg-orbit-dark focus:ring-cyan-500" : "border-ui bg-ui-card focus:ring-cyan-400"
                )}
              />
              <span className={clsx("text-sm", isDark ? "text-gray-300" : "text-ui-body")}>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className={clsx("mb-3 block text-sm font-semibold", isDark ? "text-gray-300" : "text-ui-heading")}>
          Modules Interested In
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {modules.map((module) => (
            <label key={module} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedModules.includes(module)}
                onChange={() => toggleModule(module)}
                className={clsx(
                  "h-4 w-4 rounded border text-cyan-500 focus:ring-2 focus:ring-offset-1 transition-all",
                  isDark ? "border-cyan-500 bg-orbit-dark focus:ring-cyan-500" : "border-ui bg-ui-card focus:ring-cyan-400"
                )}
              />
              <span className={clsx("text-sm", isDark ? "text-gray-300" : "text-ui-body")}>{module}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Implementation Timeline
          </label>
          <select
            name="timeline"
            className={inputClass}
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (0-1 months)</option>
            <option value="short">Short term (1-3 months)</option>
            <option value="medium">Medium term (3-6 months)</option>
            <option value="longterm">Long term (6+ months)</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>
            Budget Range
          </label>
          <select
            name="budgetRange"
            className={inputClass}
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
        <label className={labelClass}>
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows={4}
          className={clsx(inputClass, "resize-none")}
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

