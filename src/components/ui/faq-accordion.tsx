"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "How far in advance should we book Shree Shyam Studio for a wedding?",
    answer: "We recommend booking 3 to 6 months in advance for peak wedding seasons in Gujarat (October through March) to ensure date availability.",
  },
  {
    question: "What is your starting package price for Wedding Photography?",
    answer: "Our Wedding Photography packages start at ₹25,000 onwards for single-day coverage, candid portraits, edited high-resolution albums, and digital galleries.",
  },
  {
    question: "Do you offer Birthday and Engagement photography in Sanand & Ahmedabad?",
    answer: "Yes! Birthday photography packages start at ₹10,000 onwards and Engagement packages start at ₹12,000 onwards. We serve Sanand, Ahmedabad, and surrounding Gujarat regions.",
  },
  {
    question: "How long does it take to deliver final edited photographs and albums?",
    answer: "Digital preview highlights are delivered within 5–7 days. Complete high-resolution edited photo albums and print layouts are delivered within 3 to 4 weeks.",
  },
  {
    question: "What is your booking and payment process?",
    answer: "We require a 30% advance deposit to secure your event date. The remaining balance is payable upon completion of raw shoot and photo delivery.",
  },
];

export function FAQAccordion({ items = defaultFaqs }: { items?: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="border border-neutral-300/80 dark:border-neutral-800 rounded-xl overflow-hidden bg-surface transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-medium text-foreground hover:text-amber-700 dark:hover:text-amber-400 transition-colors focus:outline-none"
              data-cursor
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed border-t border-neutral-200/50 dark:border-neutral-800/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
