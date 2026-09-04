import { useEffect, useState } from 'react';

const sectionIds = ['projetos', 'experiencia', 'sobre', 'contato'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-30% 0px -60% 0px' });
    sectionIds.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return activeSection;
}
