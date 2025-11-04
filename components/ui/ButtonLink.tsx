import Link from 'next/link';
import {ReactNode} from 'react';
import {cn} from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary text-white hover:bg-brand-secondary',
  secondary: 'border border-slate-300 bg-white text-slate-800 hover:border-brand-secondary hover:text-brand-secondary'
};

export function ButtonLink({href, children, variant = 'primary', className}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </Link>
  );
}
