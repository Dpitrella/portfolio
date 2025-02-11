import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Portfolio.css';
import Project from '../../Components/Project/Project'; 
import Modal from '../../Components/Modal/Modal';
import Projet1 from '../../Assets/projects/projet-sophiebluel.webp';
import Projet2 from '../../Assets/projects/projet-ninacarducci.webp';
import Projet3 from '../../Assets/projects/projet-724events.webp';
import Projet4 from '../../Assets/projects/projet-kasa.webp';
import Projet5 from '../../Assets/projects/bank1.png';
import Projet6 from '../../Assets/projects/myfood1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = [
    { name: 'html5', color: "#ff4242", alt: 'HTML' },
    { name: 'css3-alt', color: "#039be5", alt: 'CSS' },
    { name: 'square-js', color: "#f7df1e", alt: 'JavaScript' },
    { name: 'react', color: "#80deea", alt: 'React' },
    { name: 'node', color: "#5fffab", alt: 'Node.js' },
    { name: 'sass', color: "#fd3e30", alt: 'SASS' }
];

const renderTechIcons = (techs) => {
    return techs.map((tech, index) => {
        const icon = icons.find(i => i.name === tech.toLowerCase());
        if (icon) {
            return (
                <FontAwesomeIcon 
                    key={index}
                    icon={['fab', icon.name]} 
                    style={{ color: icon.color, marginRight: '5px' }}
                    title={icon.alt}
                />
            );
        }
        return null;
    });
};

function Portfolio() {
    const [isVisible, setIsVisible] = useState(false);
    const [modalProject, setModalProject] = useState(null);
    const location = useLocation();
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    const projects = [
        {
            title: "Sophie Bluel",
            image: Projet1,
            pagesLink: "",
            description: "Sophie Bluel architecte",
            details: "Utilisation d'une API pour gérer et filter les projets, la connexion de l'utilisateur et la persistance des données.",
            tecnos: ["html5", "square-js"],
            githubLink: "https://github.com/Dpitrella/pro-6.git",
        },
        {
            title: "Photographe",
            image: Projet2,
            pagesLink: "https://dpitrella.github.io/proj-8/",
            description: "Nina Carducci photographe",
            details: "Optimisation du référencement d'un site de photographe. Utilisation de Lighthouse et WAVE pour optimiser la performance, le SEO, les bonnes pratiques et l'accessibilité du site.",
            tecnos: ["css3-alt", "sass"],
            githubLink: "https://github.com/Dpitrella/proj-8.git",
        },
        {
            title: "Agence événementielle",
            image: Projet3,
            pagesLink: "",
            description: "724 events",
            details: "Debug d'un site d'une agence d'événementiel. Utilisation des tests unitaires et d'intégration ainsi que des Devtools pour debugger une application React.",
            tecnos: ["react"],
            githubLink: "https://github.com/Dpitrella/proj-9.git",
        },
        {
            title: "Location immobilière",
            image: Projet4,
            pagesLink: "",
            description: "kasa",
            details: "Application de location immobilière. Utilisation de React pour gérer l'application en composants réutilisables",
            tecnos: ["sass", "react"],
            githubLink: "https://github.com/Dpitrella/proj-7.git",
        },
        {
            title: "ArgentBank",
            image: Projet5,
            pagesLink: "",
            description: "ArgentBank",
            details: "Banque en ligne. Visiter la page d'accueil, se connecter au système, gérer des erreurs, déconnecter du système.",
            tecnos: ["square-js", "react"],
            githubLink: "https://github.com/Dpitrella/projet-10.git",
        },
        {
            title: "Ohmyfood",
            image: Projet6,
            pagesLink: "https://dpitrella.github.io/projet-ohmyfood/",
            description: "Ohmyfood",
            details: "Mobile first. Améliorer l'interface d'un site mobile avec des animations CSS.",
            tecnos: ["css3-alt", "sass"],
            githubLink: "https://github.com/Dpitrella/projet-ohmyfood.git",
        },
    ];

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
            if (projectRefs.current[0]) {
                projectRefs.current[0].focus();
            }
        }, 50);
    }, [location]);

    const handleKeyDown = (e) => {
        const currentIndex = projectRefs.current.findIndex(
            (el) => document.activeElement === el
        );

        if (e.key === 'Tab' && !e.shiftKey) {
            e.preventDefault();
            if (currentIndex < projects.length - 1) {
                projectRefs.current[currentIndex + 1]?.focus();
            }
        } else if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            if (currentIndex > 0) {
                projectRefs.current[currentIndex - 1]?.focus();
            }
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setModalProject(projects[currentIndex]);
        }
    };

    const handleClick = (index) => {
        setModalProject(projects[index]);
    };

    return (
        <>
            <div
                className='projects-container'
                ref={containerRef}
                role="group"
                aria-labelledby="projects-title"
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        tecnos={renderTechIcons(project.tecnos)}
                        className={`project-${index + 1} ${isVisible ? 'animate' : ''}`}
                        ref={el => projectRefs.current[index] = el}
                        tabIndex={0}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            
             {/* Modal */}
             {modalProject && (
                <Modal
                    isOpen={!!modalProject}
                    onClose={() => setModalProject(null)}
                    project={{
                        ...modalProject,
                        tecnos: renderTechIcons(modalProject.tecnos)
                    }}
                />
             )}
        </>
    );
}

export default Portfolio;
