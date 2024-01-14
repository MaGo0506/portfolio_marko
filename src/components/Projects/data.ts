import { Project } from './types';

export const projects: Project[] = [
    {
        title: "Your School Match",
        link: "https://www.yourschoolmatch.com/",
        thumbnail: "/assets/projects/ysm.webp",
        technologies: ["Vue", "Nuxt", "Vuex", "Boostrap", "Scss", "Netlify"],
        description: "A college leads website which operates an education and media online business to generate leads that are sold to schools. The leads allow prospective students to get connected with schools interested in recruiting them"
    },
    {
        title: "NS-Group Real Estate",
        link: "https://www.nekretnine-novisad.rs/",
        thumbnail: "/assets/projects/nsgroup.webp",
        technologies: ["React", "Next.js", "Node.js", "Boostrap", "Scss", "Redux"],
        description: "A real estate web application. Seamlessly navigate diverse property listings and get in contacts with the agents. client can showcase his own listings for sale"
    },
    {
        title: "Trg Real Estate",
        link: "https://trg-nekretnine.rs/",
        thumbnail: "/assets/projects/trg.webp",
        technologies: ["React", "Next.js", "Node.js", "Boostrap", "Scss", "Redux"],
        description: "A real estate web application. Seamlessly navigate diverse property listings and get in contacts with the agents. client can showcase his own listings for sale"
    },
];