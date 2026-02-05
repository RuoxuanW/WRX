import './globals.css';
import type {Metadata} from 'next';
import {ReactNode} from 'react';
import {SpeedInsights} from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Personal Profile',
  description: 'Bilingual personal profile for a financial software engineer.'
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
