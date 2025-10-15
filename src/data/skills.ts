import type { IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaNode, FaAws } from 'react-icons/fa';
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
    proficiency: 95, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    proficiency: 80, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    proficiency: 75, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    proficiency: 5, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },
  {
    name: 'React',
    icon: FaReact,
    proficiency: 30, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    proficiency: 5, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    proficiency: 15, // ← UPDATE THIS NUMBER (0-100)
    category: 'frontend'
  },

  // Backend
  {
    name: 'Python',
    icon: FaPython,
    proficiency: 75, // ← UPDATE THIS NUMBER (0-100)
    category: 'backend'
  },
  {
    name: 'Django',
    icon: SiDjango,
    proficiency: 60, // ← UPDATE THIS NUMBER (0-100)
    category: 'backend'
  },
  {
    name: 'Flask',
    icon: SiFlask,
    proficiency: 30, // ← UPDATE THIS NUMBER (0-100)
    category: 'backend'
  },
  {
    name: 'Node.js',
    icon: FaNode,
    proficiency: 10, // ← UPDATE THIS NUMBER (0-100)
    category: 'backend'
  },

  // Databases
  {
    name: 'SQL',
    icon: BiLogoPostgresql,
    proficiency: 40, // ← UPDATE THIS NUMBER (0-100)
    category: 'databases'
  },

  // Cloud & Tools
  {
    name: 'AWS (EC2)',
    icon: FaAws,
    proficiency: 15, // ← UPDATE THIS NUMBER (0-100)
    category: 'cloud'
  },
];
