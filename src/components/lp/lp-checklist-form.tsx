"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRightIcon, CheckIcon } from "@/components/icons";

type Status = "idle" | "sending" | "success";

export function LpChecklistForm({
  source,
  ctaLabel = "Checkliste anfordern",
}: {
  source: string;
  ctaLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = (data.get("email") || "").toString().trim();
    if (!email) return;

    setStatus("sending");

    window.setTimeout(() => {
      setStatus("success");
      try {
        form.reset();
      } catch {
        // form unmounted — egal
      }
      const subject = encodeURIComponent(`Checkliste anfordern: ${source}`);
      const body = encodeURIComponent(
        `Hallo Nesani,\n\nbitte schicken Sie mir die Checkliste zu "${source}".\n\nMeine E-Mail: ${email}\n\nDanke!`,
      );
      const mailto = `mailto:info@nesani.de?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    }, 500);
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white text-[#050505] px-5 py-5 max-w-[520px]">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#050505] text-white">
            <CheckIcon className="h-3 w-3" />
          </span>
          <div>
            <div className="font-semibold text-[15px]">Vielen Dank!</div>
            <div className="text-[14px] leading-[1.5] text-[#050505]/75 mt-0.5">
              Ihre E-Mail-App öffnet sich jetzt. Falls nicht, schreiben Sie uns
              direkt an{" "}
              <a
                href="mailto:info@nesani.de"
                className="underline underline-offset-2"
              >
                info@nesani.de
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-[520px]">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="Ihre E-Mail-Adresse"
          autoComplete="email"
          disabled={status === "sending"}
          className="flex-1 rounded-full bg-white/[0.06] border border-white/15 px-5 py-3 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-6 py-3 hover:bg-white/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Wird gesendet…" : ctaLabel}
          {status !== "sending" && <ArrowUpRightIcon className="w-4 h-4" />}
        </button>
      </div>
      <p className="mt-3 text-[12px] leading-[1.5] text-white/55">
        Mit dem Absenden willigen Sie ein, dass Nesani Sie per E-Mail zu
        eigenen Leistungen kontaktieren darf. Diese Einwilligung können Sie
        jederzeit formlos widerrufen. Mehr in der{" "}
        <a
          href="/datenschutz"
          className="underline underline-offset-2 hover:text-white"
        >
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
