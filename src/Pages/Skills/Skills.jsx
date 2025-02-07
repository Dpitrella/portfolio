import React from 'react'
import './Skills.css'

import logo2 from '../../Assets/logos/javascript-logo.webp'
import logo3 from '../../Assets/logos/react-logo.webp'
import logo4 from '../../Assets/logos/css-logo.webp'
import logo1 from '../../Assets/logos/html-logo.webp'

function Skills() {
    return (
        <div className='skills-content'>
            <div className='img-skils'>
                <img src={logo1} alt=" Logo HTML" />
                <img src={logo2} alt=" Logo JS" />
                <img src={logo3} alt=" Logo React" />
                <img src={logo4} alt=" Logo CSS" />
            </div>
            <div className='soft-skills'>
                <p>Adaptabilité </p>
                <p>Logique</p>
                <p>Communication</p>
                <p>Polyvalence</p>
                <p>Organisation</p>
            </div>
        </div>

    )
}

export default Skills