"use client"

import React, { useState, useEffect } from 'react';
import { WorkHistory } from './types';
import styles from './WorkExperience.module.css'
  
  interface TabsProps {
    workHistory: WorkHistory[];
  }

const Tabs: React.FC<TabsProps> = ({ workHistory }) => {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  useEffect(() => {
    setSelectedTab(0);
  }, []);

  return (
    <div className="flex gap-7 text-gray-500 dark:text-gray-400">
      
         <div className="flex flex-col flex-shrink-0 relative">
         <div className={`absolute top-0 left-0 h-full bg-sky-400 w-1 ${styles.slideBlock}`} style={{
            height: `calc(100% / ${workHistory.length})`,
            transform: `translateY(${selectedTab !== null ? selectedTab * 100 : 0}%)`,
        }} />
            { workHistory.map((job, index) => (
                <div 
                  className={`border-l-2 border-gray-400 cursor-pointer py-1 px-2 ${
                    selectedTab === index ? `${styles.selectedTab} bg-gray-200 text-sky-400 dark:bg-sky-500  dark:text-white` : 
                    `${styles.tab} hover:text-sky-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-sky-400 transition-colors duration-200`
                  }`} 
                  key={index} 
                  onClick={() => setSelectedTab(index)}
                >
                    {job.company}
                </div>
            ))}
           
        </div>
      
      { selectedTab !== null && (
        <div>
            <div className="mb-1">
                <p className="font-medium text-lg dark:text-gray-300">{workHistory[selectedTab].role} 
                    <span className="text-sky-400"> @ 
                        <a href={workHistory[selectedTab].link} className="text-sky-400 transition-colors duration-200 hover:text-sky-600" target="_blank"> {workHistory[selectedTab].company}</a>
                    </span>
                </p>
            </div>
          
          
          <h5 className="text-sm mb-2">{workHistory[selectedTab].date}</h5>
          <ul>
            {workHistory[selectedTab].jobDescription.map((description, idx) => (
              <li className={`mb-1 ${styles.workListItem}`} key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tabs;