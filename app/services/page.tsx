import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SERVICES_DATA } from "@/data/content";

export const metadata = {
  title: "Services & Pricing Starting Points | Shree Shyam Studio Sanand",
  description: "Explore our luxury photography services including Wedding Photography (₹25,000+), Engagement (₹12,000+), Birthday (₹10,000+), and Pre-Wedding shoots.",
};

export default function ServicesPage() {
  return (
    <div className="pt-12 pb-24">
      {/* Header */}
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Our Craft
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Photography Services
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Tailored photography and cinematic video packages designed to document your most important family milestones.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 max-w-[1200px] mx-auto flex flex-col gap-16">
        {SERVICES_DATA.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.1}>
            <div className="bg-bg-secondary border border-border-custom rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
              <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] border border-border-custom/80">
                <img
                  src={service.heroImage}
                  alt={service.name}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="font-serif text-3xl text-text-primary">{service.name}</h2>
                  <span className="bg-bg-surface border border-border-custom px-4 py-1.5 rounded-full text-xs font-semibold text-accent">
                    {service.startingPrice}
                  </span>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="py-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-text-primary block mb-2">
                    What&apos;s Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.inclusions.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border-custom flex items-center justify-between">
                  <span className="text-xs text-text-muted">
                    Ideal for: <strong className="text-text-primary font-medium">{service.idealFor}</strong>
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
