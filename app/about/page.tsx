import Link from "next/link";
import { ArrowRight, Camera, Award, MapPin, Heart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { STUDIO_INFO } from "@/data/content";

export const metadata = {
  title: "About Us | Shree Shyam Studio — Premium Photography Sanand",
  description: "Learn about Shree Shyam Studio, our photography philosophy, and how we preserve timeless wedding and event memories in Sanand, Gujarat.",
};

export default function AboutPage() {
  return (
    <div className="pt-12 pb-24">
      {/* 1. Header Banner */}
      <section className="px-6 max-w-[1200px] mx-auto text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-accent block mb-3">
          Our Brand Story
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-text-primary mb-6">
          Preserving Feelings, <br />
          <span className="italic font-light text-accent">Not Just Frames.</span>
        </h1>
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Shree Shyam Studio is a luxury wedding and event photography studio based in Sanand, Gujarat. We blend artistic storytelling with editorial sophistication.
        </p>
      </section>

      {/* 2. Brand Story & Visual */}
      <section className="px-6 max-w-[1200px] mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal variant="fadeIn">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-border-custom shadow-md">
            <img
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop"
              alt="Shree Shyam Studio Photography Team at Work"
              className="object-cover w-full h-full"
            />
          </div>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.2}>
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-primary leading-tight">
              Crafting Timeless Albums for Sanand Families
            </h2>
            <p className="text-text-secondary text-base leading-relaxed">
              Every family celebration in Gujarat is rooted in deep tradition, joyous gathering, and emotional connection. Our studio was founded with a single mission: to create photographs that feel like a cherished family heritage.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              We approach each event with quiet observation—allowing natural moments, spontaneous laughter, and tender tears during Vidai to unfold naturally while capturing them with state-of-the-art camera technology and custom color grading.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 3. Core Philosophy Grid */}
      <section className="py-20 px-6 bg-bg-secondary border-y border-border-custom">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-2">
              Our Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary">
              Photography Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-bg-primary p-8 rounded-2xl border border-border-custom flex flex-col gap-4 h-full">
                <Camera className="text-accent" size={32} />
                <h3 className="font-serif text-2xl text-text-primary">Candid Storytelling</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We capture unscripted emotion—the proud tear in a father&apos;s eye, the secret glance between newlyweds, and uninhibited dance moves.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-bg-primary p-8 rounded-2xl border border-border-custom flex flex-col gap-4 h-full">
                <Heart className="text-accent" size={32} />
                <h3 className="font-serif text-2xl text-text-primary">Cultural Respect</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Having documented hundreds of traditional Gujarati rituals, we know exactly when key religious moments occur so no ritual is ever missed.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-bg-primary p-8 rounded-2xl border border-border-custom flex flex-col gap-4 h-full">
                <Award className="text-accent" size={32} />
                <h3 className="font-serif text-2xl text-text-primary">Editorial Polish</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Every photograph undergoes meticulous hand color-grading and professional retouching to ensure your photo album looks like a luxury magazine.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Studio Location & CTA */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto text-center">
        <Reveal variant="fadeUp">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-semibold mb-4">
            <MapPin size={16} />
            <span>Sanand, Gujarat Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-6">
            Visit Our Studio in Sanand
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Located conveniently at 101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand. Drop by to view sample print albums and plan your event shoot.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-accent text-bg-surface text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
          >
            <span>Book a Studio Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
