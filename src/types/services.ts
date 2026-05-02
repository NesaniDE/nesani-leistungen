export type IconName =
  | "code"
  | "gauge"
  | "target"
  | "spark"
  | "flow"
  | "activity"
  | "magnifier"
  | "cog"
  | "clipboard"
  | "book"
  | "plug"
  | "network"
  | "eye"
  | "compass"
  | "layers"
  | "layout"
  | "palette"
  | "calendar"
  | "key"
  | "shield"
  | "users"
  | "rocket"
  | "checklist";

export type HeroFeatureCard = {
  icon: IconName;
  title: string;
  body: string;
};

export type ServiceFeature = {
  icon: IconName;
  title: string;
  body: string;
};

export type ServiceProcessStep = {
  num: string;
  title: string;
  body: string;
  bullets: string[];
};

export type ServiceTestimonial = {
  name: string;
  role: string;
  quote: string;
};

export type ServiceCTA = {
  heading: string;
  body: string;
  image?: string;
};

export type ServiceAudience = {
  eyebrow: string;
  heading: string;
  bodyHtml: string;
  bullets: string[];
};

export type Service = {
  slug: string;
  shortName: string;
  navName: string;
  tagline: string;
  hero: {
    heading: string;
    bodyHtml: string;
    image: string;
    imageAlt: string;
    cards: [HeroFeatureCard, HeroFeatureCard];
  };
  audience: ServiceAudience;
  features: {
    heading: string;
    items: [ServiceFeature, ServiceFeature, ServiceFeature];
  };
  testimonial: {
    heading: string;
    name: string;
    role: string;
    quote: string;
  };
  processBanner: {
    heading: string;
    body: string;
  };
  process: ServiceProcessStep[];
  finalCta: ServiceCTA;
};
