import Footer from "@/components/Footer";
import SimpleHeader from "@/components/SimpleHeader";
import { useI18n } from "@/i18n";
import { pathFor } from "@/lib/routes";
import { nb } from "@/lib/nobreak";

const NotFound = () => {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <SimpleHeader backLabel={t.notFound.back} />
      <main className="flex-1 flex items-center">
        <div className="container mx-auto py-20">
          <p className="label-eyebrow mb-4">404</p>
          <h1 className="font-display font-black text-ink text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            {nb(t.notFound.title)}
          </h1>
          <p className="mt-5 text-lg text-ink-muted">{nb(t.notFound.text)}</p>
          <a
            href={pathFor("home", lang)}
            className="mt-8 inline-flex items-center justify-center rounded-pill bg-accent text-on-accent font-semibold text-base px-7 py-4 hover:bg-violet-deep transition-colors"
          >
            {nb(t.notFound.back)}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
