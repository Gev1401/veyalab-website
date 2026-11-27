import { Fragment, type ReactNode } from "react";

// Слова с дефисом («ИИ-решения», «Fixed-price», «6-8») не должны рваться по дефису.
// Неразрывного дефиса U+2011 нет в наших шрифтах, поэтому оборачиваем такие слова в nowrap.
const hyphenated = /(\S+-\S+)/;

export const nb = (text: string): ReactNode =>
  text.split(hyphenated).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
