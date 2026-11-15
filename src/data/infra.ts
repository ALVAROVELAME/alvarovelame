import type { FlowNode } from '../types';

export const pipeline: FlowNode[] = [
  {
    id: 'push',
    name: 'Push',
    role: 'Branch main',
    icon: 'git',
    tech: ['github'],
    title: 'Tudo começa no Git',
    description:
      'Cada alteração é enviada ao GitHub. Um push na branch main dispara o workflow de deploy da API, e os frontends são publicados pela Vercel.',
    points: [
      'Commits atômicos seguindo Conventional Commits',
      'Um repositório para cada frontend e cada API',
      'Segredos mantidos fora do código-fonte',
    ],
  },
  {
    id: 'actions',
    name: 'GitHub Actions',
    role: 'Workflow automatizado',
    icon: 'zap',
    tech: ['githubactions'],
    title: 'Pipeline que roda sozinho',
    description:
      'O workflow é acionado pelo push. Na CtOperacional API, os testes rodam primeiro e o deploy só continua se todos passarem.',
    points: [
      'xUnit com banco SQLite isolado por teste (.NET)',
      'Jest + Supertest e Node.js Test Runner (Node.js)',
      'Cobertura gerada com Coverlet na API em .NET',
    ],
  },
  {
    id: 'runner',
    name: 'Runner próprio',
    role: 'Self-hosted na infraestrutura',
    icon: 'server',
    tech: ['githubactions'],
    title: 'Deploy dentro do ambiente',
    description:
      'Um runner self-hosted, instalado na própria infraestrutura, executa o deploy direto no servidor, sem etapas manuais.',
    points: [
      'Atualiza o código no diretório do serviço',
      'O arquivo .env com as credenciais fica só no servidor',
      'Nenhum segredo vai para o repositório',
    ],
  },
  {
    id: 'compose',
    name: 'Docker Compose',
    role: 'Build e reinício',
    icon: 'box',
    tech: ['docker'],
    title: 'Imagem nova, serviço novo',
    description:
      'O runner reconstrói a imagem e reinicia o serviço com Docker Compose. Ao final, imagens sem uso são removidas.',
    points: [
      'Dockerfile em duas etapas na API de Insumos (Node 22 Alpine)',
      'Variáveis de ambiente lidas do .env do servidor',
      'Limpeza de imagens antigas com docker image prune',
    ],
  },
  {
    id: 'container',
    name: 'Container',
    role: 'Serviço em execução',
    icon: 'rocket',
    tech: ['docker'],
    title: 'Cada API isolada e controlada',
    description:
      'Cada API roda no próprio container, com limite de CPU e memória, reinício automático e rotação de logs, para que um serviço não afete os demais na mesma VM.',
    points: [
      'Reinício automático (unless-stopped)',
      'Healthcheck configurado',
      'Logs com rotação (json-file)',
      'Porta publicada apenas no loopback da VM',
    ],
  },
  {
    id: 'https',
    name: 'Nginx + HTTPS',
    role: 'Entrada pública',
    icon: 'lock',
    tech: ['nginx', 'letsencrypt'],
    title: 'Chega ao usuário com HTTPS',
    description:
      'O Nginx recebe as requisições e as encaminha ao container certo. Os certificados do Let’s Encrypt são renovados automaticamente.',
    points: [
      'Certbot gerencia os certificados TLS',
      'A renovação roda por um systemd timer',
      'Detalhes internos (endereços e credenciais) não são publicados',
    ],
  },
];