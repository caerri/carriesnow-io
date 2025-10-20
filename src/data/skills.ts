import type { IconType } from 'react-icons';
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaNode, FaAws } from 'react-icons/fa';
import { MdAccessibility } from 'react-icons/md';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiApollographql,
  SiRuby,
  SiRubyonrails,
  SiGraphql,
  SiLangchain
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export type SkillCategory = 'frontend' | 'backend' | 'databases' | 'cloud' | 'tools';

export type LearningJourney =
  | 'queued'              // formerly 'on-radar'
  | 'on-demand'           // formerly 'pick-up-as-needed'
  | 'reference-implementation' // formerly 'look-up-and-ship'
  | 'experimenting'       // formerly 'tinkering'
  | 'active-practice'     // formerly 'practicing'
  | 'focused-growth'      // formerly 'ramp-up'
  | 'established'         // formerly 'comfort-zone'
  | 'mentor-ready';       // formerly 'can-teach'

export const LEARNING_STATUS_META: Record<
  LearningJourney,
  { label: string; emoji: string; tooltip: string; color: string }
> = {
  'queued': {
    label: 'Queued',
    emoji: '⏳',
    tooltip: 'Queued: waiting on dependencies or other pieces of the stack.',
    color: '#9CA3AF'
  },
  'on-demand': {
    label: 'On Demand',
    emoji: '📌',
    tooltip: 'Learn when a project requires it.',
    color: '#6B7280'
  },
  'reference-implementation': {
    label: 'Reference Implementation',
    emoji: '🔎',
    tooltip: 'Reference-first: find answers and implement reliably.',
    color: '#F59E0B'
  },
  'experimenting': {
    label: 'Experimenting',
    emoji: '🧪',
    tooltip: 'Experimenting with small projects and prototypes.',
    color: '#60A5FA'
  },
  'active-practice': {
    label: 'Active Practice',
    emoji: '🎧',
    tooltip: 'Regular small projects/exercises to build fluency.',
    color: '#3B82F6'
  },
  'focused-growth': {
    label: 'Focused Growth',
    emoji: '🔥',
    tooltip: 'Blocking focused time for rapid, deep improvement.',
    color: '#EF4444'
  },
  'established': {
    label: 'Established',
    emoji: '🙌',
    tooltip: 'Confident and productive; maintenance mode.',
    color: '#10B981'
  },
  'mentor-ready': {
    label: 'Mentor-Ready',
    emoji: '🎓',
    tooltip: 'Mentor-level: can explain and review others.',
    color: '#7C3AED'
  }
};

export interface Skill {
  name: string;
  icon: IconType;
  proficiency: number; // 0-100 - UPDATE THESE NUMBERS!
  category: SkillCategory;
  learningStatus?: LearningJourney;
}

// Helper function to get proficiency level from number
export const getProficiencyLevel = (proficiency: number): string => {
  if (proficiency === 0) return 'On Radar'; // Adjacent tech, aware of but not started
  if (proficiency <= 10) return 'Exploring'; // Initial exposure, learning what it is
  if (proficiency <= 25) return 'Beginner'; // Just starting, needs guidance
  if (proficiency <= 40) return 'Learning'; // Building foundational skills
  if (proficiency <= 55) return 'Developing'; // Can work with guidance
  if (proficiency <= 70) return 'Comfortable'; // Independent on common tasks
  if (proficiency <= 85) return 'Proficient'; // Strong working knowledge
  return 'Advanced'; // Deep understanding, can teach others
};

// ⚠️ PROFICIENCY SCALE (0-100) ⚠️
// 0: On Radar - Adjacent tech, contextually aware
// 1-10: Exploring - Initial exposure, understanding what it is
// 11-25: Beginner - Just starting, needs guidance
// 26-40: Learning - Building foundational skills
// 41-55: Developing - Can work with guidance
// 56-70: Comfortable - Independent on common tasks
// 71-85: Proficient - Strong working knowledge
// 86-100: Advanced - Deep understanding, mentorship-ready

