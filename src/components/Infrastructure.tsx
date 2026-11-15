import { pipeline } from '../data/infra';
import { spotlight } from '../hooks/spotlight';
import type { IconName } from '../types';
import { FlowExplorer } from './FlowExplorer';
import { Icon } from './Icons';
import { TechLogo } from './TechLogo';

const pillars: Array<{ icon: IconName; title: string; text: string }> = [
  {
    icon: 'layers',
    title: 'Aplicação e dados separados',
    text: 'As APIs rodam em uma VM e os bancos em outra, conversando pela rede privada. Cada camada evolui de forma independente.',
  },
  {
    icon: 'box',
    title: 'Containers com limites',
    text: 'Cada serviço roda no próprio container, com limite de CPU e memória. Um serviço não derruba os outros na mesma máquina.',
  },
  {
    icon: 'lock',
    title: 'Entrada única com HTTPS',
    text: 'O Nginx centraliza o acesso. O Certbot renova os certificados do Let’s Encrypt automaticamente, por um systemd timer.',
  },
  {
    icon: 'rocket',
    title: 'Deploy sem cliques',
    text: 'Push na main, GitHub Actions, runner próprio e Docker Compose. O serviço é reconstruído e reiniciado sozinho.',
  },
];

export function Infrastructure() {
  return (
    <section id="infraestrutura" className="section section-alt" aria-labelledby="infra-titulo">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">
            <span>02</span> Infraestrutura
          </p>
          <h2 id="infra-titulo">Onde o código roda e como ele chega lá</h2>
          <p className="section-lead">
            As três APIs vivem em uma infraestrutura virtualizada que eu mesmo organizei: máquinas virtuais,
            containers, proxy reverso e HTTPS.
          </p>
        </header>

        <ol className="infra-flow" aria-label="Mapa da infraestrutura" data-reveal>
          <li className="infra-stage">
            <h3>Frontends</h3>
            <p className="infra-sub">SPAs publicadas na Vercel</p>
            <ul className="infra-items">
              <li className="infra-item">
                <TechLogo tech="vercel" size={20} decorative />
                Vercel
              </li>
              <li className="infra-item">
                <TechLogo tech="react" size={20} decorative />
                React + TypeScript
              </li>
            </ul>
          </li>

          <li className="infra-link" aria-hidden="true">
            <span>HTTPS</span>
            <i />
          </li>

          <li className="infra-stage">
            <h3>Nginx</h3>
            <p className="infra-sub">Reverse proxy e TLS</p>
            <ul className="infra-items">
              <li className="infra-item">
                <TechLogo tech="nginx" size={20} decorative />
                Ponto único de entrada
              </li>
              <li className="infra-item">
                <TechLogo tech="letsencrypt" size={20} decorative />
                Certbot + Let’s Encrypt
              </li>
            </ul>
          </li>

          <li className="infra-link" aria-hidden="true">
            <span>proxy</span>
            <i />
          </li>

          <li className="infra-stage infra-stage-main">
            <h3>VM de aplicações</h3>
            <p className="infra-sub">Docker · limites por container</p>
            <ul className="infra-items">
              <li className="infra-item">
                <TechLogo tech="java" size={20} decorative />
                AgroGestor API
              </li>
              <li className="infra-item">
                <TechLogo tech="dotnet" size={20} decorative />
                CtOperacional API
              </li>
              <li className="infra-item">
                <TechLogo tech="nodejs" size={20} decorative />
                Controle de Insumos API
              </li>
            </ul>
          </li>

          <li className="infra-link" aria-hidden="true">
            <span>rede privada</span>
            <i />
          </li>

          <li className="infra-stage">
            <h3>VM de dados</h3>
            <p className="infra-sub">Bancos separados da aplicação</p>
            <ul className="infra-items">
              <li className="infra-item">
                <TechLogo tech="mariadb" size={20} decorative />
                MariaDB
              </li>
              <li className="infra-item">
                <TechLogo tech="mongodb" size={20} decorative />
                MongoDB
              </li>
            </ul>
          </li>
        </ol>

        <ul className="pillars">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="pillar spot" onPointerMove={spotlight} data-reveal>
              <span className="icon-tile">
                <Icon name={pillar.icon} size={22} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </li>
          ))}
        </ul>

        <h3 className="subhead">Do commit ao ar</h3>
        <FlowExplorer nodes={pipeline} label="Pipeline de deploy" initialId="actions" />
      </div>
    </section>
  );
}