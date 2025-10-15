import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" style={{ color: 'rgb(var(--color-accent-orange))' }}>Let's Connect</h2>
        <p className="text-xl mb-8" style={{ color: 'rgb(var(--text-secondary))' }}>
          Open to developer opportunities, collaborations, or just talking code. Let's build something together.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/caerri"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
            style={{ color: 'rgb(var(--text-secondary))' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(var(--color-accent))'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(var(--text-secondary))'}
          >
            <FaGithub size={45} />
          </a>
          <a
            href="https://linkedin.com/in/casnow"
            target="_blank"
            rel="noopener noreferrer"
            className="transition"
            style={{ color: 'rgb(var(--text-secondary))' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'rgb(var(--color-accent))'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(var(--text-secondary))'}
          >
            <FaLinkedin size={45} />
          </a>
        </div>
      </div>
    </section>
  );
}
