'use client'

import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import { Project } from './types';
import { useTheme } from 'next-themes';
import styles from './Projects.module.css';
import { setupIntersectionObserver } from '@/app/utils/intersectionObserver';


const ProjectCard: React.FC<{ project: Project; isEven: boolean }> = ({ project, isEven }) => {
  const { theme, setTheme } = useTheme()
  const projectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cleanup = setupIntersectionObserver('fadeInUp');

    return cleanup;
  }, []);

  return (
    <div ref={projectRef} className={`flex flex-col-reverse lg:flex-row my-10 lg:my-20 gap-10 lg:gap-4 fadeInUp ${isEven ? 'lg:flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0 relative">
        <Image className="rounded-md shadow-md" src={project.thumbnail} alt={project.title} width={500} height={400} />
        <a 
          href={project.link} 
          target="_blank" 
          className={`absolute top-0 left-0 h-full w-full z-10 bg-sky-400 opacity-40 hover:opacity-0 transition-opacity duration-200 rounded-md ${styles.imageOverlay}`}
        />
      </div>

      <div className={`flex flex-col justify-between ${!isEven ? 'text-right items-end' : 'text-left'}`}>
        <div>
          <p className="text-sky-400 text-xs lg:text-sm">Featured Project</p>
          <h2 className="text-lg lg:text-2xl font-semibold mb-2">{project.title}</h2>
          <p className="mb-4 text-gray-500 dark:text-gray-300 rounded-sm text-sm lg:text-base p-3 bg-gray-300 dark:bg-gray-800 shadow-md">
          {project.description}
          </p>
        
          <ul className={`list-none text-sm lg:text-base flex gap-1 md:gap-3 text-sky-400 ${!isEven ? 'justify-end' : 'justify-start'}`}>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
       <div className="mt-4">
            <a href={project.link} target="_blank">
              <Image
                src={theme === 'light' ? '/assets/link.webp' : '/assets/link_dark.webp'}
                alt="Link to Project"
                width={20}
                height={20}
              />
            </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;