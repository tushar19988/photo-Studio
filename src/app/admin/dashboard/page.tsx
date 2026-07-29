import React from "react";
import Link from "next/link";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  MessageSquare,
  Image as ImageIcon,
  Layers,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const totalEnquiries = await db.enquiry.count();
  const newEnquiries = await db.enquiry.count({ where: { status: "NEW" } });
  const portfolioCount = await db.portfolioProject.count();
  const servicesCount = await db.service.count();

  const recentEnquiries = await db.enquiry.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Welcome back, {user.name}. Here is the latest activity for Shree Shyam Studio.
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              Total Enquiries
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">{totalEnquiries}</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <MessageSquare className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              New Leads
            </span>
            <h2 className="text-3xl font-serif font-bold text-emerald-400 mt-1">{newEnquiries}</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              Portfolio Projects
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">{portfolioCount}</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <ImageIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
              Active Services
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-1">{servicesCount}</h2>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Recent Enquiries */}
      <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-white">Recent Enquiries</h3>
          <Link
            href="/admin/enquiries"
            className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentEnquiries.length === 0 ? (
          <p className="text-xs text-neutral-400 font-light py-8 text-center">
            No enquiries received yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-neutral-400 uppercase tracking-wider border-b border-neutral-800">
                <tr>
                  <th className="pb-3 font-semibold">Name</th>
                  <th className="pb-3 font-semibold">Phone</th>
                  <th className="pb-3 font-semibold">Event</th>
                  <th className="pb-3 font-semibold">Event Date</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                {recentEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-neutral-800/40">
                    <td className="py-4 font-semibold text-white">{enq.name}</td>
                    <td className="py-4 font-mono">{enq.phone}</td>
                    <td className="py-4">{enq.eventType}</td>
                    <td className="py-4">
                      {enq.eventDate
                        ? new Date(enq.eventDate).toLocaleDateString("en-IN")
                        : "N/A"}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                          enq.status === "NEW"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-neutral-800 text-neutral-400"
                        }`}
                      >
                        {enq.status}
                      </span>
                    </td>
                    <td className="py-4 text-neutral-400">
                      {new Date(enq.createdAt).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
