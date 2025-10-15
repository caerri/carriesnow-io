import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-bg-secondary">
      <div style={{ maxWidth: '1200px' }} className="mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ color: 'rgb(var(--text-primary))' }}>Projects</h2>
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '100%'
          }}
        >
          {projects.map(project => (
            <div
              key={project.id}
              className="transition-all duration-300"
              style={{
                backgroundColor: '#2a2a3a',
                borderRadius: '12px',
                overflow: 'hidden',
                padding: '1.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3a3a4a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2a2a3a';
              }}
            >
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'rgb(var(--text-primary))' }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: 'rgb(var(--text-secondary))' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: 'rgb(139 92 246 / 0.1)',
                        color: '#8B5CF6',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#8B5CF6' }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#8B5CF6' }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
