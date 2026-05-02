import type { IconName } from "@/types/services";

export type LpFeature = {
  icon: IconName;
  title: string;
  body: string;
};

export type LpStat = {
  big: string;
  label: string;
};

export type HeroLayout = "bleed" | "split";

export type LandingPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    headingLines: [string, string];
    subline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: string;
    imageMobile: string;
    layout: HeroLayout;
  };
  stats: [LpStat, LpStat, LpStat];
  features: {
    eyebrow: string;
    headingLines: [string, string];
    items: LpFeature[];
    moreInfoHref: string;
  };
  checklist: {
    eyebrow: string;
    headingLines: [string, string, string];
    body: string;
    formSource: string;
    ctaLabel: string;
    sideTitle: string;
    sideBody: string;
  };
  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
  };
};
