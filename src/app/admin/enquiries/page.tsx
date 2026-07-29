import React from "react";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { EnquiryStatusSelector } from "@/components/admin/enquiry-status-selector";
import { Phone, Mail, MapPin, Calendar, DollarSign, Users, MessageSquare } from "lucide-react";

export default async function AdminEnquiriesPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Customer Enquiries & Booking Leads</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Manage all incoming lead requests, change statuses, and track booking conversions.
        </p>
      </div>

      {enquiries.length === 0 ? (
        <div className="p-12 rounded-3xl bg-neutral-900 border border-neutral-800 text-center text-neutral-400 font-light">
          No customer enquiries found in the database.
        </div>
      ) : (
        <div className="space-y-4">
          {enquiries.map((enq) => (
            <div
              key={enq.id}
              className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl font-bold text-white">{enq.name}</h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        enq.status === "NEW"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : enq.status === "BOOKED"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-neutral-800 text-neutral-400"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-light mt-1">
                    Submitted on {new Date(enq.createdAt).toLocaleString("en-IN")}
                  </p>
                </div>

                <EnquiryStatusSelector enquiryId={enq.id} currentStatus={enq.status} />
              </div>

              {/* Grid Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-light text-neutral-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <a href={`tel:${enq.phone}`} className="font-mono text-white hover:underline">
                    {enq.phone}
                  </a>
                </div>

                {enq.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{enq.email}</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    {enq.eventType} {enq.eventDate ? `• ${new Date(enq.eventDate).toLocaleDateString("en-IN")}` : ""}
                  </span>
                </div>

                {enq.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{enq.location}</span>
                  </div>
                )}
              </div>

              {/* Extra details & message */}
              {(enq.budget || enq.guests || enq.message) && (
                <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs font-light space-y-2 text-neutral-300">
                  <div className="flex flex-wrap items-center gap-6 text-[11px] text-amber-300/90 font-medium">
                    {enq.budget && <span>Budget: {enq.budget}</span>}
                    {enq.guests && <span>Guests: {enq.guests}</span>}
                  </div>
                  {enq.message && (
                    <p className="text-neutral-400 italic">"{enq.message}"</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
