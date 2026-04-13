"use client";

import { FormEvent, useState } from "react";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        setMessage({ type: "error", text: result.message ?? "Unable to sign in." });
        return;
      }

      setMessage({ type: "success", text: result.message ?? "Login successful." });
      router.push("/admin");
      router.refresh();
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-ui-page flex min-h-[calc(100vh-80px)] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="ui-card w-full max-w-md rounded-xl p-8">
          <div className="mb-8 text-center">
            <h1 className="text-ui-heading text-3xl font-bold">Admin Portal</h1>
            <p className="text-ui-muted mt-2 text-sm">Secure access for content and lead management</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="text-ui-heading block text-sm font-medium">
              Email
              <div className="border-ui bg-ui-surface mt-2 flex items-center rounded-lg border px-3">
                <Mail className="h-4 w-4 text-cyan-300" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="admin@blueorbit.com"
                  className="text-ui-body w-full bg-transparent px-3 py-2 placeholder-slate-500 outline-none"
                />
              </div>
            </label>

            <label className="text-ui-heading block text-sm font-medium">
              Password
              <div className="border-ui bg-ui-surface mt-2 flex items-center rounded-lg border px-3">
                <Lock className="h-4 w-4 text-cyan-300" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  className="text-ui-body w-full bg-transparent px-3 py-2 placeholder-slate-500 outline-none"
                />
              </div>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-2 font-semibold text-white transition hover:shadow-glow-cyan-lg disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {message ? (
            <p className={message.type === "success" ? "mt-4 text-xs text-green-600" : "mt-4 text-xs text-red-600"}>
              {message.text}
            </p>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}

