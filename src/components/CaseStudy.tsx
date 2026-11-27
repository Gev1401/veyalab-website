import { useI18n } from "@/i18n";
import { nb } from "@/lib/nobreak";

const CaseStudy = () => {
  const { t } = useI18n();

  return (
    <section id="cases" className="bg-bg section-padding">
      <div className="container mx-auto">
        <p className="label-eyebrow mb-4">{nb(t.cases.eyebrow)}</p>
        <h2 className="font-display font-black text-ink text-[clamp(1.75rem,4vw,3rem)] leading-tight max-w-3xl">
          {nb(t.cases.title)}
        </h2>

        <div className="mt-12 space-y-5">
          {t.cases.items.map((c) => (
            <div key={c.title} className="rounded-lg bg-bg-alt p-7 md:p-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-start">
                {/* Левая часть */}
                <div>
                  <span className="label-eyebrow block mb-3">{nb(c.industry)}</span>
                  <h3 className="font-display font-black text-ink text-2xl md:text-3xl leading-tight">
                    {nb(c.title)}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3 text-ink-muted leading-snug">
                        <span className="mt-2 h-1.5 w-1.5 rounded-pill bg-accent shrink-0" />
                        <span>{nb(p)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Метрики к правому краю, одна под другой */}
                <div className="space-y-6 lg:text-right lg:min-w-[260px]">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-black text-accent text-[clamp(3.5rem,8vw,6rem)] leading-none tracking-tight">
                        {m.value}
                      </div>
                      <div className="mt-2 text-ink text-base md:text-lg">{nb(m.label)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
