import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './Portfolio.css';
import Project from '../../Components/Project/Project'; 
import Modal from '../../Components/Modal/Modal';
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
    const [projects, setProjects] = useState([]);
    const location = useLocation();
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setProjects(data.projects))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

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
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
            
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
