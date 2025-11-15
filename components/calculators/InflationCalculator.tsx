'use client';

import { useMemo, useState } from 'react';

export function InflationCalculator() {
  const [amount, setAmount] = useState(1000);
  const [startYear, setStartYear] = useState(2010);
  const [endYear, setEndYear] = useState(2024);
  const [avgRate, setAvgRate] = useState(3.1);

  const results = useMemo(() => {
    const years = Math.max(0, endYear - startYear);
    const inflationFactor = Math.pow(1 + avgRate / 100, years);
    const adjustedValue = amount * inflationFactor;
    const buyingPowerLoss = adjustedValue - amount;
    return { years, inflationFactor, adjustedValue, buyingPowerLoss };
  }, [amount, startYear, endYear, avgRate]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-4">
        <label className="text-sm font-medium text-slate-700">
          Amount in USD
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Start year
          <input
            type="number"
            min={1913}
            max={2100}
            value={startYear}
            onChange={(event) => setStartYear(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          End year
          <input
            type="number"
            min={startYear}
            max={2120}
            value={endYear}
            onChange={(event) => setEndYear(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Average CPI rate (%)
          <input
            type="number"
            min={0}
            step="0.1"
            value={avgRate}
            onChange={(event) => setAvgRate(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
      </form>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Years analyzed</p>
          <p className="text-xl font-semibold text-brand">{results.years}</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Inflation factor</p>
          <p className="text-xl font-semibold text-brand">{results.inflationFactor.toFixed(2)}×</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Adjusted value</p>
          <p className="text-xl font-semibold text-brand">
            {results.adjustedValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Buying power lost</p>
          <p className="text-xl font-semibold text-brand">
            {results.buyingPowerLoss.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
      </div>
    </div>
  );
}
