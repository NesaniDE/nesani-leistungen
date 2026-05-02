import type { Service } from "@/types/services";

export const services: Service[] = [
  {
    slug: "websites",
    shortName: "Websites",
    navName: "Websites",
    tagline:
      "Moderne, schnell ladende Websites – technisch sauber, auf Conversion ausgerichtet und bereit für SEO.",
    hero: {
      heading: "Moderne, schnelle und konvertierende Websites.",
      bodyHtml:
        'Die Website ist Ihr erster Eindruck. <span class="font-semibold">Technisch performant</span> und <span class="font-semibold">inhaltlich überzeugend</span> – zugeschnitten auf Zielgruppe und Positionierung, gebaut auf Next.js.',
      image: "/images/services/leistung-websites.png",
      imageAlt: "Moderne Website in Entwicklung",
      cards: [
        {
          icon: "code",
          title: "Next.js-Stack",
          body: "Performance und Core Web Vitals",
        },
        {
          icon: "target",
          title: "Conversion-Design",
          body: "Design folgt Funktion",
        },
      ],
    },
    audience: {
      eyebrow: "Für wen",
      heading: "Websites, die Anfragen bringen.",
      bodyHtml:
        'Kein Templateshop, kein Agentur-Overhead. Ein <span class="font-semibold">Ansprechpartner</span>, der versteht, für wen gebaut wird – und <span class="font-semibold">sauberer Code</span>, den Ihr Team auch nach dem Launch noch versteht.',
      bullets: [
        "Unternehmen mit veralteter oder fehlender Web-Präsenz.",
        "Dienstleister, die gezielt mehr qualifizierte Anfragen wollen.",
        "Marken, die professionell auftreten – ohne Agenturketten.",
      ],
    },
    features: {
      heading: "Was in jeder Website steckt",
      items: [
        {
          icon: "code",
          title: "Next.js & TypeScript",
          body: "Moderner Stack mit sauberem Code, typsicher und mobil-optimiert – bereit für alles, was danach kommt.",
        },
        {
          icon: "gauge",
          title: "Core Web Vitals",
          body: "Schnelle Ladezeiten und technische Qualität, die Google belohnt – ohne Performance-Tricksereien.",
        },
        {
          icon: "target",
          title: "Conversion & SEO",
          body: "Design folgt Funktion. Inhalte und Struktur sind auf Anfragen ausgelegt, nicht auf hübsche Screenshots.",
        },
      ],
    },
    testimonial: {
      heading: "So erleben Kunden eine Website von Nesani",
      name: "Marc P.",
      role: "Beispielrezension",
      quote:
        "Nedim denkt mit statt nur umzusetzen. Das Ergebnis war nicht nur technisch sauber, sondern wirtschaftlich spürbar – unsere Anfragen haben sich nach dem Relaunch merklich erhöht.",
    },
    processBanner: {
      heading: "So entsteht Ihre Website.",
      body: "Vier klare Schritte vom Erstgespräch bis zur Übergabe – mit festen Meilensteinen, kurzen Abstimmungen und einem Ansprechpartner, der technisch tief im Projekt steckt.",
    },
    process: [
      {
        num: "01",
        title: "Analyse & Strategie",
        body: "Wettbewerb, Zielgruppe und Positionierung werden gemeinsam geschärft – und daraus die Funktionen Ihrer Website abgeleitet.",
        bullets: [
          "Wettbewerbs- und Zielgruppen-Check",
          "Positionierung und Kernbotschaften",
          "Funktionsumfang und Seitenstruktur",
        ],
      },
      {
        num: "02",
        title: "Konzept & Design",
        body: "Wireframes, UI-Entwurf und Tonalität nach dem Prinzip: Design folgt Funktion. Nichts Dekoratives – alles mit Zweck.",
        bullets: [
          "Wireframes für klare Nutzerführung",
          "UI-Design mit Markenpersönlichkeit",
          "Tonalität, Bildsprache, Content-Struktur",
        ],
      },
      {
        num: "03",
        title: "Entwicklung",
        body: "Umsetzung mit Next.js und TypeScript. Performance-fokussiert, mobil-optimiert, sauber strukturiert.",
        bullets: [
          "Next.js-Stack, TypeScript, moderne Tools",
          "Core Web Vitals und saubere Architektur",
          "Integrationen und Schnittstellen",
        ],
      },
      {
        num: "04",
        title: "Launch & Übergabe",
        body: "Deployment, Dokumentation und optionales Training – die Website geht nicht nur live, sie bleibt auch betreibbar.",
        bullets: [
          "Deployment und Go-Live",
          "Dokumentation und Übergabe",
          "Optionales Training, laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit für Ihre neue Website?",
      body: "Ein unverbindliches Erstgespräch – wir klären Ziele, Umfang und Zeitrahmen. Antwort innerhalb von 24 Stunden.",
    },
  },

  {
    slug: "ki-workflows",
    shortName: "KI Workflows",
    navName: "KI Workflows",
    tagline:
      "Wiederkehrende Prozesse in automatisierte Abläufe überführen. Weniger Fleißarbeit, mehr Kapazität fürs Kerngeschäft.",
    hero: {
      heading: "Intelligente Prozesse, die Zeit zurückgeben.",
      bodyHtml:
        'Wachstum ohne Skalierung des Aufwands ist das Ziel – <span class="font-semibold">KI-Automatisierung</span> ist der Weg. Wir analysieren, entlasten und digitalisieren <span class="font-semibold">wiederkehrende Abläufe</span>.',
      image: "/images/services/leistung-ki-workflows.png",
      imageAlt: "KI Workflow Automation",
      cards: [
        {
          icon: "flow",
          title: "Prozessaufnahme",
          body: "Erst verstehen, dann automatisieren",
        },
        {
          icon: "activity",
          title: "Monitoring",
          body: "Verlässlich im Live-Betrieb",
        },
      ],
    },
    audience: {
      eyebrow: "Für wen",
      heading: "Mehr schaffen, ohne mehr zu tun.",
      bodyHtml:
        'Viele Unternehmen wachsen – aber die Prozesse wachsen mit. Jede zusätzliche Anfrage bedeutet mehr manuelle Arbeit. <span class="font-semibold">KI-Workflows</span> durchbrechen diesen Zusammenhang: Aufwand bleibt stabil, während Output skaliert.',
      bullets: [
        "Unternehmen mit wiederkehrenden, manuellen Abläufen.",
        "Teams, die an Kapazitätsgrenzen stoßen.",
        "Betriebe, die KI-Potenziale nutzen wollen – ohne Komplexität.",
      ],
    },
    features: {
      heading: "Was in jedem KI-Workflow steckt",
      items: [
        {
          icon: "clipboard",
          title: "Prozessaufnahme",
          body: "Bestehende Abläufe werden dokumentiert – inklusive aller Übergaben, Tools und manuellen Schritte. Erst verstehen, dann automatisieren.",
        },
        {
          icon: "flow",
          title: "Automatisierungsdesign",
          body: "Statt Werkzeug-Chaos eine klare Logik: Was wird wie automatisiert, wo bleibt der Mensch und wo greifen Eskalationsregeln.",
        },
        {
          icon: "activity",
          title: "Integration & Monitoring",
          body: "Anbindung an bestehende Tools, Fehlerbehandlung und transparente Überwachung im Betrieb – damit Automatisierung verlässlich bleibt.",
        },
      ],
    },
    testimonial: {
      heading: "So erleben Kunden KI-Workflows von Nesani",
      name: "Jens B.",
      role: "Beispielrezension",
      quote:
        "Wir haben rund 40 % unserer manuellen Arbeit automatisiert – ohne, dass Kunden etwas davon merken. Nur die Reaktionszeit ist deutlich kürzer.",
    },
    processBanner: {
      heading: "So entstehen Ihre KI-Workflows.",
      body: "Vier klare Schritte von der Prozessaufnahme bis ins Live-Monitoring – mit klaren Verantwortlichkeiten und einem Ansprechpartner, der technisch tief im Projekt steckt.",
    },
    process: [
      {
        num: "01",
        title: "Prozessaufnahme",
        body: "Erfassung bestehender Abläufe, Tools und Übergaben. Identifikation von Engpässen und Automatisierungspotenzialen – mit klarer Priorisierung.",
        bullets: [
          "Workshop und Prozess-Mapping",
          "Tool- und Datenfluss-Analyse",
          "Priorisierung nach Wirkung",
        ],
      },
      {
        num: "02",
        title: "Automatisierungsdesign",
        body: "Konzepterstellung: Welche Schritte werden automatisiert, welche bleiben manuell, welche Tools werden angebunden – nachvollziehbar dokumentiert.",
        bullets: [
          "Zielbild und Logik je Workflow",
          "Auswahl der passenden Tools",
          "Eskalations- und Fallback-Pfade",
        ],
      },
      {
        num: "03",
        title: "Aufbau & Test",
        body: "Workflow-Implementierung, Qualitätsprüfung und iterative Tests mit Echtdaten – damit Fehler vor dem Live-Betrieb auffallen.",
        bullets: [
          "Implementierung der Workflows",
          "Tests mit echten Daten",
          "Fehlerbehandlung und Logging",
        ],
      },
      {
        num: "04",
        title: "Übergabe & Monitoring",
        body: "Dokumentation, Schulung, Live-Monitoring und optionale laufende Betreuung – damit Automatisierung im Alltag verlässlich bleibt.",
        bullets: [
          "Dokumentation und Schulung",
          "Live-Monitoring und Alerts",
          "Optionale laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit, Zeit zurückzugewinnen?",
      body: "Ein unverbindliches Erstgespräch – wir schauen gemeinsam auf Ihre Prozesse und zeigen, wo Automatisierung sich wirklich lohnt.",
    },
  },

  {
    slug: "autonome-agenten",
    shortName: "Autonome Agenten",
    navName: "Autonome Agenten",
    tagline:
      "Systeme, die selbstständig handeln: beobachten, entscheiden, ausführen. Aus klaren Zielen werden messbare Resultate.",
    hero: {
      heading: "Systeme, die selbstständig arbeiten.",
      bodyHtml:
        'Automatisierung führt Regeln aus. <span class="font-semibold">Autonome Agenten</span> denken: Sie treffen Entscheidungen, passen sich an Situationen an und übernehmen Aufgaben <span class="font-semibold">eigenständig</span>.',
      image: "/images/services/leistung-autonome-agenten.png",
      imageAlt: "Autonome KI-Agenten",
      cards: [
        {
          icon: "compass",
          title: "Use-Case-Fokus",
          body: "Autonomie nur, wo sie wirkt",
        },
        {
          icon: "eye",
          title: "Beobachtbarkeit",
          body: "Logs, Metriken, Audit-Trails",
        },
      ],
    },
    audience: {
      eyebrow: "Für wen",
      heading: "Wenn Regeln nicht mehr reichen.",
      bodyHtml:
        'Viele Abläufe sind zu variabel für klassische Automatisierung. <span class="font-semibold">Autonome Agenten</span> übernehmen Aufgaben, die <span class="font-semibold">Kontext, Einschätzung und Handlungsspielraum</span> erfordern – zuverlässig und nachvollziehbar.',
      bullets: [
        "Unternehmen mit bereits etablierten KI- und Prozesslösungen.",
        "Komplexe, variable Abläufe jenseits einfacher Wenn-Dann-Regeln.",
        "Teams, die Kapazität für strategische Arbeit freisetzen wollen.",
      ],
    },
    features: {
      heading: "Was in jedem Agenten-System steckt",
      items: [
        {
          icon: "compass",
          title: "Use-Case-Fokus",
          body: "Nicht jeder Prozess braucht einen Agenten. Wir klären, wo Autonomie echten Mehrwert stiftet – und wo klassische Automatisierung reicht.",
        },
        {
          icon: "shield",
          title: "Kontrollierte Autonomie",
          body: "Agenten handeln innerhalb definierter Grenzen: klare Rollen, Rechte und Eskalationswege – keine Black-Box-Entscheidungen.",
        },
        {
          icon: "eye",
          title: "Beobachtbarkeit",
          body: "Jede Aktion ist nachvollziehbar: Logs, Metriken und Audit-Trails, damit Systeme kontrollierbar bleiben.",
        },
      ],
    },
    testimonial: {
      heading: "So erleben Kunden autonome Agenten von Nesani",
      name: "Philipp M.",
      role: "Beispielrezension",
      quote:
        "Unsere Agenten übernehmen Aufgaben, bei denen wir vorher immer einen Mitarbeitenden brauchten – und liefern in einer Konsistenz, die vorher gar nicht möglich war.",
    },
    processBanner: {
      heading: "So entstehen Ihre Agenten.",
      body: "Vier klare Schritte von der Use-Case-Definition bis ins überwachte Deployment – mit Sicherheits- und Governance-Ebene von Anfang an.",
    },
    process: [
      {
        num: "01",
        title: "Use-Case-Definition",
        body: "Wir klären gemeinsam, welche Aufgaben sich für autonome Agenten eignen – und welche nicht. Ohne Hype, mit klarem Fokus.",
        bullets: [
          "Aufgaben- und Wertschöpfungsanalyse",
          "Risiko- und Grenzbewertung",
          "Eindeutige Zielbilder",
        ],
      },
      {
        num: "02",
        title: "Architektur",
        body: "Design der Agenten-Struktur: Rollen, Rechte, Tools, Gedächtnis und Eskalationswege – als stabile Grundlage für den Betrieb.",
        bullets: [
          "Agenten- und Rollenmodell",
          "Tool- und System-Anbindung",
          "Sicherheits- und Governance-Ebene",
        ],
      },
      {
        num: "03",
        title: "Entwicklung & Tests",
        body: "Iterativer Aufbau mit Testszenarien, Evaluations-Runden und kontrollierter Erweiterung des Handlungsspielraums.",
        bullets: [
          "Prototyp und Iterationen",
          "Evaluations- und Sicherheitstests",
          "Stufenweise Freigabe",
        ],
      },
      {
        num: "04",
        title: "Deployment & Monitoring",
        body: "Produktiver Betrieb mit Monitoring, Audit-Trails und klar definierten Rückfallprozessen – damit Autonomie nicht zu Undurchschaubarkeit wird.",
        bullets: [
          "Live-Deployment",
          "Monitoring und Alerts",
          "Audit- und Review-Prozesse",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit, Kapazität freizusetzen?",
      body: "Ein unverbindliches Erstgespräch – wir prüfen, wo autonome Agenten Sinn ergeben und wo nicht. Ehrlich und ohne Aufschlag.",
    },
  },

  {
    slug: "social-media",
    shortName: "Social Media",
    navName: "Social Media & Online-Präsenz",
    tagline:
      "Konsistente Markenpräsenz über Kanäle hinweg – mit Inhalten, die ziehen, statt nur sichtbar zu sein.",
    hero: {
      heading: "Strategische digitale Markenwirkung.",
      bodyHtml:
        'Keine klassischen Posting-Pläne. Stattdessen: <span class="font-semibold">Markenpräsenz</span>, die durch klare Tonalität, konsistente Profilarchitektur und <span class="font-semibold">vertrauensaufbauende Inhalte</span> funktioniert.',
      image: "/images/services/leistung-social-media.png",
      imageAlt: "Social Media und Online-Präsenz",
      cards: [
        {
          icon: "palette",
          title: "Tonalität & Bildsprache",
          body: "Erkennbar im Feed",
        },
        {
          icon: "calendar",
          title: "Redaktionsstruktur",
          body: "Plan, Styleguide, Rhythmus",
        },
      ],
    },
    audience: {
      eyebrow: "Für wen",
      heading: "Sichtbar werden, statt nur präsent sein.",
      bodyHtml:
        'Online-Präsenz ist kein Feed, sondern ein <span class="font-semibold">Vertrauensversprechen</span>. Wer ernst genommen werden will, braucht mehr als Posting-Routine – nämlich <span class="font-semibold">Positionierung, Wiedererkennbarkeit und eine klare Handschrift</span>.',
      bullets: [
        "Gründer und Selbstständige mit Sichtbarkeitsbedarf.",
        "Unternehmen mit inkonsistentem oder inaktivem Auftritt.",
        "Brands, die ihre Positionierung schärfen wollen.",
      ],
    },
    features: {
      heading: "Was in jeder Online-Präsenz steckt",
      items: [
        {
          icon: "layout",
          title: "Profil-Architektur",
          body: "Plattformauswahl, technisches Setup und Bio-Optimierung – konsistent über alle Kanäle hinweg, sodass jeder Touchpoint zur Marke passt.",
        },
        {
          icon: "palette",
          title: "Tonalität & Bildsprache",
          body: "Eine erkennbare Stimme und eine visuelle Handschrift, die zur Marke passt und im Scrollen auffällt – statt im Feed zu verschwinden.",
        },
        {
          icon: "calendar",
          title: "Redaktionsstruktur",
          body: "Themen, Formate, Rhythmus – dokumentiert im Styleguide und Redaktionsplan, damit Inhalte selbstständig entstehen können.",
        },
      ],
    },
    testimonial: {
      heading: "So erleben Kunden Social Media mit Nesani",
      name: "Madeleine v. H.",
      role: "Beispielrezension",
      quote:
        "Unser Auftritt war vorher nur ein Feed. Nach dem Projekt hat unsere Marke eine klare Stimme – und Kunden merken das beim ersten Kontakt.",
    },
    processBanner: {
      heading: "So entsteht Ihre Markenpräsenz.",
      body: "Vier klare Schritte von der Positionierung bis zum laufenden Redaktionsplan – mit klarer Handschrift statt Posting-Akkord.",
    },
    process: [
      {
        num: "01",
        title: "Positionierung",
        body: "Klärung der Online-Identität und Zielgruppe – wofür steht die Marke, für wen, mit welcher Haltung.",
        bullets: [
          "Markenkern und Tonalität",
          "Zielgruppen-Verständnis",
          "Wettbewerbs- und Marktkontext",
        ],
      },
      {
        num: "02",
        title: "Kanal & Profil",
        body: "Plattformauswahl und technisches Profil-Setup – nur dort präsent sein, wo es wirklich Wirkung entfaltet.",
        bullets: [
          "Kanalauswahl statt Gießkanne",
          "Profil- und Bio-Optimierung",
          "Konsistente visuelle Basis",
        ],
      },
      {
        num: "03",
        title: "Content-Konzept",
        body: "Definition von Themen, Formaten und Tonalität – ein Konzept, das skaliert, ohne an Klarheit zu verlieren.",
        bullets: [
          "Themenwelten und Formate",
          "Tonalität und Bildsprache",
          "Kanalübergreifende Konsistenz",
        ],
      },
      {
        num: "04",
        title: "Übergabe & Struktur",
        body: "Bereitstellung von Redaktionsplan und Styleguide – damit Inhalte auch ohne Agentur laufen.",
        bullets: [
          "Redaktionsplan",
          "Styleguide mit klaren Regeln",
          "Optionale laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit für eine klare Markenwirkung?",
      body: "Ein unverbindliches Erstgespräch – wir klären Positionierung, Kanäle und Ziele. Antwort innerhalb von 24 Stunden.",
    },
  },

  {
    slug: "ki-assistenten",
    shortName: "KI-Assistenten",
    navName: "KI-Assistenten & Chatbots",
    tagline:
      "Eigene Assistenten und Chatbots, die Routineanfragen übernehmen, 24/7 antworten und Ihr Team entlasten.",
    hero: {
      heading: "KI, die für Sie kommuniziert.",
      bodyHtml:
        'Jede Anfrage, die <span class="font-semibold">manuell</span> beantwortet werden muss, kostet Zeit. Jede Anfrage, die <span class="font-semibold">zu lange wartet</span>, kostet Kunden. KI-Assistenten lösen beides.',
      image: "/images/services/leistung-ki-assistenten.png",
      imageAlt: "KI-Assistent für Kundenkommunikation",
      cards: [
        {
          icon: "book",
          title: "Wissensbasis",
          body: "Antwortet auf Basis Ihrer Inhalte",
        },
        {
          icon: "plug",
          title: "Integration",
          body: "Website, CRM, Messenger",
        },
      ],
    },
    audience: {
      eyebrow: "Für wen",
      heading: "Erstkontakt ohne Wartezeit.",
      bodyHtml:
        'Kunden erwarten <span class="font-semibold">schnelle Antworten – jederzeit</span>. KI-Assistenten übernehmen wiederkehrende Anfragen, filtern <span class="font-semibold">qualifizierte Leads</span> und schaffen Freiraum für das, worauf es wirklich ankommt.',
      bullets: [
        "Dienstleister mit vielen Erstanfragen und FAQ-Themen.",
        "E-Commerce und Plattformen mit Support-Volumen.",
        "Teams, die 24/7-Verfügbarkeit ohne Schichtbetrieb brauchen.",
      ],
    },
    features: {
      heading: "Was in jedem KI-Assistenten steckt",
      items: [
        {
          icon: "book",
          title: "Eigene Wissensbasis",
          body: "Der Assistent antwortet auf Basis Ihrer Inhalte – dokumentiert, kontrolliert und jederzeit aktualisierbar.",
        },
        {
          icon: "spark",
          title: "Design & Logik",
          body: "Gesprächsführung, Tonalität und Eskalationswege – klar definiert, damit der Assistent zur Marke passt.",
        },
        {
          icon: "plug",
          title: "Integration & Handover",
          body: "Anbindung an Website, CRM oder Messenger – mit sauberer Übergabe an Menschen, wenn es nötig ist.",
        },
      ],
    },
    testimonial: {
      heading: "So erleben Kunden KI-Assistenten von Nesani",
      name: "Tobias R.",
      role: "Beispielrezension",
      quote:
        "Unser Support beantwortet inzwischen nur noch die Fälle, die wirklich Aufmerksamkeit brauchen. Der Rest läuft zuverlässig über den Assistenten – und Kunden merken den Unterschied kaum.",
    },
    processBanner: {
      heading: "So entsteht Ihr KI-Assistent.",
      body: "Vier klare Schritte von der Wissensbasis bis zur laufenden Optimierung – datenschutzkonform und zur Marke passend.",
    },
    process: [
      {
        num: "01",
        title: "Wissensbasis",
        body: "Aufbau einer strukturierten, gepflegten Wissensbasis – damit der Assistent verlässlich und nachvollziehbar antwortet.",
        bullets: [
          "Inhalte sammeln und strukturieren",
          "Qualität und Aktualität sichern",
          "Zugriffsrechte und Grenzen definieren",
        ],
      },
      {
        num: "02",
        title: "Design & Logik",
        body: "Festlegen von Tonalität, Gesprächsführung und Eskalationspfaden – damit der Assistent menschlich wirkt, ohne Grenzen zu verlieren.",
        bullets: [
          "Tonalität und Gesprächsführung",
          "Eskalationswege zum Menschen",
          "Datenschutz- und Compliance-Regeln",
        ],
      },
      {
        num: "03",
        title: "Integration",
        body: "Einbindung in Ihre Kanäle und Systeme – mit sicherer Authentifizierung und sauberer Datenflusslogik.",
        bullets: [
          "Einbindung in Website und Kanäle",
          "CRM- und Tool-Integration",
          "Authentifizierung und Datenschutz",
        ],
      },
      {
        num: "04",
        title: "Test & Optimierung",
        body: "Iterative Tests mit echten Dialogen – damit der Assistent über Zeit nicht schlechter, sondern besser wird.",
        bullets: [
          "Testläufe mit echten Dialogen",
          "Qualitäts- und Sicherheitschecks",
          "Laufende Optimierung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit, Kommunikation neu zu denken?",
      body: "Ein unverbindliches Erstgespräch – wir klären Anwendungsfall, Tonalität und Ziele. Antwort innerhalb von 24 Stunden.",
    },
  },

  {
    slug: "systemarchitektur",
    shortName: "Systemarchitektur",
    navName: "Individuelle Systemarchitektur",
    tagline:
      "Maßgeschneiderte Softwarelösungen mit klarer Architektur – dokumentiert, wartbar und gebaut, um zu skalieren.",
    hero: {
      heading: "Maßgeschneiderte digitale Infrastruktur.",
      bodyHtml:
        'Wenn Standardlösungen an Grenzen stoßen, braucht es eine <span class="font-semibold">Architektur</span>, die zu Ihren Prozessen passt – <span class="font-semibold">skalierbar, sicher und wartbar</span>.',
      image: "/images/services/leistung-systemarchitektur.png",
      imageAlt: "Individuelle Systemarchitektur",
      cards: [
        {
          icon: "layers",
          title: "Saubere Architektur",
          body: "Module, Schnittstellen, Datenflüsse",
        },
        {
          icon: "cog",
          title: "Betrieb & Übergabe",
          body: "CI/CD, Monitoring, Logging",
        },
      ],
    },
    audience: {
      eyebrow: "Für wen",
      heading: "Wenn Standard nicht mehr ausreicht.",
      bodyHtml:
        'Viele Unternehmen erreichen einen Punkt, an dem <span class="font-semibold">SaaS-Tools, Plug-ins und Baukästen</span> ihre Prozesse eher einschränken als ermöglichen. Dann braucht es eine <span class="font-semibold">eigene, saubere Architektur</span>.',
      bullets: [
        "Unternehmen an den Grenzen von Standardlösungen.",
        "Spezielle Daten-, Prozess- oder Integrationsanforderungen.",
        "Teams, die Skalierbarkeit langfristig sichern wollen.",
      ],
    },
    features: {
      heading: "Was in jeder Systemarchitektur steckt",
      items: [
        {
          icon: "checklist",
          title: "Klare Anforderungen",
          body: "Bevor Code entsteht, entstehen saubere Anforderungen: fachlich, technisch und organisatorisch abgestimmt.",
        },
        {
          icon: "layers",
          title: "Saubere Architektur",
          body: "Module, Datenflüsse und Schnittstellen, die langfristig tragen – dokumentiert, testbar, wartbar.",
        },
        {
          icon: "cog",
          title: "Betrieb & Übergabe",
          body: "Sauberer Betriebsmodus: CI/CD, Monitoring, Logging und eine Übergabe, bei der Ihr Team nicht ratlos bleibt.",
        },
      ],
    },
    testimonial: {
      heading: "So erleben Kunden Systemarchitektur von Nesani",
      name: "Daniela K.",
      role: "Beispielrezension",
      quote:
        "Unsere Plattform trägt heute Lasten, bei denen die alte Lösung längst gescheitert wäre – und unser Team kann sie wirklich selbst betreiben.",
    },
    processBanner: {
      heading: "So entsteht Ihre Architektur.",
      body: "Vier klare Schritte von den Anforderungen bis in den laufenden Betrieb – ohne Quick-Fix-Kultur und ohne versteckte Abhängigkeiten.",
    },
    process: [
      {
        num: "01",
        title: "Requirements",
        body: "Wir klären fachliche und technische Anforderungen – und trennen Muss-Kriterien von Kann-Kriterien, bevor Aufwand entsteht.",
        bullets: [
          "Fachliche Anforderungen",
          "Technische Rahmenbedingungen",
          "Priorisierung und Zielbild",
        ],
      },
      {
        num: "02",
        title: "Architektur-Design",
        body: "Entwurf der Systemarchitektur: Module, Schnittstellen, Datenmodell und Betriebsmodell – technisch fundiert und nachvollziehbar.",
        bullets: [
          "Modul- und Schichtenmodell",
          "Schnittstellen und Datenmodell",
          "Sicherheits- und Skalierungskonzept",
        ],
      },
      {
        num: "03",
        title: "Entwicklung",
        body: "Saubere Umsetzung mit Fokus auf Wartbarkeit, Testabdeckung und Performance – keine versteckten Abhängigkeiten, keine Quick-Fix-Kultur.",
        bullets: [
          "Iterative Umsetzung",
          "Qualität und Testabdeckung",
          "Performance- und Sicherheitschecks",
        ],
      },
      {
        num: "04",
        title: "Übergabe & Betrieb",
        body: "Dokumentation, CI/CD, Monitoring und Schulung – damit das System nicht nur läuft, sondern langfristig betrieben und weiterentwickelt werden kann.",
        bullets: [
          "CI/CD und Monitoring",
          "Dokumentation und Schulung",
          "Optionale laufende Betreuung",
        ],
      },
    ],
    finalCta: {
      heading: "Bereit für eine Architektur, die trägt?",
      body: "Ein unverbindliches Erstgespräch – wir schauen auf Ihre aktuelle Infrastruktur und klären, wo Passform sich wirklich lohnt.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
