import {EducationItem} from '@/types/content';

interface EducationTimelineProps {
  title: string;
  subtitle: string;
  items: EducationItem[];
}

export function EducationTimeline({title, subtitle, items}: EducationTimelineProps) {
  return (
    <section className="section-container space-y-8">
      <div>
        <h2 className="section-heading">{title}</h2>
        <p className="mt-2 max-w-3xl text-base text-slate-600">{subtitle}</p>
      </div>
      <ol className="relative space-y-8 border-l border-slate-200 pl-6">
        {items.map((item) => (
          <li key={item.id} className="ml-4">
            <div className="absolute -left-[9px] mt-2 h-3 w-3 rounded-full border-2 border-white bg-brand-secondary" />
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
                <span className="font-semibold text-slate-800">{item.degree}</span>
                <span>{item.period}</span>
              </div>
              <h3 className="mt-1 text-lg font-semibold text-brand-primary">{item.school}</h3>
              <p className="text-sm text-slate-500">{item.location}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden className="mt-1 text-brand-secondary">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
