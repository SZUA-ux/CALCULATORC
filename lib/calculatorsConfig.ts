export type CalculatorSlug =
  | 'us-take-home-pay-calculator'
  | 'us-sales-tax-calculator'
  | 'us-property-tax-calculator'
  | 'us-ira-retirement-calculator'
  | 'us-inflation-calculator'
  | 'ovulation-calculator'
  | 'temperature-converter';

export type CalculatorConfig = {
  slug: CalculatorSlug;
  title: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  description: string;
  category: string;
  path: string;
  relatedSlugs: CalculatorSlug[];
  canonical: string;
};

export const siteUrl = 'https://calculatorcluster.com';

export const calculatorsConfig: CalculatorConfig[] = [
  {
    slug: 'us-take-home-pay-calculator',
    title: 'US Take Home Pay Calculator',
    primaryKeyword: 'US take home pay calculator',
    secondaryKeywords: ['US paycheck calculator', 'after tax salary calculator US', 'net pay calculator USA', 'US salary after tax'],
    description: 'Estimate US net pay with payroll taxes, Social Security, Medicare, and optional state income tax in seconds.',
    category: 'Income & Payroll',
    path: '/calculators/us-take-home-pay-calculator',
    relatedSlugs: ['us-sales-tax-calculator', 'us-ira-retirement-calculator', 'us-inflation-calculator'],
    canonical: `${siteUrl}/calculators/us-take-home-pay-calculator`,
  },
  {
    slug: 'us-sales-tax-calculator',
    title: 'US Sales Tax Calculator',
    primaryKeyword: 'US sales tax calculator',
    secondaryKeywords: ['sales tax calculator USA', 'online sales tax calculator', 'US tax on purchases', 'calculate sales tax in US'],
    description: 'Combine state and local sales tax rates to know the total cost of any purchase anywhere in the United States.',
    category: 'Spending',
    path: '/calculators/us-sales-tax-calculator',
    relatedSlugs: ['us-take-home-pay-calculator', 'us-property-tax-calculator', 'us-inflation-calculator'],
    canonical: `${siteUrl}/calculators/us-sales-tax-calculator`,
  },
  {
    slug: 'us-property-tax-calculator',
    title: 'US Property Tax Calculator',
    primaryKeyword: 'US property tax calculator',
    secondaryKeywords: ['house tax calculator USA', 'real estate tax calculator US', 'home property tax estimate', 'US property tax estimate'],
    description: 'Estimate annual and monthly US property taxes with customizable assessment ratios and homestead exemptions.',
    category: 'Homeownership',
    path: '/calculators/us-property-tax-calculator',
    relatedSlugs: ['us-take-home-pay-calculator', 'us-sales-tax-calculator', 'us-ira-retirement-calculator'],
    canonical: `${siteUrl}/calculators/us-property-tax-calculator`,
  },
  {
    slug: 'us-ira-retirement-calculator',
    title: 'US IRA Retirement Calculator',
    primaryKeyword: 'IRA retirement calculator US',
    secondaryKeywords: ['traditional IRA calculator', 'Roth IRA calculator US', 'IRA growth calculator', 'US retirement savings calculator'],
    description: 'Project Roth or traditional IRA balances using compound growth and consistent monthly contributions tailored to US savers.',
    category: 'Retirement',
    path: '/calculators/us-ira-retirement-calculator',
    relatedSlugs: ['us-take-home-pay-calculator', 'us-property-tax-calculator', 'us-inflation-calculator'],
    canonical: `${siteUrl}/calculators/us-ira-retirement-calculator`,
  },
  {
    slug: 'us-inflation-calculator',
    title: 'US CPI Inflation Calculator',
    primaryKeyword: 'US inflation calculator',
    secondaryKeywords: ['CPI inflation calculator US', 'dollar inflation calculator', 'US CPI calculator', 'value of money over time USA'],
    description: 'Convert past US dollars into today’s buying power with CPI-based inflation math and adjustable averages.',
    category: 'Economy',
    path: '/calculators/us-inflation-calculator',
    relatedSlugs: ['us-sales-tax-calculator', 'us-ira-retirement-calculator', 'temperature-converter'],
    canonical: `${siteUrl}/calculators/us-inflation-calculator`,
  },
  {
    slug: 'ovulation-calculator',
    title: 'Ovulation Calculator (US audience)',
    primaryKeyword: 'ovulation calculator',
    secondaryKeywords: ['fertility window calculator', 'when am I most fertile', 'calculate ovulation date', 'menstrual cycle calculator'],
    description: 'Forecast fertile windows with a cycle-aware ovulation calculator designed for US families and healthcare conversations.',
    category: 'Family Planning',
    path: '/calculators/ovulation-calculator',
    relatedSlugs: ['temperature-converter', 'us-inflation-calculator', 'us-take-home-pay-calculator'],
    canonical: `${siteUrl}/calculators/ovulation-calculator`,
  },
  {
    slug: 'temperature-converter',
    title: 'Celsius to Fahrenheit Converter',
    primaryKeyword: 'Celsius to Fahrenheit converter',
    secondaryKeywords: ['Fahrenheit to Celsius calculator', 'temperature conversion calculator', '°C to °F', '°F to °C'],
    description: 'Instantly convert Celsius to Fahrenheit and back again with education-friendly, unit-accurate math.',
    category: 'Science & Weather',
    path: '/calculators/temperature-converter',
    relatedSlugs: ['ovulation-calculator', 'us-inflation-calculator', 'us-sales-tax-calculator'],
    canonical: `${siteUrl}/calculators/temperature-converter`,
  },
];

export function getCalculator(slug: CalculatorSlug) {
  return calculatorsConfig.find((calculator) => calculator.slug === slug);
}
