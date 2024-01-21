import { workHistory } from './data';
import Tabs from '@/components/WorkExperience/Tabs';

const WorkExperience: React.FC = () => {
    return ( 
        <div id="experience" className="lg:mb-72 mb-32 pt-20 container mx-auto">
             <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-2xl lg:text-4xl text-nowrap">Work Experience</h1>
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