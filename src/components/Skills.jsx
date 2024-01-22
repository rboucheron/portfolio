import React from "react";
import IMAGES from "../assets/img/images";

function Skills(props) {
  return (
    <section id="skills">
      <h2>Compétences</h2>
      <div className="skillgrid">
        <div className="skill">
          <div className="img">
            <img src={IMAGES.html} alt="html" />
          </div>

          <h3>Html</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.css} alt="css" />
          </div>

          <h3>Css</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.js} alt="javascript" />
          </div>

          <h3>Javascript</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.php} alt="php" />
          </div>

          <h3>Php</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.mysql} alt="mysql" />
          </div>

          <h3>Mysql</h3>
        </div>

        <div className="skill">
          <div className="img">
            <img src={IMAGES.scss} alt="Scss" />
          </div>
          <h3>Scss</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.java} alt="java" />
          </div>

          <h3>Java</h3>
        </div>

        <div className="skill">
          <div className="img">
            <img src={IMAGES.python} alt="Python" />
          </div>

          <h3>Python</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.react} alt="React" />
          </div>

          <h3>React</h3>
        </div>
        <div className="skill">
          <div className="img">
            <img src={IMAGES.tailwind} alt="tailwind" />
          </div>

          <h3>Tailwind</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
