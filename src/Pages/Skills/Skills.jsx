import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../fontawesome'
const icons = [
    { name: 'html5', color: "#ff4242", alt: 'HTML' },
    { name: 'css3-alt', color: "#039be5", alt: 'CSS' },
    { name: 'square-js', color: "#f7df1e", alt: 'JS' },
    { name: 'react', color: "#80deea", alt: 'REACT' },
    { name: 'node', color: "#5fffab", alt: 'NODE.JS' },
    { name: 'sass', color: "#fd3e30", alt: 'SASS' }
];
const getIcon = (iconName, color, alt) => {
    return (
      <div className="icon-container">
        <FontAwesomeIcon className='language' icon={['fab', iconName]} style={{ color: color }} />
        <div className="icon-alt">{alt}</div>
      </div>
    );
  };



function Skills() {
    return (
        <div className='skills-content'>
            <div className='icon-skills'>
            {icons.map(icon => (
                <div key={icon.name} className="icon-wrapper">
                    {getIcon(icon.name, icon.color, icon.alt)}
                </div>
            ))}
            </div>
            <div className='soft-skills'>
                <p>Español</p>
                <p>Français</p>
                <p>Italiano</p>
                <p>English</p>
                <p>Adaptabilité </p>
                <p>Logique</p>
                <p>Communication</p>
                <p>Polyvalence</p>
                <p>Agile method</p>
                <p>Organisation</p>

            </div>
        </div>

    )
}

export default Skills