import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/calculators', label: 'All Calculators' },
];

export function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-brand">
          CalculatorCluster
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-600 hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
