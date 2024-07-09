import React from "react";

import IMAGES from "../assets/img/images";
import ToggleMode from "./ToggleMode";
import { HashLink as Link } from "react-router-hash-link";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={IMAGES.logo} alt="" />
      </div>
      <div className="links">
        <Link to="/#about" className="navelement">
          A propos
        </Link>
        <Link to="/#project" className="navelement">
          Projets
        </Link>
        <Link to="/#contact" className="navelement">
          Contact
        </Link>

        <a
          href="https://www.linkedin.com/in/rapha%C3%ABl-boucheron-287b02233/"
          className="navelement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/rboucheron"
          className="navelement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <ToggleMode />
      </div>
      <div className="phonelinks">
        <ToggleMode />
      </div>
    </header>
  );
}

export default Header;
