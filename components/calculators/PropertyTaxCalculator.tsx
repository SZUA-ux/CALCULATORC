'use client';

import { useMemo, useState } from 'react';

export function PropertyTaxCalculator() {
  const [homeValue, setHomeValue] = useState(420000);
  const [assessmentRatio, setAssessmentRatio] = useState(85);
  const [taxRate, setTaxRate] = useState(1.2);
  const [exemptions, setExemptions] = useState(50000);

  const result = useMemo(() => {
    const assessedValue = (homeValue * assessmentRatio) / 100 - exemptions;
    const taxableValue = Math.max(0, assessedValue);
    const annualTax = taxableValue * (taxRate / 100);
    const monthlyTax = annualTax / 12;
    return { assessedValue, taxableValue, annualTax, monthlyTax };
  }, [homeValue, assessmentRatio, taxRate, exemptions]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Estimated market value (USD)
          <input
            type="number"
            min={0}
            value={homeValue}
            onChange={(event) => setHomeValue(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Assessment ratio (%)
          <input
            type="number"
            min={0}
            max={100}
            value={assessmentRatio}
            onChange={(event) => setAssessmentRatio(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Local tax rate (%)
          <input
            type="number"
            min={0}
            step="0.01"
            value={taxRate}
            onChange={(event) => setTaxRate(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Homestead exemptions (USD)
          <input
            type="number"
            min={0}
            value={exemptions}
            onChange={(event) => setExemptions(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
      </form>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Assessed value</p>
          <p className="text-xl font-semibold text-brand">
            {result.assessedValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Taxable value</p>
          <p className="text-xl font-semibold text-brand">
            {result.taxableValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Annual tax</p>
          <p className="text-xl font-semibold text-brand">
            {result.annualTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs uppercase text-slate-500">Monthly impact</p>
          <p className="text-xl font-semibold text-brand">
            {result.monthlyTax.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </p>
        </div>
      </div>
    </div>
  );
}
