import { useI18n } from "@/i18n";

const HowWeWork = () => {
  const { t } = useI18n();

  return (
    <section id="process" className="bg-violet-deep text-white section-padding">
      <div className="container mx-auto">
        <p className="label-eyebrow mb-4">{t.process.eyebrow}</p>
        <h2 className="font-display font-black text-white text-[clamp(1.75rem,4vw,3rem)] leading-tight max-w-3xl">
          {t.process.title}
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          {t.process.items.map((step, i) => (
            <div key={step.title} className="flex gap-6">
              <span className="font-display font-black text-accent text-4xl md:text-5xl leading-none shrink-0 w-20 md:w-24">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display font-black text-white text-xl md:text-2xl leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 leading-snug">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
