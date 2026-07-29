import React from "react";
import { db } from "@/lib/db";
import { Reveal } from "@/components/animations/reveal";
import { HomePortfolio } from "@/components/portfolio/home-portfolio";

export const metadata = {
  title: "Portfolio — Shree Shyam Studio Sanand",
  description: "Browse the wedding, engagement, birthday, and pre-wedding photography portfolio by Shree Shyam Studio.",
};

export default async function PortfolioPage() {
  const categories = await db.portfolioCategory.findMany({
    orderBy: { sortOrder: "asc" },
  });

  const rawProjects = await db.portfolioProject.findMany({
    where: { published: true },
    include: { category: true },
    orderBy: { sortOrder: "asc" },
  });

  const projects = rawProjects.map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    coverImage: p.coverImage,
    location: p.location,
    category: {
      name: p.category.name,
      slug: p.category.slug,
    },
  }));

  return (
    <div className="pt-28 pb-24">
      <section className="py-16 sm:py-20 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal variant="fadeDown">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
              Editorial Gallery
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Our Visual Portfolio
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-2xl mx-auto text-base font-light text-muted-foreground leading-relaxed">
              Explore real wedding stories, ring ceremonies, pre-wedding couple shoots, and birthday celebrations captured with artistic precision.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomePortfolio categories={categories} projects={projects} />
      </section>
    </div>
  );
}
