import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import {Locale} from '@/i18n';
import {ExperienceTimeline} from '@/components/sections/ExperienceTimeline';
import {ExperienceItem} from '@/types/content';

export default async function ExperiencePage({
  params
}: {
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations({namespace: 'Experience'});
  const experienceItems = t.raw('items') as ExperienceItem[];

  return (
    <ExperienceTimeline title={t('title')} subtitle={t('intro')} items={experienceItems} />
  );
}
