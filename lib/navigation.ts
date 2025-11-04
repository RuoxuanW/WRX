import {Locale} from '@/i18n';

export type NavItem = {
  key: 'home' | 'experience' | 'education' | 'projects' | 'contact';
  path: string;
};

export const NAV_ITEMS: NavItem[] = [
  {key: 'home', path: '/'},
  {key: 'experience', path: '/experience'},
  {key: 'education', path: '/education'},
  {key: 'projects', path: '/projects'},
  {key: 'contact', path: '/contact'}
];

export function buildHref(locale: Locale, path: string) {
  if (path === '/') {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}
