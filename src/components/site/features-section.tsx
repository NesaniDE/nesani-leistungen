import type { ServiceFeature } from "@/types/services";

type FeaturesSectionProps = {
  features: ServiceFeature[];
  heading?: string;
};

export function FeaturesSection({
  features,
  heading = "Was in jeder Umsetzung steckt.",
}: FeaturesSectionProps) {
  return (
    <section className="border-b border-white/5 py-24 md:py-32">
      <div className="container-page">
        <div className="mb-16 max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
            Substanz
          </p>
          <h2 className="heading-section text-balance text-white">{heading}</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="bg-background p-8 md:p-10"
            >
              <p className="mb-6 text-xs font-mono text-white/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-white/65 md:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
