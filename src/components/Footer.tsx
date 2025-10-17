

import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiVite, SiTailwindcss } from 'react-icons/si';

export function Footer() {
  const techStack = [
    { icon: FaReact, name: 'React 19' },
    { icon: SiTypescript, name: 'TypeScript 5' },
    { icon: SiVite, name: 'Vite 6' },
    { icon: SiTailwindcss, name: 'Tailwind 4' },
  ];

  return (
    <footer className="pt-8 pb-6 px-4 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <hr className="mb-8" style={{ borderColor: 'rgb(51 65 85 / 0.4)' }} />

        {/* Tech stack */}
        <ul className="flex flex-wrap justify-center mb-4" style={{ gap: '3rem' }}>
          {techStack.map((tech) => (
            <li key={tech.name} className="flex items-center gap-2 text-sm font-normal" style={{ color: 'rgb(71 85 105)' }}>
              <tech.icon size={16} style={{ color: 'rgb(51 65 85)' }} />
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>

        {/* Descriptions */}
        <p className="text-center text-xs mb-6" style={{ color: 'rgb(71 85 105)' }}>
          React: component-based UI • TypeScript: compile-time checks • Vite: fast dev reload • Tailwind: utility-first styles
        </p>

        {/* Copyright */}
        <p className="text-center text-xs" style={{ color: 'rgb(71 85 105)' }}>
          &copy; {new Date().getFullYear()} Carrie Snow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
