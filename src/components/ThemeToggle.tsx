import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 flex items-center gap-2 cursor-pointer z-50"
      style={{
        right: '2rem',
        color: 'rgb(100 116 139)',
        backgroundColor: 'rgb(var(--bg-secondary))',
        border: '1px solid rgb(var(--border))',
        padding: '0.5rem 1rem',
        borderRadius: '9999px',
        opacity: isScrolling ? 1 : 0.3,
        transition: 'opacity 0.3s ease'
      }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <>
          <FaSun size={16} className="mr-1"/>
          <span className="text-sm">switch to light mode</span>
        </>
      ) : (
        <>
          <FaMoon size={16} className="mr-1"/>
          <span className="text-sm">switch to dark mode</span>
        </>
      )}
    </button>
  );
}
