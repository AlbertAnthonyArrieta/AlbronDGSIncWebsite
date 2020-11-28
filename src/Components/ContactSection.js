import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
function ContactSection() {
  return (
      <div id="contact">
        <h1 className="text-white mb-4">CONTACT</h1>
        <div className="container">
        <h4 className="text-white mb-2">
          Feel free to contact us for your ideas to put into detail.
          No job too big or small. If you're an individual contractor or a small fabricator, give us a call.
          We are your team outside your office.
        </h4>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4">
            <a class="text-orange" href="tel:14037039251">
              <div className="contactCard hvr-sweep-to-bottom">
                <FontAwesomeIcon icon={faPhone} size="3x" className="contact-icon"/> 
                <h5 className="text-white mb-4 mt-4">+1 403-703-9251</h5>
              </div>
            </a>
            </div>

            <div className="col-md-4">

              <a className="text-orange" href="mailto:aarrieta@albrondgsinc.com">
              
                <div className="contactCard hvr-sweep-to-bottom">
                  <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon"/>
                  <h5 className="text-white mb-4 mt-4">aarrieta@albrondgsinc.com</h5>
                </div>

              </a>
            </div>

            <div className="col-md-4">

            <a class="text-orange" href="https://www.google.com/maps/place/Calgary,+AB/@51.0277555,-114.2279168,11z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831">

              <div className="contactCard hvr-sweep-to-bottom">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="contact-icon"/> 
                <h5 className="text-white mb-4 mt-4">Calgary, Alberta</h5>
              </div>

            </a>
            </div>
          
        

      
        
        
          </div>
        </div>
        




      </div>
  );
}

export default ContactSection;