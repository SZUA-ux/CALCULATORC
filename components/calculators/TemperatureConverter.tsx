'use client';

import { useState } from 'react';

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState(20);
  const [fahrenheit, setFahrenheit] = useState(() => (20 * 9) / 5 + 32);

  const handleCelsiusChange = (value: number) => {
    setCelsius(value);
    setFahrenheit((value * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (value: number) => {
    setFahrenheit(value);
    setCelsius(((value - 32) * 5) / 9);
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <form className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Celsius (°C)
          <input
            type="number"
            value={celsius}
            onChange={(event) => handleCelsiusChange(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Fahrenheit (°F)
          <input
            type="number"
            value={fahrenheit}
            onChange={(event) => handleFahrenheitChange(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 p-2"
          />
        </label>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        Conversion formulas: °F = (°C × 9/5) + 32 and °C = (°F − 32) × 5/9. Enter a value in either field to
        instantly convert temperature units.
      </p>
    </div>
  );
}
