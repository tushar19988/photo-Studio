import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { verifyAdminSession } from "@/lib/auth";
import { logoutAdmin } from "@/server/actions/admin-auth";
import {
  LayoutDashboard,
  MessageSquare,
  Image as ImageIcon,
  Layers,
  Tag,
  Star,
  BookOpen,
  Settings,
  LogOut,
  ExternalLink,
  Camera,
} from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await verifyAdminSession();

  // If not logged in, children renders login page directly
  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex bg-neutral-950 text-neutral-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-neutral-800 bg-neutral-900 flex flex-col justify-between shrink-0 hidden md:flex">
        <div>
          {/* Logo Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center gap-2.5">
            <Camera className="w-5 h-5 text-amber-400" />
            <span className="font-serif font-bold text-lg text-white">Studio Admin</span>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 text-xs uppercase tracking-wider font-semibold">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-amber-400" />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/admin/enquiries"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>Enquiries</span>
            </Link>

            <Link
              href="/admin/portfolio"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>Portfolio</span>
            </Link>

            <Link
              href="/admin/services"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Services</span>
            </Link>

            <Link
              href="/admin/packages"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <Tag className="w-4 h-4 text-amber-400" />
              <span>Packages</span>
            </Link>

            <Link
              href="/admin/testimonials"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <Star className="w-4 h-4 text-amber-400" />
              <span>Testimonials</span>
            </Link>

            <Link
              href="/admin/journal"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Journal Blog</span>
            </Link>

            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
            >
              <Settings className="w-4 h-4 text-amber-400" />
              <span>Site Settings</span>
            </Link>
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-neutral-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 transition-colors"
          >
            <span>View Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <form action={logoutAdmin}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-rose-400 hover:bg-rose-950/40 text-xs font-semibold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <header className="p-6 border-b border-neutral-800 bg-neutral-900/50 flex items-center justify-between md:hidden">
          <span className="font-serif font-bold text-lg text-white">Studio Admin CMS</span>
          <Link href="/" className="text-xs text-amber-400 hover:underline">
            Live Site
          </Link>
        </header>

        <div className="p-6 sm:p-10">{children}</div>
      </main>
    </div>
  );
}
