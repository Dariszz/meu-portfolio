import { useActiveSection } from '@/hooks/useActiveSection';

const links = [['projetos', 'Projetos'], ['experiencia', 'Experiência'], ['sobre', 'Sobre'], ['contato', 'Contato']] as const;

export function Header() {
  const activeSection = useActiveSection();
  return <header className="site-header"><a className="brand" href="#inicio" aria-label="Ir para o início">PD<span>.</span></a><nav aria-label="Navegação principal">{links.map(([id, label]) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`}>{label}</a>)}</nav><a className="header-cta" href="#contato">Vamos conversar <span>↗</span></a></header>;
}
