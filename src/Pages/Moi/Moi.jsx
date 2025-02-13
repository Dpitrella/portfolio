import React from 'react';
import './Moi.css';
import cvFile from '../../Assets/CVDantePitrella.pdf';
import yoImg from '../../Assets/yo.webp'

function Moi() {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = cvFile
        link.download = 'CVDantePitrella.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    };

    return (
        <div className='moi-content'>
            <div className='moi'>
                <h1 className="float-animation">
                    <span className='first-name'>DANTE </span>
                    <span className='last-name'>PITRELLA</span>
                </h1>

                <h2>BIENVENUE SUR MON PORTFOLIO DÉVELOPPEUR WEB</h2>
                <div className='info'>
                    <p>Né en Argentine dans une famille d'origine italienne, voyageur et polyglotte, sportif et amoureux de la nature.<br /><br />
                        J'ai travaillé de nombreuses années comme agriculteur et éleveur, reconverti dans le numérique.
                        J'ai également travaillé dans le service client, la gastronomie et l'hôtellerie.<br /><br />
                        Aujourd'hui, je recherche mon premier emploi en tant qu'intégrateur/ développeur web avec l'envie de continuer à apprendre. </p><br />
                    <p className='contact-me'>Si vous souhaitez me contacter, vous pouvez le faire sur / <span className='email'> contact@dantepitrella.com</span></p>


                </div>
                <button className='tele-cv' onClick={handleDownload}>Télécharger mon CV</button>
            </div>
            <span className='cont-photo'><img className='photo' src={yoImg} alt="" /></span>

        </div>
    );
}

export default Moi;
