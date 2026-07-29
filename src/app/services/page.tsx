import React from "react";
import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/db";
import { Reveal } from "@/components/animations/reveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services & Starting Prices — Shree Shyam Studio Sanand",
  description: "Explore photography services and starting package prices for Wedding, Birthday, Engagement, and Pre-Wedding shoots by Shree Shyam Studio in Sanand, Gujarat.",
};

export default async function ServicesPage() {
  const services = await db.service.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="pt-28 pb-20">
      {/* HERO */}
      <section className="py-16 sm:py-24 bg-background border-b border-neutral-200/50 dark:border-neutral-800/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal variant="fadeDown">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
              Tailored Visual Coverage
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Our Premium Photography Services
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
              Transparent starting prices, custom event packages, and editorial quality for weddings, engagements, birthdays, and celebrations across Gujarat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-neutral-200/60 dark:border-neutral-800 ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Image */}
                <Reveal variant="fadeUp" className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 dark:border-neutral-800 group">
                    <Image
                      src={service.heroImage || "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"}
                      alt={service.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md text-amber-300 px-4 py-2 rounded-full text-xs font-semibold">
                      Starting ₹{service.startingPrice.toLocaleString("en-IN")} onwards
                    </div>
                  </div>
                </Reveal>

                {/* Content */}
                <Reveal variant="fadeUp" delay={0.2} className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-2">
                    Service Overview
                  </span>
                  <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground font-light text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Candid & Traditional Photography Coverage</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Master Edited High-Resolution Album & Digital Files</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Dedicated Photographer Team for Sanand & Gujarat</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3.5 rounded-full bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                    >
                      Book {service.name}
                    </Link>
                    <Link
                      href="/packages"
                      className="px-6 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:border-amber-600 text-foreground font-semibold text-xs uppercase tracking-wider transition-all"
                    >
                      View Detailed Packages
                    </Link>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#EFECE6] dark:bg-[#0A0A0A] text-neutral-900 dark:text-white border-t border-neutral-300/80 dark:border-neutral-800/80 text-center transition-colors">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-3 text-neutral-900 dark:text-white">Need a Custom Event Package?</h2>
          <p className="text-neutral-700 dark:text-neutral-400 text-sm font-light mb-6">
            We tailor custom packages for multi-day weddings, destination shoots, and corporate events.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
