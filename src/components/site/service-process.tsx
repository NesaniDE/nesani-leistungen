import { ArrowUpRightIcon } from "@/components/icons";
import type { ServiceProcessStep } from "@/types/services";

export function ServiceProcessBanner({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section id="process" className="bg-[#050505] text-white overflow-hidden">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 py-16 md:py-24 lg:py-28">
        <div className="max-w-[780px]">
          <h2 className="font-sans font-semibold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
            {heading}
          </h2>
          <p className="mt-6 md:mt-8 text-[16px] md:text-[18px] leading-[1.55] text-white/80 max-w-[52ch]">
            {body}
          </p>
          <div className="mt-8">
            <a
              href="#process-cards"
              className="inline-flex items-center gap-1.5 rounded-full bg-white text-[#050505] text-[15px] font-semibold px-5 py-3 hover:bg-white/90 transition"
            >
              Prozess im Detail
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceProcessCards({
  steps,
}: {
  steps: ReadonlyArray<ServiceProcessStep>;
}) {
  return (
    <section id="process-cards" className="bg-[#050505] text-white">
      <div className="mx-auto max-w-[1344px] px-5 md:px-8 lg:px-12 pb-16 md:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((s) => (
            <article
              key={s.num}
              className="rounded-2xl md:rounded-3xl bg-[#0F0F0F] border border-white/5 p-6 md:p-8 lg:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <span className="font-sans font-semibold text-[44px] md:text-[56px] leading-none text-white/20">
                  {s.num}
                </span>
                <h3 className="font-sans font-semibold text-[22px] md:text-[26px] leading-[1.2]">
                  {s.title}
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] leading-[1.55] text-white/75">
                {s.body}
              </p>
              <ul className="mt-auto space-y-2 text-[13px] md:text-[14px] text-white/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-white/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
