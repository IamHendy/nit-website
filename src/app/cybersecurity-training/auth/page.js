"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock } from "lucide-react";

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const course = searchParams.get("course");
  const [mode, setMode] = useState("signup");

  function handleSubmit(e) {
    e.preventDefault();
    // Demo-only: there's no real backend yet, so this simulates a
    // successful sign-up/login and sends the learner on to the dashboard.
    // Wire this up to real authentication before going live.
    const query = course ? `?course=${course}&enrolled=1` : "";
    router.push(`/cybersecurity-training/dashboard${query}`);
  }

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center mx-auto mb-5">
            <Lock size={22} className="text-navy" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">
            {mode === "signup" ? "Create Your Account" : "Welcome Back"}
          </h1>
          {course && (
            <p className="text-sm text-gray-600 mt-2">
              Sign {mode === "signup" ? "up" : "in"} to continue enrolling in{" "}
              <span className="text-navy font-medium">{course.replace(/-/g, " ")}</span>
            </p>
          )}
        </div>

        <div className="rounded-lg border border-gray-100 bg-white shadow-sm p-6">
          <div className="flex mb-6 rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                mode === "signup"
                  ? "bg-navy text-white"
                  : "text-gray-500 hover:text-navy"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${
                mode === "login"
                  ? "bg-navy text-white"
                  : "text-gray-500 hover:text-navy"
              }`}
            >
              Log In
            </button>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full name"
                required
                className="w-full px-4 py-3 rounded border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 rounded border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <button
              type="submit"
              className="w-full bg-gold text-navy font-semibold py-3 rounded hover:bg-gold-dark transition-colors"
            >
              {mode === "signup" ? "Create Account" : "Log In"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <div className="space-y-3">
            <button
              disabled
              title="Google sign-in isn't connected yet — needs a Google OAuth app configured on the backend."
              className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-400 py-3 rounded cursor-not-allowed"
            >
              Continue with Google
            </button>
            <button
              disabled
              title="Microsoft sign-in isn't connected yet — needs a Microsoft OAuth app configured on the backend."
              className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-400 py-3 rounded cursor-not-allowed"
            >
              Continue with Microsoft
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            Google and Microsoft sign-in are shown for design purposes only —
            they'll activate once OAuth is configured.
          </p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          <Link href="/cybersecurity-training" className="text-navy hover:text-gold-dark">
            &larr; Back to courses
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={null}>
      <AuthForm />
    </Suspense>
  );
}