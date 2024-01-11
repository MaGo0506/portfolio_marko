import styles from './Profile.module.css';
import Image from 'next/image';

const Profile = () => {
    return ( 
        <div>
            <div className="flex items-center gap-5 mb-8">
                <h1 className="font-semibold text-4xl">About me</h1>
                <div className={styles.line}/>
            </div>
            <div className="flex gap-10">
                <div className="w-3/4">
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repudiandae eius, soluta deserunt quis error quo mollitia hic? Voluptatibus deserunt iste vitae alias obcaecati culpa beatae dicta, non et odit.</p>
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
