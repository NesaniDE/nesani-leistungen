import type { Metadata } from "next";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white text-[#050505] pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12">
            <div className="text-[13px] font-semibold tracking-widest uppercase text-[#050505]/60">
              Rechtliches
            </div>
            <h1 className="mt-4 font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]">
              Datenschutzerklärung
            </h1>
            <div className="mt-10 max-w-[680px] space-y-6 text-[15px] md:text-[16px] leading-[1.6] text-[#050505]/80">
              <p>
                Dies ist eine Demo-Seite. Bitte ergänzen Sie hier Ihre
                Datenschutzerklärung.
              </p>
              <p>
                Verantwortlich für die Datenverarbeitung ist Nesani, Schwäbisch
                Gmünd. Bei Fragen erreichen Sie uns unter{" "}
                <a
                  href="mailto:info@nesani.de"
                  className="underline-offset-4 hover:underline"
                >
                  info@nesani.de
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
