"use client";

import React, { useActionState } from "react";
import { updateSiteSettings } from "@/server/actions/settings-admin";
import { Settings, Save, CheckCircle } from "lucide-react";

export default function AdminSettingsPage() {
  const [state, formAction, isPending] = useActionState(updateSiteSettings, null);

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Studio Site Settings</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Manage verified studio phone numbers, official address, and contact information.
        </p>
      </div>

      {state?.message && state.success && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-xs font-medium flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{state.message}</span>
        </div>
      )}

      {state?.error && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs font-medium">
          {state.error}
        </div>
      )}

      <form action={formAction} className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-6 text-xs text-white">
        <div>
          <label className="block uppercase font-semibold tracking-wider mb-2">Studio Name</label>
          <input
            type="text"
            disabled
            value="Shree Shyam Studio"
            className="w-full px-4 py-3 rounded-xl bg-neutral-950/50 border border-neutral-800 text-neutral-400 font-mono cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block uppercase font-semibold tracking-wider mb-2">Phone Number *</label>
          <input
            type="text"
            name="phone"
            required
            defaultValue="097243 22046"
            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div>
          <label className="block uppercase font-semibold tracking-wider mb-2">WhatsApp Number (with country code) *</label>
          <input
            type="text"
            name="whatsappNumber"
            required
            defaultValue="919724322046"
            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div>
          <label className="block uppercase font-semibold tracking-wider mb-2">Contact Email *</label>
          <input
            type="email"
            name="email"
            required
            defaultValue="contact@shreeshyamstudio.com"
            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div>
          <label className="block uppercase font-semibold tracking-wider mb-2">Full Studio Address *</label>
          <textarea
            name="address"
            rows={3}
            required
            defaultValue="101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110"
            className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold uppercase tracking-wider transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <Save className="w-4 h-4" />
          <span>{isPending ? "Saving..." : "Save Settings"}</span>
        </button>
      </form>
    </div>
  );
}
