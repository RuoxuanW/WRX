import {ProjectItem} from '@/types/content';

interface ProjectsShowcaseProps {
  title: string;
  subtitle: string;
  items: ProjectItem[];
}

export function ProjectsShowcase({title, subtitle, items}: ProjectsShowcaseProps) {
  return (
    <section className="section-container space-y-8">
      <div>
        <h2 className="section-heading">{title}</h2>
        <p className="mt-2 max-w-3xl text-base text-slate-600">{subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((project) => (
          <article key={project.id} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-primary">{project.name}</h3>
            <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span aria-hidden className="mt-1 text-brand-secondary">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                className="mt-4 inline-flex items-center text-sm font-semibold text-brand-secondary hover:text-brand-primary"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
