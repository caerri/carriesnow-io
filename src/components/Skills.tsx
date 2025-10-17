import { skills, getProficiencyLevel } from '@/data/skills';
import { useState, useEffect, useRef } from 'react';

export function Skills() {
  // Sort skills by proficiency (highest to lowest)
  const sortedSkills = [...skills].sort((a, b) => b.proficiency - a.proficiency);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Helper to get detailed description for tooltip
  const getProficiencyDescription = (proficiency: number): string => {
    if (proficiency === 0) return 'On Radar: Adjacent tech, contextually aware';
    if (proficiency <= 10) return 'Exploring: Initial exposure, understanding what it is';
    if (proficiency <= 25) return 'Beginner: Just starting, needs guidance';
    if (proficiency <= 40) return 'Learning: Building foundational skills';
    if (proficiency <= 55) return 'Developing: Can work with guidance';
    if (proficiency <= 70) return 'Comfortable: Independent on common tasks';
    if (proficiency <= 85) return 'Proficient: Strong working knowledge';
    return 'Advanced: Deep understanding, can teach others';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade in when scrolling down, fade out when scrolling back up
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

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
      <div style={{ maxWidth: '500px' }} className="mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'rgb(var(--text-primary))' }}>
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedSkills.map((skill) => {
            const level = getProficiencyLevel(skill.proficiency);
            const IconComponent = skill.icon;

            // Heatmap color gradient - more granular
            const getHeatmapColor = (proficiency: number): string => {
              if (proficiency === 0) return '#6b7280'; // Gray - on radar, neutral
              if (proficiency <= 10) return '#dc2626'; // Deep red
              if (proficiency <= 20) return '#f97316'; // Orange-red
              if (proficiency <= 30) return '#fb923c'; // Orange
              if (proficiency <= 40) return '#fbbf24'; // Amber
              if (proficiency <= 50) return '#facc15'; // Yellow
              if (proficiency <= 60) return '#a3e635'; // Lime
              if (proficiency <= 70) return '#4ade80'; // Light green
              if (proficiency <= 80) return '#22c55e'; // Green
              if (proficiency <= 90) return '#10b981'; // Emerald
              return '#059669'; // Deep emerald/teal
            };

            const barColor = getHeatmapColor(skill.proficiency);

            return (
              <div key={skill.name}>
                {/* Skill name and icon */}
                <div className="flex items-center gap-3 mb-2">
                  <IconComponent
                    size={24}
                    style={{ color: '#8B5CF6' }}
                  />
                  <span
                    className="font-semibold text-lg"
                    style={{ color: 'rgb(var(--text-primary))' }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="ml-auto text-sm font-medium"
                    style={{
                      color: skill.proficiency === 0 ? '#9ca3af' : 'rgb(var(--text-secondary))'
                    }}
                    title={getProficiencyDescription(skill.proficiency)}
                  >
                    {level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex-1 rounded-full overflow-hidden"
                    style={{
                      backgroundColor: '#1e293b',
                      border: '1px solid #334155',
                      height: '20px'
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2 relative"
                      style={{
                        width: `${skill.proficiency}%`,
                        backgroundColor: barColor,
                        boxShadow: `0 0 20px ${barColor}, inset 0 0 20px rgba(255,255,255,0.2)`,
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.08) 10px, rgba(255,255,255,0.08) 20px)',
                      }}
                    >
                      {skill.proficiency > 15 && (
                        <span className="text-xs font-bold text-white drop-shadow-lg relative z-10">
                          {skill.proficiency}%
                        </span>
                      )}
                    </div>
                  </div>
                  {skill.proficiency === 0 && (
                    <span
                      className="text-sm font-mono w-12 text-right font-bold"
                      style={{ color: '#9ca3af' }}
                      title={getProficiencyDescription(skill.proficiency)}
                    >
                      0%
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
