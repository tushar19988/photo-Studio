"use client";

import React, { useState, useActionState } from "react";
import { createPortfolioProject } from "@/server/actions/portfolio-admin";
import { Plus, X, Upload } from "lucide-react";

export function CreateProjectModal({
  categories,
}: {
  categories: Array<{ id: string; name: string }>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(createPortfolioProject, null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95"
      >
        <Plus className="w-4 h-4" />
        <span>Add Portfolio Project</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-3xl bg-neutral-900 border border-neutral-800 p-8 space-y-6 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h3 className="font-serif text-xl font-bold">New Portfolio Project</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {state?.error && (
              <p className="text-xs text-rose-400 font-medium">{state.error}</p>
            )}

            <form action={formAction} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="e.g. Yash & Divya — Royal Mandap"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-2">
                  Category *
                </label>
                <select
                  name="categoryId"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-2">
                  Location / Venue
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g. Sanand Heritage Resort"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-2">
                  Cover Photo Image URL *
                </label>
                <input
                  type="url"
                  name="coverImage"
                  required
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider mb-2">
                  Story Description
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Short editorial summary of the shoot..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  {isPending ? "Creating..." : "Save Project"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
