import { skills, getProficiencyLevel, LEARNING_STATUS_META } from '@/data/skills';
import { useState, useEffect, useRef } from 'react';

export function Skills() {
  const sortedSkills = [...skills].sort((a, b) => b.proficiency - a.proficiency);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  const getProficiencyDescription = (proficiency: number): string => {
    if (proficiency === 0) return 'On Radar: Queued; waiting on dependencies or other pieces of the stack.';
    if (proficiency <= 10) return 'Exploring: Initial exposure, understanding what it is';
    if (proficiency <= 25) return 'Beginner: Just starting, needs guidance';
    if (proficiency <= 40) return 'Learning: Building foundational skills';
    if (proficiency <= 55) return 'Developing: Can work with guidance';
    if (proficiency <= 70) return 'Comfortable: Independent on common tasks';
    if (proficiency <= 85) return 'Proficient: Strong working knowledge';
    return 'Advanced: Deep understanding, can teach others';
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-bg-secondary"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1.5s ease-out, transform 1.5s ease-out'
      }}
    >
      <div style={{ maxWidth: '650px' }} className="mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'rgb(var(--text-primary))' }}>
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedSkills.map((skill) => {
            const level = getProficiencyLevel(skill.proficiency);
            const IconComponent = skill.icon;
            const statusMeta = skill.learningStatus ? LEARNING_STATUS_META[skill.learningStatus] : null;
            const getHeatmapColor = (proficiency: number): string => {
              if (proficiency === 0) return '#6b7280';
              if (proficiency <= 10) return '#dc2626';
              if (proficiency <= 20) return '#f97316';
              if (proficiency <= 30) return '#fb923c';
              if (proficiency <= 40) return '#fbbf24';
              if (proficiency <= 50) return '#facc15';
              if (proficiency <= 60) return '#a3e635';
              if (proficiency <= 70) return '#4ade80';
              if (proficiency <= 80) return '#22c55e';
              if (proficiency <= 90) return '#10b981';
              return '#059669';
            };
            const barColor = getHeatmapColor(skill.proficiency);
            return (
              <div key={skill.name}>
                <div className="flex items-center mb-2">
                  <IconComponent size={24} style={{ color: '#8B5CF6' }} />
                  <span className="font-semibold text-lg ml-2" style={{ color: 'rgb(var(--text-primary))' }}>{skill.name}</span>
                  <div className="flex items-center ml-auto gap-0">
                    <span className="text-sm font-medium"
                      style={{ color: skill.proficiency === 0 ? '#9ca3af' : 'rgb(var(--text-secondary))', marginRight: '8px' }}
                      title={getProficiencyDescription(skill.proficiency)}>
                      {level}
                    </span>
                    {/* Learning status badge + tooltip (emoji only), abutted right */}
                    {statusMeta && (
                      <div className="relative inline-block"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}>
                        <span className="inline-flex items-center justify-center px-2 py-1 rounded-full text-lg font-bold cursor-help"
                          style={{
                            backgroundColor: statusMeta.color + '20',
                            color: statusMeta.color,
                            border: `1px solid ${statusMeta.color}40`,
                            width: '2.2rem', height: '2.2rem', minWidth: '2.2rem', minHeight: '2.2rem',
                            textAlign: 'center',
                            marginLeft: '0',
                          }}>
                          {statusMeta.emoji}
                        </span>
                        {hoveredSkill === skill.name && (
                          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 w-64 px-3 py-2 rounded-lg shadow-lg text-sm animate-slide-in"
                            style={{
                              backgroundColor: 'var(--tooltip-bg)',
                              color: 'var(--tooltip-text)',
                              border: '1px solid var(--tooltip-border)',
                              animation: 'slideIn 0.2s ease-out'
                            }}>
                            <div className="font-semibold mb-1">{statusMeta.label} {statusMeta.emoji}</div>
                            <div className="text-xs opacity-90">{statusMeta.tooltip}</div>
                            <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0"
                              style={{
                                borderTop: '6px solid transparent',
                                borderBottom: '6px solid transparent',
                                borderRight: '6px solid var(--tooltip-bg)'
                              }} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 rounded-full overflow-hidden"
                    style={{ backgroundColor: '#1e293b', border: '1px solid #334155', height: '20px' }}>
                    <div className="h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2 relative"
                      style={{
                        width: `${skill.proficiency}%`,
                        backgroundColor: barColor,
                        boxShadow: `0 0 20px ${barColor}, inset 0 0 20px rgba(255,255,255,0.2)`,
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.08) 10px, rgba(255,255,255,0.08) 20px)',
                      }}>
                      {skill.proficiency > 15 && (
                        <span className="text-xs font-bold text-white drop-shadow-lg relative z-10">
                          {skill.proficiency}%
                        </span>
                      )}
                    </div>
                  </div>
                  {skill.proficiency === 0 && (
                    <span className="text-sm font-mono w-12 text-right font-bold" style={{ color: '#9ca3af' }} title={getProficiencyDescription(skill.proficiency)}>
                      0%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* CSS for sliding tooltip and theme-aware colors */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-8px) translateY(-50%);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(-50%);
          }
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --tooltip-bg: #f3f4f6;
            --tooltip-text: #1f2937;
            --tooltip-border: #e5e7eb;
          }
        }
        @media (prefers-color-scheme: light) {
          :root {
            --tooltip-bg: #1f2937;
            --tooltip-text: #f3f4f6;
            --tooltip-border: #374151;
          }
        }
      `}</style>
    </section>
  );
}
