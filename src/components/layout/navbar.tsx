"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Camera, ArrowUpRight } from "lucide-react";
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomePage = pathname === "/";
  const isHomeHero = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100]">
        <div className="mx-auto w-full max-w-[1500px] px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative flex min-h-[58px] sm:min-h-[62px] items-center justify-between overflow-hidden rounded-[22px] sm:rounded-[26px] px-3 sm:px-4 lg:px-5 py-2 transition-all duration-300 backdrop-blur-2xl backdrop-saturate-150 border ring-1 ring-inset ${
              isHomeHero
                ? "bg-black/40 border-white/20 ring-white/10 text-white shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
                : "bg-white/85 dark:bg-[#151513]/85 border-black/10 dark:border-white/10 ring-black/5 dark:ring-white/5 shadow-[0_10px_45px_rgba(0,0,0,0.10)] dark:shadow-[0_10px_45px_rgba(0,0,0,0.30)]"
            }`}
          >
            {/* Top glass specular reflection */}
            <div className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20" />

            {/* Brand Logo */}
            <Link
              href="/"
              data-cursor
              className="relative z-10 flex items-center gap-2.5"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
                  isHomeHero
                    ? "border-white/30 bg-white/15 text-amber-300"
                    : "border-black/10 bg-black/[0.04] text-amber-700 dark:border-white/10 dark:bg-white/[0.055] dark:text-amber-400"
                }`}
              >
                <Camera className="h-[17px] w-[17px]" strokeWidth={1.8} />
              </motion.div>
              <div className="block">
                <span
                  className={`block font-serif text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isHomeHero
                      ? "text-white"
                      : "text-neutral-900 dark:text-white"
                  }`}
                >
                  Shree Shyam
                </span>
                <span
                  className={`block text-[8px] font-medium uppercase tracking-[0.32em] transition-colors duration-300 ${
                    isHomeHero
                      ? "text-amber-200/80"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="relative z-10 hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-cursor
                    className="group relative px-3.5 py-2"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className={`absolute inset-0 rounded-full border backdrop-blur-md ${
                          isHomeHero
                            ? "border-white/20 bg-white/15"
                            : "border-black/10 bg-black/[0.06] dark:border-white/10 dark:bg-white/10"
                        }`}
                      />
                    )}
                    <span
                      className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                        isActive
                          ? isHomeHero
                            ? "text-amber-300"
                            : "text-amber-700 dark:text-amber-400"
                          : isHomeHero
                          ? "text-white/90 group-hover:text-white"
                          : "text-neutral-800 group-hover:text-neutral-950 dark:text-neutral-200 dark:group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="relative z-10 hidden lg:flex items-center">
              <Link
                href="/contact"
                data-cursor
                data-cursor-text="BOOK"
                className={`group relative overflow-hidden rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 shadow-md active:scale-95 ${
                  isHomeHero
                    ? "bg-amber-500 hover:bg-amber-400 text-neutral-950 shadow-amber-500/20"
                    : "bg-amber-700 hover:bg-amber-800 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950"
                }`}
              >
                <span className="absolute inset-y-0 -left-[100%] w-[60%] skew-x-[-20deg] bg-white/25 blur-md transition-all duration-700 group-hover:left-[130%]" />
                <span className="relative z-10">Book a Shoot</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="relative z-10 flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={
                  mobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
                className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 active:scale-90 ${
                  isHomeHero
                    ? "border-white/30 bg-white/15 text-white"
                    : "border-black/10 bg-black/[0.04] text-neutral-900 dark:border-white/10 dark:bg-white/[0.055] dark:text-white"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    >
                      <X className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    >
                      <Menu className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] lg:hidden bg-neutral-950/80 backdrop-blur-3xl"
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -15, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-[78px] bottom-3 flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/15 bg-neutral-950/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-3xl text-white"
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-serif text-xl font-bold text-white">
                      Shree Shyam
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-amber-300">
                      Studio
                    </p>
                  </div>
                  <div className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Navigation
                  </div>
                </div>

                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" &&
                        pathname?.startsWith(`${link.href}/`));

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.04 + index * 0.04,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between border-b border-white/10 py-3.5"
                        >
                          <span
                            className={`font-serif text-[24px] leading-none tracking-wide transition-colors duration-300 ${
                              isActive
                                ? "text-amber-300 font-bold"
                                : "text-white/85 group-hover:text-white"
                            }`}
                          >
                            {link.name}
                          </span>
                          <ArrowUpRight
                            className={`h-4 w-4 transition-all duration-300 ${
                              isActive
                                ? "text-amber-300 opacity-100"
                                : "text-white/40 opacity-50 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-amber-500 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-[0.15em] text-neutral-950 shadow-xl shadow-amber-500/20 transition-all hover:bg-amber-400 active:scale-[0.98]"
                >
                  <span className="relative z-10">Book a Shoot</span>
                </Link>
                <div className="mt-3.5 flex items-center justify-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-amber-300" />
                  <a
                    href="tel:09724322046"
                    className="text-xs tracking-wide text-white/70 transition-colors hover:text-white"
                  >
                    097243 22046
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}