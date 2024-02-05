"use client"

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { useTheme } from 'next-themes'

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="dark:bg-gray-800 bg-slate-50 py-8">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between lg:items-center">
          <div className="flex items-center mb-4 lg:mb-0">
            <a href="#" className="font-bold text-2xl text-sky-400">MG</a>
          </div>

          <div className="lg:flex flex-col hidden lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
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
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/MaGo0506" target="_blank" rel="noopener noreferrer">
              <Image src={theme === "light" ? "/assets/socials/github.png" : "/assets/socials/github-white.png"} alt="GitHub" height={28} width={28} />
            </a>
            <a href="https://www.linkedin.com/in/marko-goronjic-b2bb50209/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/socials/linkedin.png" alt="LinkedIn" height={28} width={28} />
            </a>
          </div>
        </div>

        <div className="flex lg:hidden flex-row gap-2 justify-center text-sm">
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
          </div>

        <div className="mt-8 lg:mt-12 text-center text-gray-400 text-sm lg:text-base">
          <p className="mb-2">
            Email: 
            <a href="mailto:goronjicmarko24@gmail.com" className="text-sky-400">
              goronjicmarko24@gmail.com
            </a>
          </p>
        </div>

        <div className="text-center text-xs lg:text-sm text-gray-400 mt-8 lg:mt-12">
          &copy; {new Date().getFullYear()} built and designed by Marko Goronjic. All rights reserved.
        </div> 
      </div>     
    </footer>
  );
};

export default Footer;
