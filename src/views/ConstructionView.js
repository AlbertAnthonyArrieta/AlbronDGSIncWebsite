import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function ConstructionView(){
    return(
        <div id="construction-container">
            
            <img src={require('../images/logo.png')} class="big-logo" alt="logo"/>
            <div className="text-center">
            <h1>Our website is currently undergoing construction</h1>
            <h3>To reach Albron DGS Inc please contact:</h3>
            <h5 className="text-primary">
                <FontAwesomeIcon icon={faPhone} size="md" className="contact-icon"/> 
                (403)-703-9251
            </h5>

            </div>
        </div>
    )
}

export default ConstructionView;