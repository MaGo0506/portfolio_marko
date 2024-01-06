// Hero.tsx

import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="relative text-center bg-opacity-50 p-8 rounded-md backdrop-filter backdrop-blur-md">
        <h1 className="text-6xl font-bold mb-4 max-w-7xl">
          Hi, I&#39;m <span className="underline text-cyan-500">Marko Goronjic, a Web Developer</span> 
        <br/> 
          Crafting Digital Experiences with Innovation and Passion.
        </h1>
      </div>
    </div>
  );
};

export default Hero;