import React from "react";
import Image from "next/image";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Layers, DollarSign } from "lucide-react";

export default async function AdminServicesPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const services = await db.service.findMany({
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Services Management</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Update service offerings and starting prices displayed on the studio website.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-white">{service.name}</h3>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold font-mono">
                Starting ₹{service.startingPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              {service.description}
            </p>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
              <span>Status: Published</span>
              <span className="font-mono">Slug: /{service.slug}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
