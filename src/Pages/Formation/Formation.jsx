import './Formation.css'
import oc from '../../Assets/logos/oc-logo. 1.png'
import icon from '../../Assets/logos/icon _home icon_.png'
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
                <img className='logo-1' src={icon} alt="Home Icon" />
                <div className='oc-text'>
                    <h2>Autodidacte</h2>
                    <FontAwesomeIcon icon="fa-solid fa-infinity" style={{color: "#C0DAFF",}} />
                </div>
            </div>
        </div>
    )
}
export default Formation