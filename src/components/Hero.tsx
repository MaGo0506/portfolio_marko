// Hero.tsx

import React from 'react';
import Button from '@/components/Button/Button';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="relative text-left bg-opacity-50 py-8 rounded-md backdrop-filter backdrop-blur-md">
      <p className="font-normal mb-5 text-lg">Hi, I&#39;m </p>
        <h1 className="font-bold mb-4 max-w-7xl flex flex-col">
          <span className="underline text-sky-400 text-6xl mb-3">Marko Goronjic, a Web Developer.</span>
          <span className="text-6xl text-gray-500">I build apps for the web.</span>
        </h1>
        <p className="mb-5">I’m a web developer specializing in building (and occasionally designing) <br/> exceptional digital experiences.</p>
        <Button
          text="Get in contact"
        />
      </div>
    </div>
  );
};

export default Hero;