import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function ServiceSection() {
  return (
      <div id="serviceSection">
          <div className="text-center">
              <h1 className="text-grey mt-4">SERVICES</h1>
              <div className="container-sm">
                  <div id="serviceRow" className="row">
                      <div className="col-md-4">
                         <FontAwesomeIcon icon={faTools} size="6x" className="m-3 text-orange icon-border"/>
                        <h2 className="text-grey">ENGINEERING DESIGN</h2>
                        <p>
                            We are a team of professional Mechanical Designers with extensive experience in Oil & Gas, 
                            Power Generation and various equipment fabrication. Our main goal is to provide the highest 
                            quality mechanical design and drwaing package on schedule and on budget.
                        </p>
                      </div>
                      <div className="col-md-4">
                         <FontAwesomeIcon icon={faDraftingCompass} size="6x" className="m-3 text-orange icon-border"/>
                        <h2 className="text-grey">DRAFTING SERVICES</h2>
                        <p>
                            It is our pride to provide our service with the latest technology in Building Information
                             Modeling (BIM) as part of our workflow to achieve a cost effective completion of projects
                            on schedule. We work closely with our clients to ensure our deliverables meet their expections 
                            and follow their standards.
                        </p>
                      </div>
                      <div className="col-md-4">
                         <FontAwesomeIcon icon={faDollarSign} size="6x" className="m-3 text-orange icon-border"/>
                        <h2 className="text-grey">COST EFFECTIVENESS</h2>
                        <p>
                            We will be your Engineering Design and Drafting Team outside your office. We are a project cost
                            and not an overhead cost for your company, no need to acquire workstations, softwares and programs
                            and you can eliminate extra costs on cad administration and other support.
                        </p>
                      </div>
                  </div>

                  <p className="font-weight-bold">
                    With the years of experience and skills of our team, we will assist you from start to completion of the project with the industry's best practices.
                  </p>

                  {/* <h3 className="text-grey mt-5">SOFTWARE</h3>
                  <ul>
                      <li>AutoCAD</li>
                      <li>CADWorx</li>
                      <li>NavisWorks</li>
                      <li>SolidWorx</li>
                      <li>AutoDesk plant 3D</li>
                      <li>AutoDesk Advance Steel</li>
                  </ul> */}
              </div>
          </div>
      </div>
  );
}

export default ServiceSection;
