import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en';

export const i18n = {
  defaultLocale,
  locales
} as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) ?? defaultLocale;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
