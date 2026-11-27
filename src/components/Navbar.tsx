import { useI18n } from "@/i18n";
import LangSwitch from "@/components/LangSwitch";
import Logo from "@/components/Logo";

const Navbar = () => {
  const { t } = useI18n();
  const nav = [
    { href: "#services", label: t.nav.services },
    { href: "#bi", label: t.nav.bi },
    { href: "#cases", label: t.nav.cases },
    { href: "#process", label: t.nav.process },
    { href: "#why", label: t.nav.why },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-line">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-3 py-4">
          <Logo href="#top" className="text-lg sm:text-2xl" />

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-5">
            <LangSwitch />
            <a
              href="#contact"
              className="hidden min-[360px]:inline-flex items-center justify-center rounded-pill bg-accent text-on-accent font-semibold text-[13px] sm:text-sm px-3.5 sm:px-5 py-2.5 whitespace-nowrap hover:bg-violet-deep transition-colors"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
