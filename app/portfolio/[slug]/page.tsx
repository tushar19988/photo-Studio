import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO_DATA } from "@/data/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-12 pb-24">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-6 mb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-text-muted hover:text-accent transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Portfolio Gallery</span>
        </Link>
      </div>

      {/* Project Header */}
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-3">
          {project.category} Story
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-text-primary font-normal mb-6">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent" />
            <span>{project.location}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-accent" />
            <span>{project.date}</span>
          </span>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 max-w-[1440px] mx-auto mb-16">
        <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-border-custom shadow-md">
          <img
            src={project.coverImage}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* Story Description */}
      <section className="px-6 max-w-[800px] mx-auto text-center mb-20">
        <h2 className="font-serif text-3xl text-text-primary mb-4">The Celebration</h2>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Image Gallery Sequence */}
      <section className="px-6 max-w-[1440px] mx-auto mb-24 flex flex-col gap-8">
        {project.images.map((img, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-border-custom shadow-xs">
              <img
                src={img}
                alt={`${project.title} gallery photo ${idx + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          </Reveal>
        ))}
      </section>

      {/* Book a Shoot CTA */}
      <section className="px-6 max-w-[1200px] mx-auto text-center">
        <div className="bg-bg-secondary border border-border-custom rounded-2xl p-10 flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary">
            Inspired by This Story?
          </h2>
          <p className="text-text-secondary text-base max-w-lg">
            Let Shree Shyam Studio capture your upcoming wedding or celebration with the same elegance and editorial craftsmanship.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-accent text-bg-surface text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
          >
            <span>Book Your Shoot Date</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
