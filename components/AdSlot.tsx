'use client';

import { useEffect, type CSSProperties } from 'react';

interface AdSlotProps {
  format?: string;
  responsive?: boolean;
  style?: CSSProperties;
}

export function AdSlot({ format = 'auto', responsive = true, style }: AdSlotProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (error) {
        console.error('AdSense error', error);
      }
    }
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <ins
        className="adsbygoogle block w-full max-w-3xl"
        style={{ display: 'block', minHeight: '90px', backgroundColor: '#f8fafc', ...style }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ''}
        data-ad-slot="auto"
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      >
        <div className="text-center text-xs text-slate-500">Advertisement space reserved for Google AdSense.</div>
      </ins>
    </div>
  );
}
