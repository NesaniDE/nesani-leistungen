import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HomeHero } from "@/components/site/home-hero";
import { ServicesGrid } from "@/components/site/services-grid";
import { ProcessSection } from "@/components/site/process-section";
import { CtaSection } from "@/components/site/cta-section";

const homeProcess = [
  {
    number: "01",
    title: "Erstgespräch",
    description:
      "Unverbindlicher Austausch über Ziele, Engpässe und Möglichkeiten – ehrlich und ohne Aufschlag.",
    bullets: ["Ausgangslage", "Zielbild", "Erste Einschätzung"],
  },
  {
    number: "02",
    title: "Konzept",
    description:
      "Klares Konzept mit Umfang, Aufwand und Zeitrahmen – sodass Sie eine fundierte Entscheidung treffen können.",
    bullets: ["Lösungsskizze", "Umfang & Aufwand", "Zeitplan"],
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Iterative Umsetzung mit kurzen Feedback-Zyklen – Sie sehen Fortschritt, statt auf einen Big-Bang-Launch zu warten.",
    bullets: ["Iterationen", "Reviews", "Qualitätssicherung"],
  },
  {
    number: "04",
    title: "Übergabe & Betrieb",
    description:
      "Dokumentation, Schulung und optionale laufende Betreuung – damit das Ergebnis nicht nur live geht, sondern lebt.",
    bullets: ["Dokumentation", "Schulung", "Optionale Betreuung"],
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <ServicesGrid />
        <ProcessSection
          steps={homeProcess}
          heading="So arbeiten wir – egal welches Modul."
        />
        <CtaSection
          cta={{
            heading: "Bereit, das nächste Projekt anzustoßen?",
            text: "Schreiben Sie uns kurz, worum es geht – wir melden uns innerhalb von 24 Stunden mit einer ehrlichen ersten Einschätzung.",
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
