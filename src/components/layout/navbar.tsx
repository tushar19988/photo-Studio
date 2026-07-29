"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Camera } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Packages", href: "/packages" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  // Only the top of the home page sits over a dark hero image
  const isHomeHero = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Hide main navbar if on admin panel routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F5F1]/90 dark:bg-[#0C0C0B]/90 backdrop-blur-xl border-b border-neutral-300/60 dark:border-neutral-800/80 py-3.5 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 tracking-widest font-serif text-lg sm:text-xl font-bold uppercase transition-opacity"
          data-cursor
        >
          <Camera
            className={`w-5 h-5 group-hover:rotate-12 transition-transform duration-300 ${
              isHomeHero
                ? "text-amber-400"
                : "text-amber-700 dark:text-amber-400"
            }`}
          />
          <span
            className={`font-serif font-bold tracking-wider ${
              isHomeHero
                ? "text-white"
                : "text-neutral-900 dark:text-white"
            }`}
          >
            Shree Shyam Studio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            let linkColor = "";
            if (isHomeHero) {
              linkColor = isActive
                ? "text-amber-400 font-bold"
                : "text-white/90 hover:text-amber-300 font-semibold";
            } else {
              linkColor = isActive
                ? "text-amber-700 dark:text-amber-400 font-bold"
                : "text-neutral-800 dark:text-neutral-200 hover:text-amber-700 dark:hover:text-amber-400 font-semibold";
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors ${linkColor}`}
                data-cursor
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                      isHomeHero ? "bg-amber-400" : "bg-amber-700 dark:bg-amber-400"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95 ${
              isHomeHero
                ? "bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-amber-500/20"
                : "bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950"
            }`}
            data-cursor
            data-cursor-text="BOOK"
          >
            Book a Shoot
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full border focus:outline-none transition-colors ${
              isHomeHero
                ? "border-white/40 text-white"
                : "border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100"
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[60px] bg-neutral-950/98 backdrop-blur-xl z-50 flex flex-col justify-between p-8 text-neutral-100 lg:hidden overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <p className="text-[10px] tracking-widest uppercase text-amber-400 font-medium border-b border-neutral-800 pb-2">
                Navigation Menu
              </p>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-2xl font-serif tracking-wide block ${
                        pathname === link.href ? "text-amber-400 font-bold" : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-8 border-t border-neutral-800">
              <Link
                href="/contact"
                className="w-full block text-center py-3.5 rounded-full font-semibold uppercase tracking-wider bg-amber-500 text-neutral-950 text-sm hover:bg-amber-400 transition-all"
              >
                Book a Shoot Now
              </Link>
              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="tel:09724322046" className="hover:underline">
                  097243 22046
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