export const skills: Skill[] = [
  // Frontend
  {
    name: 'HTML',
    icon: FaHtml5,
    proficiency: 76, // Proficcient - Strong semantic HTML, forms, accessibility, responsive; independent on common tasks
    category: 'frontend',
    learningStatus: 'established'
  },
  {
    name: 'Accessibility',
    icon: MdAccessibility,
    proficiency: 55, // Developing - Good basics (labels, keyboard, ARIA awareness); can work with guidance on advanced topics
    category: 'frontend',
    learningStatus: 'focused-growth'
  },
  {
    name: 'CSS',
    icon: FaCss3Alt,
    proficiency: 80, // Proficient - Strong command of layout, responsive, accessibility, tooling; can handle most challenges
    category: 'frontend',
    learningStatus: 'established'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    proficiency: 75, // Proficient - Solid fundamentals, ES6+, async, DOM manipulation; strong working knowledge
    category: 'frontend',
    learningStatus: 'established'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    proficiency: 5, // Exploring - Basic awareness, package installation and setup knowledge
    category: 'frontend',
    learningStatus: 'on-demand'
  },
  {
    name: 'React',
    icon: FaReact,
    proficiency: 38, // Learning - Comfortable with components, state, effects; building foundational skills
    category: 'frontend',
    learningStatus: 'focused-growth'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    proficiency: 8, // Exploring - Basic deployment knowledge, can run server but limited understanding
    category: 'frontend',
    learningStatus: 'experimenting'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    proficiency: 22, // Beginner - Concept familiarity, tutorial usage, just starting with real usage
    category: 'frontend',
    learningStatus: 'active-practice'
  },

  // Backend
  {
    name: 'Python',
    icon: FaPython,
    proficiency: 68, // Comfortable - Strong basics, web development, deployment; independent on common tasks
    category: 'backend',
    learningStatus: 'established'
  },
  {
    name: 'Django',
    icon: SiDjango,
    proficiency: 62, // Comfortable - Can build projects, models, views, auth, deployment independently
    category: 'backend',
    learningStatus: 'established'
  },
  {
    name: 'Flask',
    icon: SiFlask,
    proficiency: 50, // Developing - Can build apps, routes, templates, deployment; works with guidance on extensions
    category: 'backend',
    learningStatus: 'reference-implementation'
  },
  {
    name: 'Ruby',
    icon: SiRuby,
    proficiency: 30, // Learning - Good overview; needs practice to build fluency
    category: 'backend',
    learningStatus: 'focused-growth'
  },
  {
    name: 'Node.js',
    icon: FaNode,
    proficiency: 15, // Beginner - Can use with instruction but not yet independent
    category: 'backend',
    learningStatus: 'on-demand'
  },

  // Databases
  {
    name: 'SQL',
    icon: BiLogoPostgresql,
    proficiency: 42, // Developing - Can perform basic operations, working on fluency
    category: 'databases',
    learningStatus: 'reference-implementation'
  },

  // Cloud & Tools
  {
    name: 'AWS (EC2)',
    icon: FaAws,
    proficiency: 28, // Learning - EC2 deployment, security basics, S3 setup; building foundational cloud skills
    category: 'cloud',
    learningStatus: 'active-practice'
  },

  // On Radar / Exploring
  {
    name: 'Ruby on Rails',
    icon: SiRubyonrails,
    proficiency: 2, // On Radar - Adjacent framework; planning to practice
    category: 'backend',
    learningStatus: 'queued'
  },
  {
    name: 'Apollo GraphQL',
    icon: SiApollographql,
    proficiency: 0, // On Radar - Adjacent tech for data layer
    category: 'databases',
    learningStatus: 'queued'
  },
  {
    name: 'GraphQL',
    icon: SiGraphql,
    proficiency: 0, // On Radar - Adjacent tech for APIs
    category: 'databases',
    learningStatus: 'queued'
  },
  {
    name: 'LangChain',
    icon: SiLangchain,
    proficiency: 0, // On Radar - AI/LLM orchestration framework
    category: 'tools',
    learningStatus: 'queued'
  },
];
