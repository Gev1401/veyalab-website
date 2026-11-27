import type { Lang } from "@/i18n/types";

export type PageKind = "home" | "privacy" | "notFound";

export type PageDef = {
  id: string;
  kind: PageKind;
  lang: Lang;
  /** Публичный путь (canonical) */
  path: string;
  /** Файл в dist */
  file: string;
};

export const pages: PageDef[] = [
  { id: "home-en", kind: "home", lang: "en", path: "/", file: "index.html" },
  { id: "home-ru", kind: "home", lang: "ru", path: "/ru/", file: "ru/index.html" },
  { id: "privacy-en", kind: "privacy", lang: "en", path: "/privacy", file: "privacy.html" },
  { id: "privacy-ru", kind: "privacy", lang: "ru", path: "/ru/privacy", file: "ru/privacy.html" },
  { id: "404", kind: "notFound", lang: "en", path: "/404", file: "404.html" },
];

export const pathFor = (kind: PageKind, lang: Lang): string => {
  if (kind === "privacy") return lang === "en" ? "/privacy" : "/ru/privacy";
  return lang === "en" ? "/" : "/ru/";
};
