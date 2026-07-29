import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { JOURNAL_POSTS } from "@/data/journal";

export const metadata = {
  title: "Journal & Photography Tips | Shree Shyam Studio Sanand",
  description: "Read wedding planning advice, pre-wedding shoot guides, and photography tips from Shree Shyam Studio in Sanand, Gujarat.",
};

export default function JournalPage() {
  return (
    <div className="pt-12 pb-24">
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Stories & Guides
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Studio Journal
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Tips, wedding planning advice, and photo shoot guides to help you prepare for your special celebrations.
        </p>
      </section>

      <section className="px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {JOURNAL_POSTS.map((post, index) => (
          <Reveal key={post.id} delay={index * 0.15}>
            <Link
              href={`/journal/${post.slug}`}
              className="group block bg-bg-secondary rounded-2xl overflow-hidden border border-border-custom hover:border-accent/60 transition-all duration-300 shadow-xs h-full"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                    <span className="text-accent font-semibold uppercase tracking-wider">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.publishedDate}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-text-primary group-hover:text-accent transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-xs leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-custom/60 flex items-center justify-between text-xs font-semibold text-accent">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
