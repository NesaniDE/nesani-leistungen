import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/services";

type RelatedServicesProps = {
  currentSlug: string;
};

export function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const others = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
              Weitere Leistungen
            </p>
            <h2 className="heading-section text-balance text-white">
              Im Zusammenspiel entfaltet sich der größte Hebel.
            </h2>
          </div>
          <Link
            href="/#leistungen"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            Alle Leistungen
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {others.map((service) => (
            <Link
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className="group flex flex-col justify-between gap-10 bg-background p-8 transition hover:bg-white/[0.02]"
            >
              <div>
                <div className="flex items-start justify-between">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Leistung
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-white" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-white md:text-xl">
                  {service.navName}
                </h3>
                <p className="mt-3 text-sm text-white/60">{service.tagline}</p>
              </div>
              <span className="text-xs text-white/50 transition group-hover:text-white">
                Details ansehen →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
