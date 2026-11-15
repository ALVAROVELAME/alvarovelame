import { profile } from '../data/profile';
import { Icon } from './Icons';

export function Contact() {
  return (
    <section id="contato" className="section" aria-labelledby="contato-titulo">
      <div className="container">
        <div className="cta" data-reveal>
          <p className="eyebrow">
            <span>05</span> Contato
          </p>
          <h2 id="contato-titulo">Vamos conversar?</h2>
          <p className="section-lead">
            Gostou de algum projeto? Veja o código no GitHub ou me chame pelo LinkedIn.
          </p>

          <div className="cta-actions">
            <a className="btn btn-primary" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={20} />
              github.com/ALVAROVELAME
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={20} />
              linkedin.com/in/alvaro-velame
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}