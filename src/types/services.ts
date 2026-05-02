export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
};

export type ServiceTestimonial = {
  name: string;
  quote: string;
};

export type ServiceCTA = {
  heading: string;
  text: string;
};

export type ServiceAudience = {
  heading: string;
  intro: string;
  bullets: string[];
};

export type Service = {
  slug: string;
  shortName: string;
  navName: string;
  tagline: string;
  hero: {
    eyebrow: string;
    heading: string;
    subline: string;
  };
  audience: ServiceAudience;
  features: ServiceFeature[];
  testimonial: ServiceTestimonial;
  process: ServiceProcessStep[];
  finalCta: ServiceCTA;
};
