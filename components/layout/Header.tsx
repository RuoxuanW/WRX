"use client";

import {useMemo} from 'react';
import Link from 'next/link';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';
import {NAV_ITEMS, buildHref} from '@/lib/navigation';
import {Locale} from '@/i18n';
import {LocaleSwitcher} from './LocaleSwitcher';

export function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const activeKey = useMemo(() => {
    if (!pathname) {
      return 'home';
    }

    const normalized = pathname.replace(/^\/[a-zA-Z-]{2}(?=\/|$)/, '');

    const match = NAV_ITEMS.find((item) => {
      const targetPath = item.path === '/' ? '' : item.path;
      return normalized === targetPath || normalized.startsWith(`${targetPath}/`);
    });

    return match?.key ?? 'home';
  }, [pathname]);

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <Link href={buildHref(locale, '/')} className="text-xl font-semibold text-brand-primary">
          {t('brand')}
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium text-slate-700">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={buildHref(locale, item.path)}
              className={
                activeKey === item.key
                  ? 'text-brand-primary'
                  : 'transition-colors hover:text-brand-secondary'
              }
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
