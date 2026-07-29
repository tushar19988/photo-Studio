"use client";

import { useState } from "react";
import { Wrench, Edit, Check } from "lucide-react";
import { SERVICES_DATA } from "@/data/content";

export default function AdminServicesPage() {
  const [services, setServices] = useState(SERVICES_DATA);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState("");

  const handleSavePrice = (id: string) => {
    setServices(
      services.map((s) => (s.id === id ? { ...s, startingPrice: editPrice } : s))
    );
    setEditingId(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif text-3xl text-text-primary">Services & Pricing Management</h1>
        <p className="text-xs text-text-muted mt-1">Manage service offerings and verified starting prices shown on public website</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-bg-secondary border border-border-custom rounded-2xl p-6 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-2xl text-text-primary">{service.name}</h3>
                {editingId === service.id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="bg-bg-surface border border-border-custom px-3 py-1 text-xs text-text-primary rounded-lg"
                    />
                    <button
                      onClick={() => handleSavePrice(service.id)}
                      className="p-1.5 rounded-lg bg-accent text-bg-surface"
                    >
                      <Check size={14} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-accent bg-bg-surface px-3 py-1 rounded-full border border-border-custom">
                      {service.startingPrice}
                    </span>
                    <button
                      onClick={() => {
                        setEditingId(service.id);
                        setEditPrice(service.startingPrice);
                      }}
                      className="p-1 text-text-muted hover:text-accent"
                    >
                      <Edit size={14} />
                    </button>
                  </div>
                )}
              </div>
              <p className="text-text-secondary text-xs leading-relaxed">{service.shortDescription}</p>
            </div>
            <div className="text-[11px] text-text-muted border-t border-border-custom/60 pt-3">
              Status: <span className="text-green-500 font-semibold uppercase">Published</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
