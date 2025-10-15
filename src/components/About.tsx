export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" style={{ color: 'rgb(var(--color-accent-orange))' }}>About Me</h2>
        <div className="prose prose-lg">
          <p className="mb-4" style={{ color: 'rgb(var(--text-secondary))' }}>
            I'm a Computer Science student at Harvard Extension School with a minor in Finance building web applications that automate workflows and solve real business problems. I balance full-time work in the FinTech industry with coursework, bringing practical perspective to every line of code I write.
          </p>
          <p className="mb-4" style={{ color: 'rgb(var(--text-secondary))' }}>
            My technical education includes CS50, Data Structures, Web Programming, and Mathematics, complemented by Harvard Business School Online's CORe and AI Essentials programs. I've built projects ranging from financial comparison tools to automation scripts, always focusing on clean code and user experience.
          </p>
          <p className="mb-4" style={{ color: 'rgb(var(--text-secondary))' }}>
            I work with modern web technologies: React and Next.js for front-end, Python and Django for back-end, TypeScript for type safety, and AWS for deployment. I'm comfortable building responsive interfaces, writing RESTful APIs, and deploying full-stack applications.
          </p>
          <p style={{ color: 'rgb(var(--text-secondary))' }}>
            Seeking entry-level or junior developer roles where I can contribute immediately while continuing to grow as an engineer. Expected graduation: Fall 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
