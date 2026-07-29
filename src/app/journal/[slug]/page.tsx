import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await db.blogPost.findUnique({
    where: { slug },
  });

  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} — Shree Shyam Studio Journal`,
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await db.blogPost.findUnique({
    where: { slug },
    include: { category: true },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>

        <div className="mb-8">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold mb-4">
            <Tag className="w-3.5 h-3.5" />
            {post.category.name}
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-muted-foreground font-light">
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-amber-600" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 dark:border-neutral-800 mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none text-foreground font-light leading-relaxed space-y-6 text-base sm:text-lg">
          <p className="text-xl font-normal text-muted-foreground leading-relaxed italic border-l-2 border-amber-500 pl-4">
            "{post.excerpt}"
          </p>
          <div className="pt-4 whitespace-pre-line">{post.content}</div>
        </div>
      </article>
    </div>
  );
}
