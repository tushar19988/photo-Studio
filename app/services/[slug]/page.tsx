import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft, Phone, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SERVICES_DATA, FAQ_DATA } from "@/data/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-12 pb-24">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-6 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="px-6 max-w-[1200px] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent">
              Service Details
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-primary font-normal leading-tight">
              {service.name}
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="bg-bg-secondary border border-border-custom px-5 py-2.5 rounded-full text-sm font-semibold text-accent">
                Starting from {service.startingPrice}
              </span>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-accent text-bg-surface text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                <span>Book This Service</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] border border-border-custom shadow-md">
            <img
              src={service.heroImage}
              alt={service.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Inclusions & Features */}
      <section className="py-16 px-6 bg-bg-secondary border-y border-border-custom">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-3xl text-text-primary mb-8 text-center">
            What is Included in {service.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {service.inclusions.map((inclusion, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-bg-primary p-6 rounded-xl border border-border-custom flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-text-primary leading-snug">
                    {inclusion}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6">
          {FAQ_DATA.slice(0, 4).map((faq, idx) => (
            <div key={idx} className="bg-bg-secondary p-6 rounded-xl border border-border-custom">
              <h3 className="font-serif text-xl text-text-primary mb-2">{faq.question}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="px-6 max-w-[1200px] mx-auto text-center pt-8">
        <div className="bg-bg-secondary border border-border-custom rounded-2xl p-10 flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary">
            Ready to Plan Your {service.name}?
          </h2>
          <p className="text-text-secondary text-base max-w-lg">
            Contact Shree Shyam Studio today to discuss date availability, custom package options, and pricing details.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-bg-surface text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <span>Send Enquiry</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:09724322046"
              className="px-8 py-3.5 rounded-full border border-border-custom bg-bg-surface text-text-primary text-xs uppercase tracking-widest font-semibold hover:border-accent transition-all"
            >
              Call 097243 22046
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
