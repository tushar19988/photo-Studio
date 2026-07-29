"use client";

import React, { useActionState } from "react";
import { submitEnquiry, EnquiryFormState } from "@/server/actions/enquiry";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

const initialState: EnquiryFormState = {};

export function EnquiryForm() {
  const [state, formAction, isPending] = useActionState(submitEnquiry, initialState);

  if (state?.success) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-emerald-900 dark:text-emerald-200 mb-2">
          Enquiry Received!
        </h3>
        <p className="text-sm text-emerald-800 dark:text-emerald-300 font-light leading-relaxed max-w-md mx-auto">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state?.message && !state.success && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-center gap-3 text-xs text-rose-800 dark:text-rose-300 font-medium">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      {/* Full Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Ananya Patel"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
          {state?.errors?.name && (
            <p className="text-[11px] text-rose-600 mt-1 font-medium">{state.errors.name[0]}</p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="e.g. 097243 22046"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
          {state?.errors?.phone && (
            <p className="text-[11px] text-rose-600 mt-1 font-medium">{state.errors.phone[0]}</p>
          )}
        </div>
      </div>

      {/* Email & Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="e.g. ananya@example.com"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Event Type *
          </label>
          <select
            name="eventType"
            required
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            <option value="Wedding">Wedding Photography</option>
            <option value="Engagement">Engagement Shoot</option>
            <option value="Birthday">Birthday Photography</option>
            <option value="Pre-Wedding">Pre-Wedding Shoot</option>
            <option value="Event">Event Coverage</option>
            <option value="Portrait">Portrait Session</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Date & Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Event Location / City
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Sanand, Ahmedabad"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>
      </div>

      {/* Budget & Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Expected Guests
          </label>
          <input
            type="text"
            name="guests"
            placeholder="e.g. 200 - 500 guests"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
            Estimated Budget Range
          </label>
          <select
            name="budget"
            className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            <option value="Under ₹25,000">Under ₹25,000</option>
            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
            <option value="₹50,000 - ₹100,000">₹50,000 - ₹1,00,000</option>
            <option value="₹1,00,000+">₹1,00,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-wider font-semibold text-foreground mb-2">
          Tell Us About Your Vision & Requirements
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Share your wedding function details, preferred styles, or specific questions..."
          className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isPending ? (
          <span>Sending Enquiry...</span>
        ) : (
          <>
            <span>Send Enquiry / Check Availability</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
