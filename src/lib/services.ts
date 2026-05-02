import type { Service } from "@/types/services";

export const services: Service[] = [
  {
    slug: "websites",
    shortName: "Websites",
    navName: "Websites",
    tagline:
      "Moderne, schnell ladende Websites – technisch sauber, auf Conversion ausgerichtet und bereit für SEO.",
    hero: {
      eyebrow: "Websites",
      heading: "Moderne, schnelle und konvertierende Websites.",
      subline:
        "Die Website als technisch performanter und inhaltlich überzeugender Eindruck, zugeschnitten auf Zielgruppe und Positionierung – gebaut auf Next.js.",
    },
    audience: {
      heading: "Für wen das passt.",
      intro:
        "Eine Website ist mehr als ein Online-Auftritt. Sie ist der erste Eindruck, der häufig über Vertrauen und Anfragen entscheidet. Wir bauen Seiten, die Ihrer Positionierung gerecht werden – technisch sauber, auf Conversion ausgerichtet und bereit für SEO.",
      bullets: [
        "Unternehmen mit veralteter Web-Präsenz und Modernisierungsbedarf.",
        "Dienstleister mit Anfragen- und Lead-Bedarf über die Website.",
        "Marken, die einen persönlichen Ansprechpartner statt Agenturkette wollen.",
      ],
    },
    features: [
      {
        title: "Next.js & TypeScript",
        description:
          "Moderner, typsicherer Stack – mobil-optimiert, wartbar und für Teams nach dem Launch verständlich aufgebaut.",
      },
      {
        title: "Core Web Vitals",
        description:
          "Schnelle Ladezeiten, saubere Bild- und Font-Strategie – damit Google-Ranking und Nutzererlebnis nicht gegeneinander arbeiten.",
      },
      {
        title: "Conversion & SEO",
        description:
          "Funktionales Design, klare Hierarchie und Inhalte, die auf Anfragen einzahlen – ohne Marketing-Floskeln.",
      },
    ],
    testimonial: {
      name: "Marc P.",
      quote:
        "Seit dem Relaunch kommen spürbar mehr qualifizierte Anfragen rein. Technisch sauber, wirtschaftlich messbar – das war für uns die richtige Entscheidung.",
    },
    process: [
      {
        number: "01",
        title: "Analyse & Strategie",
        description:
          "Wir starten mit einer klaren Sicht auf Ziele, Zielgruppe und Wettbewerb – damit der Funktionsumfang passt, bevor Aufwand entsteht.",
        bullets: [
          "Wettbewerbs- und Marktcheck",
          "Positionierung und Zielgruppe",
          "Funktionsumfang und Anforderungen",
        ],
      },
      {
        number: "02",
        title: "Konzept & Design",
        description:
          "Wireframes und UI-Design folgen der Inhaltslogik – nicht umgekehrt. So entstehen Seiten, die führen statt nur dekorieren.",
        bullets: [
          "Wireframes und Informationsarchitektur",
          "UI-Design auf Basis Ihrer Marke",
          "Content-Struktur und Hierarchie",
        ],
      },
      {
        number: "03",
        title: "Entwicklung",
        description:
          "Die Umsetzung in Next.js – mit Fokus auf Performance, Wartbarkeit und sauberen Integrationen statt Plug-in-Chaos.",
        bullets: [
          "Next.js-Umsetzung mit TypeScript",
          "Performance- und SEO-Tuning",
          "Integrationen (CMS, Analytics, Tools)",
        ],
      },
      {
        number: "04",
        title: "Launch & Übergabe",
        description:
          "Deployment, Dokumentation und optionales Training – damit Ihr Team die Seite eigenständig pflegen kann.",
        bullets: [
          "Deployment auf Vercel oder eigenem Setup",
          "Dokumentation für interne Teams",
          "Optionales Training und laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit für Ihre neue Website?",
      text: "Ein unverbindliches Erstgespräch – wir klären Ziele, Umfang und Zeitrahmen. Antwort innerhalb von 24 Stunden.",
    },
  },
  {
    slug: "ki-workflows",
    shortName: "KI Workflows",
    navName: "KI Workflows",
    tagline:
      "Wiederkehrende Prozesse in automatisierte Abläufe überführen. Weniger Fleißarbeit, mehr Kapazität fürs Kerngeschäft.",
    hero: {
      eyebrow: "KI Workflows",
      heading: "Intelligente Prozesse, die Zeit zurückgeben.",
      subline:
        "Wachstum ohne Skalierung des Aufwands ist das Ziel – KI-Automatisierung ist der Weg. Wir analysieren, entlasten und digitalisieren wiederkehrende Abläufe.",
    },
    audience: {
      heading: "Mehr schaffen, ohne mehr zu tun.",
      intro:
        "Viele Unternehmen wachsen – aber die Prozesse wachsen mit. Jede zusätzliche Anfrage bedeutet mehr manuelle Arbeit. KI-Workflows durchbrechen diesen Zusammenhang: Aufwand bleibt stabil, während Output skaliert.",
      bullets: [
        "Unternehmen mit wiederkehrenden, manuellen Abläufen.",
        "Teams, die an Kapazitätsgrenzen stoßen, ohne mehr einstellen zu wollen.",
        "Betriebe, die KI-Potenziale nutzen wollen – ohne Komplexität.",
      ],
    },
    features: [
      {
        title: "Prozessaufnahme",
        description:
          "Bestehende Abläufe werden dokumentiert – inklusive aller Übergaben, Tools und manuellen Schritte. Erst verstehen, dann automatisieren.",
      },
      {
        title: "Automatisierungsdesign",
        description:
          "Statt Werkzeug-Chaos eine klare Logik: Was wird wie automatisiert, wo bleibt der Mensch und wo greifen Eskalationsregeln.",
      },
      {
        title: "Integration & Monitoring",
        description:
          "Anbindung an bestehende Tools, Fehlerbehandlung und transparente Überwachung im Betrieb – damit Automatisierung verlässlich bleibt.",
      },
    ],
    testimonial: {
      name: "Jens B.",
      quote:
        "Wir haben rund 40 % unserer manuellen Arbeit automatisiert – ohne, dass Kunden etwas davon merken. Nur die Reaktionszeit ist deutlich kürzer.",
    },
    process: [
      {
        number: "01",
        title: "Prozessaufnahme",
        description:
          "Erfassung bestehender Abläufe, Tools und Übergaben. Identifikation von Engpässen und Automatisierungspotenzialen – mit klarer Priorisierung.",
        bullets: [
          "Workshop und Prozess-Mapping",
          "Tool- und Datenfluss-Analyse",
          "Priorisierung nach Wirkung",
        ],
      },
      {
        number: "02",
        title: "Automatisierungsdesign",
        description:
          "Konzepterstellung: Welche Schritte werden automatisiert, welche bleiben manuell, welche Tools werden angebunden – nachvollziehbar dokumentiert.",
        bullets: [
          "Zielbild und Logik je Workflow",
          "Auswahl der passenden Tools",
          "Eskalations- und Fallback-Pfade",
        ],
      },
      {
        number: "03",
        title: "Aufbau & Test",
        description:
          "Workflow-Implementierung, Qualitätsprüfung und iterative Tests mit Echtdaten – damit Fehler vor dem Live-Betrieb auffallen.",
        bullets: [
          "Implementierung der Workflows",
          "Tests mit echten Daten",
          "Fehlerbehandlung und Logging",
        ],
      },
      {
        number: "04",
        title: "Übergabe & Monitoring",
        description:
          "Dokumentation, Schulung, Live-Monitoring und optionale laufende Betreuung – damit Automatisierung im Alltag verlässlich bleibt.",
        bullets: [
          "Dokumentation und Schulung",
          "Live-Monitoring und Alerts",
          "Optionale laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit, Zeit zurückzugewinnen?",
      text: "Ein unverbindliches Erstgespräch – wir schauen gemeinsam auf Ihre Prozesse und zeigen, wo Automatisierung sich wirklich lohnt.",
    },
  },
  {
    slug: "autonome-agenten",
    shortName: "Autonome Agenten",
    navName: "Autonome Agenten",
    tagline:
      "Systeme, die selbstständig handeln: beobachten, entscheiden, ausführen. Aus klaren Zielen werden messbare Resultate.",
    hero: {
      eyebrow: "Autonome Agenten",
      heading: "Systeme, die selbstständig arbeiten.",
      subline:
        "Automatisierung führt Regeln aus. Autonome Agenten denken. Sie treffen Entscheidungen, passen sich an Situationen an und übernehmen Aufgaben eigenständig.",
    },
    audience: {
      heading: "Wenn Regeln nicht mehr reichen.",
      intro:
        "Viele Abläufe sind zu variabel für klassische Automatisierung. Autonome Agenten übernehmen Aufgaben, die Kontext, Einschätzung und Handlungsspielraum erfordern – zuverlässig und nachvollziehbar.",
      bullets: [
        "Unternehmen mit bereits etablierten KI- und Prozesslösungen.",
        "Komplexe, variable Abläufe jenseits einfacher Wenn-Dann-Regeln.",
        "Teams, die Kapazität für strategische Arbeit freisetzen wollen.",
      ],
    },
    features: [
      {
        title: "Use-Case-Fokus",
        description:
          "Nicht jeder Prozess braucht einen Agenten. Wir klären, wo Autonomie echten Mehrwert stiftet – und wo klassische Automatisierung reicht.",
      },
      {
        title: "Kontrollierte Autonomie",
        description:
          "Agenten handeln innerhalb definierter Grenzen: klare Rollen, Rechte und Eskalationswege – keine Black-Box-Entscheidungen.",
      },
      {
        title: "Beobachtbarkeit",
        description:
          "Jede Aktion ist nachvollziehbar: Logs, Metriken und Audit-Trails, damit Systeme kontrollierbar bleiben.",
      },
    ],
    testimonial: {
      name: "Philipp M.",
      quote:
        "Unsere Agenten übernehmen Aufgaben, bei denen wir vorher immer einen Mitarbeitenden brauchten – und liefern in einer Konsistenz, die vorher gar nicht möglich war.",
    },
    process: [
      {
        number: "01",
        title: "Use-Case-Definition",
        description:
          "Wir klären gemeinsam, welche Aufgaben sich für autonome Agenten eignen – und welche nicht. Ohne Hype, mit klarem Fokus.",
        bullets: [
          "Aufgaben- und Wertschöpfungsanalyse",
          "Risiko- und Grenzbewertung",
          "Eindeutige Zielbilder",
        ],
      },
      {
        number: "02",
        title: "Architektur",
        description:
          "Design der Agenten-Struktur: Rollen, Rechte, Tools, Gedächtnis und Eskalationswege – als stabile Grundlage für den Betrieb.",
        bullets: [
          "Agenten- und Rollenmodell",
          "Tool- und System-Anbindung",
          "Sicherheits- und Governance-Ebene",
        ],
      },
      {
        number: "03",
        title: "Entwicklung & Tests",
        description:
          "Iterativer Aufbau mit Testszenarien, Evaluations-Runden und kontrollierter Erweiterung des Handlungsspielraums.",
        bullets: [
          "Prototyp und Iterationen",
          "Evaluations- und Sicherheitstests",
          "Stufenweise Freigabe",
        ],
      },
      {
        number: "04",
        title: "Deployment & Monitoring",
        description:
          "Produktiver Betrieb mit Monitoring, Audit-Trails und klar definierten Rückfallprozessen – damit Autonomie nicht zu Undurchschaubarkeit wird.",
        bullets: [
          "Live-Deployment",
          "Monitoring und Alerts",
          "Audit- und Review-Prozesse",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit, Kapazität freizusetzen?",
      text: "Ein unverbindliches Erstgespräch – wir prüfen, wo autonome Agenten Sinn ergeben und wo nicht. Ehrlich und ohne Aufschlag.",
    },
  },
  {
    slug: "social-media",
    shortName: "Social Media",
    navName: "Social Media & Online-Präsenz",
    tagline:
      "Konsistente Markenpräsenz über Kanäle hinweg – mit Inhalten, die ziehen, statt nur sichtbar zu sein.",
    hero: {
      eyebrow: "Social Media & Online-Präsenz",
      heading: "Strategische digitale Markenwirkung.",
      subline:
        "Keine klassischen Posting-Pläne. Stattdessen: Markenpräsenz, die durch klare Tonalität, konsistente Profilarchitektur und vertrauensaufbauende Inhalte funktioniert.",
    },
    audience: {
      heading: "Sichtbar werden, statt nur präsent sein.",
      intro:
        "Online-Präsenz ist kein Feed, sondern ein Vertrauensversprechen. Wer ernst genommen werden will, braucht mehr als Posting-Routine – nämlich Positionierung, Wiedererkennbarkeit und eine klare Handschrift.",
      bullets: [
        "Gründer und Selbstständige mit Sichtbarkeitsbedarf.",
        "Unternehmen mit inkonsistentem oder inaktivem Social-Media-Auftritt.",
        "Brands, die ihre Positionierung schärfen wollen.",
      ],
    },
    features: [
      {
        title: "Profil-Architektur",
        description:
          "Plattformauswahl, technisches Setup und Bio-Optimierung – konsistent über alle Kanäle hinweg, sodass jede Touchpoint zur Marke passt.",
      },
      {
        title: "Tonalität & Bildsprache",
        description:
          "Eine erkennbare Stimme und eine visuelle Handschrift, die zur Marke passt und im Scrollen auffällt – statt im Feed zu verschwinden.",
      },
      {
        title: "Redaktionsstruktur",
        description:
          "Themen, Formate, Rhythmus – dokumentiert im Styleguide und Redaktionsplan, damit Inhalte selbstständig entstehen können.",
      },
    ],
    testimonial: {
      name: "Madeleine v. H.",
      quote:
        "Unser Auftritt war vorher nur ein Feed. Nach dem Projekt hat unsere Marke eine klare Stimme – und Kunden merken das beim ersten Kontakt.",
    },
    process: [
      {
        number: "01",
        title: "Positionierung",
        description:
          "Klärung der Online-Identität und Zielgruppe – wofür steht die Marke, für wen, mit welcher Haltung.",
        bullets: [
          "Markenkern und Tonalität",
          "Zielgruppen-Verständnis",
          "Wettbewerbs- und Marktkontext",
        ],
      },
      {
        number: "02",
        title: "Kanal & Profil",
        description:
          "Plattformauswahl und technisches Profil-Setup – nur dort präsent sein, wo es wirklich Wirkung entfaltet.",
        bullets: [
          "Kanalauswahl statt Gießkanne",
          "Profil- und Bio-Optimierung",
          "Konsistente visuelle Basis",
        ],
      },
      {
        number: "03",
        title: "Content-Konzept",
        description:
          "Definition von Themen, Formaten und Tonalität – ein Konzept, das skaliert, ohne an Klarheit zu verlieren.",
        bullets: [
          "Themenwelten und Formate",
          "Tonalität und Bildsprache",
          "Kanalübergreifende Konsistenz",
        ],
      },
      {
        number: "04",
        title: "Übergabe & Struktur",
        description:
          "Bereitstellung von Redaktionsplan und Styleguide – damit Inhalte auch ohne Agentur laufen.",
        bullets: [
          "Redaktionsplan",
          "Styleguide mit klaren Regeln",
          "Optionale laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit für eine klare Markenwirkung?",
      text: "Ein unverbindliches Erstgespräch – wir klären Positionierung, Kanäle und Ziele. Antwort innerhalb von 24 Stunden.",
    },
  },
  {
    slug: "ki-assistenten",
    shortName: "KI-Assistenten",
    navName: "KI-Assistenten & Chatbots",
    tagline:
      "Eigene Assistenten und Chatbots, die Routineanfragen übernehmen, 24/7 antworten und Ihr Team entlasten.",
    hero: {
      eyebrow: "KI-Assistenten & Chatbots",
      heading: "KI, die für Sie kommuniziert.",
      subline:
        "Jede Anfrage, die manuell beantwortet werden muss, kostet Zeit. Jede Anfrage, die zu lange wartet, kostet Kunden. KI-Assistenten lösen beides.",
    },
    audience: {
      heading: "Erstkontakt ohne Wartezeit.",
      intro:
        "Kunden erwarten schnelle Antworten – jederzeit. KI-Assistenten übernehmen wiederkehrende Anfragen, filtern qualifizierte Leads und schaffen Freiraum für das, worauf es wirklich ankommt.",
      bullets: [
        "Dienstleister mit vielen Erstanfragen und FAQ-Themen.",
        "E-Commerce und Plattformen mit Support-Volumen.",
        "Teams, die 24/7-Verfügbarkeit ohne Schichtbetrieb brauchen.",
      ],
    },
    features: [
      {
        title: "Eigene Wissensbasis",
        description:
          "Der Assistent antwortet auf Basis Ihrer Inhalte – dokumentiert, kontrolliert und jederzeit aktualisierbar.",
      },
      {
        title: "Design & Logik",
        description:
          "Gesprächsführung, Tonalität und Eskalationswege – klar definiert, damit der Assistent zur Marke passt.",
      },
      {
        title: "Integration & Handover",
        description:
          "Anbindung an Website, CRM oder Messenger – mit sauberer Übergabe an Menschen, wenn es nötig ist.",
      },
    ],
    testimonial: {
      name: "Tobias R.",
      quote:
        "Unser Support beantwortet inzwischen nur noch die Fälle, die wirklich Aufmerksamkeit brauchen. Der Rest läuft zuverlässig über den Assistenten – und Kunden merken den Unterschied kaum.",
    },
    process: [
      {
        number: "01",
        title: "Wissensbasis",
        description:
          "Aufbau einer strukturierten, gepflegten Wissensbasis – damit der Assistent verlässlich und nachvollziehbar antwortet.",
        bullets: [
          "Inhalte sammeln und strukturieren",
          "Qualität und Aktualität sichern",
          "Zugriffsrechte und Grenzen definieren",
        ],
      },
      {
        number: "02",
        title: "Design & Logik",
        description:
          "Festlegen von Tonalität, Gesprächsführung und Eskalationspfaden – damit der Assistent menschlich wirkt, ohne Grenzen zu verlieren.",
        bullets: [
          "Tonalität und Gesprächsführung",
          "Eskalationswege zum Menschen",
          "Datenschutz- und Compliance-Regeln",
        ],
      },
      {
        number: "03",
        title: "Integration",
        description:
          "Einbindung in Ihre Kanäle und Systeme – mit sicherer Authentifizierung und sauberer Datenflusslogik.",
        bullets: [
          "Einbindung in Website und Kanäle",
          "CRM- und Tool-Integration",
          "Authentifizierung und Datenschutz",
        ],
      },
      {
        number: "04",
        title: "Test & Optimierung",
        description:
          "Iterative Tests mit echten Dialogen – damit der Assistent über Zeit nicht schlechter, sondern besser wird.",
        bullets: [
          "Testläufe mit echten Dialogen",
          "Qualitäts- und Sicherheitschecks",
          "Laufende Optimierung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit, Kommunikation neu zu denken?",
      text: "Ein unverbindliches Erstgespräch – wir klären Anwendungsfall, Tonalität und Ziele. Antwort innerhalb von 24 Stunden.",
    },
  },
  {
    slug: "systemarchitektur",
    shortName: "Systemarchitektur",
    navName: "Individuelle Systemarchitektur",
    tagline:
      "Maßgeschneiderte Softwarelösungen mit klarer Architektur – dokumentiert, wartbar und gebaut, um zu skalieren.",
    hero: {
      eyebrow: "Individuelle Systemarchitektur",
      heading: "Maßgeschneiderte digitale Infrastruktur.",
      subline:
        "Wenn Standardlösungen an Grenzen stoßen, braucht es eine Architektur, die zu Ihren Prozessen passt – skalierbar, sicher und wartbar.",
    },
    audience: {
      heading: "Wenn Standard nicht mehr ausreicht.",
      intro:
        "Viele Unternehmen erreichen einen Punkt, an dem SaaS-Tools, Plug-ins und Baukästen ihre Prozesse eher einschränken als ermöglichen. Dann braucht es eine eigene, saubere Architektur – kein Workaround, sondern eine Grundlage.",
      bullets: [
        "Unternehmen an den Grenzen von Standardlösungen.",
        "Spezielle Daten-, Prozess- oder Integrationsanforderungen.",
        "Teams, die Skalierbarkeit und Wartbarkeit langfristig sichern wollen.",
      ],
    },
    features: [
      {
        title: "Klare Anforderungen",
        description:
          "Bevor Code entsteht, entstehen saubere Anforderungen: fachlich, technisch und organisatorisch abgestimmt.",
      },
      {
        title: "Saubere Architektur",
        description:
          "Module, Datenflüsse und Schnittstellen, die langfristig tragen – dokumentiert, testbar, wartbar.",
      },
      {
        title: "Betrieb & Übergabe",
        description:
          "Sauberer Betriebsmodus: CI/CD, Monitoring, Logging und eine Übergabe, bei der Ihr Team nicht ratlos bleibt.",
      },
    ],
    testimonial: {
      name: "Daniela K.",
      quote:
        "Unsere Plattform trägt heute Lasten, bei denen die alte Lösung längst gescheitert wäre – und unser Team kann sie wirklich selbst betreiben.",
    },
    process: [
      {
        number: "01",
        title: "Requirements",
        description:
          "Wir klären fachliche und technische Anforderungen – und trennen Muss-Kriterien von Kann-Kriterien, bevor Aufwand entsteht.",
        bullets: [
          "Fachliche Anforderungen",
          "Technische Rahmenbedingungen",
          "Priorisierung und Zielbild",
        ],
      },
      {
        number: "02",
        title: "Architektur-Design",
        description:
          "Entwurf der Systemarchitektur: Module, Schnittstellen, Datenmodell und Betriebsmodell – technisch fundiert und nachvollziehbar.",
        bullets: [
          "Modul- und Schichtenmodell",
          "Schnittstellen und Datenmodell",
          "Sicherheits- und Skalierungskonzept",
        ],
      },
      {
        number: "03",
        title: "Entwicklung",
        description:
          "Saubere Umsetzung mit Fokus auf Wartbarkeit, Testabdeckung und Performance – keine versteckten Abhängigkeiten, keine Quick-Fix-Kultur.",
        bullets: [
          "Iterative Umsetzung",
          "Qualität und Testabdeckung",
          "Performance- und Sicherheitschecks",
        ],
      },
      {
        number: "04",
        title: "Übergabe & Betrieb",
        description:
          "Dokumentation, CI/CD, Monitoring und Schulung – damit das System nicht nur läuft, sondern langfristig betrieben und weiterentwickelt werden kann.",
        bullets: [
          "CI/CD und Monitoring",
          "Dokumentation und Schulung",
          "Optionale laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit für eine Architektur, die trägt?",
      text: "Ein unverbindliches Erstgespräch – wir schauen auf Ihre aktuelle Infrastruktur und klären, wo Passform sich wirklich lohnt.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
