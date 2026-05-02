import type { ServiceProcessStep } from "@/types/services";

type ProcessSectionProps = {
  steps: ServiceProcessStep[];
  heading?: string;
};

export function ProcessSection({
  steps,
  heading = "Vorgehen in 4 Schritten.",
}: ProcessSectionProps) {
  return (
    <section id="prozess" className="border-b border-white/5 py-24 md:py-32">
      <div className="container-page">
        <div className="mb-16 max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
            Prozess
          </p>
          <h2 className="heading-section text-balance text-white">{heading}</h2>
        </div>

        <div className="space-y-px">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-6 border-t border-white/10 py-8 md:grid-cols-12 md:gap-10 md:py-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-sm text-white/40">{step.number}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {step.title}
                </h3>
              </div>

              <div className="md:col-span-6">
                <p className="text-base text-white/70">{step.description}</p>
              </div>

              {step.bullets ? (
                <ul className="space-y-2 md:col-span-3">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
