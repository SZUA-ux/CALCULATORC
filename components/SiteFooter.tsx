import Link from 'next/link';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm">
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
        <p className="text-xs text-slate-200">
          © {year} CalculatorCluster. Built for United States users who need fast, accurate math tools.
        </p>
      </div>
    </footer>
  );
}
