import { profile } from '../data/profile';
import { useCountUp } from '../hooks/useCountUp';
import { useTypewriter } from '../hooks/useTypewriter';
import type { CSSVars, Stat, TechKey } from '../types';
import { Icon } from './Icons';
import { TechLogo } from './TechLogo';

const innerRing: TechKey[] = ['react', 'typescript', 'vite'];
const outerRing: TechKey[] = ['springboot', 'dotnet', 'fastify', 'docker', 'mariadb'];

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSVars;

function StatItem({ stat }: { stat: Stat }) {
  const value = useCountUp(stat.value);
  return (
    <div className="stat">
      <dt>{stat.label}</dt>
      <dd>
        <span aria-hidden="true">{value}</span>
        <span className="sr-only">{stat.value}</span>
      </dd>
    </div>
  );
}

interface OrbitRingProps {
  items: TechKey[];
  radius: string;
  duration: string;
  reverse?: boolean;
}

function OrbitRing({ items, radius, duration, reverse = false }: OrbitRingProps) {
  return (
    <div className={`orbit-ring${reverse ? ' is-reverse' : ''}`} style={{ '--r': radius, '--dur': duration } as CSSVars}>
      {items.map((tech, index) => (
        <div className="orbit-item" key={tech} style={{ '--a': `${(360 / items.length) * index}deg` } as CSSVars}>
          <div className="orbit-tile">
            <TechLogo tech={tech} size={30} decorative />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const typed = useTypewriter(profile.rotatingWords);
  const [firstName, ...rest] = profile.name.split(' ');
  const fullPhrase = `Eu construo ${profile.rotatingWords.join(', ')}.`;

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-tag rise" style={delay(0)}>
            <span className="pulse-dot" aria-hidden="true" />
            {profile.role}
          </p>

          <h1 id="hero-titulo" className="hero-title rise" style={delay(100)}>
            <span>{firstName}</span> <span className="grad">{rest.join(' ')}</span>
          </h1>

          <p className="hero-line rise" style={delay(200)}>
            <span aria-hidden="true">
              Eu construo <span className="typed">{typed}</span>
              <span className="caret" />
            </span>
            <span className="sr-only">{fullPhrase}</span>
          </p>

          <p className="lead rise" style={delay(300)}>
            {profile.headline}
          </p>
          <p className="hero-summary rise" style={delay(380)}>
            {profile.summary}
          </p>

          <div className="hero-actions rise" style={delay(460)}>
            <a className="btn btn-primary" href="#projetos">
              Ver projetos
              <Icon name="arrow" size={18} />
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={18} />
              GitHub
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size={18} />
              LinkedIn
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>

          <dl className="stats rise" style={delay(560)}>
            {profile.stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </dl>
        </div>

        <div className="orbit rise" style={delay(250)} aria-hidden="true">
          <div className="orbit-glow" />
          <OrbitRing items={innerRing} radius="22cqw" duration="38s" />
          <OrbitRing items={outerRing} radius="39cqw" duration="60s" reverse />
          <div className="orbit-core">
            <span>AV</span>
          </div>
        </div>
      </div>
    </section>
  );
}