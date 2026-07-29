"use client";

import { useState } from "react";
import { Star, Plus, Trash2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/content";

export default function AdminTestimonialsPage() {
  const [list, setList] = useState(TESTIMONIALS_DATA);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl text-text-primary">Testimonials Management</h1>
          <p className="text-xs text-text-muted mt-1">Manage verified client feedback and review publication status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((item) => (
          <div key={item.id} className="bg-bg-secondary border border-border-custom rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-accent">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
                <button
                  onClick={() => setList(list.filter((t) => t.id !== item.id))}
                  className="text-text-muted hover:text-red-500 p-1"
                >
                  <Trash2 size={14} />
                </button>
              </div>
              <p className="font-serif italic text-sm text-text-primary mb-4 leading-relaxed">&ldquo;{item.review}&rdquo;</p>
            </div>
            <div className="pt-3 border-t border-border-custom text-xs">
              <div className="font-semibold text-text-primary">{item.name}</div>
              <div className="text-text-muted text-[11px]">{item.eventType} • {item.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
