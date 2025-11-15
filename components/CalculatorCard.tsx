import Link from 'next/link';
import type { CalculatorConfig } from '@/lib/calculatorsConfig';

interface Props {
  calculator: CalculatorConfig;
}

export function CalculatorCard({ calculator }: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1">
      <h3 className="text-lg font-semibold text-brand">{calculator.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{calculator.description}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1">{calculator.category}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1">US Focused</span>
      </div>
      <Link href={calculator.path} className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
        Open calculator →
      </Link>
    </article>
  );
}
