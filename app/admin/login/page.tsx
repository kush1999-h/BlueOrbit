"use client";

import { FormEvent, useState } from "react";
import { Lock, Mail } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AdminLogin() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("UI complete. Connect this form to /api/admin/login when backend auth is enabled.");
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-orbit-dark px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-xl border border-cyan-500/30 bg-orbit-card p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
            <p className="mt-2 text-sm text-gray-400">Secure access for content and lead management</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-300">
              Email
              <div className="mt-2 flex items-center rounded-lg border border-cyan-500/30 bg-orbit-dark px-3">
                <Mail className="h-4 w-4 text-cyan-300" />
                <input
                  type="email"
                  required
                  placeholder="admin@blubit.com"
                  className="w-full bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none"
                />
              </div>
            </label>

            <label className="block text-sm font-medium text-gray-300">
              Password
              <div className="mt-2 flex items-center rounded-lg border border-cyan-500/30 bg-orbit-dark px-3">
                <Lock className="h-4 w-4 text-cyan-300" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-transparent px-3 py-2 text-white placeholder-gray-500 outline-none"
                />
              </div>
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-2 font-semibold text-white transition hover:shadow-glow-cyan-lg"
            >
              Sign In
            </button>
          </form>

          {message ? <p className="mt-4 text-xs text-gray-400">{message}</p> : null}
        </div>
      </main>
      <Footer />
    </>
  );
}

