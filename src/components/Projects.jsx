import React from "react";
import project from "../data/project.json";
import { Maximize2 } from "lucide-react";


function Projects(props) {
  return (
    <>
      {project.map((post) => (
        <a href={`/${post.link}`} className="card">
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
        </a>
      ))}
    </>
  );
}

export default Projects;
