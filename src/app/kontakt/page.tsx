import type { Metadata } from "next";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Projekt anfragen – ein unverbindliches Erstgespräch mit 24-Stunden-Antwortzeit.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white text-[#050505] pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-24 lg:pb-32">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
                  Kontakt
                </div>
                <h1 className="mt-4 font-sans font-semibold text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-0.02em] max-w-[16ch]">
                  Lassen Sie uns reden.
                </h1>
                <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-[#050505]/80 max-w-[54ch]">
                  Ein unverbindliches Erstgespräch. Wir klären Ziele, Umfang und
                  Zeitrahmen – und melden uns innerhalb von 24 Stunden mit einer
                  ehrlichen ersten Einschätzung.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href="mailto:info@nesani.de?subject=Projektanfrage"
                    className="inline-flex items-center rounded-full bg-[#050505] text-white text-[15px] font-semibold px-6 py-3 hover:bg-black/90 transition"
                  >
                    E-Mail an info@nesani.de
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl md:rounded-3xl bg-[#F5F2EB] p-8 md:p-10">
                  <h2 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.01em]">
                    So melden Sie sich
                  </h2>
                  <dl className="mt-6 space-y-5 text-[15px]">
                    <div>
                      <dt className="text-[#050505]/55 text-[13px] font-semibold uppercase tracking-widest">
                        E-Mail
                      </dt>
                      <dd className="mt-1.5">
                        <a
                          href="mailto:info@nesani.de"
                          className="font-medium underline-offset-4 hover:underline"
                        >
                          info@nesani.de
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#050505]/55 text-[13px] font-semibold uppercase tracking-widest">
                        Standort
                      </dt>
                      <dd className="mt-1.5 font-medium">
                        Schwäbisch Gmünd, Deutschland
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#050505]/55 text-[13px] font-semibold uppercase tracking-widest">
                        Antwortzeit
                      </dt>
                      <dd className="mt-1.5 font-medium">Innerhalb 24 Stunden</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
