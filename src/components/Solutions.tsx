import { useI18n } from "@/i18n";
import NumberedCard from "@/components/NumberedCard";

const Solutions = () => {
  const { t } = useI18n();

  return (
    <section id="services" className="bg-bg section-padding">
      <div className="container mx-auto">
        <p className="label-eyebrow mb-4">{t.solutions.eyebrow}</p>
        <h2 className="font-display font-black text-ink text-[clamp(1.75rem,4vw,3rem)] leading-tight max-w-3xl">
          {t.solutions.title}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.solutions.items.map((item, i) => (
            <NumberedCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
