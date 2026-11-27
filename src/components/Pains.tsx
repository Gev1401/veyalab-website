import { useI18n } from "@/i18n";
import { nb } from "@/lib/nobreak";

const Pains = () => {
  const { t } = useI18n();

  return (
    <section id="pain" className="bg-bg section-padding">
      <div className="container mx-auto">
        <p className="label-eyebrow mb-4">{nb(t.pains.eyebrow)}</p>
        <h2 className="font-display font-black text-ink text-[clamp(1.75rem,4vw,3rem)] leading-tight max-w-3xl">
          {nb(t.pains.title)}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {t.pains.items.map((point) => (
            <div key={point.who} className="rounded-lg bg-bg-alt p-7 md:p-8">
              <span className="label-eyebrow block mb-3">{nb(point.who)}</span>
              <p className="text-ink text-lg md:text-xl leading-snug">{nb(point.pain)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pains;
