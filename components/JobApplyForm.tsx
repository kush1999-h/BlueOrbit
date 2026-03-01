"use client";

import { FormEvent, useState } from "react";

export function JobApplyForm() {
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

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
        jobSlug: formData.get("jobSlug"),
        honeypot: formData.get("honeypot"),
      }),
    });

    const payload = await response.json();
    setStatus(payload.message ?? "Submitted");
    if (response.ok) {
      event.currentTarget.reset();
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Full Name" className="rounded-lg border border-cyan-500/30 bg-orbit-dark px-3 py-2 text-white placeholder-gray-500" />
        <input name="email" type="email" required placeholder="Email" className="rounded-lg border border-cyan-500/30 bg-orbit-dark px-3 py-2 text-white placeholder-gray-500" />
        <input name="phone" placeholder="Phone" className="rounded-lg border border-cyan-500/30 bg-orbit-dark px-3 py-2 text-white placeholder-gray-500" />
        <input name="jobSlug" required placeholder="Job Slug (e.g., senior-odoo-developer)" className="rounded-lg border border-cyan-500/30 bg-orbit-dark px-3 py-2 text-white placeholder-gray-500" />
      </div>
      <input name="resumeUrl" type="url" placeholder="Resume URL (Drive/Dropbox)" className="w-full rounded-lg border border-cyan-500/30 bg-orbit-dark px-3 py-2 text-white placeholder-gray-500" />
      <textarea name="coverLetter" rows={4} required placeholder="Short cover letter" className="w-full rounded-lg border border-cyan-500/30 bg-orbit-dark px-3 py-2 text-white placeholder-gray-500" />
      <input name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />
      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-2 font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
      {status ? <p className="text-sm text-gray-400">{status}</p> : null}
    </form>
  );
}

