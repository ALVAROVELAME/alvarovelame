import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { projects } from '../data/projects';
import { spotlight } from '../hooks/spotlight';
import type { CSSVars, Project, ProjectStack } from '../types';
import { FlowExplorer } from './FlowExplorer';
import { Icon } from './Icons';
import { ProjectPreview } from './ProjectMockups';
import { TechLogo } from './TechLogo';

const stackGroups: Array<[keyof ProjectStack, string]> = [
  ['frontend', 'Frontend'],
  ['backend', 'Backend'],
  ['data', 'Dados'],
  ['infra', 'Infra e deploy'],
  ['quality', 'Qualidade'],
];

function ProjectPanel({ project }: { project: Project }) {
  return (
    <div
      role="tabpanel"
      id={`painel-${project.id}`}
      aria-labelledby={`aba-${project.id}`}
      tabIndex={0}
      className="panel"
      style={{ '--p-accent': project.accent } as CSSVars}
    >
      <div className="panel-top">
        <ProjectPreview project={project} />

        <div className="panel-info">
          <span className={`status ${project.status === 'Em produção' ? 'status-live' : 'status-dev'}`}>
            <span className="status-dot" aria-hidden="true" />
            {project.status}
          </span>
          <h3>{project.name}</h3>
          <p className="panel-tagline">{project.tagline}</p>
          <p className="panel-desc">{project.description}</p>

          <ul className="highlights">
            {project.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="panel-links">
            {project.links.map((link) => (
              <li key={link.label}>
                <a className="btn btn-ghost btn-sm" href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={link.icon} size={16} />
                  {link.label}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="panel-block">
        <h4 className="panel-subtitle">Arquitetura</h4>
        <FlowExplorer
          key={project.id}
          nodes={project.architecture}
          initialId={project.featuredNodeId}
          label={`Arquitetura do ${project.name}`}
        />
      </div>

      <div className="panel-block">
        <h4 className="panel-subtitle">Stack</h4>
        <dl className="stack-grid">
          {stackGroups.map(([key, label]) => {
            const list = project.stack[key];
            if (list.length === 0) return null;
            return (
              <div className="stack-row" key={key}>
                <dt>{label}</dt>
                <dd>
                  <ul className="logo-list">
                    {list.map((tech) => (
                      <li key={tech}>
                        <TechLogo tech={tech} size={22} label />
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState<string>(projects[0]?.id ?? '');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  if (!active) return null;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = -1;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % projects.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + projects.length) % projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = projects.length - 1;

    if (next >= 0) {
      event.preventDefault();
      const target = projects[next];
      if (target) {
        setActiveId(target.id);
        tabRefs.current[target.id]?.focus();
      }
    }
  };

  return (
    <section id="projetos" className="section" aria-labelledby="projetos-titulo">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">
            <span>01</span> Projetos
          </p>
          <h2 id="projetos-titulo">Sistemas completos, do frontend ao deploy</h2>
          <p className="section-lead">
            Escolha um projeto para ver a interface, a arquitetura e a stack. Cada um tem frontend em React +
            TypeScript e uma API própria.
          </p>
        </header>

        <div className="tabs" role="tablist" aria-label="Projetos" data-reveal>
          {projects.map((project, index) => {
            const selected = project.id === active.id;
            const logos = [project.stack.frontend[0], project.stack.backend[0], project.stack.data[0]].filter(
              (tech): tech is NonNullable<typeof tech> => tech !== undefined,
            );
            return (
              <button
                key={project.id}
                ref={(el) => {
                  tabRefs.current[project.id] = el;
                }}
                type="button"
                role="tab"
                id={`aba-${project.id}`}
                aria-selected={selected}
                aria-controls={`painel-${project.id}`}
                tabIndex={selected ? 0 : -1}
                className="tab spot"
                style={{ '--p-accent': project.accent } as CSSVars}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
                onPointerMove={spotlight}
              >
                <span className="tab-top">
                  <span className="tab-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="tab-logos" aria-hidden="true">
                    {logos.map((tech) => (
                      <TechLogo key={tech} tech={tech} size={18} decorative />
                    ))}
                  </span>
                </span>
                <span className="tab-name">{project.name}</span>
                <span className="tab-tagline">{project.tagline}</span>
              </button>
            );
          })}
        </div>

        <ProjectPanel key={active.id} project={active} />
      </div>
    </section>
  );
}