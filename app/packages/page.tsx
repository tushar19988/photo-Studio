import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SERVICES_DATA } from "@/data/content";

export const metadata = {
  title: "Packages & Pricing Starting Points | Shree Shyam Studio Sanand",
  description: "View transparent photography package starting prices for Weddings (₹25,000+), Engagements (₹12,000+), Birthdays (₹10,000+), and Pre-Weddings in Sanand.",
};

export default function PackagesPage() {
  return (
    <div className="pt-12 pb-24">
      {/* Header */}
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Transparent Investments
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          Photography Packages
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Clear, flexible starting pricing for your special events. Custom packages tailored for multi-day weddings and destinations are also available upon consultation.
        </p>
      </section>

      {/* Package Cards Grid */}
      <section className="px-6 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.15}>
            <div className="bg-bg-secondary rounded-2xl p-8 border border-border-custom flex flex-col justify-between h-full hover:border-accent/60 transition-all duration-300 shadow-xs">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-accent block mb-2">
                  Starting Package
                </span>
                <h2 className="font-serif text-3xl text-text-primary mb-4">{service.name}</h2>
                <div className="mb-6">
                  <span className="text-xs text-text-muted uppercase tracking-wider block">Starting from</span>
                  <span className="font-serif text-3xl font-normal text-text-primary">{service.startingPrice}</span>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed mb-6 border-b border-border-custom/60 pb-6">
                  {service.shortDescription}
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase tracking-wider font-semibold text-text-primary block mb-2">
                    Package Coverage Includes:
                  </span>
                  {service.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border-custom">
                <Link
                  href={`/contact?package=${encodeURIComponent(service.name)}`}
                  className="w-full text-center py-3.5 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-widest hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
