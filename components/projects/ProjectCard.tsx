import { ExternalLink } from 'lucide-react';
import { ProjectVisual } from './ProjectVisual';
type Project = { readonly index: string; readonly title: string; readonly eyebrow: string; readonly description: string; readonly impact: string; readonly tags: readonly string[]; readonly github: string; readonly theme: 'visa' | 'architecture' };
export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><div className="project-heading"><span>{project.index}</span><p>{project.eyebrow}</p></div><ProjectVisual theme={project.theme} title={project.title} /><div className="project-copy"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-outcome"><small>DECISÃO-CHAVE</small><p>{project.impact}</p></div></div><div className="project-footer"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.github} target="_blank" rel="noreferrer">Ver código <ExternalLink size={16} aria-hidden="true" /></a></div></article>;
}
