import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Logo from "../images/logo.png";
function AboutSection() {
  return (
      <div id="aboutSection">
          <h1 className="pt-5 text-white">ABOUT US</h1>

          <div className="mt-5 container">

            <div className="row">

              <div className="col-md-6">
                <img src={Logo} width="400px"></img>
              </div>

              <div className="col-md-6">

                <p className="text-white text-left pb-4">
                  Albron Designs & Graphic Systems Incorporated is Calgary based and has been providing engineering design and drafting services 
                  to canadian companies from a wide range of industries including Oil & Gas, Power Generation Water Treatment, Manufacturing, 
                  Equipment production, Mining, Civil/Structural Construction, and General Steel Fabrication.
                  <br />
                  <br />
                  For years, we, have established strong relationship with our valued clients who are always relying on the quality service
                  we provide. It is our pride to be an integral part of our client's business and we will remain commited to continuously
                  providing our quality services and exceed client’s expectations.
                  <br />
                  <br />
                  Albron DGS Inc. provides a complete engineering design and drafting solution for your business, from small general 
                  structural projects to large facility projects. Using the latest computer aided design (CAD) softwares, you can be 
                  assured of the quality and accuracy in the design and drafting we can provide.
                </p>

              </div>

            </div>

          </div>
         


          

      </div>
  );
}

export default AboutSection;
