import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 grid-noise" aria-hidden />
      <div className="absolute inset-0 gradient-radial-fade" aria-hidden />

      <div className="container-page relative pt-24 pb-32 md:pt-36 md:pb-40">
        <div className="flex flex-col items-start">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
            Sichtbarer. Effizienter. Autonomer.
          </div>

          <h1 className="heading-hero max-w-4xl text-balance text-white">
            Sechs Leistungen, mit denen Ihr Unternehmen sichtbarer, effizienter
            und autonomer wird.
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-base text-white/70 md:text-lg">
            Wir bauen moderne Websites, automatisieren Prozesse, entwickeln
            autonome Agenten und KI-Assistenten – und entwerfen die Architektur
            dahinter. Aus Schwäbisch Gmünd, mit persönlichem Ansprechpartner.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#leistungen"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Leistungen entdecken
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-6 text-sm font-medium text-white/90 transition hover:bg-white/[0.06]"
            >
              Projekt anfragen
            </Link>
          </div>

          <dl className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Antwortzeit
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">24 h</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Standort
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                Schwäbisch Gmünd
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Stack
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                Next.js
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-white/40">
                Modell
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                Persönlich
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
