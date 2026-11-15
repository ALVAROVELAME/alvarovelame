import type { Project } from '../types';

const GITHUB = 'https://github.com/ALVAROVELAME';

// TODO: troque os links "GITHUB" pelo link exato de cada repositório de frontend.
// TODO: para usar capturas reais, salve em public/projetos/ e preencha `screenshot` (ex.: '/projetos/agrogestor.png').
export const projects: Project[] = [
  {
    id: 'agrogestor',
    name: 'AgroGestor',
    tagline: 'Gestão moderna de rebanho leiteiro',
    description:
      'Plataforma web que substitui cadernos e planilhas no controle do rebanho: cadastro de animais, produção, relatórios e backup, com contas por usuário e dados isolados por conta.',
    status: 'Em produção',
    accent: '#22c55e',
    previewUrl: 'agrogestor-br.vercel.app',
    highlights: [
      'Painel com 4 abas, KPIs, ranking de produção e relatórios para impressão',
      'Command Palette (Ctrl+K), tema claro/escuro e backup local em JSON',
      'Acessibilidade com contraste AAA, foco por teclado e testes com NVDA e VoiceOver',
      'Termos de Uso e Política de Privacidade em conformidade com a LGPD',
    ],
    stack: {
      frontend: ['react', 'typescript', 'vite', 'reactrouter', 'axios', 'css3'],
      backend: ['java', 'springboot', 'jwt', 'swagger'],
      data: ['mariadb'],
      infra: ['docker', 'nginx', 'letsencrypt', 'githubactions', 'vercel'],
      quality: ['eslint'],
    },
    featuredNodeId: 'api',
    architecture: [
      {
        id: 'usuario',
        name: 'Usuário',
        role: 'Navegador, tablet ou celular',
        icon: 'globe',
        tech: [],
        title: 'Interface responsiva e acessível',
        description:
          'O produtor acessa pelo computador, tablet ou celular. A interface funciona só com teclado, com leitores de tela e respeita o tema do sistema.',
        points: [
          'Tema claro e escuro automáticos',
          'Contraste verificado, AAA nos textos',
          'Testado com NVDA, VoiceOver e zoom de 200%',
        ],
      },
      {
        id: 'frontend',
        name: 'Frontend',
        role: 'React + Vite na Vercel',
        icon: 'code',
        tech: ['react', 'typescript', 'vite'],
        title: 'SPA em React 19 + TypeScript',
        description:
          'Aplicação de página única publicada na Vercel. O Axios envia o token JWT em todas as chamadas e, ao receber um 401, limpa a sessão e leva o usuário ao login.',
        points: [
          'React Router com guards de rota pública e protegida',
          'Cópia local dos animais como fallback offline',
          'Exportação e importação de backup em JSON',
        ],
      },
      {
        id: 'proxy',
        name: 'Nginx',
        role: 'Proxy reverso + HTTPS',
        icon: 'lock',
        tech: ['nginx', 'letsencrypt'],
        title: 'Ponto único de entrada',
        description:
          'Todo o tráfego chega por HTTPS ao Nginx, que encaminha as requisições ao container da API. Os certificados vêm do Let’s Encrypt e são renovados automaticamente pelo Certbot.',
        points: [
          'Renovação agendada por systemd timer',
          'Aplicações desacopladas da camada pública',
          'Facilita organizar endpoints e expandir a infraestrutura',
        ],
      },
      {
        id: 'api',
        name: 'AgroGestor API',
        role: 'Spring Boot em Docker',
        icon: 'api',
        tech: ['java', 'springboot', 'docker'],
        title: 'API REST em camadas',
        description:
          'Controllers recebem as requisições, services aplicam as regras de negócio e repositories (JPA/Hibernate) acessam o banco. Um filtro JWT customizado autentica cada chamada, sem sessão no servidor.',
        points: [
          'Cadastro com confirmação de e-mail por token expirável',
          'Senhas com BCrypt e dados isolados por usuário',
          'Bean Validation e tratamento global de exceções',
          'Swagger/OpenAPI com documentação interativa',
        ],
      },
      {
        id: 'dados',
        name: 'MariaDB',
        role: 'VM de dados · rede privada',
        icon: 'database',
        tech: ['mariadb'],
        title: 'Persistência separada da aplicação',
        description:
          'O banco roda em uma VM própria, e a API conversa com ele pela rede privada da infraestrutura. Separar aplicação e dados permite evoluir e administrar cada camada de forma independente.',
        points: [
          'Persistência relacional via JPA/Hibernate',
          'Comunicação pela rede privada entre as VMs',
          'A mesma VM de dados também hospeda o MongoDB de outros serviços',
        ],
      },
    ],
    links: [
      { label: 'Ver online', href: 'https://agrogestor-br.vercel.app', icon: 'external' },
      { label: 'Swagger da API', href: 'https://agrogestor-api.duckdns.org/swagger-ui.html', icon: 'docs' },
      { label: 'Código da API', href: 'https://github.com/ALVAROVELAME/agrogestor-api', icon: 'api' },
      { label: 'Frontend no GitHub', href: GITHUB, icon: 'github' },
    ],
  },
  {
    id: 'ctoperacional',
    name: 'CtOperacional',
    tagline: 'Kanban e Pomodoro para equipes com foco',
    description:
      'Controle operacional com quadro Kanban, lista detalhada, relatórios e um Pomodoro integrado que se vincula às tarefas e registra o histórico de foco.',
    status: 'Em produção',
    accent: '#8b5cf6',
    previewUrl: 'ctoperacional.vercel.app',
    highlights: [
      'Kanban com drag & drop, criação inline por coluna e painel lateral de foco',
      'Pomodoro com notificação, som (Web Audio) e contador diário',
      'Atalhos de teclado (N, /, P), Command Palette e toasts com desfazer',
      'API com testes unitários e de integração (xUnit) em banco isolado',
    ],
    stack: {
      frontend: ['react', 'typescript', 'vite', 'reactrouter', 'axios', 'css3'],
      backend: ['csharp', 'dotnet', 'jwt', 'swagger'],
      data: ['mysql', 'mariadb'],
      infra: ['docker', 'nginx', 'githubactions', 'vercel'],
      quality: ['eslint'],
    },
    featuredNodeId: 'api',
    architecture: [
      {
        id: 'usuario',
        name: 'Equipe',
        role: 'Navegador',
        icon: 'globe',
        tech: [],
        title: 'Quadro de tarefas no navegador',
        description:
          'A equipe organiza o trabalho em colunas, arrasta cards entre etapas e usa o Pomodoro sem sair da tela.',
        points: ['Kanban com drag & drop', 'Atalhos de teclado (N, /, P) e Ctrl+K', 'Notificação do navegador e som ao fim do ciclo'],
      },
      {
        id: 'frontend',
        name: 'Frontend',
        role: 'React + Vite na Vercel',
        icon: 'code',
        tech: ['react', 'typescript', 'vite'],
        title: 'SPA com contextos de React',
        description:
          'Contextos gerenciam autenticação, tarefas e notificações. O Pomodoro é um hook que pode se vincular a uma tarefa e marcá-la como em progresso.',
        points: [
          'AuthContext, TarefasContext e ToastContext',
          'Sincronização das tarefas com a API',
          'Histórico diário de foco guardado no localStorage',
        ],
      },
      {
        id: 'proxy',
        name: 'Nginx',
        role: 'Proxy da VM compartilhada',
        icon: 'lock',
        tech: ['nginx'],
        title: 'Entrada compartilhada com as outras APIs',
        description:
          'O Nginx da VM recebe as requisições do frontend e as encaminha para a porta local do container da API, que fica acessível só pelo loopback da máquina.',
        points: ['Container publicado em 127.0.0.1', 'Proxy compartilhado entre os serviços da VM', 'Serviços independentes, cada um em seu container'],
      },
      {
        id: 'api',
        name: 'CtOperacional API',
        role: 'ASP.NET Core 8 em Docker',
        icon: 'api',
        tech: ['csharp', 'dotnet', 'docker'],
        title: 'API em camadas com testes',
        description:
          'O fluxo é HTTP → Controller → Service → Repository → AppDbContext. A API cuida de cadastro, login JWT, tarefas e eventos Pomodoro.',
        points: [
          'EF Core 8 com migrations aplicadas na inicialização',
          'E-mail de confirmação via MailKit (SMTP com STARTTLS)',
          'xUnit: testes unitários e de integração com SQLite em memória',
          'Container com limite de 350 MB e 0,50 CPU, reinício automático e logs rotacionados',
        ],
      },
      {
        id: 'dados',
        name: 'MySQL / MariaDB',
        role: 'Banco relacional',
        icon: 'database',
        tech: ['mysql', 'mariadb'],
        title: 'Persistência com EF Core',
        description:
          'Usuários, tarefas e eventos Pomodoro ficam em MySQL/MariaDB, acessados pelo EF Core com o provider Pomelo. O banco é externo ao Compose da API.',
        points: [
          'Tarefas associadas ao usuário autenticado',
          'Prioridade, prazo, status e contador de Pomodoros',
          'Histórico do esquema versionado em migrations',
        ],
      },
    ],
    links: [
      { label: 'Ver online', href: 'https://ctoperacional.vercel.app', icon: 'external' },
      { label: 'Código no GitHub', href: GITHUB, icon: 'github' },
    ],
  },
  {
    id: 'controle-de-insumos',
    name: 'Controle de Insumos',
    tagline: 'Estoque, fornecedores e movimentações',
    description:
      'Sistema para organizar insumos e fornecedores e registrar compras, vendas e ajustes de estoque, com cálculo automático de estoque e total por usuário.',
    status: 'Em evolução',
    accent: '#f59e0b',
    previewUrl: 'controle-de-insumos · painel',
    highlights: [
      'API REST com Fastify, validação com Zod e documentação Swagger em /docs',
      'Autenticação JWT com confirmação de cadastro por e-mail (SMTP)',
      'Exclusão individual ou em lote e dados isolados por usuário',
      'Testes HTTP e de regras de negócio com Jest, Supertest e Node.js Test Runner',
    ],
    stack: {
      frontend: ['react', 'typescript'],
      backend: ['nodejs', 'fastify', 'zod', 'jwt', 'swagger'],
      data: ['mongodb'],
      infra: ['docker', 'githubactions'],
      quality: ['jest'],
    },
    featuredNodeId: 'api',
    architecture: [
      {
        id: 'usuario',
        name: 'Usuário',
        role: 'Navegador',
        icon: 'globe',
        tech: [],
        title: 'Gestão de estoque no navegador',
        description:
          'A pessoa cadastra insumos e fornecedores e lança compras, vendas e ajustes, vendo o estoque atualizado.',
        points: ['Movimentações de compra, venda e ajuste', 'Cadastro de insumos e fornecedores', 'Foco em UX e acessibilidade'],
      },
      {
        id: 'frontend',
        name: 'Painel',
        role: 'React + TypeScript',
        icon: 'code',
        tech: ['react', 'typescript'],
        title: 'Painel de insumos',
        description:
          'Interface em React + TypeScript para gerenciar insumos, fornecedores e movimentações. Está em evolução para se integrar de ponta a ponta com a API.',
        points: ['CRUD de insumos e fornecedores', 'Registro de movimentações', 'Interface em evolução contínua'],
      },
      {
        id: 'api',
        name: 'Controle de Insumos API',
        role: 'Fastify em Docker',
        icon: 'api',
        tech: ['nodejs', 'typescript', 'fastify', 'docker'],
        title: 'API em Node.js + TypeScript',
        description:
          'O fluxo é rotas → controllers → services → repositories → models. O Zod valida as entradas e um middleware protege as rotas com JWT.',
        points: [
          'Cadastro com confirmação por e-mail via Nodemailer (SMTP)',
          'Cálculo de estoque e total nas movimentações',
          'Jest + Supertest para HTTP e Node.js Test Runner para regras de negócio',
          'Docker em duas etapas (Node 22 Alpine), limite de 256 MB, healthcheck e logs rotacionados',
        ],
      },
      {
        id: 'dados',
        name: 'MongoDB',
        role: 'VM de dados · rede privada',
        icon: 'database',
        tech: ['mongodb'],
        title: 'Persistência com Mongoose',
        description:
          'Fornecedores, insumos e movimentações são modelados com Mongoose, e cada registro pertence ao usuário autenticado.',
        points: [
          'Acesso pela rede privada da infraestrutura',
          'Exclusão individual ou em lote',
          'Dados isolados por usuário',
        ],
      },
    ],
    links: [
      { label: 'Código da API', href: 'https://github.com/ALVAROVELAME/controle-de-insumos-api', icon: 'api' },
      { label: 'Painel no GitHub', href: GITHUB, icon: 'github' },
    ],
  },
];