"use client";

import {useMemo, useState} from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-6">
        <Link href={buildHref(locale, '/')} className="text-xl font-semibold text-brand-primary">
          {t('brand')}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
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

        {/* Desktop Locale Switcher */}
        <div className="hidden md:block">
          <LocaleSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`h-0.5 w-6 bg-slate-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-slate-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-slate-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-container flex flex-col gap-4 py-6 border-t border-slate-200">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={buildHref(locale, item.path)}
              onClick={handleLinkClick}
              className={
                activeKey === item.key
                  ? 'text-brand-primary font-medium'
                  : 'text-slate-700 transition-colors hover:text-brand-secondary'
              }
            >
              {t(item.key)}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
