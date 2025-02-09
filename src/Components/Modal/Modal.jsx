import React, { useRef, useEffect } from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, project }) {
    const linkRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            if (linkRef.current) {
                linkRef.current.focus();
            }
        }

        return () => {
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

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <p className="modal-title"><strong>{project.description}</strong></p>
                <p className="modal-subtext">{project.details}</p>
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

                {/* Renderiza el botón Git Pages solo si pagesLink existe */}
                {project.pagesLink && (
                    <a 
                        href={project.pagesLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-github-link"
                        ref={linkRef}
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
