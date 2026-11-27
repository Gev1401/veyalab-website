// Пререндер: каждая страница собирается в отдельный HTML с собственными мета-тегами,
// чтобы прямые ссылки и превью работали на GitHub Pages без JS.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { pages, render, head } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

for (const page of pages) {
  const html = template
    .replace("<!--lang-->", page.lang)
    .replace("<!--page-->", page.id)
    .replace("<!--head-->", head(page))
    .replace("<!--app-->", render(page));
  const out = path.join(dist, page.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log(`prerendered ${page.path.padEnd(12)} -> dist/${page.file}`);
}

fs.rmSync(ssrDir, { recursive: true, force: true });
