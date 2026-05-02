import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

export const metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="container-page py-24 md:py-32">
          <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
            Rechtliches
          </p>
          <h1 className="heading-section text-balance text-white">Impressum</h1>
          <div className="mt-12 max-w-2xl space-y-6 text-sm text-white/70 md:text-base">
            <p>
              Dies ist eine Demo-Seite. Bitte fügen Sie hier Ihre offiziellen
              Impressums-Angaben gemäß § 5 TMG ein.
            </p>
            <p>
              <strong className="text-white">NESANI</strong>
              <br />
              Schwäbisch Gmünd
              <br />
              Deutschland
            </p>
            <p>
              <a
                href="mailto:info@nesani.de"
                className="underline-offset-4 hover:underline"
              >
                info@nesani.de
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
