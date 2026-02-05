import {unstable_setRequestLocale, getTranslations} from 'next-intl/server';
import {Locale} from '@/i18n';
import {ContactSection, type ContactOption} from '@/components/sections/ContactSection';
import {ContactForm, type ContactFormField} from '@/components/sections/ContactForm';
import {profile} from '@/content/profile';

export default async function ContactPage({
  params
}: {
  params: {locale: Locale};
}) {
  const {locale} = params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations({namespace: 'Contact'});
  const options = t.raw('options') as ContactOption[];

  const rawFields = t.raw('form.fields') as Array<{
    name: 'name' | 'email' | 'message';
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
  }>;

  const validTypes: Array<ContactFormField['type']> = ['text', 'email', 'textarea'];

  const fields = rawFields.map((field) => ({
    ...field,
    type: field.type && validTypes.includes(field.type as ContactFormField['type'])
      ? (field.type as ContactFormField['type'])
      : undefined
  }));

  const copy = {
    title: t('form.title'),
    description: t('form.description', {email: profile.email}),
    submitLabel: t('form.submit'),
    success: t('form.success'),
    error: t('form.error')
  } as const;

  return (
    <div className="space-y-12">
      <ContactSection
        title={t('title')}
        subtitle={t('intro')}
        options={options}
        note={t('note', {email: profile.email})}
      />
      <ContactForm fields={fields} copy={copy} />
    </div>
  );
}
