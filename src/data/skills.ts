import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'code',
    items: ['React', 'TypeScript', 'Vite', 'React Router', 'Axios', 'CSS com design system próprio'],
  },
  {
    title: 'Backend',
    icon: 'api',
    items: ['Java + Spring Boot', 'C# + .NET 8', 'Node.js + Fastify', 'APIs REST', 'Swagger / OpenAPI'],
  },
  {
    title: 'Dados',
    icon: 'database',
    items: ['MariaDB / MySQL', 'MongoDB + Mongoose', 'JPA / Hibernate', 'EF Core'],
  },
  {
    title: 'DevOps',
    icon: 'zap',
    items: ['Docker e Compose', 'Nginx', "Certbot / Let's Encrypt", 'GitHub Actions', 'Vercel'],
  },
  {
    title: 'Segurança',
    icon: 'shield',
    items: ['JWT', 'BCrypt', 'Bean Validation e Zod', 'Isolamento de dados por usuário', 'LGPD'],
  },
  {
    title: 'Qualidade',
    icon: 'check',
    items: ['xUnit', 'Jest e Supertest', 'ESLint', 'TypeScript estrito', 'Acessibilidade WCAG'],
  },
];