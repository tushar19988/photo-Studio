"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ThreeBackground } from "./ThreeBackground";

export function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-16">
      {/* Three.js Subtle Ambient Background Particles */}
      <ThreeBackground />

      {/* Hero Background Image with Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop"
          alt="Shree Shyam Studio — Cinematic Wedding & Event Photography"
          className="object-cover w-full h-full opacity-40 dark:opacity-30 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-bg-primary/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center py-16">
        
        {/* Editorial Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-custom bg-bg-surface/60 backdrop-blur-xs mb-6 text-xs uppercase tracking-[0.25em] font-medium text-accent"
        >
          <span>Sanand, Gujarat</span>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span>Shree Shyam Studio</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-text-primary tracking-tight leading-[1.05] max-w-4xl"
        >
          Stories That <span className="italic font-light text-accent">Live Forever.</span>
        </motion.h1>

        {/* Category Tags */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-sans text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed tracking-wide"
        >
          Wedding • Engagement • Birthday • Pre-Wedding • Events
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="px-8 py-3.5 rounded-full border border-border-custom bg-bg-surface/80 hover:bg-bg-surface text-text-primary text-xs uppercase tracking-widest font-semibold transition-all hover:scale-105 shadow-xs"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-accent text-bg-surface text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-md flex items-center gap-2"
          >
            <span>Book a Shoot</span>
            <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
