import { marqueeTechs } from '../data/tech';
import { TechLogo } from './TechLogo';

export function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Tecnologias que utilizo">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-list" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {marqueeTechs.map((tech) => (
              <li key={tech}>
                <TechLogo tech={tech} size={24} label />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}