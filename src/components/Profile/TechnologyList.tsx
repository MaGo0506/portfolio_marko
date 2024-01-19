import styles from './Profile.module.css';
import { technologies } from './data';
import { TechnologyGroup } from './types';

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
        <div className="flex gap-2 sm:gap-5 lg:gap-10 text-gray-500 dark:text-gray-400">
            {technologies.map(renderTechnologyList)}
        </div>
     );
}
 
export default TechnologyList;