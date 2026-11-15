import type { NavItem, Profile } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'infraestrutura', label: 'Infraestrutura' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
];

export const profile: Profile = {
  name: 'Alvaro Velame',
  role: 'Desenvolvedor Full Stack',
  headline:
    'Do painel em React à API em produção: interfaces acessíveis, backends seguros e deploy automatizado.',
  summary:
    'Três sistemas completos, cada um com frontend em React + TypeScript e uma API própria em uma stack diferente: Java, C# e Node.js.',
  rotatingWords: ['sistemas completos', 'APIs seguras', 'interfaces acessíveis', 'pipelines de deploy'],
  github: 'https://github.com/ALVAROVELAME',
  linkedin: 'https://www.linkedin.com/in/alvaro-velame/',
  stats: [
    { value: 3, label: 'sistemas completos' },
    { value: 6, label: 'repositórios' },
    { value: 3, label: 'stacks de backend' },
  ],
  principles: [
    {
      title: 'Acessibilidade de verdade',
      description:
        'Contraste forte, navegação por teclado, ARIA, suporte a leitores de tela e respeito às preferências do sistema.',
      icon: 'accessibility',
    },
    {
      title: 'Segurança desde o início',
      description:
        'JWT, senhas com hash, validação de entrada, dados isolados por usuário e documentos de privacidade alinhados à LGPD.',
      icon: 'shield',
    },
    {
      title: 'Entrega contínua',
      description:
        'Containers com Docker, proxy com Nginx, HTTPS e deploy automatizado com GitHub Actions.',
      icon: 'zap',
    },
    {
      title: 'Qualidade comprovada',
      description:
        'TypeScript estrito, ESLint, documentação com Swagger e testes automatizados nas APIs em .NET e Node.js.',
      icon: 'check',
    },
  ],
};