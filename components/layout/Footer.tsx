"use client";

import {useTranslations} from 'next-intl';
import {profile} from '@/content/profile';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="section-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">{profile.name}</p>
          <p>{t('location', {location: profile.location})}</p>
          <p>
            {t('contact')} <a href={`mailto:${profile.email}`} className="text-brand-secondary">{profile.email}</a>
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          {profile.socials.map((social) => {
            const label = t(`social.${social.key}` as const);
            return (
              <a
                key={social.key}
                href={social.href}
                className="transition-colors hover:text-brand-secondary"
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
