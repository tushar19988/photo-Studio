"use client";

import React, { useTransition } from "react";
import { updateEnquiryStatus, deleteEnquiry } from "@/server/actions/enquiry-admin";
import { Trash2 } from "lucide-react";

export function EnquiryStatusSelector({
  enquiryId,
  currentStatus,
}: {
  enquiryId: string;
  currentStatus: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextStatus = e.target.value;
    startTransition(async () => {
      await updateEnquiryStatus(enquiryId, nextStatus);
    });
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this enquiry?")) {
      startTransition(async () => {
        await deleteEnquiry(enquiryId);
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={currentStatus}
        onChange={handleChange}
        disabled={isPending}
        className="px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none disabled:opacity-50"
      >
        <option value="NEW">NEW</option>
        <option value="CONTACTED">CONTACTED</option>
        <option value="FOLLOW_UP">FOLLOW_UP</option>
        <option value="BOOKED">BOOKED</option>
        <option value="COMPLETED">COMPLETED</option>
        <option value="CANCELLED">CANCELLED</option>
      </select>

      <button
        onClick={handleDelete}
        disabled={isPending}
        className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-900/50 text-rose-400 hover:text-rose-300 transition-colors"
        title="Delete Enquiry"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
