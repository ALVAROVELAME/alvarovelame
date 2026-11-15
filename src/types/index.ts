import type { CSSProperties } from 'react';

export type CSSVars = CSSProperties & { [key: `--${string}`]: string | number };

export type IconName =
  | 'github'
  | 'linkedin'
  | 'external'
  | 'code'
  | 'api'
  | 'server'
  | 'docs'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'arrow'
  | 'shield'
  | 'accessibility'
  | 'zap'
  | 'check'
  | 'layers'
  | 'database'
  | 'globe'
  | 'lock'
  | 'git'
  | 'box'
  | 'mail'
  | 'rocket';

export type TechKey =
  | 'react'
  | 'typescript'
  | 'vite'
  | 'reactrouter'
  | 'axios'
  | 'css3'
  | 'java'
  | 'springboot'
  | 'csharp'
  | 'dotnet'
  | 'nodejs'
  | 'fastify'
  | 'jwt'
  | 'swagger'
  | 'zod'
  | 'mariadb'
  | 'mysql'
  | 'mongodb'
  | 'docker'
  | 'nginx'
  | 'letsencrypt'
  | 'githubactions'
  | 'github'
  | 'vercel'
  | 'jest'
  | 'eslint';

export type TechCategory = 'Frontend' | 'Backend' | 'Dados' | 'DevOps' | 'Qualidade';

export interface SkillGroup {
  title: string;
  icon: IconName;
  items: string[];
}

export interface Tech {
  label: string;
  category: TechCategory;
  note: string;
  src: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Stat {
  value: number;
  label: string;
}

export interface Principle {
  title: string;
  description: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  summary: string;
  rotatingWords: string[];
  github: string;
  linkedin: string;
  stats: Stat[];
  principles: Principle[];
}

export interface ProjectLink {
  label: string;
  href: string;
  icon: IconName;
}

export type ProjectStatus = 'Em produção' | 'Em evolução';

export interface FlowNode {
  id: string;
  name: string;
  role: string;
  icon: IconName;
  tech: TechKey[];
  title: string;
  description: string;
  points: string[];
}

export interface ProjectStack {
  frontend: TechKey[];
  backend: TechKey[];
  data: TechKey[];
  infra: TechKey[];
  quality: TechKey[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  accent: string;
  previewUrl: string;
  screenshot?: string;
  highlights: string[];
  stack: ProjectStack;
  architecture: FlowNode[];
  featuredNodeId: string;
  links: ProjectLink[];
}
