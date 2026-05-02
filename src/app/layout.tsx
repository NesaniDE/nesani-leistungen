import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NESANI – Sichtbarer. Effizienter. Autonomer.",
    template: "%s | NESANI",
  },
  description:
    "Wir bauen moderne Websites, KI-Workflows, autonome Agenten, KI-Assistenten und individuelle Systemarchitekturen – aus Schwäbisch Gmünd.",
  metadataBase: new URL("https://www.nesani.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "NESANI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
