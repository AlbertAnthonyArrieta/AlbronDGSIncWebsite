import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
function ContactSection() {
  return (
      <div id="contact">
        <h1 className="text-white mb-4">CONTACT</h1>
        <h4 className="text-white mb-2">If you like what you see here, let's get in touch!</h4>
        <h5 className="text-orange mb-4">
              <FontAwesomeIcon icon={faPhone} size="md" className="contact-icon"/> 
              (403)-703-9251
        </h5>


        <button className="orange-btn btn shadow text-orange mt-4">
        <FontAwesomeIcon icon={faInbox} size="md" className="mr-2"/> 
        EMAIL
        </button>




      </div>
  );
}

export default ContactSection;