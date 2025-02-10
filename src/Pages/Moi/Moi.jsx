import React from 'react';
import './Moi.css';
import cvFile from '../../Assets/CVDantePitrella.pdf'; 

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
        <div className='moi'>
            <h1><span className='first-name'>DANTE </span><span className='last-name'>PITRELLA</span></h1>
            <h2>BIENVENUE SUR MON PORTFOLIO DÉVELOPPEUR WEB</h2>
            <div className='info'>
                <p>Si vous souhaitez me contacter, vous pouvez le faire sur / </p><br />
                <p className='email'> contact@dantepitrella.com</p>
            </div>
            <button className='tele-cv' onClick={handleDownload}>Télécharger mon CV</button>
        </div>
    );
}

export default Moi;
