"use client";

import {ChangeEvent, useTransition} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {Locale} from '@/i18n';

const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  zh: '中文'
};

export function LocaleSwitcher() {
  const currentLocale = useLocale() as Locale;
  const t = useTranslations('LocaleSwitcher');
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <label className="flex items-center gap-2 text-sm text-slate-500">
      <span>{t('label')}</span>
      <select
        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-700 focus:border-brand-secondary focus:outline-none"
        value={currentLocale}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          const nextLocale = event.target.value as Locale;
          if (nextLocale === currentLocale) return;
          startTransition(() => {
            const segments = pathname
              .split('/')
              .filter(Boolean);

            if (segments.length === 0) {
              segments.push(nextLocale);
            } else {
              segments[0] = nextLocale;
            }

            const nextPath = `/${segments.join('/')}`;
            router.replace(nextPath);
          });
        }}
        disabled={isPending}
      >
        {Object.entries(LOCALE_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
