import { useI18n } from "@/i18n";
import { site } from "@/lib/site";
import { nb } from "@/lib/nobreak";

const Hero = () => {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-bg">
      <div className="container mx-auto pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-4xl">
          <p className="label-eyebrow mb-5">{nb(h.eyebrow)}</p>

          <h1 className="font-display font-black text-ink leading-[1.04] tracking-tight text-[clamp(2.5rem,7vw,5.25rem)]">
            {nb(h.title.text)} <span className="accent-word">{nb(h.title.accent)}</span>
          </h1>

          <p className="mt-7 text-lg md:text-2xl font-medium text-ink-muted max-w-2xl leading-snug">
            {nb(h.subtitle)}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={site.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-accent text-on-accent font-semibold text-base px-7 py-4 hover:bg-violet-deep transition-colors"
            >
              {nb(h.primary)}
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center rounded-pill border border-ink/15 text-ink font-semibold text-base px-7 py-4 hover:border-accent hover:text-accent transition-colors"
            >
              {nb(h.secondary)}
            </a>
          </div>

          {h.note && <p className="mt-7 text-sm text-ink-muted">{nb(h.note)}</p>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
