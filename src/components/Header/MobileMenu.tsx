import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import styles from './Header.module.css';

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-white dark:bg-gray-900 z-0 
          ${menuOpen ? 'opacity-50' : 'opacity-0 hidden'}`}
      ></div>
      <div
        className={`md:hidden fixed top-0 right-0 shadow-md h-screen w-1/2 bg-white dark:bg-gray-800 flex flex-col items-center justify-center transition-transform duration-300 transform 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'} ${styles.hamburgerMenu}`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-sky-400 hover:text-sky-500 ${styles.closeButton} absolute top-4 right-4`}
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="flex flex-col items-center gap-10">
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                href="#about"
                className={`text-sky-400 hover:text-sky-500 ${styles.navLink}`}
              >
                About
              </a>
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                href="#experience"
                className={`text-sky-400 hover:text-sky-500 ${styles.navLink}`}
              >
                Experience
              </a>
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                href="#projects"
                className={`text-sky-400 hover:text-sky-500 ${styles.navLink}`}
              >
                Projects
              </a>
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                href="#contact"
                className={`text-sky-400 hover:text-sky-500 ${styles.navLink}`}
              >
                Contact
              </a>
              <button
                className={`bg-sky-400 text-sm lg:text-base text-white hover:bg-sky-500 px-6 py-2 rounded-sm transition-colors duration-150`}
                type="button"
                onClick={() => window.open('/Marko_Goronjic-CV.pdf', '_blank')}
              >
                Resume
              </button>
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
