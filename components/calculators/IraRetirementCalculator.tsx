'use client';

import { useMemo, useState } from 'react';

function futureValue(contribution: number, rate: number, years: number) {
  const periodicRate = rate / 100 / 12;
  const periods = years * 12;
  return contribution * ((Math.pow(1 + periodicRate, periods) - 1) / periodicRate);
}

export function IraRetirementCalculator() {
  const [currentBalance, setCurrentBalance] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(550);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [years, setYears] = useState(25);

  const projection = useMemo(() => {
    const futureContributions = futureValue(monthlyContribution, expectedReturn, years);
    const futureBalance = currentBalance * Math.pow(1 + expectedReturn / 100, years);
    const total = futureBalance + futureContributions;
    return { futureContributions, futureBalance, total };
  }, [currentBalance, monthlyContribution, expectedReturn, years]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Current IRA balance (USD)
          <input
            type="number"
            min={0}
            value={currentBalance}
            onChange={(event) => setCurrentBalance(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Monthly contribution (USD)
          <input
            type="number"
            min={0}
            value={monthlyContribution}
            onChange={(event) => setMonthlyContribution(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Expected annual return (%)
          <input
            type="number"
            min={0}
            step="0.1"
            value={expectedReturn}
            onChange={(event) => setExpectedReturn(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Years until retirement
          <input
            type="number"
            min={1}
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
      </form>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Future of current balance</p>
          <p className="text-xl font-semibold text-brand">
            {projection.futureBalance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Future contributions</p>
          <p className="text-xl font-semibold text-brand">
            {projection.futureContributions.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Projected total</p>
          <p className="text-xl font-semibold text-brand">
            {projection.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
      </div>
    </div>
  );
}
