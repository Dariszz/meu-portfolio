import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, Phone, Send } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

const contactLinks = [
  { label: 'Telefone', value: '(32) 99126-9239', icon: Phone },
  { label: 'E-mail', value: 'contato.pedrodarisdev@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'pedro-paulo-daris', href: 'https://www.linkedin.com/in/pedro-paulo-daris-050442209/', icon: BriefcaseBusiness },
  { label: 'GitHub', value: '@Dariszz', href: 'https://github.com/Dariszz', icon: Code2 },
];

export function ContactSection() {
  const { handleSubmit } = useContactForm();

  return <section className="contact-section" id="contato"><div className="shell contact-inner"><p>Tem uma ideia, um produto ou um desafio?</p><h2>Vamos construir<br /><em>algo que importe.</em></h2><div className="contact-content"><div className="contact-directory">{contactLinks.map(({ label, value, href, icon: Icon }) => { const content = <><Icon aria-hidden="true" /><span><small>{label}</small><strong>{value}</strong></span>{href && <ArrowUpRight className="contact-arrow" aria-hidden="true" />}</>; return href ? <a className="contact-item" key={label} href={href} target="_blank" rel="noreferrer">{content}</a> : <div className="contact-item" key={label}>{content}</div>; })}</div><form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>Escreva uma mensagem</span><small>Seu aplicativo de e-mail será aberto para concluir o envio.</small></div><label><span>Seu nome</span><input type="text" name="name" autoComplete="name" placeholder="Como posso te chamar?" required /></label><label><span>Seu e-mail</span><input type="email" name="email" autoComplete="email" placeholder="voce@exemplo.com" required /></label><label><span>Sua mensagem</span><textarea name="message" rows={4} placeholder="Conte um pouco sobre sua ideia ou desafio..." required /></label><button type="submit">Preparar e-mail <Send aria-hidden="true" /></button></form></div></div></section>;
}
