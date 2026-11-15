import { profile } from '../data/profile';
import { spotlight } from '../hooks/spotlight';
import { Icon } from './Icons';

export function About() {
  return (
    <section id="sobre" className="section section-alt" aria-labelledby="sobre-titulo">
      <div className="container about-grid">
        <div data-reveal>
          <p className="eyebrow">
            <span>04</span> Sobre
          </p>
          <h2 id="sobre-titulo">Do problema real ao sistema no ar</h2>
          <p className="about-text">
            Sou desenvolvedor e gosto de ver o sistema inteiro funcionando: da tela que a pessoa usa até a API, o
            banco de dados e o pipeline que coloca tudo no ar.
          </p>
          <p className="about-text">
            Meus projetos nasceram de problemas do dia a dia — controlar um rebanho leiteiro, organizar o estoque de
            insumos, acompanhar tarefas operacionais. Todos têm frontend em React + TypeScript e uma API própria, em
            tecnologias diferentes: Java com Spring Boot, C# com .NET 8 e Node.js com Fastify.
          </p>
          <p className="about-text">
            Faço questão de que o que eu construo seja utilizável por todo mundo: contraste forte, navegação por
            teclado, suporte a leitores de tela e respeito às preferências do sistema.
          </p>
        </div>

        <ul className="principles">
          {profile.principles.map((principle) => (
            <li key={principle.title} className="principle spot" onPointerMove={spotlight} data-reveal>
              <span className="icon-tile">
                <Icon name={principle.icon} size={22} />
              </span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}