import React from "react";
import { Link } from "react-router-dom";

// Header.jsx
import IMAGES from "../assets/img/images";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={IMAGES.logo} alt="" />
      </div>
      <div className="links">
        <Link to="/">A propos</Link>
      

        <Link to="/">Projets</Link>
        <Link to="/">Contact</Link>

        <a href="lien-vers-linkedin" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
        <a href="lien-vers-github" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </header>
  );
}

export default Header;
