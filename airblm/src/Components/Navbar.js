import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Welcome"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="Resources"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}