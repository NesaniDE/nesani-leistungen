"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { services } from "@/lib/services";

const primaryNav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#prozess", label: "Prozess" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-white" />
          NESANI
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/#kontakt"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Projekt anfragen
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden",
          open ? "block" : "hidden",
          "border-t border-white/5 bg-background"
        )}
      >
        <nav className="container-page flex flex-col gap-4 py-6 text-sm">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-2 border-t border-white/5 pt-4">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/40">
              Leistungen
            </p>
            <div className="flex flex-col gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  className="text-white/80"
                  onClick={() => setOpen(false)}
                >
                  {s.shortName}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#kontakt"
            className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black"
            onClick={() => setOpen(false)}
          >
            Projekt anfragen
          </Link>
        </nav>
      </div>
    </header>
  );
}
