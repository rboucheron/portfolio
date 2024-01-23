import React from "react";
import { Github, Codepen, Linkedin, Mail } from "lucide-react";

function Footer(props) {
  return (
    <footer>
      <div className="grid">
        <div>
        <Github size={40} strokeWidth={1.5} />
        </div>
        <div>
          {" "}
          <Codepen size={40} strokeWidth={1.5} />
        </div>

        <div>
          <Linkedin size={40} strokeWidth={1.5} />
        </div>
        <div>
          <Mail size={40} strokeWidth={1.5} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
