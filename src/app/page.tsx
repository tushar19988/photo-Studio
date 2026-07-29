import React from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import { AmbientParticles } from "@/components/three/ambient-particles";
import { Reveal } from "@/components/animations/reveal";
import { HomePortfolio } from "@/components/portfolio/home-portfolio";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ArrowRight, Star, Camera, Phone, Calendar, Heart, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const revalidate = 60; // Revalidate page every 60s

export default async function HomePage() {
  // Database Queries
  const services = await db.service.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });

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

  const testimonials = await db.testimonial.findMany({
    where: { published: true },
    orderBy: { sortOrder: "asc" },
  });

  return (
    <div className="relative min-h-screen">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
            alt="Shree Shyam Studio Wedding Photography"
            fill
            priority
            quality={90}
            className="object-cover object-center filter brightness-[0.45] dark:brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Subtle Ambient Particle Effect */}
        <AmbientParticles />

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white">
          <Reveal variant="fadeDown">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Stories That Live Forever
            </span>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] mb-6">
              Capturing Emotional Stories & <span className="italic font-normal text-amber-300">Timeless Moments.</span>
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-2xl mx-auto text-base sm:text-xl font-light text-neutral-200 mb-10 leading-relaxed">
              Premier wedding, engagement & event photography studio based in Sanand, Gujarat. Crafting editorial wedding visual albums filled with genuine emotion.
            </p>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2"
                data-cursor
                data-cursor-text="VIEW"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                data-cursor
              >
                <span>Book a Shoot</span>
              </Link>
            </div>
          </Reveal>

          {/* Quick Verified Rates Pill */}
          <Reveal variant="fadeUp" delay={0.4} className="mt-14">
            <div className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl bg-neutral-950/60 backdrop-blur-md border border-white/10 text-xs font-light text-neutral-300">
              <div>
                <span className="text-amber-400 font-semibold">Wedding</span> from ₹25,000
              </div>
              <div className="h-3 w-[1px] bg-white/20" />
              <div>
                <span className="text-amber-400 font-semibold">Birthday</span> from ₹10,000
              </div>
              <div className="h-3 w-[1px] bg-white/20" />
              <div>
                <span className="text-amber-400 font-semibold">Engagement</span> from ₹12,000
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL INTRO STATEMENT */}
      <section className="py-24 sm:py-32 bg-background border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Reveal variant="blur">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 mb-3 block">
              Editorial Storytelling Philosophy
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-foreground mb-8">
              "YOUR MOMENTS. OUR STORYTELLING."
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-3xl mx-auto text-base sm:text-xl font-light text-muted-foreground leading-relaxed">
              Every celebration has a distinct soul. We preserve the quiet smiles, grand varmalas, joyful tears, and intimate details that make your family story uniquely yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: FEATURED SERVICES */}
      <section className="py-24 sm:py-32 bg-bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-2">
                What We Do
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground">
                Featured Photography Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 hover:underline"
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden bg-surface border border-neutral-200/80 dark:border-neutral-800 shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.heroImage || "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                      ₹{service.startingPrice.toLocaleString("en-IN")} onwards
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm font-light text-muted-foreground leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="w-full py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-amber-600 dark:hover:border-amber-500 text-center text-xs font-semibold uppercase tracking-wider text-foreground hover:text-amber-700 dark:hover:text-amber-400 transition-all block"
                    >
                      Enquire For {service.name}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PORTFOLIO SHOWCASE */}
      <section className="py-24 sm:py-32 bg-background border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-2">
              Our Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Real Weddings & Celebrations
            </h2>
            <p className="text-sm sm:text-base font-light text-muted-foreground">
              Browse through our curated collection of editorial wedding stories, ring ceremonies, and milestone birthdays captured across Gujarat.
            </p>
          </div>

          <HomePortfolio categories={categories} projects={projects} />
        </div>
      </section>

      {/* SECTION 5: WHY SHREE SHYAM STUDIO */}
      <section className="py-24 bg-neutral-900 text-neutral-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal variant="fadeUp">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-400 block mb-3">
                Why Families Trust Us
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-6">
                Premium Quality, Emotionally Grounded & Reliable.
              </h2>
              <p className="text-neutral-300 font-light text-base leading-relaxed mb-8">
                We understand that wedding photographs become family heirlooms. At Shree Shyam Studio, we merge state-of-the-art photography equipment with a gentle, unobtrusive storytelling approach.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Full Event Coverage</h4>
                    <p className="text-xs text-neutral-400 font-light">From morning Haldi preparations to late-night Varmala and Reception.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">High Resolution Master Color Grading</h4>
                    <p className="text-xs text-neutral-400 font-light">Custom color tones tailored for a rich, warm, photographic feel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Sanand & Gujarat Local Expertise</h4>
                    <p className="text-xs text-neutral-400 font-light">Located right in Sanand (101 Shubham Elite) for easy consultation and venue visits.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="scale" delay={0.2}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
                <Image
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop"
                  alt="Shree Shyam Studio Photography Process"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT TESTIMONIALS */}
      <section className="py-24 sm:py-32 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-2">
              Client Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground">
              Loved By Families Across Sanand
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <Reveal key={t.id} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-surface border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between h-full shadow-xs">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="font-serif italic text-base sm:text-lg text-foreground mb-8 leading-relaxed">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
                    {t.photo && (
                      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                        <Image src={t.photo} alt={t.clientName} fill className="object-cover" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{t.clientName}</h4>
                      <p className="text-xs text-muted-foreground font-light">
                        {t.eventType} • {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ SECTION */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-2">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-muted-foreground font-light">
              Everything you need to know about booking your shoot with Shree Shyam Studio.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 8: FINAL CONVERSION CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-amber-900 via-amber-800 to-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6">
            Ready to Capture Your Special Moments?
          </h2>
          <p className="text-amber-100 max-w-xl mx-auto font-light text-base mb-10 leading-relaxed">
            Get in touch with Shree Shyam Studio today to check date availability and customized package options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-neutral-950 hover:bg-amber-100 transition-all shadow-lg active:scale-95"
              data-cursor
            >
              Send Enquiry / Book Shoot
            </Link>
            <a
              href="tel:09724322046"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-950/50 hover:bg-amber-950/80 border border-amber-400/40 text-white transition-all flex items-center gap-2"
              data-cursor
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call 097243 22046</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
