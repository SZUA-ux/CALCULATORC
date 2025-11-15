'use client';

import { useMemo, useState } from 'react';

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function OvulationCalculator() {
  const [lastPeriod, setLastPeriod] = useState(() => new Date().toISOString().split('T')[0]);
  const [cycleLength, setCycleLength] = useState(28);

  const timeline = useMemo(() => {
    const startDate = new Date(lastPeriod);
    const ovulationDate = addDays(startDate, cycleLength - 14);
    const fertileStart = addDays(ovulationDate, -4);
    const fertileEnd = addDays(ovulationDate, 1);
    const nextPeriod = addDays(startDate, cycleLength);
    return { ovulationDate, fertileStart, fertileEnd, nextPeriod };
  }, [lastPeriod, cycleLength]);

  const format = (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          First day of last period
          <input
            type="date"
            value={lastPeriod}
            onChange={(event) => setLastPeriod(event.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Average cycle length (days)
          <input
            type="number"
            min={21}
            max={40}
            value={cycleLength}
            onChange={(event) => setCycleLength(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
      </form>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Estimated ovulation day</p>
          <p className="text-xl font-semibold text-brand">{format(timeline.ovulationDate)}</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Fertile window</p>
          <p className="text-xl font-semibold text-brand">
            {format(timeline.fertileStart)} – {format(timeline.fertileEnd)}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Next expected period</p>
          <p className="text-xl font-semibold text-brand">{format(timeline.nextPeriod)}</p>
        </div>
      </div>
    </div>
  );
}
