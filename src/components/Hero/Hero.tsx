"use client"

import React, {useRef, useEffect} from 'react';
import Button from '@/components/Button/Button';
import { setupIntersectionObserver } from '@/app/utils/intersectionObserver';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cleanup = setupIntersectionObserver('fade');

    return cleanup;
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className={`relative h-screen flex items-center container mx-auto fade ${styles.heroHolder}`}>
      <div className="relative text-left py-8">
        <p className="font-normal mb-5 text-base lg:text-lg">Hi, I&#39;m </p>
          <h1 className="font-bold mb-4 max-w-7xl flex flex-col">
            <span className="underline text-sky-400 text-4xl lg:text-6xl mb-3">Marko Goronjic, a Web Developer.</span>
            <span className="text-4xl lg:text-6xl text-gray-500">I build apps for the web.</span>
          </h1>
        <p className="mb-5 text-gray-500 dark:text-gray-400 text-sm lg:text-base">I’m a web developer specializing in building (and occasionally designing) <br/> exceptional digital experiences.</p>
        <Button text="Get in contact" onClick={scrollToContact} />
      </div>
    </div>
  );
};

export default Hero;