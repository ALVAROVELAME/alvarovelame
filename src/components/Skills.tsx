import { skillGroups } from '../data/skills';
import { Icon } from './Icons';

export function Skills() {
  return (
    <section id="tecnologias" className="section section-alt" aria-labelledby="tecnologias-titulo">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">Tecnologias</p>
          <h2 id="tecnologias-titulo">O que uso para construir</h2>
          <p className="section-lead">Tudo aqui aparece nos meus projetos, em código real e rodando.</p>
        </header>

        <ul className="skills-grid">
          {skillGroups.map((group) => (
            <li key={group.title} className="skill-card" data-reveal>
              <div className="skill-head">
                <span className="skill-icon">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
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