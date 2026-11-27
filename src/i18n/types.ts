export type Lang = "en" | "ru";

/** Заголовок с одной фразой, выделенной .accent-word */
export type AccentHeading = { text: string; accent: string };

export type Card = { title: string; text: string };

export type CaseItem = {
  industry: string;
  title: string;
  points: string[];
  metrics: { value: string; label: string }[];
};

export type Dict = {
  meta: { title: string; description: string; locale: string };
  nav: { services: string; bi: string; cases: string; process: string; why: string; cta: string };
  hero: {
    eyebrow: string;
    title: AccentHeading;
    subtitle: string;
    primary: string;
    secondary: string;
    note?: string;
  };
  pains: { eyebrow: string; title: string; items: { who: string; pain: string }[] };
  solutions: { eyebrow: string; title: string; items: Card[] };
  bi: {
    eyebrow: string;
    title: string;
    text: string;
    items: Card[];
    caption: string;
    dashboard: {
      kpis: { label: string; value: string; delta: string }[];
      months: string[];
      revenue: string;
      margin: string;
      planFact: string;
      sources: string;
      sourceNames: string[];
    };
  };
  cases: { eyebrow: string; title: string; items: CaseItem[] };
  process: { eyebrow: string; title: string; items: Card[] };
  why: { eyebrow: string; title: string; items: Card[] };
  cta: { title: AccentHeading; text: string; telegram: string; email: string };
  footer: {
    tagline: string;
    contacts: string;
    telegram: string;
    email: string;
    privacy: string;
  };
  privacy: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    back: string;
    sections: { title: string; text: string }[];
    contact: string;
  };
  notFound: { title: string; text: string; back: string };
};
