import React from "react";
import { Github, Codepen, Linkedin, Mail } from "lucide-react";

function Footer(props) {
  return (
    <footer>
      <div className="grid">
        <a
          href="https://github.com/rboucheron"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={40} strokeWidth={1.5} />
        </a>
        <a
          href="https://codepen.io/Raphael_3b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Codepen size={40} strokeWidth={1.5} />
        </a>

        <a
          href="https://www.linkedin.com/in/rapha%C3%ABl-boucheron-287b02233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={40} strokeWidth={1.5} />
        </a>
        <a
          href="mailto:raphaelboucheron3@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={40} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
