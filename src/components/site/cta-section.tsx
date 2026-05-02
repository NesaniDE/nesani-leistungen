import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ServiceCTA } from "@/types/services";

type CtaSectionProps = {
  cta: ServiceCTA;
  showSecondary?: boolean;
};

export function CtaSection({ cta, showSecondary = true }: CtaSectionProps) {
  return (
    <section id="kontakt" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-noise" aria-hidden />
      <div className="absolute inset-0 gradient-radial-fade" aria-hidden />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
            Erstgespräch
          </p>
          <h2 className="heading-section text-balance text-white">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg">
            {cta.text}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="mailto:info@nesani.de?subject=Projektanfrage"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
            {showSecondary ? (
              <Link
                href="/#leistungen"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-6 text-sm font-medium text-white/90 transition hover:bg-white/[0.06]"
              >
                Weitere Leistungen
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
