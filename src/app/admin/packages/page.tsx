import React from "react";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Tag } from "lucide-react";

export default async function AdminPackagesPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const packages = await db.package.findMany({
    include: { service: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Packages & Rates</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Manage event package tiers and published rates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400">
                {pkg.service.name}
              </span>
              <span className="font-mono text-sm font-bold text-white">
                ₹{pkg.startingPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white">{pkg.name}</h3>
            {pkg.description && (
              <p className="text-xs text-neutral-400 font-light">{pkg.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
