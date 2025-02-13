import './Formation.css'
import oc from '../../Assets/logos/oc-logo. 1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Formation() {
    return (
        <div className='formation-content'>
            <a href='https://openclassrooms.com/fr/paths/900-integrateur-web' target='blanck' className='oc'>
                <img className='logo' src={oc} alt="Logo OpenClasrooms" />
                <div className='oc-text'>
                    <h2>Intégrateur web </h2>
                    <p>OpenClassrooms - 10 mois</p>
                </div>
            </a>
            <div className='oc'>
                <FontAwesomeIcon icon="fa-solid fa-code" style={{ color: "#ffffff", }} />
                <div className='oc-text'>
                    <h2>Autodidacte</h2>
                    <FontAwesomeIcon icon="fa-solid fa-infinity" style={{ color: "#C0DAFF", }} />
                </div>
            </div>


            <div className='oc'>
                <FontAwesomeIcon icon="fa-solid fa-music" style={{ color: "#ffffff", }} />
                <div className='oc-text'>
                    <h2>Violoncelliste</h2>
                    <p>Conservatoire - 4 ans</p>
                </div>
            </div>
            <div className='oc'>
                <FontAwesomeIcon icon="fa-solid fa-camera" style={{ color: "#ffffff", }} />
                <div className='oc-text'>
                    <h2>Photographie</h2>
                    <p>Autodidacte </p>

                </div>
            </div>

        </div>
    )
}
export default Formation