import {EducationTimeline} from '@/components/sections/EducationTimeline';
import {EducationItem} from '@/types/content';
import {Locale} from '@/i18n';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';

export default async function EducationPage({
  params
}: {
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations({namespace: 'Education'});

  const items = t.raw('items') as EducationItem[];

  return (
    <EducationTimeline
      title={t('title')}
      subtitle={t('intro')}
      items={items}
    />
  );
}
