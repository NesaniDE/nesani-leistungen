import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ServiceHero } from "@/components/site/service-hero";
import { ServiceAudienceSection } from "@/components/site/service-audience";
import { ServiceFeaturesSection } from "@/components/site/service-features";
import { ServiceTestimonialSection } from "@/components/site/service-testimonial";
import {
  ServiceProcessBanner,
  ServiceProcessCards,
} from "@/components/site/service-process";
import { ServiceFinalCta } from "@/components/site/service-final-cta";
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
    title: service.shortName,
    description: service.tagline,
    openGraph: {
      title: `${service.navName} – Nesani`,
      description: service.tagline,
      images: [service.hero.image],
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
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceAudienceSection audience={service.audience} />
        <ServiceFeaturesSection
          heading={service.features.heading}
          features={service.features.items}
        />
        <ServiceTestimonialSection
          heading={service.testimonial.heading}
          quote={service.testimonial.quote}
          name={service.testimonial.name}
          role={service.testimonial.role}
        />
        <ServiceProcessBanner
          heading={service.processBanner.heading}
          body={service.processBanner.body}
        />
        <ServiceProcessCards steps={service.process} />
        <ServiceFinalCta cta={service.finalCta} />
      </main>
      <Footer />
    </>
  );
}
