import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ArrowUpRightIcon } from "@/components/icons";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-white text-[#050505] pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
              Sichtbarer. Effizienter. Autonomer.
            </div>
            <h1 className="mt-4 font-sans font-semibold text-[44px] md:text-[64px] lg:text-[88px] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
              Sechs Leistungen. Ein klares Ziel.
            </h1>
            <p className="mt-6 md:mt-8 text-[17px] md:text-[20px] leading-[1.5] text-[#050505]/80 max-w-[60ch]">
              Wir bauen moderne Websites, automatisieren Prozesse, entwickeln
              autonome Agenten und KI-Assistenten – und entwerfen die
              Architektur dahinter. Aus Schwäbisch Gmünd, mit persönlichem
              Ansprechpartner.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#leistungen"
                className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-6 py-3 hover:bg-black/90 transition"
              >
                Leistungen entdecken
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#050505] hover:opacity-80 transition"
              >
                Projekt anfragen
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section
          id="leistungen"
          className="bg-white text-[#050505] py-16 md:py-24 lg:py-32"
        >
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[640px]">
                <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
                  Leistungen
                </div>
                <h2 className="mt-4 font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
                  Sechs Module mit Substanz.
                </h2>
              </div>
              <p className="text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/75 max-w-[420px]">
                Jedes Modul greift für sich – und entfaltet im Zusammenspiel
                den größten Hebel.
              </p>
            </div>

            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/leistungen/${service.slug}`}
                  className="group rounded-2xl md:rounded-3xl border border-black/10 bg-white overflow-hidden hover:border-black/40 transition flex flex-col"
                >
                  <div className="relative aspect-[16/9] bg-[#F5F2EB] overflow-hidden">
                    <Image
                      src={service.hero.image}
                      alt={service.hero.imageAlt}
                      fill
                      sizes="(min-width:768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
                    <h3 className="font-sans font-semibold text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.01em]">
                      {service.navName}
                    </h3>
                    <p className="mt-3 text-[15px] md:text-[16px] leading-[1.55] text-[#050505]/75 max-w-[44ch]">
                      {service.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#050505] group-hover:gap-2 transition-all">
                      Details ansehen
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F4F1EA] py-10 md:py-16">
          <div className="mx-auto max-w-[1344px] px-5 lg:px-12">
            <div className="rounded-[20px] md:rounded-[28px] bg-[#050505] text-white px-6 md:px-12 lg:px-20 py-14 md:py-20 lg:py-24 text-center">
              <h2 className="font-sans font-semibold text-[28px] md:text-[48px] lg:text-[60px] leading-[1.05] tracking-[-0.02em] max-w-[18ch] mx-auto">
                Bereit, das nächste Projekt anzustoßen?
              </h2>
              <p className="mt-4 md:mt-6 text-[15px] md:text-[18px] leading-[1.5] max-w-[52ch] mx-auto text-white/80">
                Schreiben Sie uns kurz, worum es geht – wir melden uns
                innerhalb von 24 Stunden mit einer ehrlichen ersten
                Einschätzung.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center rounded-full bg-white text-[#050505] text-[15px] font-semibold px-6 py-3 hover:bg-white/90 transition"
                >
                  Projekt anfragen
                </Link>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center rounded-full border border-white/60 text-white text-[15px] font-semibold px-6 py-3 hover:bg-white/10 transition"
                >
                  Alle Leistungen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
