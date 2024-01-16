import styles from './WorkExperience.module.css';
import { workHistory } from './data';
import Tabs from '@/components/WorkExperience/Tabs';

const WorkExperience: React.FC = () => {
    return ( 
        <div id="experience" className="mb-80">
             <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-4xl">Work Experience</h1>
                <div className="line"/>
            </div>
            <div>
                <Tabs 
                    workHistory={workHistory} 
                />
            </div>
        </div>
     );
}
 
export default WorkExperience;