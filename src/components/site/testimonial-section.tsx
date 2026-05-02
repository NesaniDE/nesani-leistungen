import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ServiceTestimonial } from "@/types/services";

type TestimonialSectionProps = {
  testimonial: ServiceTestimonial;
};

export function TestimonialSection({ testimonial }: TestimonialSectionProps) {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="container-page">
        <div className="surface-card relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 md:p-16">
          <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
            Kundenstimme
          </p>
          <blockquote className="text-balance text-2xl font-medium leading-tight text-white md:text-4xl">
            <span className="text-white/30">„</span>
            {testimonial.quote}
            <span className="text-white/30">“</span>
          </blockquote>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-white/50">Kunde · NESANI</p>
              </div>
            </div>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
