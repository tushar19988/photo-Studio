"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  location: string | null;
  category: {
    name: string;
    slug: string;
  };
}

interface HomePortfolioProps {
  categories: Array<{ id: string; name: string; slug: string }>;
  projects: Project[];
}

export function HomePortfolio({ categories, projects }: HomePortfolioProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.slug === activeTab);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
            activeTab === "all"
              ? "bg-amber-700 dark:bg-amber-500 text-white dark:text-neutral-950 shadow-sm"
              : "bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300/80 dark:hover:bg-neutral-700"
          }`}
          data-cursor
        >
          All Stories ({projects.length})
        </button>

        {categories.map((cat) => {
          const count = projects.filter((p) => p.category.slug === cat.slug).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.slug)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeTab === cat.slug
                  ? "bg-amber-700 dark:bg-amber-500 text-white dark:text-neutral-950 shadow-sm"
                  : "bg-neutral-200/70 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300/80 dark:hover:bg-neutral-700"
              }`}
              data-cursor
            >
              {cat.name} {count > 0 && `(${count})`}
            </button>
          );
        })}
      </div>

      {/* Masonry / Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-sm"
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="block relative aspect-[4/5] overflow-hidden"
                data-cursor
                data-cursor-text="VIEW"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-semibold bg-white/20 backdrop-blur-md border border-white/20">
                      {project.category.name}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.location && (
                      <p className="text-xs text-neutral-300 font-light mt-1">
                        {project.location}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
