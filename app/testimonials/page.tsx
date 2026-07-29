import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS_DATA } from "@/data/content";

export const metadata = {
  title: "Client Testimonials & Reviews | Shree Shyam Studio Sanand",
  description: "Read real client reviews and testimonials from families who trusted Shree Shyam Studio for their weddings, engagements, and birthday celebrations in Gujarat.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-12 pb-24">
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Client Feedback
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Client Testimonials
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Read what families across Sanand and Gujarat say about their experience working with Shree Shyam Studio.
        </p>
      </section>

      <section className="px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS_DATA.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.15}>
            <div className="bg-bg-secondary p-8 rounded-2xl border border-border-custom flex flex-col justify-between h-full relative">
              <Quote className="text-accent/20 absolute top-6 right-6" size={40} />
              <div>
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-lg text-text-primary mb-8 leading-relaxed relative z-10">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-border-custom">
                <div className="font-semibold text-sm text-text-primary">{item.name}</div>
                <div className="text-xs text-text-muted mt-0.5">{item.eventType} • {item.location}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
