import type { IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaNode, FaAws } from 'react-icons/fa';
import { MdAccessibility } from 'react-icons/md';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiTailwindcss
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export type SkillCategory = 'frontend' | 'backend' | 'databases' | 'cloud' | 'tools';

export interface Skill {
  name: string;
  icon: IconType;
  proficiency: number; // 0-100 - UPDATE THESE NUMBERS!
  category: SkillCategory;
}

// Helper function to get proficiency level from number
export const getProficiencyLevel = (proficiency: number): string => {
  if (proficiency === 0) return 'Not Set'; // Make it obvious when not configured
  if (proficiency <= 25) return 'Learning';
  if (proficiency <= 50) return 'Comfortable';
  if (proficiency <= 75) return 'Proficient';
  return 'Confident';
};

// ⚠️ UPDATE THE PROFICIENCY NUMBERS BELOW (0-100) ⚠️
// 0-25: Learning
// 26-50: Comfortable
// 51-75: Proficient
// 76-100: Confident

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML',
    icon: FaHtml5,
    proficiency: 54, // weighted average based on practical importance: semantic HTML (90*5), forms (80*5), accessibility (70*5), responsive (60*5), meta tags (50*4), canvas/SVG (40*3), web APIs (30*4), performance (20*4), advanced HTML5 (10*2), microdata (0*1) = 2040/38 ≈ 54
    category: 'frontend'
  },
  // Accessibility separated from general HTML
  {
    name: 'Accessibility',
    icon: MdAccessibility,
    proficiency: 50, // accessibility basics (labels, keyboard focus, ARIA awareness)
    category: 'frontend'
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    proficiency: 77, // weighted average based on practical importance: basics (95*5), layout (80*5), responsive (80*5), accessibility (80*5), tooling (60*3), advanced (30*2) = 1915/25 = 77
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    proficiency: 73, // weighted average based on practical importance: fundamentals (90*5), ES6+ (85*5), async (70*5), DOM (80*5), tooling (50*3), testing (40*3) = 1895/26 ≈ 73
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    proficiency: 5, // basic awareness - package installation and setup knowledge
    category: 'frontend'
  },
  {
    name: 'React',
    icon: FaReact,
    proficiency: 35, // basic proficiency - comfortable with components, state, effects; limited advanced features
    category: 'frontend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    proficiency: 8, // basic deployment knowledge - running server with apps but limited understanding
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    proficiency: 20, // basic understanding - concept familiarity, tutorial usage, limited configuration knowledge
    category: 'frontend'
  },

  // Backend
  {
    name: 'Python',
    icon: FaPython,
    proficiency: 58, // intermediate knowledge - strong basics, web development, deployment; limited advanced topics
    category: 'backend'
  },
  {
    name: 'Django',
    icon: SiDjango,
    proficiency: 55, // practical knowledge - can build projects, models, views, auth, deployment; terminology gaps
    category: 'backend'
  },
  {
    name: 'Flask',
    icon: SiFlask,
    proficiency: 45, // practical experience - can build apps, routes, templates, deployment; no extensions
    category: 'backend'
  },
  {
    name: 'Node.js',
    icon: FaNode,
    proficiency: 12, // guided knowledge - can use with instruction but not independent
    category: 'backend'
  },

  // Databases
  {
    name: 'SQL',
    icon: BiLogoPostgresql,
    proficiency: 40, // competent knowledge - can perform basic operations but finds it mentally taxing
    category: 'databases'
  },

  // Cloud & Tools
  {
    name: 'AWS (EC2)',
    icon: FaAws,
    proficiency: 25, // practical knowledge - EC2 deployment, security basics, S3 setup; limited services
    category: 'cloud'
  },
];
