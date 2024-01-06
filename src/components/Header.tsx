"use client"

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="p-4 sticky top-0 z-40 w-full backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-lg">MG</span>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center space-x-4">
          {mounted && (
            <button
              className="hover:text-gray-300 focus:outline-none"
              onClick={toggleDarkMode}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          )}
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Portfolio
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;