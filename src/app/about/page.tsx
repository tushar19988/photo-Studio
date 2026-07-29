import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "About Studio — Shree Shyam Studio Sanand",
  description: "Learn about Shree Shyam Studio, a premier wedding and event photography studio located in Sanand, Gujarat.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* HERO */}
      <section className="py-16 sm:py-24 bg-background border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Reveal variant="fadeDown">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
              About Shree Shyam Studio
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Preserving Indian Tradition, Emotion & Visual Excellence.
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-3xl mx-auto text-base sm:text-xl font-light text-muted-foreground leading-relaxed">
              Based in the heart of Sanand, Gujarat, Shree Shyam Studio is built on the belief that photography should not just record an event, but evoke the exact feelings, laughter, and sacrosanct rituals of your special day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY & PHILOSOPHY */}
      <section className="py-24 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="fadeUp">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 dark:border-neutral-800">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                  alt="Studio Photography Story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
                Our Photography Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-6">
                Unobtrusive Storytelling Meets Editorial Aesthetics.
              </h2>
              <div className="space-y-4 text-muted-foreground font-light text-base leading-relaxed">
                <p>
                  At Shree Shyam Studio, we combine candid emotional portraiture with editorial composition. During sacred rituals like the Mandap, Varmala, and Phere, we remain discreet to capture authentic moments naturally.
                </p>
                <p>
                  We treat every client with personalized care. Whether it is an intimate ring ceremony or a grand 2-day wedding celebration, our team ensures every single guest, detail, and emotion is immortalized in vibrant high resolution.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-200/60 dark:border-neutral-800 mt-8">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-amber-700 dark:text-amber-400">100%</h4>
                  <p className="text-xs text-muted-foreground font-light mt-1">Dedicated Client Focus</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-amber-700 dark:text-amber-400">Sanand</h4>
                  <p className="text-xs text-muted-foreground font-light mt-1">101 Shubham Elite Studio</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-2">
              How We Work
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Our 4-Step Photography Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-surface border border-neutral-200/80 dark:border-neutral-800 h-full">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-serif font-bold text-lg flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Discovery & Planning</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  We consult at our Sanand studio or via call to understand your event schedule, venue details, and aesthetic preferences.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl bg-surface border border-neutral-200/80 dark:border-neutral-800 h-full">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-serif font-bold text-lg flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Concept & Pre-Shoot</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  For couples, we coordinate outfit guidance, location selection, and mood boards for pre-wedding portraits.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-6 rounded-2xl bg-surface border border-neutral-200/80 dark:border-neutral-800 h-full">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-serif font-bold text-lg flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Ceremony Day Shoot</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Our professional team documents every key moment, candid interaction, and ritual with high-end camera setups.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-6 rounded-2xl bg-surface border border-neutral-200/80 dark:border-neutral-800 h-full">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-serif font-bold text-lg flex items-center justify-center mb-4">
                  04
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Editing & Album Delivery</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Master color grading, print layouts, and digital gallery delivery to preserve your memories forever.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STUDIO LOCATION INFO */}
      <section className="py-20 bg-[#EFECE6] dark:bg-[#0A0A0A] text-neutral-900 dark:text-neutral-100 border-t border-neutral-300/80 dark:border-neutral-800/80 transition-colors">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <MapPin className="w-8 h-8 text-amber-700 dark:text-amber-400 mx-auto mb-4" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">Visit Us at Our Studio</h2>
          <p className="text-neutral-700 dark:text-neutral-300 font-light text-base max-w-xl mx-auto mb-6">
            101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="tel:09724322046"
              className="px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Studio: 097243 22046
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-neutral-400 dark:border-neutral-700 hover:border-amber-600 text-neutral-800 dark:text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
