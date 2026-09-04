import { FormEvent } from 'react';

const destinationEmail = 'contato.pedrodarisdev@gmail.com';

export function useContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`Olá, Pedro!\n\n${message}\n\nNome: ${name}\nE-mail para retorno: ${email}`);

    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  }

  return { handleSubmit };
}
