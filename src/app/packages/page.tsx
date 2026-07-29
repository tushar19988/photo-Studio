import React from "react";
import Link from "next/link";
import { db } from "@/lib/db";
import { Reveal } from "@/components/animations/reveal";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Packages & Pricing — Shree Shyam Studio Sanand",
  description: "View wedding, birthday, and engagement photography packages and transparent starting prices at Shree Shyam Studio.",
};

export default async function PackagesPage() {
  const packages = await db.package.findMany({
    where: { published: true },
    include: {
      service: true,
      features: { orderBy: { sortOrder: "asc" } },
    },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="pt-28 pb-24">
      {/* HERO */}
      <section className="py-16 sm:py-24 bg-background text-center border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal variant="fadeDown">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
              Editorial Investment
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Photography Packages & Pricing
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
              Transparent starting rates for wedding ceremonies, engagement parties, and milestone birthdays. Tailored to your specific event schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PACKAGES CARDS */}
      <section className="py-20 bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <Reveal key={pkg.id} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-surface border border-neutral-200/80 dark:border-neutral-800 shadow-sm flex flex-col justify-between h-full hover:shadow-xl transition-all duration-500 relative">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400">
                    {pkg.service.name}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-foreground mt-4 mb-2">
                    {pkg.name}
                  </h3>

                  {pkg.description && (
                    <p className="text-xs font-light text-muted-foreground mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                  )}

                  <div className="mb-8 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground block font-light">
                      Starting From
                    </span>
                    <span className="font-serif text-4xl font-bold text-foreground">
                      ₹{pkg.startingPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-muted-foreground font-light ml-1">/ package</span>
                  </div>

                  {/* Coverage Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-xs text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Candid Photography Coverage</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Traditional Photography & Portraits</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Master Edited Album Layouts</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>High-Res Digital Photo Gallery</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-2xl bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-wider text-center transition-all shadow-md active:scale-95 block"
                >
                  Enquire For {pkg.name}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-6 rounded-2xl bg-bg-secondary/60 border border-neutral-200/60 dark:border-neutral-800 text-xs text-muted-foreground leading-relaxed font-light">
          <strong>Note:</strong> Final pricing depends on event duration, number of functions, venue distance, and printed album choices. Visit our Sanand studio at 101 Shubham Elite or contact us for an exact quotation.
        </div>
      </section>
    </div>
  );
}
