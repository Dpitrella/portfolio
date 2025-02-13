import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="footer-content">
            <div className="arrow-icon">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" rotation={180} style={{color: "#5fffab",}} />
            </div>
            
            <div className="social-icons">
                <a href="https://github.com/Dpitrella" target="_blank" rel="noopener noreferrer" alt="Vers mon github">
                    <FontAwesomeIcon icon="fa-brands fa-github" style={{ color: "#5fffab", }} />
                </a>
                <a href="https://linkedin.com/in/dante-pitrella-b4b250302" target="_blank" rel="noopener noreferrer" alt="Vers mon Linkedin">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#5fffab", }} />
                </a>
            </div>
        </div>
    )
}
export default Footer
