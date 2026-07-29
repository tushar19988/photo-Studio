"use client";

import { useState } from "react";
import { Package as PackageIcon, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/content";

export default function AdminPackagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif text-3xl text-text-primary">Packages Management</h1>
        <p className="text-xs text-text-muted mt-1">Manage editorial pricing packages and feature inclusions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="bg-bg-secondary border border-border-custom rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">Package</span>
              <h3 className="font-serif text-2xl text-text-primary mb-2">{service.name}</h3>
              <div className="font-serif text-xl font-medium text-text-primary mb-4">{service.startingPrice}</div>
              <div className="space-y-2 border-t border-border-custom pt-4">
                <span className="text-xs font-semibold text-text-primary block">Inclusions:</span>
                {service.inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle2 size={12} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-border-custom text-xs font-semibold text-accent text-right">
              Active Package
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
