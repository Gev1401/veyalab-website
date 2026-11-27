import { useI18n } from "@/i18n";

const WhyUs = () => {
  const { t } = useI18n();
  const cols = t.why.items.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section id="why" className="bg-bg section-padding">
      <div className="container mx-auto">
        <p className="label-eyebrow mb-4">{t.why.eyebrow}</p>
        <h2 className="font-display font-black text-ink text-[clamp(1.75rem,4vw,3rem)] leading-tight max-w-3xl">
          {t.why.title}
        </h2>

        <div className={`mt-12 grid gap-5 md:grid-cols-2 ${cols}`}>
          {t.why.items.map((advantage) => (
            <div key={advantage.title} className="rounded-lg bg-bg-alt p-7">
              <div className="w-10 h-1 rounded-pill bg-accent mb-5" />
              <h3 className="font-display font-black text-ink text-lg md:text-xl leading-tight">
                {advantage.title}
              </h3>
              <p className="mt-3 text-ink-muted leading-snug">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
