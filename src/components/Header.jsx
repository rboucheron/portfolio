import React from "react";
import { Link } from "react-router-dom";

// Header.jsx
import IMAGES from "../assets/img/images";
import ToggleMode from "./ToggleMode";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={IMAGES.logo} alt="" />
      </div>
      <div className="links">
        <Link to="/" className="navelement">
          A propos
        </Link>

        <Link to="/" className="navelement">
          Projets
        </Link>
        <Link to="/" className="navelement">
          Contact
        </Link>

        <a
          href="lien-vers-linkedin"
          className="navelement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="lien-vers-github"
          className="navelement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <ToggleMode />
      </div>
    </header>
  );
}

export default Header;
