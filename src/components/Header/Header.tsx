"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (!storedTheme) {
      const preferredTheme =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

      setTheme(preferredTheme);
    }

    setMounted(true);
  }, [setTheme]);

  const toggleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className={`py-4 fixed top-0 left-0 z-40 w-full ${styles.header}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="font-bold text-2xl text-sky-400">MG</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-sky-400 hover:text-sky-500 focus:outline-none ${styles.hamburger}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {mounted && (
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}

        <div className={`hidden md:flex items-center space-x-4 ${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <a href="#about" className={`hover:text-sky-400 ${styles.navLink}`}>
            About
          </a>
          <a href="#experience" className={`hover:text-sky-400 ${styles.navLink}`}>
            Experience
          </a>
          <a href="#projects" className={`hover:text-sky-400 ${styles.navLink}`}>
            Projects
          </a>
          <a href="#contact" className={`hover:text-sky-400 ${styles.navLink}`}>
            Contact
          </a>
          <button
            className="bg-sky-400 text-sm lg:text-base text-white hover:bg-sky-500 px-6 py-2 rounded-sm transition-colors duration-150"
            type="button"
            onClick={() => window.open('/Marko_Goronjic-CV.pdf', '_blank')}
          >
            Resume
          </button>
          {mounted && (
            <button
              className={`hover:text-sky-300 focus:outline-none ${styles.themeToggle}`}
              onClick={toggleDarkMode}
            >
              {theme === 'light' ? (
                <Image
                  src="/assets/moon.png"
                  width={25}
                  height={25}
                  alt="Dark theme toggle img"
                />
              ) : (
                <Image
                  src="/assets/sun.png"
                  width={25}
                  height={25}
                  alt="light theme toggle img"
                />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;