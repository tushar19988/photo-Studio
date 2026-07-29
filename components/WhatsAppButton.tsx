"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "919724322046";
  const message = encodeURIComponent(
    "Hello Shree Shyam Studio, I would like to enquire about photography services."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <MessageCircle size={22} className="fill-current stroke-none" />
      <span className="hidden sm:inline-block text-xs font-semibold tracking-wider uppercase pr-1">
        Enquire on WhatsApp
      </span>
    </a>
  );
}
