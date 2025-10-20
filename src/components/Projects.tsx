import { projects } from '@/data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-bg-secondary">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-[rgb(var(--text-primary))]">Projects</h2>
        <div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))] gap-8 max-w-full"
        >
          {projects.map(project => (
            <div key={project.id} className="card">
              <div className="card-inner">
                {/* Front of card */}
                <div className="card-front">
                  <div className="relative w-full h-full px-2">
                    {/* Title centered absolutely */}
                    <h3 className="absolute inset-0 flex items-center justify-center text-center text-lg font-bold px-2">
                      {project.title}
                    </h3>
                    {/* Tech stack pinned to bottom */}
                    <div className="absolute bottom-2 left-0 right-0 flex flex-wrap gap-2 justify-center px-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-[rgba(139,92,246,0.1)] text-[#8B5CF6]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="card-back">
                  <div className="relative w-full h-full text-center px-2">
                    {/* Centered content block */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-2">
                      <p className="text-sm text-white">
                        {project.description.length > 140 ? project.description.slice(0, 140) + '…' : project.description}
                      </p>
                      <div className="flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline"
                          >
                            GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline"
                          >
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                    {/* Tech stack pinned to bottom (repeat) */}
                    <div className="absolute bottom-2 left-0 right-0 flex flex-wrap gap-2 justify-center px-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-[rgba(255,255,255,0.15)] text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
