import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, Phone } from 'lucide-react';

const contactLinks = [
  { label: 'Telefone', value: '(32) 99126-9239', icon: Phone },
  { label: 'E-mail', value: 'contato.pedrodarisdev@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'pedro-paulo-daris', href: 'https://www.linkedin.com/in/pedro-paulo-daris-050442209/', icon: BriefcaseBusiness },
  { label: 'GitHub', value: '@Dariszz', href: 'https://github.com/Dariszz', icon: Code2 },
];

export function ContactSection() {
  return <section className="contact-section" id="contato"><div className="shell contact-inner"><p>Tem uma ideia, um produto ou um desafio?</p><h2>Vamos construir<br /><em>algo que importe.</em></h2><div className="contact-content"><div className="contact-directory">{contactLinks.map(({ label, value, href, icon: Icon }) => { const content = <><Icon aria-hidden="true" /><span><small>{label}</small><strong>{value}</strong></span>{href && <ArrowUpRight className="contact-arrow" aria-hidden="true" />}</>; return href ? <a className="contact-item" key={label} href={href} target="_blank" rel="noreferrer">{content}</a> : <div className="contact-item" key={label}>{content}</div>; })}</div></div></div></section>;
}
