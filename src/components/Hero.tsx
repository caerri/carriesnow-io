import { useState, useEffect } from 'react';

export function Hero() {
  const [scrollOpacity, setScrollOpacity] = useState(0.3);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;

          // Calculate opacity: starts at 0.3, fades to 0 as you scroll down through the first screen
          const newOpacity = Math.max(0, 0.3 - (scrollPosition / windowHeight) * 0.3);
          setScrollOpacity(newOpacity);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-primary relative">
      {/* SVG Background - fixed position, fades on scroll */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/dot_inverted_skin_black.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: scrollOpacity,
          pointerEvents: 'none',
          transition: 'opacity 0.05s linear',
          zIndex: 0
        }}
      />
      <div className="text-center px-4 relative z-10">
        <h1
          className="font-black mb-6 animate-fade-in-up tracking-tight"
          style={{
            fontSize: 'clamp(4rem, 15vw, 10rem)',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 80px rgba(139, 92, 246, 0.5)',
            letterSpacing: '-0.02em'
          }}
        >
          Carrie Snow
        </h1>
        <p
          className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in-up animation-delay-200"
          style={{
            color: 'rgb(203 213 225)',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
            lineHeight: '1.4'
          }}
        >
          Harvard Extension CS student learning to build web applications with HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js, Python, Django, Tailwind, and AWS.
        </p>
      </div>
    </section>
  );
}
