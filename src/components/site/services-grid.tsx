import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section
      id="leistungen"
      className="border-y border-white/5 py-24 md:py-32"
    >
      <div className="container-page">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
              Leistungen
            </p>
            <h2 className="heading-section text-balance text-white">
              Sechs Leistungen. Ein Ziel: Ihr Unternehmen sichtbarer, effizienter
              und autonomer machen.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 md:text-base">
            Jedes Modul greift für sich – und entfaltet im Zusammenspiel den
            größten Hebel.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className="group relative flex flex-col justify-between gap-12 bg-background p-8 transition hover:bg-white/[0.02] md:p-10"
            >
              <div>
                <div className="flex items-start justify-between">
                  <p className="font-mono text-xs text-white/40">
                    {String(index + 1).padStart(2, "0")} / 06
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {service.navName}
                </h3>
                <p className="mt-3 max-w-md text-sm text-white/60 md:text-base">
                  {service.tagline}
                </p>
              </div>

              <div className="text-xs text-white/50 transition group-hover:text-white">
                Mehr erfahren →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
