import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import SimpleHeader from "@/components/SimpleHeader";
import { useI18n } from "@/i18n";
import { pathFor } from "@/lib/routes";
import { site } from "@/lib/site";
import { nb } from "@/lib/nobreak";

const Privacy = () => {
  const { t, lang } = useI18n();
  const p = t.privacy;

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SimpleHeader backLabel={p.back} />

      <main className="flex-1">
        <article className="container mx-auto max-w-3xl py-14 md:py-20">
          <h1 className="font-display font-black text-ink text-[clamp(1.375rem,4vw,2.75rem)] leading-tight mb-10 break-words hyphens-auto">
            {nb(p.title)}
          </h1>

          <div className="space-y-8 text-ink-muted leading-relaxed">
            {p.sections.map((s, i) => (
              <section key={s.title}>
                <h2 className="font-display font-black text-ink text-xl mb-3">
                  {i + 1}. {nb(s.title)}
                </h2>
                <p>{nb(s.text)}</p>
              </section>
            ))}
            <p>
              {nb(p.contact)}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>

          <a
            href={pathFor("home", lang)}
            className="mt-12 inline-flex items-center gap-1 text-sm text-accent hover:underline sm:hidden"
          >
            <ArrowLeft className="h-4 w-4" /> {nb(p.back)}
          </a>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
