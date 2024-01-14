import styles from './Projects.module.css';
import { projects } from './data';
import ProjectCard from '@/components/Projects/ProjectCard';

const Projects = () => {
    return ( 
        <div id="projects">
             <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-4xl">Some of the things I&#39;ve worked on</h1>
                <div className={styles.line}/>
            </div>
            <div>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} isEven={index % 2 === 0} />
            ))}
            </div>
        </div> 
    );
}
 
export default Projects;