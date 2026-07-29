"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  Package,
  Inbox,
  MessageSquareQuote,
  BookOpen,
  Image,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const ADMIN_NAV = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Portfolio", href: "/admin/portfolio", icon: FolderKanban },
  { name: "Services", href: "/admin/services", icon: Wrench },
  { name: "Packages", href: "/admin/packages", icon: Package },
  { name: "Enquiries", href: "/admin/enquiries", icon: Inbox },
  { name: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
  { name: "Journal", href: "/admin/journal", icon: BookOpen },
  { name: "Media Library", href: "/admin/media", icon: Image },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Exclude sidebar layout on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    document.cookie = "sss_admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-bg-primary text-text-primary">
      {/* Sidebar */}
      <aside className="w-64 bg-bg-secondary border-r border-border-custom flex flex-col justify-between p-6 shrink-0 hidden md:flex">
        <div>
          {/* Logo */}
          <Link href="/admin/dashboard" className="block mb-8">
            <span className="font-serif text-xl font-bold tracking-wide text-text-primary">
              SSS <span className="text-accent text-sm font-normal">ADMIN</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {ADMIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-accent text-bg-surface shadow-xs"
                      : "text-text-secondary hover:bg-bg-surface hover:text-text-primary"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-border-custom flex flex-col gap-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between text-xs text-text-muted hover:text-accent transition-colors"
          >
            <span>View Public Site</span>
            <ChevronRight size={14} />
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500 hover:text-red-600 transition-colors cursor-pointer pt-2"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-bg-secondary border-b border-border-custom px-8 flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            Shree Shyam Studio Admin CMS
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-text-primary">Admin Session</span>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
