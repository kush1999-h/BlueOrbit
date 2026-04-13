"use client";

import { FormEvent, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@/components/ThemeProvider";

type JobApplyFormProps = {
  jobSlug: string;
  jobTitle?: string;
};

export function JobApplyForm({ jobSlug, jobTitle }: JobApplyFormProps) {
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const inputClass = clsx(
    "rounded-lg px-3 py-2",
    isDark ? "border border-cyan-500/30 bg-orbit-dark text-white placeholder-gray-500" : "ui-input",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/jobs/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          resumeUrl: formData.get("resumeUrl"),
          coverLetter: formData.get("coverLetter"),
          jobSlug,
          honeypot: formData.get("honeypot"),
        }),
      });

      const payload = await response.json();
      if (response.ok) {
        setStatus({ type: "success", text: payload.message ?? "Application submitted." });
        event.currentTarget.reset();
      } else {
        setStatus({ type: "error", text: payload.message ?? "Unable to submit right now." });
      }
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again." });
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={clsx("rounded-lg border px-4 py-3 text-sm", isDark ? "border-cyan-500/20 bg-cyan-500/5 text-cyan-100" : "border-ui bg-ui-surface text-ui-body")}>
        Applying for: <span className="font-semibold">{jobTitle ?? jobSlug}</span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Full Name" className={inputClass} />
        <input name="email" type="email" required placeholder="Email" className={inputClass} />
        <input name="phone" placeholder="Phone" className={inputClass} />
      </div>

      <input type="hidden" name="jobSlug" value={jobSlug} />
      <input name="resumeUrl" type="url" placeholder="Resume URL (Drive/Dropbox)" className={clsx("w-full", inputClass)} />
      <textarea name="coverLetter" rows={4} required placeholder="Short cover letter" className={clsx("w-full", inputClass)} />
      <input name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-2 font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      {status ? (
        <p
          className={clsx(
            "text-sm",
            status.type === "success"
              ? isDark
                ? "text-green-300"
                : "text-green-700"
              : isDark
                ? "text-red-300"
                : "text-red-700",
          )}
        >
          {status.text}
        </p>
      ) : null}
    </form>
  );
}

