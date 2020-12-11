import React from "react";
import Logo from "../images/NAVLOGO.png";
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar() {
  return (
    <div id="navbar" className="sticky-top">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link
            to="landingSection"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
          >
            <a className="navbar-brand">
              <img src={Logo} height="70rem"></img>
            </a>
          </Link>

          
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggle">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="landingSection"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <a className="nav-link">Home</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="aboutSection"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <a className="nav-link">About</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="serviceSection"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                >
                  <a className="nav-link">Services</a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#projectSection">
                 Projects
                </a>
              </li> */}
              <li className="nav-item">
                <Link
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                >
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
