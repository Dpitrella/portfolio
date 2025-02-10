import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="footer-content">
            
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" rotation={180} style={{color: "#5fffab",}} />
            
            <a href="https://github.com/Dpitrella" target="blanck" alt="Vers mon github">
                <FontAwesomeIcon icon="fa-brands fa-github" style={{ color: "#5fffab", }} />
            </a>
            <a href="www.linkedin.com/in/dante-pitrella-b4b250302" target="blanck" alt="Vers mon Linkedin">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{ color: "#5fffab", }} />
            </a>

        </div>
    )
}
export default Footer