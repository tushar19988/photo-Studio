"use client";

import { useState } from "react";
import { Plus, Edit, Trash2, Image, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState(PORTFOLIO_DATA);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Weddings");
  const [newLocation, setNewLocation] = useState("");

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newProj = {
      id: `port_${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/ /g, "-"),
      category: newCategory as any,
      location: newLocation || "Sanand, Gujarat",
      date: "Current",
      coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      images: [],
      description: "Newly added portfolio project story.",
    };

    setProjects([newProj, ...projects]);
    setNewTitle("");
    setNewLocation("");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-text-primary">Portfolio Management</h1>
          <p className="text-xs text-text-muted mt-1">Manage public photography portfolio stories & gallery media</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2.5 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Plus size={16} />
          <span>New Project</span>
        </button>
      </div>

      {/* Project Grid / Table */}
      <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border-custom uppercase text-text-muted">
              <tr>
                <th className="py-3 px-4">Cover</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/60">
              {projects.map((proj) => (
                <tr key={proj.id} className="hover:bg-bg-surface/50 transition-colors">
                  <td className="py-3 px-4">
                    <img src={proj.coverImage} alt={proj.title} className="w-12 h-10 object-cover rounded-lg border border-border-custom" />
                  </td>
                  <td className="py-3 px-4 font-semibold text-text-primary">{proj.title}</td>
                  <td className="py-3 px-4 text-accent font-semibold">{proj.category}</td>
                  <td className="py-3 px-4 text-text-muted">{proj.location}</td>
                  <td className="py-3 px-4 text-right flex items-center justify-end gap-2 pt-5">
                    <button className="p-1.5 rounded-lg border border-border-custom hover:border-accent text-text-secondary hover:text-accent">
                      <Edit size={14} />
                    </button>
                    <button
                      onClick={() => setProjects(projects.filter((p) => p.id !== proj.id))}
                      className="p-1.5 rounded-lg border border-border-custom hover:border-red-500 text-text-secondary hover:text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-bg-secondary border border-border-custom p-6 rounded-2xl w-full max-w-md flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-text-primary">Add Portfolio Project</h3>
            <form onSubmit={handleAddProject} className="flex flex-col gap-4">
              <div>
                <label className="text-xs uppercase font-semibold text-text-primary block mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Grand Royal Wedding Sanand"
                  className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-2.5 text-sm text-text-primary"
                />
              </div>
              <div>
                <label className="text-xs uppercase font-semibold text-text-primary block mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-2.5 text-sm text-text-primary"
                >
                  <option value="Weddings">Weddings</option>
                  <option value="Engagements">Engagements</option>
                  <option value="Birthdays">Birthdays</option>
                  <option value="Pre-Wedding">Pre-Wedding</option>
                  <option value="Events">Events</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase font-semibold text-text-primary block mb-1">Location</label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="Sanand, Gujarat"
                  className="w-full bg-bg-surface border border-border-custom rounded-xl px-4 py-2.5 text-sm text-text-primary"
                />
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-xs font-semibold uppercase text-text-muted hover:text-text-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-wider"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
