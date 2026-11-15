import type { Tech, TechKey } from '../types';

const si = (slug: string): string => `https://cdn.simpleicons.org/${slug}`;
const dev = (name: string): string =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const techs: Record<TechKey, Tech> = {
  react: { label: 'React', category: 'Frontend', note: 'Interfaces reativas com hooks e contexts.', src: si('react') },
  typescript: { label: 'TypeScript', category: 'Frontend', note: 'Tipagem estrita no front e na API de Insumos.', src: si('typescript') },
  vite: { label: 'Vite', category: 'Frontend', note: 'Build e servidor de desenvolvimento rápidos.', src: si('vite') },
  reactrouter: { label: 'React Router', category: 'Frontend', note: 'Rotas SPA com guards público e protegido.', src: si('reactrouter') },
  axios: { label: 'Axios', category: 'Frontend', note: 'Cliente HTTP com interceptors de JWT e 401.', src: si('axios') },
  css3: { label: 'CSS3', category: 'Frontend', note: 'Design system próprio, variáveis e temas.', src: dev('css3') },
  java: { label: 'Java 17', category: 'Backend', note: 'Linguagem da API do AgroGestor.', src: dev('java') },
  springboot: { label: 'Spring Boot', category: 'Backend', note: 'API REST em camadas com Spring Security.', src: si('springboot') },
  csharp: { label: 'C#', category: 'Backend', note: 'Linguagem da API do CtOperacional.', src: dev('csharp') },
  dotnet: { label: '.NET 8', category: 'Backend', note: 'ASP.NET Core, EF Core e testes com xUnit.', src: si('dotnet') },
  nodejs: { label: 'Node.js 22', category: 'Backend', note: 'Runtime da API de Controle de Insumos.', src: si('nodedotjs') },
  fastify: { label: 'Fastify', category: 'Backend', note: 'Servidor HTTP rápido, com rotas e plugins.', src: si('fastify') },
  jwt: { label: 'JWT', category: 'Backend', note: 'Autenticação stateless nas três APIs.', src: si('jsonwebtokens') },
  swagger: { label: 'Swagger', category: 'Backend', note: 'Documentação OpenAPI interativa.', src: si('swagger') },
  zod: { label: 'Zod', category: 'Backend', note: 'Validação das entradas da API de Insumos.', src: si('zod') },
  mariadb: { label: 'MariaDB', category: 'Dados', note: 'Banco relacional em VM de dados separada.', src: si('mariadb') },
  mysql: { label: 'MySQL', category: 'Dados', note: 'Persistência das tarefas e dos Pomodoros.', src: si('mysql') },
  mongodb: { label: 'MongoDB', category: 'Dados', note: 'Insumos, fornecedores e movimentações.', src: si('mongodb') },
  docker: { label: 'Docker', category: 'DevOps', note: 'Containers com limites de recursos.', src: si('docker') },
  nginx: { label: 'Nginx', category: 'DevOps', note: 'Reverse proxy e ponto único de entrada.', src: si('nginx') },
  letsencrypt: { label: "Let's Encrypt", category: 'DevOps', note: 'HTTPS com renovação automática via Certbot.', src: si('letsencrypt') },
  githubactions: { label: 'GitHub Actions', category: 'DevOps', note: 'Pipeline de testes e deploy com runner próprio.', src: si('githubactions') },
  github: { label: 'GitHub', category: 'DevOps', note: 'Versionamento e gatilho do deploy.', src: si('github') },
  vercel: { label: 'Vercel', category: 'DevOps', note: 'Hospedagem dos frontends React.', src: si('vercel') },
  jest: { label: 'Jest', category: 'Qualidade', note: 'Testes HTTP com Supertest.', src: si('jest') },
  eslint: { label: 'ESLint', category: 'Qualidade', note: 'Padronização e qualidade do código TypeScript.', src: si('eslint') },
};

export const techKeys = Object.keys(techs) as TechKey[];

export const marqueeTechs: TechKey[] = [
  'react',
  'typescript',
  'vite',
  'java',
  'springboot',
  'csharp',
  'dotnet',
  'nodejs',
  'fastify',
  'mariadb',
  'mysql',
  'mongodb',
  'docker',
  'nginx',
  'githubactions',
  'vercel',
  'jwt',
  'swagger',
];