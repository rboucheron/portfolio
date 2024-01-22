import React from "react";
import project from "../data/project.json";

function Project(props) {
  return (
    <section id="project">
      <h2>Projets</h2>
      {project.map((post) => (
        <div className="card">
          <div className="title">
            <h3>{post.title}</h3>
            <h4>{post.date}</h4>
          </div>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
}

export default Project;
