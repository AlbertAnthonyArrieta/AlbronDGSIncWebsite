import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

function ServiceSection() {
  return (
      <div>
          <div className="text-center m-5">
              <h1 className="text-grey">SERVICES</h1>
              <div className="container">
                  <div className="row m-5 p-5">
                      <div className="col-6">
                         <FontAwesomeIcon icon={faTools} size="6x" className="m-3 text-orange icon-border"/>
                        <h2 className="text-grey">ENGINEERING DESIGN</h2>
                        <p>Our team of professional designers in partnership with experienced engineers in the oil and gas industry will ensure that your project is on time and on budget and that the quality is not compromised.</p>
                      </div>
                      <div className="col-6">
                         <FontAwesomeIcon icon={faDraftingCompass} size="6x" className="m-3 text-orange icon-border"/>
                        <h2 className="text-grey">DRAFTING SERVICES</h2>
                        <p>Our primary focus is to provide a quality drawing package delivered on time and budget. We work closely with our clients to meet their needs by providing everything from P&ID, Isometrics to 3D models.</p>
                      </div>
                  </div>

                  {/* <h3 className="text-grey mt-5">SOFTWARE</h3>
                  <ul>
                      <li>AutoCAD</li>
                      <li>CADWorks</li>
                      <li>n___works????</li>
                      <li>SolidWorks</li>
                      <li>AutoDesk plant 3D</li>
                      <li>AutoDesk Advance Steel</li>
                  </ul> */}
              </div>
          </div>
      </div>
  );
}

export default ServiceSection;
