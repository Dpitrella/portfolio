
import React from 'react'
import './Moi.css'

function Moi() {
    return (
        <div className='moi'>
            <h1><span className='first-name'>DANTE </span><span className='last-name'>PITRELLA</span></h1>
            <h2>BIENVENUE SUR  MON PORTFOLIO DÉVELOPPEUR WEB </h2>
            <div className='info'>
            <p>Si vous souhaitez me contacter, vous pouvez le faire sur / </p><br /><p className='email'> contact@dantepitrella.com</p>
            </div>
            <button className='tele-cv'> Télécharger  mon CV</button>
        </div>
    )
}
export default Moi 
