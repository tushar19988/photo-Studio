import React from "react";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Star } from "lucide-react";

export default async function AdminTestimonialsPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const testimonials = await db.testimonial.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Client Testimonials</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Review customer feedback and published reviews on the studio homepage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>

            <p className="text-xs italic text-neutral-300 leading-relaxed font-light">
              "{t.review}"
            </p>

            <div className="pt-3 border-t border-neutral-800 text-xs">
              <h4 className="font-bold text-white">{t.clientName}</h4>
              <p className="text-[11px] text-neutral-400 font-light">
                {t.eventType} • {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
