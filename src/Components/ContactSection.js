import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
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
        <h5 className="text-orange mb-4 mt-4">
              <FontAwesomeIcon icon={faPhone} size="md" className="contact-icon"/> 
              (403)-703-9251
        </h5>

        <a href="mailto:aarrieta@albrondgsinc.com">
        <button className="orange-btn btn shadow text-orange mt-4">
        
        <FontAwesomeIcon icon={faInbox} size="md" className="mr-2"/> 
        EMAIL
        </button>
        </a>




      </div>
  );
}

export default ContactSection;