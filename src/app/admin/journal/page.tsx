import React from "react";
import { db } from "@/lib/db";
import { verifyAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { BookOpen, ExternalLink } from "lucide-react";

export default async function AdminJournalPage() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");

  const posts = await db.blogPost.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-white">Journal & Blog Articles</h1>
        <p className="text-xs text-neutral-400 font-light mt-1">
          Manage local SEO blog guides and wedding stories.
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400">
                {post.category.name}
              </span>
              <h3 className="font-serif text-lg font-bold text-white mt-1">{post.title}</h3>
              <p className="text-xs text-neutral-400 font-light mt-1 max-w-2xl line-clamp-1">{post.excerpt}</p>
            </div>

            <Link
              href={`/journal/${post.slug}`}
              target="_blank"
              className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View Post</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
