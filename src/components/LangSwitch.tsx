import { useI18n } from "@/i18n";
import type { Lang } from "@/i18n/types";
import { pathFor } from "@/lib/routes";

const langs: Lang[] = ["en", "ru"];

const LangSwitch = () => {
  const { lang, kind } = useI18n();
  const target = kind === "notFound" ? "home" : kind;

  return (
    <div className="flex items-center text-sm font-semibold" aria-label="Language">
      {langs.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1.5 text-line">/</span>}
          {l === lang ? (
            <span className="text-ink" aria-current="true">
              {l.toUpperCase()}
            </span>
          ) : (
            <a
              href={pathFor(target, l)}
              hrefLang={l}
              lang={l}
              className="text-ink-muted hover:text-accent transition-colors"
            >
              {l.toUpperCase()}
            </a>
          )}
        </span>
      ))}
    </div>
  );
};

export default LangSwitch;
