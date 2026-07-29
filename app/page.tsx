import Link from "next/link";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SERVICES_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA } from "@/data/content";

export default function Home() {
  const featuredServices = SERVICES_DATA.slice(0, 3);
  const featuredPortfolio = PORTFOLIO_DATA.slice(0, 4);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Editorial Statement Section (Section 14) */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto text-center border-b border-border-custom">
        <Reveal variant="fadeUp">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent mb-4 block">
            Editorial Philosophy
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-primary font-normal leading-tight max-w-4xl mx-auto">
            YOUR MOMENTS. <br className="hidden sm:block" />
            <span className="italic font-light text-accent">OUR STORYTELLING.</span>
          </h2>
          <p className="mt-8 font-sans text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every celebration has a distinct feeling. We preserve the genuine laughter, raw emotions, intricate details, and beloved people that make your story uniquely yours.
          </p>
        </Reveal>
      </section>

      {/* 3. Featured Services Section (Section 15) */}
      <section className="py-24 px-6 max-w-[1440px] mx-auto">
        <div className="max-w-[1200px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-2">
              Tailored Photography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary">
              Featured Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-accent hover:underline"
          >
            <span>Explore All Services</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {featuredServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.15}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-bg-secondary rounded-2xl overflow-hidden border border-border-custom hover:border-accent/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 bg-bg-surface/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-accent">
                    {service.startingPrice}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl text-text-primary group-hover:text-accent transition-colors mb-3">
                      {service.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border-custom/60 flex items-center justify-between text-xs font-semibold text-accent">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Featured Portfolio Showcase Section (Section 16) */}
      <section className="py-24 px-6 bg-bg-secondary border-y border-border-custom">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary mb-4">
              Featured Stories
            </h2>
            <p className="text-text-secondary text-base max-w-xl mx-auto">
              A curated collection of wedding celebrations, engagement ceremonies, and milestones captured across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPortfolio.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.15}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-[4/3] border border-border-custom"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end text-white">
                    <span className="text-xs uppercase tracking-widest text-accent font-semibold mb-1">
                      {project.category} • {project.location}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border-custom bg-bg-surface text-text-primary text-xs uppercase tracking-widest font-semibold hover:border-accent hover:text-accent transition-all"
            >
              <span>Explore Complete Portfolio</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials Section (Section 21) */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-2">
            Client Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary">
            Trusted by Families
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.15}>
              <div className="bg-bg-secondary p-8 rounded-2xl border border-border-custom flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-1 text-accent mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="font-serif italic text-lg text-text-primary mb-6 leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-border-custom/60">
                  <div className="font-semibold text-sm text-text-primary">{item.name}</div>
                  <div className="text-xs text-text-muted mt-0.5">{item.eventType} • {item.location}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Closing Call-to-Action Section (Section 57) */}
      <section className="py-24 px-6 bg-bg-secondary border-t border-border-custom text-center">
        <div className="max-w-[800px] mx-auto">
          <Reveal variant="fadeUp">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-3">
              Let&apos;s Connect
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-text-primary font-normal mb-6">
              Start Your Story.
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              We&apos;d love to be part of your upcoming wedding or special event in Sanand or anywhere in Gujarat.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-full bg-accent text-bg-surface text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Check Availability & Pricing</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:09724322046"
                className="px-8 py-4 rounded-full border border-border-custom bg-bg-surface text-text-primary text-xs uppercase tracking-widest font-semibold hover:border-accent transition-all"
              >
                Call: 097243 22046
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
