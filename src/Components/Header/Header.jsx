import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [activeLink, setActiveLink] = useState(window.location.pathname);
    const [moiColor, setMoiColor] = useState(window.location.pathname === '/' ? '#FFB980' : '#5FFFAB');

    useEffect(() => {
        const handleRouteChange = () => {
            setActiveLink(window.location.pathname);
            setMoiColor(window.location.pathname === '/' ? '#FFB980' : '#5FFFAB');
        };

        handleRouteChange();

        window.addEventListener('popstate', handleRouteChange);

        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a
                            area-label="Aller à Accueil"
                            className={`menu-link ${activeLink === '/' ? 'active' : ''}`}
                            href="/"
                            style={{ color: moiColor }}
                        >
                            MOI
                        </a>
                    </li>
                    <li className='portfolio'>
                        <a
                            area-label="Aller a Portfolio"
                            className={`menu-link ${activeLink === '/portfolio' ? 'active' : ''}`}
                            href='/portfolio'
                        >
                            PORTFOLIO
                        </a>
                    </li>
                    <li className='skills'>
                        <a
                            area-label="Aller a Skills"
                            className={`menu-link ${activeLink === '/skills' ? 'active' : ''}`}
                            href='/skills'
                        >
                            SKILLS
                        </a>
                    </li>
                    <li className='formation'>
                        <a
                            area-lebel="Aller a Formation"
                            className={`menu-link ${activeLink === '/formation' ? 'active' : ''}`}
                            href='/formation'
                        >
                            FORMATION
                        </a>
                    </li>
                    <li className='contact'>
                        <a
                            area-lebel="Aller a Contact"
                            className={`menu-link ${activeLink === '/contact' ? 'active' : ''}`}
                            href='/contact'
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

