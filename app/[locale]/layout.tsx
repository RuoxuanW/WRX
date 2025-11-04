import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {ReactNode} from 'react';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Locale, i18n} from '@/i18n';
import {DocumentLangEffect} from '@/components/layout/DocumentLangEffect';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: Locale;
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: {locale: Locale};
}): Promise<Metadata> {
  const {locale} = params;
  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const t = await getTranslations({namespace: 'Meta'});

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: t('canonical'),
      languages: {
        en: '/en',
        zh: '/zh'
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: LocaleLayoutProps) {
  const {locale} = params;

  if (!i18n.locales.includes(locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DocumentLangEffect locale={locale} />
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Header />
        <main className="flex-1">
          <div className="section-container space-y-20">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
