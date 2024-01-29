import React from "react";
import Projects from "./Projects";

function Project(props) {
  return (
    <section id="project">
      <h2>Projets</h2>
      <div className="cards">
        <Projects />
      </div>
    </section>
  );
}

export default Project;
