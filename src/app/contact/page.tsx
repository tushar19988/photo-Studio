import React from "react";
import { Reveal } from "@/components/animations/reveal";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Contact & Book Shoot — Shree Shyam Studio Sanand",
  description: "Contact Shree Shyam Studio in Sanand, Gujarat. Call 097243 22046 or send an enquiry to check date availability for your wedding or event.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      {/* HERO */}
      <section className="py-16 sm:py-20 bg-background text-center border-b border-neutral-200/50 dark:border-neutral-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal variant="fadeDown">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700 dark:text-amber-400 block mb-3">
              Start Your Story
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-foreground mb-6">
              Get in Touch with Our Studio
            </h1>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.2}>
            <p className="max-w-2xl mx-auto text-base font-light text-muted-foreground leading-relaxed">
              Have a wedding date in mind or need custom photography coverage? Call us, visit our Sanand studio, or send an enquiry below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal variant="fadeUp">
              <div className="p-8 rounded-3xl bg-surface border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-6">
                <h3 className="font-serif text-2xl font-bold text-foreground pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  Studio Details
                </h3>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Sanand Studio Address</h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">
                      101 Shubham Elite, Eklingji Road, behind Somnath Bus Stand, Sanand, Gujarat 382110
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Phone Consultation</h4>
                    <a href="tel:09724322046" className="text-xs text-amber-700 dark:text-amber-400 font-bold hover:underline">
                      097243 22046
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Email Enquiry</h4>
                    <a href="mailto:contact@shreeshyamstudio.com" className="text-xs text-muted-foreground hover:underline">
                      contact@shreeshyamstudio.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Studio Hours</h4>
                    <p className="text-xs text-muted-foreground font-light">Monday – Sunday: 9:30 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Quick Action Buttons */}
            <Reveal variant="fadeUp" delay={0.2}>
              <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm">Need Instant Response?</h4>
                  <p className="text-xs font-light opacity-80">Chat directly with studio owner on WhatsApp</p>
                </div>
                <a
                  href="https://wa.me/919724322046?text=Hello%20Shree%20Shyam%20Studio%2C%20I%20would%20like%20to%20enquire%20about%20photography%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>Chat Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <Reveal variant="fadeUp" delay={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-neutral-200/80 dark:border-neutral-800 shadow-xl">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Check Date Availability & Custom Quote
                </h3>
                <p className="text-xs text-muted-foreground font-light mb-8">
                  Fill out your event details below. Our team will verify date availability and send package details within 4 hours.
                </p>

                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
