"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const pathname = usePathname();

  // Hide footer on admin routes
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-neutral-900 dark:bg-[#070707] text-neutral-300 pt-16 pb-12 border-t border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-neutral-800/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5 font-serif text-xl font-bold uppercase tracking-widest text-white">
              <Camera className="w-5 h-5 text-amber-500" />
              <span>Shree Shyam Studio</span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Premium wedding & event photography studio based in Sanand, Gujarat. Crafting timeless visual stories and emotional memories.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-amber-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-amber-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.808V8z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-amber-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Photography Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-amber-400 mb-5">
              Photography Services
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li>
                <Link href="/services#wedding" className="hover:text-white transition-colors">
                  Wedding Photography (₹25k+)
                </Link>
              </li>
              <li>
                <Link href="/services#birthday" className="hover:text-white transition-colors">
                  Birthday Photography (₹10k+)
                </Link>
              </li>
              <li>
                <Link href="/services#engagement" className="hover:text-white transition-colors">
                  Engagement Shoot (₹12k+)
                </Link>
              </li>
              <li>
                <Link href="/services#pre-wedding" className="hover:text-white transition-colors">
                  Pre-Wedding Concept Shoot
                </Link>
              </li>
              <li>
                <Link href="/services#events" className="hover:text-white transition-colors">
                  Corporate & Event Coverage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-amber-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400 font-light">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-white transition-colors">
                  Packages & Pricing
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-white transition-colors">
                  Journal & Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a Shoot / Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact & Studio Location */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-amber-400 mb-5">
              Studio Location
            </h3>
            <div className="space-y-4 text-sm text-neutral-400 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>
                  101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:09724322046" className="hover:text-white transition-colors font-medium">
                  097243 22046
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:contact@shreeshyamstudio.com" className="hover:text-white transition-colors">
                  contact@shreeshyamstudio.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <p>© {new Date().getFullYear()} Shree Shyam Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/admin/login" className="hover:text-neutral-300 transition-colors opacity-60">
              Admin CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
