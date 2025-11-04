export type ContactOption = {
  id: string;
  label: string;
  description: string;
  href: string;
};

interface ContactSectionProps {
  title: string;
  subtitle: string;
  options: ContactOption[];
  note: string;
}

export function ContactSection({title, subtitle, options, note}: ContactSectionProps) {
  return (
    <section className="section-container space-y-6">
      <div className="space-y-2">
        <h2 className="section-heading">{title}</h2>
        <p className="max-w-2xl text-base text-slate-600">{subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {options.map((option) => {
          const isExternal = option.href.startsWith('http');
          return (
            <a
              key={option.id}
              href={option.href}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-card"
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              <h3 className="text-lg font-semibold text-brand-primary">{option.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{option.description}</p>
            </a>
          );
        })}
      </div>
      <p className="text-xs text-slate-500">{note}</p>
    </section>
  );
}
