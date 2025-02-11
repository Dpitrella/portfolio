import React, { useRef, useEffect } from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, project }) {
    const linkRef = useRef(null);
    const modalContentRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const originalStyle = window.getComputedStyle(document.body).overflow;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyDown);
            if (linkRef.current) {
                linkRef.current.focus();
            }
        }

        return () => {
            document.body.style.overflow = originalStyle;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleLinkKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(project.githubLink, '_blank', 'noopener,noreferrer');
        }
    };

    const gitPages = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(project.pagesLink, '_blank', 'noopener,noreferrer');
        }
    };

    const handleWheel = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
                ref={modalContentRef}
                onWheel={handleWheel}
            >
                
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <p className="modal-title"><strong>{project.description}</strong></p>
                <p className="modal-subtext">{project.details}</p>
                <div className="modal-tech-icons">
                    {project.tecnos}
                </div>
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-github-link"
                    ref={linkRef}
                    onKeyDown={handleLinkKeyDown}
                    tabIndex={0}
                >
                    <span>Le code sur Github</span>
                </a>

                {project.pagesLink && (
                    <a 
                        href={project.pagesLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-github-link"
                        onKeyDown={gitPages}
                        tabIndex={0}
                    >
                        <span>Sur git-pages</span>
                    </a>
                )}

                <img src={project.image} alt={project.title} />
            </div>
        </div>
    );
}
