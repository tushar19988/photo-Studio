import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { Reveal } from "@/components/animations/reveal";
import { ArrowLeft, MapPin, Calendar, Tag, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await db.portfolioProject.findUnique({
    where: { slug },
  });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Shree Shyam Studio`,
    description: project.description || `Photography story: ${project.title} by Shree Shyam Studio in Sanand.`,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await db.portfolioProject.findUnique({
    where: { slug },
    include: {
      category: true,
      images: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  if (!project) {
    notFound();
  }

  const relatedProjects = await db.portfolioProject.findMany({
    where: {
      published: true,
      id: { not: project.id },
    },
    take: 3,
    include: { category: true },
  });

  return (
    <div className="pt-28 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-500 hover:text-amber-600 dark:hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header Metadata */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs text-amber-700 dark:text-amber-400 uppercase tracking-widest font-semibold mb-4">
            <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full">
              <Tag className="w-3.5 h-3.5" />
              {project.category.name}
            </span>
            {project.location && (
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                {project.location}
              </span>
            )}
            {project.eventDate && (
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                {new Date(project.eventDate).toLocaleDateString("en-IN", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-base sm:text-xl font-light text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        {/* Hero Cover Image */}
        <Reveal variant="fadeUp" className="mb-16">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 dark:border-neutral-800">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Gallery Image Sequence Flow */}
        {project.images && project.images.length > 0 && (
          <div className="space-y-12 mb-24">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground border-b border-neutral-200 dark:border-neutral-800 pb-4">
              Story Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((img, idx) => (
                <Reveal key={img.id} delay={idx * 0.1}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-neutral-200/80 dark:border-neutral-800 group">
                    <Image
                      src={img.url}
                      alt={img.alt || project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-103 transition-transform duration-700"
                    />
                    {img.caption && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-neutral-950/90 to-transparent text-white text-xs font-light">
                        {img.caption}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="pt-16 border-t border-neutral-200 dark:border-neutral-800 mb-20">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              Related Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/portfolio/${rel.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-surface border border-neutral-200/80 dark:border-neutral-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-600 dark:text-amber-400">
                      {rel.category.name}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors mt-1">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Book Shoot CTA */}
        <div className="p-12 rounded-3xl bg-neutral-900 text-white text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Inspired by this story?</h3>
          <p className="text-neutral-300 font-light text-sm max-w-md mx-auto mb-8">
            Let us capture your upcoming wedding or celebration with the same elegance and passion.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all"
          >
            <span>Book Your Shoot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
