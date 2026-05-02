import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceHeroProps = {
  eyebrow: string;
  heading: string;
  subline: string;
};

export function ServiceHero({ eyebrow, heading, subline }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 grid-noise" aria-hidden />
      <div className="absolute inset-0 gradient-radial-fade" aria-hidden />

      <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex flex-col items-start">
          <Link
            href="/#leistungen"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 transition hover:bg-white/[0.06]"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
            {eyebrow}
          </Link>

          <h1 className="heading-hero max-w-4xl text-balance text-white">
            {heading}
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg">
            {subline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Projekt anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#prozess"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-6 text-sm font-medium text-white/90 transition hover:bg-white/[0.06]"
            >
              Prozess ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
