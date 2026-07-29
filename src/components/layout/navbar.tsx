"use client";

import React, { useEffect, useState } from "react";
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
      {/* ============================================================ DESKTOP / MAIN NAVBAR ============================================================ */}
      <header className="fixed inset-x-0 top-0 z-[100] pointer-events-none">
        <div className="mx-auto w-full max-w-[1500px] px-3 sm:px-5 lg:px-8 pt-3 sm:pt-4 lg:pt-5">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto relative flex items-center justify-between rounded-[22px] sm:rounded-[26px] px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 transition-all duration-500 ease-out ${isHomeHero
              ? "bg-white/[0.08] dark:bg-black/[0.10] border-white/[0.16] dark:border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              : "bg-white/[0.68] dark:bg-[#151513]/[0.72] border-black/[0.07] dark:border-white/[0.09] shadow-[0_10px_45px_rgba(0,0,0,0.10)] dark:shadow-[0_10px_45px_rgba(0,0,0,0.30)]"
              } backdrop-blur-2xl backdrop-saturate-150 border ring-1 ring-inset ring-white/[0.10] dark:ring-white/[0.04]`}
          >
            {/* ====================================================== LIQUID GLASS HIGHLIGHT ====================================================== */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px] sm:rounded-[26px]">
              {/* Top glass reflection */}
              <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/20" />
              {/* Soft ambient glow */}
              <div className="absolute -top-16 left-[18%] h-28 w-40 rounded-full bg-white/20 blur-3xl dark:bg-white/[0.04]" />
              {/* Right ambient glow */}
              <div className="absolute -right-10 top-0 h-20 w-32 rounded-full bg-amber-400/[0.07] blur-3xl" />
            </div>

            {/* ====================================================== LOGO ====================================================== */}
            <Link
              href="/"
              data-cursor
              className="group relative z-10 flex shrink-0 items-center gap-2.5"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-500 ${isHomeHero
                  ? "border-white/20 bg-white/10 text-amber-300"
                  : "border-black/10 bg-black/[0.04] text-amber-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-amber-400"
                  }`}
              >
                <Camera className="h-[17px] w-[17px]" strokeWidth={1.8} />
              </motion.div>
              <div className="block">
                <span className="block font-serif text-[13px] font-semibold uppercase tracking-[0.12em]">
                  Shree Shyam
                </span>

                <span className="block text-[7px] uppercase tracking-[0.3em] opacity-50">
                  Studio
                </span>
              </div>
            </Link>

            {/* ====================================================== DESKTOP NAVIGATION ====================================================== */}
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
                    className="group relative px-3 py-2"
                  >
                    {/* Active liquid pill */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className={`absolute inset-0 rounded-full border backdrop-blur-md ${isHomeHero
                          ? "border-white/10 bg-white/[0.10]"
                          : "border-black/[0.06] bg-black/[0.045] dark:border-white/[0.08] dark:bg-white/[0.06]"
                          }`}
                      />
                    )}
                    <span
                      className={`relative z-10 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${isActive
                        ? isHomeHero
                          ? "text-amber-300"
                          : "text-amber-700 dark:text-amber-400"
                        : isHomeHero
                          ? "text-white/75 group-hover:text-white"
                          : "text-neutral-700 group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white"
                        }`}
                    >
                      {link.name}
                    </span>
                    {/* Hover glow */}
                    <span
                      className="pointer-events-none absolute inset-x-3 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ====================================================== DESKTOP CTA ====================================================== */}
            <div className="relative z-10 hidden lg:flex items-center">
              <Link
                href="/contact"
                data-cursor
                data-cursor-text="BOOK"
                className="group relative overflow-hidden rounded-full border border-amber-400/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-amber-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/20 bg-amber-500 hover:bg-amber-400"
              >
                {/* Button shine */}
                <span className="absolute inset-y-0 -left-[100%] w-[60%] skew-x-[-20deg] bg-white/25 blur-md transition-all duration-700 group-hover:left-[130%]" />
                <span className="relative z-10 text-neutral-950">
                  Book a Shoot
                </span>
              </Link>
            </div>

            {/* ====================================================== MOBILE MENU BUTTON ====================================================== */}
            <div className="relative z-10 flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={
                  mobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
                className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 active:scale-90 ${isHomeHero
                  ? "border-white/20 bg-white/[0.08] text-white"
                  : "border-black/10 bg-black/[0.04] text-neutral-900 dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
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
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ============================================================ MOBILE LIQUID GLASS MENU ============================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] lg:hidden bg-neutral-950/75 backdrop-blur-3xl"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />

            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-3 top-[88px] bottom-3 flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/[0.12] bg-white/[0.07] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-3xl"
            >
              {/* Glass reflection */}
              <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="relative z-10">
                {/* <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-xl text-white">Shree Shyam</p>
                    <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/40">
                      Studio
                    </p>
                  </div>
                  <div className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Navigation
                  </div>
                </div> */}

                <nav className="flex flex-col">
                  {navLinks.map((link, index) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" && pathname?.startsWith(`${link.href}/`));
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.06 + index * 0.055,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between border-b border-white/[0.07] py-4"
                        >
                          <span
                            className={`font-serif text-[28px] leading-none tracking-wide transition-colors duration-300 ${isActive
                              ? "text-amber-300"
                              : "text-white/75 group-hover:text-white"
                              }`}
                          >
                            {link.name}
                          </span>
                          <span
                            className={`text-xs transition-all duration-300 ${isActive
                              ? "translate-x-0 text-amber-300 opacity-100"
                              : "-translate-x-2 text-white/30 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                              }`}
                          >
                            ↗
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="relative z-10"
              >
                <Link
                  href="/contact"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-amber-400 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.15em] text-neutral-950 shadow-xl shadow-amber-500/10 transition-all hover:bg-amber-300 active:scale-[0.98]"
                >
                  <span className="absolute inset-y-0 -left-[100%] w-[50%] skew-x-[-20deg] bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]" />
                  <span className="relative z-10">Book a Shoot</span>
                </Link>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-amber-300" />
                  <a
                    href="tel:09724322046"
                    className="text-xs tracking-wide text-white/50 transition-colors hover:text-white"
                  >
                    097243 22046
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}