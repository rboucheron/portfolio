import React from "react";
import project from "../data/project.json";
import IMAGES from "../assets/img/images";
import { Maximize2 } from "lucide-react";
function Project(props) {
  return (
    <section id="project">
      <h2>Projets</h2>
      <div className="cards">
        {project.map((post) => (
          <div className="card" key={post.id}>
            <div className="title">
              <h3>{post.title}</h3>
              <h4>{post.date}</h4>
            </div>
            <p>{post.content}</p>
            <div className="tools">
              {post.tools.map((tool) => (
                <div className="tool"> {tool}</div>
              ))}
            </div>
            <div className="grow">
              <Maximize2 />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
