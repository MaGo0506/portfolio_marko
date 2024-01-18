import styles from './Profile.module.css';
import Image from 'next/image';
import TechnologyList from '@/components/Profile/TechnologyList';

const Profile: React.FC = () => {
    return ( 
        <div id="about" className="mb-80 container mx-auto">
            <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-2xl lg:text-4xl text-nowrap">About me</h1>
                <div className="line"/>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 text-sm lg:text-base text-gray-500 dark:text-gray-400">
                <div className="w-3/4 flex flex-col">
                    <p className="mb-4">
                        Hello! My name is Marko, and I enjoy creating things that live on the internet. My interest in web development started when I got hold of my first family computer and explored the internet.
                    </p>
                    <p className="mb-4">
                        Fast forward to today, I’ve had the privilege to work for two of the biggest e-commerce retail stores in my country. WinWin which was later acquired by 
                        <a href="https://www.tehnomanija.rs/" target="_blank" className="text-sky-400 transition-colors duration-200 hover:text-sky-600"> Tehnomanija DOO</a> where i worked as a system administrator.
                        Later, I finally realized my dream and started working as an intern, then as a junior web developer at an outsourcing company called
                        <a href="https://www.quantox.com/" target="_blank" className="text-sky-400 transition-colors duration-200 hover:text-sky-600"> Quantox</a>. After two years there, I advanced to the position of a medior web developer at another outsourcing company, 
                        <a href="https://shift2ai.com/" target="_blank" className="text-sky-400 transition-colors duration-200 hover:text-sky-600"> Shift2ai</a>.
                    </p>
                    <p className="mb-4">Here are a few main technologies I’ve been working with recently:</p>
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
