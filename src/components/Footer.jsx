import React from "react";
import { Github, Codepen, Linkedin, Mail } from "lucide-react";

function Footer(props) {
  return (
    <footer>
      <div className="grid">
        <div>
          <Github />
        </div>
        <div>
          {" "}
          <Codepen />
        </div>

        <div>
          <Linkedin />
        </div>
        <div>
          <Mail />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
