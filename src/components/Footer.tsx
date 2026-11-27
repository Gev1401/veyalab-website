import { useI18n } from "@/i18n";
import { pathFor } from "@/lib/routes";
import { site } from "@/lib/site";

const Footer = () => {
  const { t, lang } = useI18n();

  return (
    <footer className="py-14 bg-bg border-t border-line">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <span className="font-display text-2xl font-black text-ink leading-none block -mt-1">
              Veyalab<span className="text-accent">.</span>
            </span>
            <p className="text-sm text-ink-muted mt-3 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div className="text-sm space-y-2">
            <h4 className="label-eyebrow mb-3">{t.footer.contacts}</h4>
            <p className="text-ink-muted">
              {t.footer.telegram}{" "}
              <a href={site.telegram.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                {site.telegram.handle}
              </a>
            </p>
            <p className="text-ink-muted">
              {t.footer.email}{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <a href={pathFor("privacy", lang)} className="text-accent hover:underline">
                {t.footer.privacy}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-line mt-10 pt-6 text-sm text-ink-muted">
          © 2026 Veyalab · {site.domain}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
