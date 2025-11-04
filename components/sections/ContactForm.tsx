"use client";

import {FormEvent, useState} from 'react';
import {profile} from '@/content/profile';

type ContactFieldType = 'text' | 'email' | 'textarea';

export type ContactFormField = {
  name: 'name' | 'email' | 'message';
  label: string;
  placeholder: string;
  type?: ContactFieldType;
  required?: boolean;
};

type ContactFormCopy = {
  title: string;
  description: string;
  submitLabel: string;
  success: string;
  error: string;
};

export function ContactForm({fields, copy}: {fields: ContactFormField[]; copy: ContactFormCopy}) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!email || !message) {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`${name || 'Portfolio'} inquiry`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name || 'Anonymous'} <${email}>`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    event.currentTarget.reset();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-brand-primary">{copy.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{copy.description}</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <label key={field.name} className="block text-sm font-medium text-slate-600">
            {field.label}
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-brand-secondary focus:bg-white focus:outline-none"
                rows={5}
                required={field.required}
              />
            ) : (
              <input
                name={field.name}
                type={field.type ?? 'text'}
                inputMode={field.type === 'email' ? 'email' : undefined}
                placeholder={field.placeholder}
                className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-brand-secondary focus:bg-white focus:outline-none"
                required={field.required}
              />
            )}
          </label>
        ))}
        <button
          type="submit"
          className="w-full rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
        >
          {copy.submitLabel}
        </button>
      </form>
      {status === 'success' ? (
        <p className="mt-4 text-sm text-emerald-600">{copy.success}</p>
      ) : null}
      {status === 'error' ? (
        <p className="mt-4 text-sm text-rose-600">{copy.error}</p>
      ) : null}
    </div>
  );
}
