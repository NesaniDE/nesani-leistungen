import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { ServiceHero } from "@/components/site/service-hero";
import { AudienceSection } from "@/components/site/audience-section";
import { FeaturesSection } from "@/components/site/features-section";
import { TestimonialSection } from "@/components/site/testimonial-section";
import { ProcessSection } from "@/components/site/process-section";
import { CtaSection } from "@/components/site/cta-section";
import { RelatedServices } from "@/components/site/related-services";
import { getServiceBySlug, services } from "@/lib/services";

type Params = { slug: string };

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Params[]> {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Leistung" };
  }

  return {
    title: service.hero.heading,
    description: service.hero.subline,
    openGraph: {
      title: `${service.navName} – NESANI`,
      description: service.hero.subline,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServiceHero
          eyebrow={service.hero.eyebrow}
          heading={service.hero.heading}
          subline={service.hero.subline}
        />
        <AudienceSection audience={service.audience} />
        <FeaturesSection features={service.features} />
        <TestimonialSection testimonial={service.testimonial} />
        <ProcessSection steps={service.process} />
        <CtaSection cta={service.finalCta} />
        <RelatedServices currentSlug={service.slug} />
      </main>
      <SiteFooter />
    </>
  );
}
