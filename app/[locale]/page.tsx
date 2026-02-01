import {HeroSection, type HeroContent} from '@/components/sections/HeroSection';
import {ExperienceTimeline} from '@/components/sections/ExperienceTimeline';
import {ProjectsShowcase} from '@/components/sections/ProjectsShowcase';
import {EducationTimeline} from '@/components/sections/EducationTimeline';
import {ContactSection} from '@/components/sections/ContactSection';
import {profile} from '@/content/profile';
import {ExperienceItem, ProjectItem} from '@/types/content';
import {buildHref} from '@/lib/navigation';
import {Locale} from '@/i18n';
import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';

export default async function HomePage({
  params
}: {
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const heroTranslations = await getTranslations({namespace: 'Hero'});
  const experienceTranslations = await getTranslations({namespace: 'Experience'});
  const projectsTranslations = await getTranslations({namespace: 'Projects'});
  const educationTranslations = await getTranslations({namespace: 'Education'});
  const contactTranslations = await getTranslations({namespace: 'Contact'});

  const heroContent: HeroContent = {
    greeting: heroTranslations('greeting'),
    name: heroTranslations('name'),
    title: heroTranslations('title'),
    description: heroTranslations('description'),
    primaryCta: {
      label: heroTranslations('primaryCta.label'),
      href: buildHref(locale, heroTranslations('primaryCta.href'))
    },
    secondaryCta: {
      label: heroTranslations('secondaryCta.label'),
      href: buildHref(locale, heroTranslations('secondaryCta.href'))
    },
  metrics: heroTranslations.raw('metrics') as HeroContent['metrics']
  } satisfies HeroContent;

  const experienceItems = experienceTranslations.raw('items') as ExperienceItem[];
  const projectItems = projectsTranslations.raw('items') as ProjectItem[];
  const educationItems = educationTranslations.raw('items') as import('@/types/content').EducationItem[];

  const contactOptions = contactTranslations.raw('options') as Array<{
    id: string;
    label: string;
    description: string;
    href: string;
  }>;

  return (
    <>
      <HeroSection content={heroContent} />
      <ExperienceTimeline
        title={experienceTranslations('title')}
        subtitle={experienceTranslations('intro')}
        items={experienceItems.slice(0, 2)}
      />
      <EducationTimeline
        title={educationTranslations('title')}
        subtitle={educationTranslations('intro')}
        items={educationItems}
      />
      <ProjectsShowcase
        title={projectsTranslations('title')}
        subtitle={projectsTranslations('intro')}
        items={projectItems.slice(0, 2)}
      />
      <ContactSection
        title={contactTranslations('title')}
        subtitle={contactTranslations('intro')}
        options={contactOptions}
        note={contactTranslations('note', {email: profile.email, phone: profile.phone})}
      />
    </>
  );
}
