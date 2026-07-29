import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { JOURNAL_POSTS } from "@/data/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-12 pb-24">
      {/* Back Link */}
      <div className="max-w-[900px] mx-auto px-6 mb-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Header */}
      <article className="px-6 max-w-[900px] mx-auto">
        <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
          <span className="text-accent font-semibold uppercase tracking-wider">{post.category}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {post.publishedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-text-primary font-normal leading-tight mb-8">
          {post.title}
        </h1>

        <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-border-custom mb-12 shadow-sm">
          <img
            src={post.coverImage}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-text-secondary font-sans leading-relaxed space-y-6">
          <p className="text-lg text-text-primary font-serif italic border-l-2 border-accent pl-4">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-line text-base text-text-secondary leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Author / CTA Footer */}
        <div className="mt-16 pt-8 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-6 bg-bg-secondary p-8 rounded-2xl">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-accent block">Written By</span>
            <div className="font-serif text-xl text-text-primary">Shree Shyam Studio Team</div>
            <div className="text-xs text-text-muted mt-0.5">Sanand, Gujarat</div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all inline-flex items-center gap-2"
          >
            <span>Book Your Shoot</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </div>
  );
}
