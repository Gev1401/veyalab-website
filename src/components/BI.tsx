import { useI18n } from "@/i18n";
import BIDashboard from "@/components/BIDashboard";
import NumberedCard from "@/components/NumberedCard";

const BI = () => {
  const { t } = useI18n();

  return (
    <section id="bi" className="bg-bg-alt section-padding">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:items-center">
          <div>
            <p className="label-eyebrow mb-4">{t.bi.eyebrow}</p>
            <h2 className="font-display font-black text-ink text-[clamp(1.75rem,4vw,3rem)] leading-tight">
              {t.bi.title}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-ink-muted leading-snug">{t.bi.text}</p>
          </div>

          <figure className="min-w-0">
            <BIDashboard />
            <figcaption className="mt-3 text-sm italic text-ink-muted">{t.bi.caption}</figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.bi.items.map((item, i) => (
            <NumberedCard key={item.title} item={item} index={i} className="bg-bg" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BI;
