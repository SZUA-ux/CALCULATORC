'use client';

import { useMemo, useState } from 'react';

export function SalesTaxCalculator() {
  const [purchaseAmount, setPurchaseAmount] = useState(120);
  const [stateRate, setStateRate] = useState(6.5);
  const [localRate, setLocalRate] = useState(2.25);

  const result = useMemo(() => {
    const subtotal = purchaseAmount;
    const taxRate = (stateRate + localRate) / 100;
    const taxAmount = subtotal * taxRate;
    const total = subtotal + taxAmount;
    return { subtotal, taxRate, taxAmount, total };
  }, [purchaseAmount, stateRate, localRate]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-medium text-slate-700">
          Purchase amount (USD)
          <input
            type="number"
            min={0}
            value={purchaseAmount}
            onChange={(event) => setPurchaseAmount(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          State rate (%)
          <input
            type="number"
            min={0}
            step="0.01"
            value={stateRate}
            onChange={(event) => setStateRate(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Local rate (%)
          <input
            type="number"
            min={0}
            step="0.01"
            value={localRate}
            onChange={(event) => setLocalRate(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
      </form>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Combined rate</p>
          <p className="text-xl font-semibold text-brand">{(result.taxRate * 100).toFixed(2)}%</p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Sales tax</p>
          <p className="text-xl font-semibold text-brand">
            {result.taxAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Subtotal</p>
          <p className="text-xl font-semibold text-brand">
            {result.subtotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Total due</p>
          <p className="text-xl font-semibold text-brand">
            {result.total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
      </div>
    </div>
  );
}
