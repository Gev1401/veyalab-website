import type { Card } from "@/i18n/types";
import { nb } from "@/lib/nobreak";

/** Карточка на bg-alt с номером 01, 02… акцентным цветом */
const NumberedCard = ({ item, index, className = "bg-bg-alt" }: { item: Card; index: number; className?: string }) => (
  <div className={`rounded-lg p-7 md:p-8 ${className}`}>
    <span className="font-display font-black text-accent text-3xl leading-none">
      {String(index + 1).padStart(2, "0")}
    </span>
    <h3 className="mt-4 font-display font-black text-ink text-xl md:text-2xl leading-tight">{nb(item.title)}</h3>
    <p className="mt-4 text-ink-muted leading-snug">{nb(item.text)}</p>
  </div>
);

export default NumberedCard;
