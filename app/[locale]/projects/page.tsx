import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import {Locale} from '@/i18n';
import {ProjectsShowcase} from '@/components/sections/ProjectsShowcase';
import {ProjectItem} from '@/types/content';

export default async function ProjectsPage({
  params
}: {
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations({namespace: 'Projects'});
  const projects = t.raw('items') as ProjectItem[];

  return (
    <ProjectsShowcase title={t('title')} subtitle={t('intro')} items={projects} />
  );
}
