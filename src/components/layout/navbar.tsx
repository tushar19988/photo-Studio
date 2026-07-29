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

  const isHome = pathname === "/";
  const isHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
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
      {/* =========================================================
          NAVBAR
      ========================================================== */}

      <header className="fixed inset-x-0 top-0 z-[100]">
        <div className="mx-auto w-full max-w-[1500px] px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
          <motion.div
            initial={{
              opacity: 0,
              y: -18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              group relative

              flex
              min-h-[58px]
              items-center
              justify-between

              rounded-[22px]
              sm:min-h-[62px]
              sm:rounded-[25px]

              px-3
              sm:px-4
              lg:px-5

              border

              backdrop-blur-[28px]
              backdrop-saturate-[180%]

              transition-all
              duration-500

              ${isHero
                ? `
                    border-white/[0.16]
                    bg-white/[0.055]

                    shadow-[0_12px_50px_rgba(0,0,0,0.16)]
                    ring-1
                    ring-inset
                    ring-white/[0.08]

                    dark:border-white/[0.13]
                    dark:bg-black/[0.10]
                  `
                : `
                    border-black/[0.08]
                    bg-white/[0.62]

                    shadow-[0_14px_50px_rgba(0,0,0,0.10)]
                    ring-1
                    ring-inset
                    ring-white/[0.65]

                    dark:border-white/[0.10]
                    dark:bg-[#11110f]/[0.68]

                    dark:shadow-[0_18px_60px_rgba(0,0,0,0.38)]
                    dark:ring-white/[0.045]
                  `
              }
            `}
          >
            {/* =====================================================
                LIQUID GLASS SPECULAR LAYERS
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px] sm:rounded-[25px]">
              {/* Top glass reflection */}
              <div
                className={`
                  absolute
                  left-[8%]
                  right-[8%]
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white
                  to-transparent

                  ${isHero
                    ? "opacity-45"
                    : "opacity-70 dark:opacity-20"
                  }
                `}
              />

              {/* Large soft white reflection */}
              <div
                className="
                  absolute
                  -left-[15%]
                  -top-[120%]
                  h-[260%]
                  w-[45%]
                  rotate-[18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/[0.10]
                  to-transparent
                  blur-2xl
                  transition-transform
                  duration-[1400ms]
                  group-hover:translate-x-[230%]
                "
              />

              {/* Amber atmospheric reflection */}
              <div
                className="
                  absolute
                  -right-20
                  -top-16
                  h-40
                  w-48
                  rounded-full
                  bg-amber-400/[0.075]
                  blur-[60px]

                  dark:bg-amber-400/[0.085]
                "
              />

              {/* Bottom glass depth */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/3
                  bg-gradient-to-t
                  from-black/[0.025]
                  to-transparent
                  dark:from-black/[0.18]
                "
              />
            </div>

            {/* =====================================================
                BRAND
            ====================================================== */}

            <Link
              href="/"
              data-cursor
              className="relative z-10 flex min-w-0 items-center gap-2.5"
            >
              {/* Camera glass button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  ${isHero
                    ? `
                        border-white/[0.20]
                        bg-white/[0.08]
                        text-amber-300
                      `
                    : `
                        border-black/[0.08]
                        bg-black/[0.035]
                        text-amber-700

                        dark:border-white/[0.10]
                        dark:bg-white/[0.055]
                        dark:text-amber-400
                      `
                  }
                `}
              >
                <Camera
                  className="h-[17px] w-[17px]"
                  strokeWidth={1.8}
                />
              </motion.div>

              {/* Brand text */}
              <div className="min-w-0">
                <span
                  className={`
                    block
                    truncate
                    font-serif
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    sm:text-[15px]

                    ${isHero
                      ? "text-white"
                      : "text-neutral-950 dark:text-white"
                    }
                  `}
                >
                  Shree Shyam
                </span>

                <span
                  className={`
                    block
                    text-[7px]
                    font-medium
                    uppercase
                    tracking-[0.34em]

                    ${isHero
                      ? "text-white/45"
                      : "text-neutral-500 dark:text-neutral-400"
                    }
                  `}
                >
                  Studio
                </span>
              </div>
            </Link>

            {/* =====================================================
                DESKTOP NAV
            ====================================================== */}

            <nav className="relative z-10 hidden items-center lg:flex">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" &&
                    pathname?.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-cursor
                    className="group/link relative px-3 py-2.5"
                  >
                    {/* Active glass pill */}
                    {active && (
                      <motion.div
                        layoutId="active-liquid-pill"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                        className={`
                          absolute
                          inset-0
                          rounded-full
                          border
                          backdrop-blur-xl

                          ${isHero
                            ? `
                                border-white/[0.13]
                                bg-white/[0.10]
                                shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
                              `
                            : `
                                border-black/[0.06]
                                bg-black/[0.045]

                                dark:border-white/[0.08]
                                dark:bg-white/[0.055]

                                shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]
                                dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
                              `
                          }
                        `}
                      />
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        transition-colors
                        duration-300

                        ${active
                          ? isHero
                            ? "text-amber-300"
                            : "text-amber-700 dark:text-amber-400"
                          : isHero
                            ? "text-white/75 group-hover/link:text-white"
                            : "text-neutral-700 group-hover/link:text-neutral-950 dark:text-neutral-300 dark:group-hover/link:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* =====================================================
                DESKTOP CTA
            ====================================================== */}

            <Link
              href="/contact"
              data-cursor
              data-cursor-text="BOOK"
              className="
                group/cta
                relative
                z-10
                hidden
                overflow-hidden
                rounded-full
                border
                border-amber-400/30
                bg-amber-400
                px-5
                py-2.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-neutral-950
                shadow-[0_6px_25px_rgba(245,158,11,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-amber-300
                hover:shadow-[0_10px_35px_rgba(245,158,11,0.25)]
                lg:block
              "
            >
              <span
                className="
                  absolute
                  inset-y-0
                  -left-[100%]
                  w-[55%]
                  skew-x-[-20deg]
                  bg-white/30
                  blur-md
                  transition-all
                  duration-700
                  group-hover/cta:left-[130%]
                "
              />

              <span className="relative z-10">
                Book a Shoot
              </span>
            </Link>

            {/* =====================================================
                MOBILE BUTTON
            ====================================================== */}

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((previous) => !previous)
              }
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
              className={`
                relative
                z-10
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border

                backdrop-blur-xl

                transition-all
                duration-300
                active:scale-90

                lg:hidden

                ${isHero
                  ? `
                      border-white/[0.18]
                      bg-white/[0.08]
                      text-white
                    `
                  : `
                      border-black/[0.08]
                      bg-black/[0.035]
                      text-neutral-900

                      dark:border-white/[0.10]
                      dark:bg-white/[0.055]
                      dark:text-white
                    `
                }
              `}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                  >
                    <X className="h-[18px] w-[18px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                  >
                    <Menu className="h-[18px] w-[18px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </header>

      {/* ===========================================================
          MOBILE MENU
      ============================================================ */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[90]
              lg:hidden
              bg-black/[0.08]
              backdrop-blur-xl
              dark:bg-black/[0.58]
            "
          >
            {/* Ambient light */}
            <div
              className="
                pointer-events-none
                absolute
                -right-28
                top-10
                h-80
                w-80
                rounded-full
                bg-amber-400/[0.10]
                blur-[100px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                h-80
                w-80
                rounded-full
                bg-white/[0.08]
                blur-[100px]
                dark:bg-white/[0.025]
              "
            />

            {/* =====================================================
                MOBILE GLASS PANEL
            ====================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -18,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-x-3
                top-[78px]
                bottom-3

                flex
                min-h-0
                flex-col

                overflow-hidden

                rounded-[28px]

                border
                border-white/[0.20]

                bg-white/[0.13]

                shadow-[0_30px_100px_rgba(0,0,0,0.30)]

                backdrop-blur-[40px]
                backdrop-saturate-[180%]

                ring-1
                ring-inset
                ring-white/[0.12]

                dark:border-white/[0.12]
                dark:bg-[#141412]/[0.58]
                dark:shadow-[0_30px_100px_rgba(0,0,0,0.60)]
                dark:ring-white/[0.045]
              "
            >
              {/* Glass highlights */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
                <div
                  className="
                    absolute
                    left-[10%]
                    right-[10%]
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white
                    to-transparent
                    opacity-70
                    dark:opacity-25
                  "
                />

                <div
                  className="
                    absolute
                    -right-24
                    -top-20
                    h-60
                    w-60
                    rounded-full
                    bg-amber-400/[0.10]
                    blur-[80px]
                  "
                />

                <div
                  className="
                    absolute
                    -left-20
                    bottom-20
                    h-48
                    w-48
                    rounded-full
                    bg-white/[0.08]
                    blur-[70px]
                    dark:bg-white/[0.025]
                  "
                />
              </div>

              {/* ===================================================
                  SCROLLABLE LINKS
              ==================================================== */}

              <div
                className="
                  relative
                  z-10
                  min-h-0
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  px-6
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >
                <nav>
                  {navLinks.map((link, index) => {
                    const active =
                      pathname === link.href ||
                      (link.href !== "/" &&
                        pathname?.startsWith(
                          `${link.href}/`
                        ));

                    return (
                      <motion.div
                        key={link.href}
                        initial={{
                          opacity: 0,
                          x: -16,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.05 + index * 0.045,
                          duration: 0.35,
                        }}
                      >
                        <Link
                          href={link.href}
                          className="
                            group
                            flex
                            min-h-[58px]
                            items-center
                            justify-between
                            border-b
                            border-black/[0.08]
                            dark:border-white/[0.075]
                          "
                        >
                          <span
                            className={`
                              font-serif
                              text-[25px]
                              leading-none
                              transition-colors
                              duration-300

                              ${active
                                ? "text-amber-600 dark:text-amber-300"
                                : "text-neutral-700 group-hover:text-neutral-950 dark:text-white/75 dark:group-hover:text-white"
                              }
                            `}
                          >
                            {link.name}
                          </span>

                          <ArrowUpRight
                            className={`
                              h-[17px]
                              w-[17px]
                              transition-all
                              duration-300

                              ${active
                                ? "translate-x-0 text-amber-500 opacity-100"
                                : "-translate-x-2 text-neutral-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:text-white/40"
                              }
                            `}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* ===================================================
                  MOBILE CTA
              ==================================================== */}

              <div
                className="
                  relative
                  z-10
                  shrink-0
                  border-t
                  border-black/[0.07]
                  bg-white/[0.08]
                  px-5
                  pb-[calc(16px+env(safe-area-inset-bottom))]
                  pt-4
                  dark:border-white/[0.07]
                  dark:bg-black/[0.10]
                "
              >
                <Link
                  href="/contact"
                  className="
                    group
                    relative
                    flex
                    h-[52px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-amber-300/30
                    bg-amber-400
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-neutral-950
                    shadow-[0_8px_30px_rgba(245,158,11,0.18)]
                    transition-all
                    active:scale-[0.98]
                  "
                >
                  <span
                    className="
                      absolute
                      inset-y-0
                      -left-[100%]
                      w-[55%]
                      skew-x-[-20deg]
                      bg-white/35
                      blur-md
                      transition-all
                      duration-700
                      group-hover:left-[130%]
                    "
                  />

                  <span className="relative z-10">
                    Book a Shoot
                  </span>
                </Link>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-amber-500 dark:text-amber-300" />

                  <a
                    href="tel:09724322046"
                    className="
                      text-[11px]
                      tracking-wide
                      text-neutral-500
                      transition-colors
                      hover:text-neutral-900
                      dark:text-white/45
                      dark:hover:text-white
                    "
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