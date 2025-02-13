import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [moiColor, setMoiColor] = useState(location.pathname === '/' ? '#FFB980' : '#5FFFAB');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setActiveLink(location.pathname);
        setMoiColor(location.pathname === '/' ? '#FFB980' : '#5FFFAB');
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav>
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={isMenuOpen ? 'open' : ''}>
                    <li>
                        <Link
                            aria-label="Aller à Accueil"
                            className={`menu-link ${activeLink === '/' ? 'active' : ''}`}
                            to="/"
                            style={{ color: moiColor }}
                        >
                            MOI
                        </Link>
                    </li>
                    <li className='portfolio'>
                        <Link
                            aria-label="Aller à Portfolio"
                            className={`menu-link ${activeLink === '/portfolio' ? 'active' : ''}`}
                            to='/portfolio'
                        >
                            PORTFOLIO
                        </Link>
                    </li>
                    <li className='skills'>
                        <Link
                            aria-label="Aller à Skills"
                            className={`menu-link ${activeLink === '/skills' ? 'active' : ''}`}
                            to='/skills'
                        >
                            SKILLS
                        </Link>
                    </li>
                    <li className='formation'>
                        <Link
                            aria-label="Aller à Formation"
                            className={`menu-link ${activeLink === '/formation' ? 'active' : ''}`}
                            to='/formation'
                        >
                            FORMATION
                        </Link>
                    </li>
                    <li className='contact'>
                        <Link
                            aria-label="Aller à Contact"
                            className={`menu-link ${activeLink === '/contact' ? 'active' : ''}`}
                            to='/contact'
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
