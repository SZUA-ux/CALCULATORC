'use client';

import { useMemo, useState } from 'react';

const federalBrackets = {
  single: [
    { limit: 11000, rate: 0.1 },
    { limit: 44725, rate: 0.12 },
    { limit: 95375, rate: 0.22 },
    { limit: 182100, rate: 0.24 },
    { limit: 231250, rate: 0.32 },
    { limit: 578125, rate: 0.35 },
  ],
  married: [
    { limit: 22000, rate: 0.1 },
    { limit: 89450, rate: 0.12 },
    { limit: 190750, rate: 0.22 },
    { limit: 364200, rate: 0.24 },
    { limit: 462500, rate: 0.32 },
    { limit: 693750, rate: 0.35 },
  ],
} as const;

function calculateFederalTax(income: number, filingStatus: 'single' | 'married') {
  const brackets = federalBrackets[filingStatus];
  let remaining = income;
  let tax = 0;
  let previousLimit = 0;
  for (const bracket of brackets) {
    if (income > bracket.limit) {
      tax += (bracket.limit - previousLimit) * bracket.rate;
      previousLimit = bracket.limit;
    } else {
      tax += Math.max(0, remaining) * bracket.rate;
      return tax;
    }
  }
  tax += Math.max(0, income - previousLimit) * 0.37;
  return tax;
}

export function TakeHomePayCalculator() {
  const [salary, setSalary] = useState(85000);
  const [filingStatus, setFilingStatus] = useState<'single' | 'married'>('single');
  const [stateRate, setStateRate] = useState(5);
  const [preTaxBenefits, setPreTaxBenefits] = useState(4000);

  const results = useMemo(() => {
    const federalTax = calculateFederalTax(salary - preTaxBenefits, filingStatus);
    const stateTax = Math.max(0, (salary - preTaxBenefits) * (stateRate / 100));
    const socialSecurity = Math.min(168600, salary) * 0.062;
    const medicare = salary * 0.0145;
    const totalTax = federalTax + stateTax + socialSecurity + medicare;
    const takeHome = salary - preTaxBenefits - totalTax;

    return {
      federalTax,
      stateTax,
      socialSecurity,
      medicare,
      totalTax,
      takeHome,
    };
  }, [salary, filingStatus, stateRate, preTaxBenefits]);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Annual gross salary (USD)
          <input
            type="number"
            min={0}
            value={salary}
            onChange={(event) => setSalary(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          State income tax rate (%)
          <input
            type="number"
            min={0}
            max={15}
            value={stateRate}
            onChange={(event) => setStateRate(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Pre-tax benefits (401k, HSA)
          <input
            type="number"
            min={0}
            value={preTaxBenefits}
            onChange={(event) => setPreTaxBenefits(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Filing status
          <select
            value={filingStatus}
            onChange={(event) => setFilingStatus(event.target.value as 'single' | 'married')}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          >
            <option value="single">Single</option>
            <option value="married">Married filing jointly</option>
          </select>
        </label>
      </form>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {Object.entries(results).map(([label, value]) => (
          <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs uppercase text-slate-500">{label.replace(/([A-Z])/g, ' $1')}</p>
            <p className="text-xl font-semibold text-brand">
              {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
