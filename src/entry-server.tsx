import { renderToString } from "react-dom/server";
import App from "./App";
import { dictionaries } from "./i18n";
import { pages, pathFor, type PageDef } from "./lib/routes";
import { site } from "./lib/site";

export { pages };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const render = (page: PageDef) => renderToString(<App page={page} />);

/** Мета-теги страницы: title, description, canonical, hreflang, OG */
export const head = (page: PageDef) => {
  const t = dictionaries[page.lang];
  const title = page.kind === "privacy" ? t.privacy.metaTitle : page.kind === "notFound" ? `404 · Veyalab` : t.meta.title;
  const description = page.kind === "privacy" ? t.privacy.metaDescription : t.meta.description;
  const url = site.origin + page.path;
  const image = `${site.origin}/og-${page.lang}.png`;

  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
  ];

  if (page.kind === "notFound") {
    tags.push(`<meta name="robots" content="noindex" />`);
    return tags.join("\n    ");
  }

  const kind = page.kind;
  tags.push(
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${site.origin}${pathFor(kind, "en")}" />`,
    `<link rel="alternate" hreflang="ru" href="${site.origin}${pathFor(kind, "ru")}" />`,
    `<link rel="alternate" hreflang="x-default" href="${site.origin}${pathFor(kind, "en")}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Veyalab" />`,
    `<meta property="og:locale" content="${t.meta.locale}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  );
  return tags.join("\n    ");
};
