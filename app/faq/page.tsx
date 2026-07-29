import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FAQ_DATA } from "@/data/content";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) | Shree Shyam Studio Sanand",
  description: "Find answers to common questions about wedding photography, booking process, package pricing, and album delivery timelines at Shree Shyam Studio.",
};

export default function FAQPage() {
  return (
    <div className="pt-12 pb-24">
      <section className="px-6 max-w-[1000px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Help & Clarifications
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Everything you need to know about our photography process, packages, booking procedures, and album deliverables.
        </p>
      </section>

      <section className="px-6 max-w-[900px] mx-auto flex flex-col gap-6">
        {FAQ_DATA.map((faq, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="bg-bg-secondary p-8 rounded-2xl border border-border-custom flex flex-col gap-3 shadow-xs">
              <div className="flex items-start gap-3">
                <HelpCircle size={20} className="text-accent shrink-0 mt-1" />
                <h2 className="font-serif text-2xl text-text-primary">{faq.question}</h2>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-16 px-6 max-w-[900px] mx-auto text-center">
        <div className="bg-bg-secondary border border-border-custom p-8 rounded-2xl flex flex-col items-center gap-4">
          <h3 className="font-serif text-2xl text-text-primary">Have Additional Questions?</h3>
          <p className="text-text-secondary text-xs sm:text-sm max-w-md">
            Our team is always happy to guide you on phone or in-person at our Sanand studio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-accent text-bg-surface text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:09724322046"
              className="px-6 py-3 rounded-full border border-border-custom bg-bg-surface text-text-primary text-xs uppercase tracking-widest font-semibold hover:border-accent transition-all"
            >
              Call 097243 22046
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
