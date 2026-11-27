import { useI18n } from "@/i18n";
import { site } from "@/lib/site";
import { nb } from "@/lib/nobreak";

const FinalCTA = () => {
  const { t } = useI18n();

  return (
    <section className="bg-black text-white section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-display font-black text-white text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            {nb(t.cta.title.text)} <span className="accent-word">{nb(t.cta.title.accent)}</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-snug">{nb(t.cta.text)}</p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={site.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-accent text-on-accent font-semibold text-base px-7 py-4 hover:brightness-110 transition-all"
            >
              {nb(t.cta.telegram)}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-pill border border-white/25 text-white font-semibold text-base px-7 py-4 hover:border-accent hover:text-accent transition-colors"
            >
              {nb(t.cta.email)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
