import { ProjectCard } from '@/components/projects/ProjectCard';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/data/portfolio';
export function ProjectsSection() { return <section className="section shell" id="projetos"><SectionLabel number="01">Projetos selecionados</SectionLabel><div className="section-intro"><h2>Ideias construídas<br /><em>até o último detalhe.</em></h2><p>Do problema à solução: dois projetos que mostram como penso, decido e construo experiências completas.</p></div><div className="project-list">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></section>; }
