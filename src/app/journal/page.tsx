import React from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import { Reveal } from "@/components/animations/reveal";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Journal & Photography Guides — Shree Shyam Studio",
  description: "Read wedding photography tips, pre-wedding location guides, and client stories by Shree Shyam Studio.",
};

export default async function JournalPage() {
  const posts = await db.blogPost.findMany({
    where: { published: true },
    include: { category: true },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="pt-28 pb-24">
      {/* HERO */}
      <section className="py-16 sm:py-20 bg-background text-center border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal variant="fadeDown">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
              Stories & Insights
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
              The Studio Journal
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-2xl mx-auto text-base font-light text-muted-foreground leading-relaxed">
              Discover wedding planning tips, pre-wedding location ideas in Sanand & Ahmedabad, and behind-the-scenes stories.
            </p>
          </Reveal>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.slug}`}
              className="group rounded-2xl overflow-hidden bg-surface border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between h-full shadow-xs hover:shadow-xl transition-all duration-500"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest">
                    {post.category.name}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" />
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs font-light text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
