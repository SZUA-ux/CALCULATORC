import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteUrl } from '@/lib/calculatorsConfig';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CalculatorCluster | Free US Calculators',
    template: '%s | CalculatorCluster',
  },
  description: 'CalculatorCluster delivers US-focused calculators with export-ready SEO, structured data, and lightning-fast performance.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'CalculatorCluster',
    description: 'US-first calculators for payroll, taxes, fertility, and science.',
    url: siteUrl,
    siteName: 'CalculatorCluster',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalculatorCluster',
    description: 'US-focused calculators for smarter decisions.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-muted text-slate-900">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <SiteFooter />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ? (
          <Script
            id="adsense-lib"
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          />
        ) : null}
      </body>
    </html>
  );
}
