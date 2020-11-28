import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
function FooterSection() {
  return (
      <div id="footer">

        <div className="container">
          <div id="footerContact" className="container">
            <div className="row">
              <div className="col-4">
                <a className="text-white" href="tel:14037039251">
                <FontAwesomeIcon icon={faPhone} size="md" className="contact-icon"/> 
                +1 403-703-9251
                </a>
              </div>
              <div className="col-4">
              <a className="text-white" href="mailto:aarrieta@albrondgsinc.com">
              <FontAwesomeIcon icon={faEnvelope} size="md" className="contact-icon"/>
              aarrieta@albrondgsinc.com
              </a>
              </div>
              <div className="col-4">
              <a className="text-white" href="https://www.google.com/maps/place/Calgary,+AB/@51.0277555,-114.2279168,11z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="md" className="contact-icon"/> 
                Calgary, Alberta
              </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-0 p-2">Albron Designs & Graphic Systems Incorporated <span className="text-orange">©2020 All rights reserved.</span></p>
          <p>Website Designed and Developed by <a className="text-orange" href="https://alobyte.dev/">Albert Arrieta.</a></p>
          
      </div>
  );
}

export default FooterSection;