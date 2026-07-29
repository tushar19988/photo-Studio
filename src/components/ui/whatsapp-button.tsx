"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

export function WhatsAppButton() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const phoneNumber = "919724322046";
  const defaultText = encodeURIComponent("Hello Shree Shyam Studio, I would like to enquire about photography services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 group hover:scale-105 active:scale-95"
      aria-label="Chat on WhatsApp"
      data-cursor
      data-cursor-text="WA"
    >
      <MessageCircle className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform duration-300" />
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
        WhatsApp Enquiry
      </span>
    </a>
  );
}
