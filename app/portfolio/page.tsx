"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO_DATA, PortfolioItem } from "@/data/content";

const CATEGORIES = ["All", "Weddings", "Engagements", "Birthdays", "Pre-Wedding", "Events"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-12 pb-24">
      {/* Header */}
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Visual Archives
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Portfolio Gallery
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore our stories captured across Gujarat—from vibrant multi-day royal weddings to intimate engagement ceremonies.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-accent text-bg-surface shadow-xs"
                  : "bg-bg-secondary text-text-secondary border border-border-custom hover:border-accent hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid */}
      <section className="px-6 max-w-[1440px] mx-auto">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-bg-secondary rounded-2xl border border-border-custom max-w-[800px] mx-auto">
            <h3 className="font-serif text-2xl text-text-primary mb-2">Stories are being prepared</h3>
            <p className="text-text-muted text-sm">New photography albums for this category will be published soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.1}>
                <Link
                  href={`/portfolio/${item.slug}`}
                  data-gallery-image="true"
                  className="group block relative rounded-2xl overflow-hidden bg-bg-secondary border border-border-custom shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-accent font-semibold uppercase tracking-wider">
                      <span>{item.category}</span>
                      <span className="text-text-muted font-normal">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-xs line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
