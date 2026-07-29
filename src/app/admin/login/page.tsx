"use client";

import React, { useActionState } from "react";
import { loginAdmin } from "@/server/actions/admin-auth";
import { Camera, Lock, Mail, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdmin, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4 text-white">
      <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl space-y-8">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
            <Camera className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight">Studio CMS Login</h1>
          <p className="text-xs text-neutral-400 font-light">
            Shree Shyam Studio Admin Content Management System
          </p>
        </div>

        {state?.error && (
          <div className="p-4 rounded-xl bg-rose-950/50 border border-rose-800 text-rose-300 text-xs font-medium flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
            <span>{state.error}</span>
          </div>
        )}

        <form action={formAction} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-500 absolute left-4 top-3.5" />
              <input
                type="email"
                name="email"
                required
                defaultValue="admin@shreeshyamstudio.com"
                placeholder="admin@shreeshyamstudio.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-500 absolute left-4 top-3.5" />
              <input
                type="password"
                name="password"
                required
                defaultValue="ShreeShyamAdmin2026!"
                placeholder="••••••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {isPending ? "Authenticating..." : "Sign In to CMS Dashboard"}
          </button>
        </form>

        <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-[11px] text-neutral-400 space-y-1">
          <p className="font-semibold text-amber-400">Initial Demo Admin Credentials:</p>
          <p>Email: <code className="text-neutral-200">admin@shreeshyamstudio.com</code></p>
          <p>Password: <code className="text-neutral-200">ShreeShyamAdmin2026!</code></p>
        </div>
      </div>
    </div>
  );
}
