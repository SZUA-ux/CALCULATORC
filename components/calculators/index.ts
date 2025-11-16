import type { ComponentType } from 'react';
import { InflationCalculator } from './InflationCalculator';
import { IraRetirementCalculator } from './IraRetirementCalculator';
import { OvulationCalculator } from './OvulationCalculator';
import { PropertyTaxCalculator } from './PropertyTaxCalculator';
import { SalesTaxCalculator } from './SalesTaxCalculator';
import { TakeHomePayCalculator } from './TakeHomePayCalculator';
import { TemperatureConverter } from './TemperatureConverter';
import type { CalculatorSlug } from '@/lib/calculatorsConfig';

export const calculatorComponents: Record<CalculatorSlug, ComponentType> = {
  'us-take-home-pay-calculator': TakeHomePayCalculator,
  'us-sales-tax-calculator': SalesTaxCalculator,
  'us-property-tax-calculator': PropertyTaxCalculator,
  'us-ira-retirement-calculator': IraRetirementCalculator,
  'us-inflation-calculator': InflationCalculator,
  'ovulation-calculator': OvulationCalculator,
  'temperature-converter': TemperatureConverter,
};

export type { CalculatorSlug };
