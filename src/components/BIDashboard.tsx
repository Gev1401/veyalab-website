import type { ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useI18n } from "@/i18n";

// Цвета токенов из src/index.css в hex: SVG-атрибуты Recharts не понимают var().
const ACCENT = "#8251f5"; // --accent 258 89% 64%
const VIOLET = "#381d77"; // --violet-deep 258 61% 29%
const LINE = "#e4e2e9"; // --line 255 15% 90%
const MUTED = "#5a6070"; // --ink-muted 220 9% 39%

const revenue = [12, 15, 14, 19, 23, 21, 28, 33];
const bars = [
  { n: "A", v: 42 }, { n: "B", v: 31 }, { n: "C", v: 58 }, { n: "D", v: 27 },
  { n: "E", v: 49 }, { n: "F", v: 36 }, { n: "G", v: 52 },
];
const planFact = [30, 45, 38, 52, 47, 63, 59, 71].map((v, i) => ({ x: String(i + 1), v }));
const sources = [48, 32, 20];
const sourceOpacity = [1, 1, 0.35];
const sourceColors = [VIOLET, ACCENT, ACCENT];

const tick = { fontSize: 10, fill: MUTED };
const margin = { top: 4, right: 4, left: -12, bottom: 0 };

const Panel = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-sm bg-bg border border-line p-3 sm:p-4 overflow-hidden flex flex-col ${className}`}>
    {children}
  </div>
);

const PanelTitle = ({ children }: { children: ReactNode }) => (
  <div className="text-[11px] sm:text-xs font-semibold text-ink-muted mb-2 truncate">{children}</div>
);

/** Макет BI-дашборда (из datalyzed-website), перекрашенный в палитру Veyalab. Демо-данные. */
const BIDashboard = () => {
  const { t } = useI18n();
  const d = t.bi.dashboard;
  const areaData = revenue.map((v, i) => ({ m: d.months[i], v }));
  const donutData = sources.map((v, i) => ({ name: d.sourceNames[i], v }));

  return (
    <div className="h-[400px] sm:h-[460px] w-full flex flex-col gap-3 sm:gap-4" aria-hidden="true">
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {d.kpis.map((k) => (
          <Panel key={k.label} className="justify-center">
            <div className="text-[11px] sm:text-xs text-ink-muted truncate">{k.label}</div>
            <div className="mt-1 font-display font-black text-ink text-sm sm:text-xl leading-none whitespace-nowrap">
              {k.value}
            </div>
            <div className="mt-1 text-[11px] sm:text-xs font-semibold text-accent">{k.delta}</div>
          </Panel>
        ))}
      </div>

      <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
        <Panel className="flex-[2]">
          <PanelTitle>{d.revenue}</PanelTitle>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData} margin={margin}>
                <defs>
                  <linearGradient id="bi-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={ACCENT} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={ACCENT} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={LINE} vertical={false} />
                <XAxis dataKey="m" tick={tick} axisLine={false} tickLine={false} />
                <YAxis tick={tick} axisLine={false} tickLine={false} width={34} />
                <Area type="monotone" dataKey="v" stroke={ACCENT} strokeWidth={2.5} fill="url(#bi-area)" isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel className="flex-1 hidden sm:flex">
          <PanelTitle>{d.margin}</PanelTitle>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bars} margin={margin}>
                <CartesianGrid stroke={LINE} vertical={false} />
                <XAxis dataKey="n" tick={tick} axisLine={false} tickLine={false} />
                <YAxis tick={tick} axisLine={false} tickLine={false} width={34} />
                <Bar dataKey="v" radius={[4, 4, 0, 0]} fill={ACCENT} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <div className="flex gap-3 sm:gap-4 h-[30%] min-h-[110px]">
        <Panel className="flex-[2]">
          <PanelTitle>{d.planFact}</PanelTitle>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={planFact} margin={margin}>
                <CartesianGrid stroke={LINE} vertical={false} />
                <XAxis dataKey="x" tick={tick} axisLine={false} tickLine={false} />
                <YAxis tick={tick} axisLine={false} tickLine={false} width={34} />
                <Line type="monotone" dataKey="v" stroke={VIOLET} strokeWidth={2.5} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel className="flex-1">
          <PanelTitle>{d.sources}</PanelTitle>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={donutData} dataKey="v" innerRadius="55%" outerRadius="85%" paddingAngle={2} stroke="none" isAnimationActive={false}>
                  {donutData.map((s, i) => (
                    <Cell key={s.name} fill={sourceColors[i]} fillOpacity={sourceOpacity[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </div>
  );
};

export default BIDashboard;
