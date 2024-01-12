import styles from './Profile.module.css';
import Image from 'next/image';
import TechnologyList from '@/components/Profile/TechnologyList';

const Profile = () => {
    interface TechnologyGroup {
        technologies: string[];
      }
      
      const technologies: TechnologyGroup[] = [
        { technologies: ['Javascript', 'React', 'Vue (2, 3)', 'Next.js', 'Nuxt'] },
        { technologies: ['Node.js', 'Typescript', 'Tailwind', 'Boostrap', 'Sass'] },
        { technologies: ['Webflow', 'Redux', 'Vuex', 'HTML', 'CSS'] },
      ];

    return ( 
        <div id="about">
            <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-4xl">About me</h1>
                <div className={styles.line}/>
            </div>
            <div className="flex gap-10">
                <div className="w-3/4 flex flex-col">
                    <p className="text-gray-500 mb-4">
                        Hello! My name is Marko, and I enjoy creating things that live on the internet. My interest in web development started when I got hold of my first family computer and explored the internet.
                    </p>
                    <p className="text-gray-500 mb-4">
                        Fast forward to today, I’ve had the privilege to work for two of the biggest e-commerce retail stores in my country. WinWin which was later acquired by 
                        <a href="https://www.tehnomanija.rs/" target="_blank" className="text-sky-400 transition-colors duration-200 hover:text-sky-600"> Tehnomanija DOO</a> where i worked as a system administrator.
                        Later, I finally realized my dream and started working as an intern, then as a junior web developer at an outsourcing company called
                        <a href="https://www.quantox.com/" target="_blank" className="text-sky-400 transition-colors duration-200 hover:text-sky-600"> Quantox</a>. After two years there, I advanced to the position of a medior web developer at another outsourcing company, 
                        <a href="https://shift2ai.com/" target="_blank" className="text-sky-400 transition-colors duration-200 hover:text-sky-600"> Shift2ai</a>.
                    </p>
                    <p className="text-gray-500 mb-4">Here are a few main technologies I’ve been working with recently:</p>
                    <TechnologyList/>
                </div>
                <div className={`relative ${styles.imgHolder}`}>
                    <Image
                        src="/assets/profile_img.png"
                        width={300}
                        height={300}
                        alt="portfolio profile image"
                    />
                    <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-sky-400 z-10 transition-colors duration-150 hover:bg-transparent"/>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;
