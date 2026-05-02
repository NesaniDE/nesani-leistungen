import { Check } from "lucide-react";

import type { ServiceAudience } from "@/types/services";

type AudienceSectionProps = {
  audience: ServiceAudience;
};

export function AudienceSection({ audience }: AudienceSectionProps) {
  return (
    <section className="relative border-b border-white/5 py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
            Für wen
          </p>
          <h2 className="heading-section text-balance text-white">
            {audience.heading}
          </h2>
        </div>

        <div className="md:col-span-7">
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            {audience.intro}
          </p>

          <ul className="mt-10 space-y-4">
            {audience.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 border-t border-white/5 pt-4 text-sm text-white/80 md:text-base"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]">
                  <Check className="h-3 w-3 text-white" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
