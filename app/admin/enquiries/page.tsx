"use client";

import { useState } from "react";
import { Search, Filter, Phone, Mail, Calendar, MapPin, MessageSquare } from "lucide-react";

interface EnquiryItem {
  id: string;
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  eventDate?: string;
  location?: string;
  status: "NEW" | "CONTACTED" | "FOLLOW_UP" | "BOOKED" | "COMPLETED" | "CANCELLED";
  notes?: string;
  createdAt: string;
}

const MOCK_ENQUIRIES: EnquiryItem[] = [
  {
    id: "enq_1",
    name: "Ramesh Patel",
    phone: "09876543210",
    email: "ramesh@example.com",
    eventType: "Wedding Photography",
    eventDate: "2026-11-20",
    location: "Sanand Club, Gujarat",
    status: "NEW",
    notes: "Requires multi-day coverage including Haldi and Reception.",
    createdAt: "2026-07-28",
  },
  {
    id: "enq_2",
    name: "Priya Shah",
    phone: "09724322000",
    email: "priya@example.com",
    eventType: "Engagement Ceremony",
    eventDate: "2026-09-10",
    location: "Heritage Resort Sanand",
    status: "CONTACTED",
    notes: "Sent proposal via WhatsApp.",
    createdAt: "2026-07-27",
  },
  {
    id: "enq_3",
    name: "Anand Verma",
    phone: "09123456789",
    eventType: "Birthday Party",
    eventDate: "2026-08-15",
    location: "Sanand",
    status: "BOOKED",
    notes: "Advance deposit received.",
    createdAt: "2026-07-25",
  },
];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(MOCK_ENQUIRIES);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = enquiries.filter((e) => {
    const matchesStatus = filterStatus === "ALL" || e.status === filterStatus;
    const matchesSearch =
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.phone.includes(searchQuery) ||
      e.eventType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, newStatus: EnquiryItem["status"]) => {
    setEnquiries(
      enquiries.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-serif text-3xl text-text-primary">Enquiry Management</h1>
        <p className="text-xs text-text-muted mt-1">Track, filter, and manage incoming photography lead submissions</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-bg-secondary p-4 rounded-2xl border border-border-custom">
        <div className="relative flex-1 min-w-[240px]">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client name, phone, or event..."
            className="w-full bg-bg-surface border border-border-custom rounded-xl pl-10 pr-4 py-2 text-xs text-text-primary focus:outline-none focus:border-accent"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={14} className="text-text-muted" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-bg-surface border border-border-custom rounded-xl px-3 py-2 text-xs text-text-primary cursor-pointer focus:outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="NEW">NEW</option>
            <option value="CONTACTED">CONTACTED</option>
            <option value="FOLLOW_UP">FOLLOW_UP</option>
            <option value="BOOKED">BOOKED</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-bg-secondary border border-border-custom rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border-custom uppercase text-text-muted">
              <tr>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Event & Date</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Notes</th>
                <th className="py-3 px-4 text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/60">
              {filtered.map((enq) => (
                <tr key={enq.id} className="hover:bg-bg-surface/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-text-primary">{enq.name}</div>
                    <div className="text-[11px] font-mono text-text-muted flex items-center gap-1 mt-0.5">
                      <Phone size={10} className="text-accent" />
                      <span>{enq.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-text-primary font-medium">{enq.eventType}</div>
                    <div className="text-[11px] font-mono text-text-muted mt-0.5">{enq.eventDate || "TBD"}</div>
                  </td>
                  <td className="py-4 px-4 text-text-secondary">{enq.location || "Sanand"}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        enq.status === "NEW"
                          ? "bg-accent/20 text-accent"
                          : enq.status === "BOOKED"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-blue-500/20 text-blue-500"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-text-muted max-w-xs truncate">{enq.notes || "-"}</td>
                  <td className="py-4 px-4 text-right">
                    <select
                      value={enq.status}
                      onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                      className="bg-bg-surface border border-border-custom rounded-lg px-2 py-1 text-[11px] text-text-primary cursor-pointer"
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="FOLLOW_UP">FOLLOW_UP</option>
                      <option value="BOOKED">BOOKED</option>
                      <option value="COMPLETED">COMPLETED</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
