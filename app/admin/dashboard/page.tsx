import Link from "next/link";
import { Inbox, FolderKanban, Wrench, Package, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA, SERVICES_DATA } from "@/data/content";

export const metadata = {
  title: "Admin Dashboard | Shree Shyam Studio",
};

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Enquiries", value: "12", icon: Inbox, color: "text-blue-500" },
    { title: "New Enquiries", value: "3", icon: Inbox, color: "text-accent" },
    { title: "Portfolio Projects", value: PORTFOLIO_DATA.length.toString(), icon: FolderKanban, color: "text-green-500" },
    { title: "Active Services", value: SERVICES_DATA.length.toString(), icon: Wrench, color: "text-purple-500" },
  ];

  const recentEnquiries = [
    { id: "enq_1", name: "Ramesh Patel", event: "Wedding Photography", date: "2026-07-28", status: "NEW" },
    { id: "enq_2", name: "Priya Shah", event: "Engagement Ceremony", date: "2026-07-27", status: "CONTACTED" },
    { id: "enq_3", name: "Anand Verma", event: "1st Birthday Party", date: "2026-07-25", status: "BOOKED" },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl text-text-primary font-normal">Dashboard Overview</h1>
        <p className="text-xs text-text-muted mt-1">Welcome to Shree Shyam Studio Admin Panel</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-bg-secondary p-6 rounded-2xl border border-border-custom flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-text-muted font-semibold block">{stat.title}</span>
                <span className="font-serif text-3xl font-normal text-text-primary mt-1 block">{stat.value}</span>
              </div>
              <div className={`p-3 rounded-xl bg-bg-surface border border-border-custom ${stat.color}`}>
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-bg-secondary rounded-2xl border border-border-custom p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl text-text-primary">Recent Photography Enquiries</h2>
          <Link
            href="/admin/enquiries"
            className="text-xs uppercase tracking-wider font-semibold text-accent hover:underline flex items-center gap-1"
          >
            <span>View All Enquiries</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-border-custom uppercase text-text-muted">
              <tr>
                <th className="py-3 px-4">Client Name</th>
                <th className="py-3 px-4">Event Type</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom/60">
              {recentEnquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-bg-surface/50 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-text-primary">{enq.name}</td>
                  <td className="py-3.5 px-4 text-text-secondary">{enq.event}</td>
                  <td className="py-3.5 px-4 text-text-muted font-mono">{enq.date}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                      enq.status === "NEW" ? "bg-accent/20 text-accent" : "bg-green-500/20 text-green-500"
                    }`}>
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <Link
                      href="/admin/enquiries"
                      className="text-accent hover:underline font-semibold"
                    >
                      Manage
                    </Link>
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
