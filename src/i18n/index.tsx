import { createContext, useContext, type ReactNode } from "react";
import type { PageKind } from "@/lib/routes";
import { en } from "./en";
import { ru } from "./ru";
import type { Dict, Lang } from "./types";

export const dictionaries: Record<Lang, Dict> = { en, ru };

type I18n = { lang: Lang; kind: PageKind; t: Dict };

const I18nContext = createContext<I18n>({ lang: "en", kind: "home", t: en });

export const I18nProvider = ({ lang, kind, children }: { lang: Lang; kind: PageKind; children: ReactNode }) => (
  <I18nContext.Provider value={{ lang, kind, t: dictionaries[lang] }}>{children}</I18nContext.Provider>
);

export const useI18n = () => useContext(I18nContext);
