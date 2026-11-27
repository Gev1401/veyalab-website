import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n";
import LangSwitch from "@/components/LangSwitch";
import Logo from "@/components/Logo";
import { pathFor } from "@/lib/routes";

/** Шапка служебных страниц (политика, 404) */
const SimpleHeader = ({ backLabel }: { backLabel: string }) => {
  const { lang } = useI18n();
  const home = pathFor("home", lang);

  return (
    <header className="w-full border-b border-line bg-bg">
      <div className="container mx-auto py-4 flex items-center justify-between gap-4">
        <Logo href={home} className="text-xl" />
        <div className="flex items-center gap-5">
          <a href={home} className="hidden sm:inline-flex items-center gap-1 text-sm text-accent hover:underline">
            <ArrowLeft className="h-4 w-4" /> {backLabel}
          </a>
          <LangSwitch />
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
