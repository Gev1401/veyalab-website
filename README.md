# veyalab.com

Сайт Veyalab: ИИ, заказная разработка и BI. Английская версия на `/`, русская на `/ru/`.

Vite + React + TypeScript + Tailwind + shadcn. Дизайн и компоненты из `veyalab-website-ru`,
макет BI-дашборда из `datalyzed-website` (перекрашен в палитру Veyalab).

## Структура

- `src/i18n/en.ts`, `src/i18n/ru.ts`: все тексты. Компоненты общие.
- `src/lib/routes.ts`: список страниц и файлов, в которые они собираются.
- `src/entry-server.tsx` + `scripts/prerender.mjs`: пререндер каждой страницы в свой HTML
  с `lang`, `title`, `description`, canonical, hreflang и OG-тегами.

| URL | Файл |
|---|---|
| `/` | `dist/index.html` |
| `/ru/` | `dist/ru/index.html` |
| `/privacy` | `dist/privacy.html` |
| `/ru/privacy` | `dist/ru/privacy.html` |
| любой другой | `dist/404.html` |

## Команды

```sh
npm ci
npm run dev     # дев-сервер (только EN-главная без пререндера)
npm run build   # клиентская сборка + SSR-бандл + пререндер в dist/
npm run check   # запрещённые слова, длинное тире, бренды в EN, CNAME
```

## Публикация

GitHub Actions (`.github/workflows/pages.yml`): на каждый PR сборка и проверки, на push в `main`
сборка и публикация `dist/` в ветку `gh-pages`, из которой GitHub Pages отдаёт veyalab.com.
`CNAME` (`veyalab.com`) лежит в `public/` и попадает в сборку. DNS в Cloudflare не трогаем.
