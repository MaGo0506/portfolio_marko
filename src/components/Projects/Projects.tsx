import styles from './Projects.module.css';
import { projects } from './data';
import ProjectCard from '@/components/Projects/ProjectCard';

const Projects = () => {
    return ( 
        <div id="projects" className="lg:mb-72 mb-32 pt-20 container mx-auto">
            <div className="flex items-center mb-8">
                <h1 className="font-semibold text-2xl lg:text-4xl">Some of the things I&#39;ve worked on</h1>
                <div className="line"/>
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