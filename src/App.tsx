import { I18nProvider } from "@/i18n";
import type { PageDef } from "@/lib/routes";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";

const views = { home: Index, privacy: Privacy, notFound: NotFound };

const App = ({ page }: { page: PageDef }) => {
  const View = views[page.kind];
  return (
    <I18nProvider lang={page.lang} kind={page.kind}>
      <View />
    </I18nProvider>
  );
};

export default App;
