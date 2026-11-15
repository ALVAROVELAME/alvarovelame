import { useState } from 'react';
import { projects } from '../data/projects';
import { techKeys, techs } from '../data/tech';
import { spotlight } from '../hooks/spotlight';
import type { CSSVars, TechCategory } from '../types';
import { TechLogo } from './TechLogo';

type Filter = 'Todas' | TechCategory;

const filters: Filter[] = ['Todas', 'Frontend', 'Backend', 'Dados', 'DevOps', 'Qualidade'];

const entries = techKeys
  .map((key) => ({
    key,
    tech: techs[key],
    usedIn: projects.filter((project) => Object.values(project.stack).some((list) => list.includes(key))),
  }))
  .filter((entry) => entry.usedIn.length > 0);

export function TechStack() {
  const [filter, setFilter] = useState<Filter>('Todas');
  const visible = entries.filter((entry) => filter === 'Todas' || entry.tech.category === filter);

  return (
    <section id="tecnologias" className="section" aria-labelledby="tecnologias-titulo">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">
            <span>03</span> Tecnologias
          </p>
          <h2 id="tecnologias-titulo">O que uso para construir</h2>
          <p className="section-lead">
            Tudo aqui está nos meus projetos, em código real. Cada card mostra onde a tecnologia é usada.
          </p>
        </header>

        <div className="filters" role="group" aria-label="Filtrar por categoria" data-reveal>
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className="filter"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {visible.length} tecnologias exibidas
        </p>

        <ul className="tech-grid" key={filter}>
          {visible.map(({ key, tech, usedIn }, index) => (
            <li
              key={key}
              className="tech-card spot pop"
              style={{ '--i': index } as CSSVars}
              onPointerMove={spotlight}
            >
              <TechLogo tech={key} size={36} decorative />
              <div className="tech-text">
                <h3>{tech.label}</h3>
                <p>{tech.note}</p>
              </div>
              <ul className="used-in" aria-label={`${tech.label} é usado em`}>
                {usedIn.map((project) => (
                  <li key={project.id} style={{ '--c': project.accent } as CSSVars}>
                    <i aria-hidden="true" />
                    {project.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}