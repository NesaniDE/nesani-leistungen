import Link from "next/link";

import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-background">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            NESANI
          </div>
          <p className="mt-4 max-w-md text-sm text-white/60">
            Wir bauen moderne Websites, KI-Workflows und autonome Systeme – aus
            Schwäbisch Gmünd. Persönlicher Ansprechpartner statt Agenturkette.
          </p>
          <p className="mt-6 text-sm text-white/60">
            <a
              href="mailto:info@nesani.de"
              className="underline-offset-4 hover:underline"
            >
              info@nesani.de
            </a>
            <span className="mx-2 text-white/30">·</span>
            Schwäbisch Gmünd
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Leistungen
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/leistungen/${s.slug}`}
                  className="transition hover:text-white"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-white/40">
            Unternehmen
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <Link href="/#leistungen" className="transition hover:text-white">
                Über uns
              </Link>
            </li>
            <li>
              <Link href="/#kontakt" className="transition hover:text-white">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="transition hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition hover:text-white">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} NESANI. Alle Rechte vorbehalten.</p>
          <p>Sichtbarer. Effizienter. Autonomer.</p>
        </div>
      </div>
    </footer>
  );
}
