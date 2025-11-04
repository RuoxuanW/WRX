import {ButtonLink} from '@/components/ui/ButtonLink';

export type HeroMetric = {
  label: string;
  value: string;
};

export type HeroCta = {
  label: string;
  href: string;
};

export type HeroContent = {
  greeting: string;
  name: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  metrics: HeroMetric[];
};

export function HeroSection({content}: {content: HeroContent}) {
  const {greeting, name, title, description, primaryCta, secondaryCta, metrics} = content;

  return (
    <section className="section-container grid gap-12 lg:grid-cols-[2fr_1fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          {greeting}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {name}
        </h1>
        <h2 className="text-xl font-medium text-brand-primary sm:text-2xl">{title}</h2>
        <p className="text-base text-slate-600 sm:text-lg">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl bg-slate-50 p-4 text-slate-700">
            <span className="block text-3xl font-semibold text-brand-primary">{metric.value}</span>
            <span className="text-sm text-slate-500">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
