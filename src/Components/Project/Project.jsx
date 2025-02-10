import React, { forwardRef } from 'react';
import './Project.css';

const Project = forwardRef(({
    image,
    title,
    description,
    tecnos,
    className,
    
    onClick, 
}, ref) => {
    return (
        <div
            className={`project-button ${className}`}
            tabIndex={0}
            ref={ref}
            onClick={onClick} 
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick(); 
                }
            }}
            role="button" 
        >
            <div className="project-content">
                <img
                    className="project-img"
                    src={image}
                    alt={`Projet ${title}`}
                />
                <div className="project-txt">
                    <p>{description}</p>
                    <p className='tecnos'>{tecnos}</p>
                </div>
            </div>
        </div>
    );
});

Project.displayName = 'Project'; 

export default Project;
