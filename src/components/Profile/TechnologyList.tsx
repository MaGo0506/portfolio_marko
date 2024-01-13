import styles from './Profile.module.css';

interface TechnologyGroup {
    technologies: string[];
}
  
const technologies: TechnologyGroup[] = [
    { technologies: ['Javascript', 'React', 'Vue (2, 3)', 'Next.js', 'Nuxt'] },
    { technologies: ['Node.js', 'Typescript', 'Tailwind', 'Boostrap', 'Sass'] },
    { technologies: ['Webflow', 'Redux', 'Vuex', 'HTML', 'CSS'] },
];

const renderTechnologyList = (technologyGroup: TechnologyGroup, index: number) => (
    <ul key={index}>
      {technologyGroup.technologies.map((tech, idx) => (
        <li key={idx} className={styles.listItem}>
          {tech}
        </li>
      ))}
    </ul>
  );

const TechnologyList = () => {
    return ( 
        <div className="flex gap-10 text-gray-500 dark:text-gray-400">
            {technologies.map(renderTechnologyList)}
        </div>
     );
}
 
export default TechnologyList;