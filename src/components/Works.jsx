import React from "react";
import { useLocation } from "react-router-dom";
import works from "../data/works.json";
import Project from "./Project";
import Projects from "./Projects";

function Works(props) {
  const location = useLocation();
  const pathname = location.pathname;
  const project = pathname.replace("/", "");

  var findIndexInWorks = (works, project) => {
    var WorksCol = works.findIndex((work) => work.link == project);
    if (WorksCol !== -1) {
      return WorksCol;
    } else {
      return -1;
    }
  };

  var index = findIndexInWorks(works, project);
  if (index != -1) {
    return (
      <>
        <h1>{works[index].title}</h1>
        <p>{works[index].content}</p>
      </>
    );
  } else {
    return (
      <>
        <section id="work">
          <h1>{project} est indisponible </h1>
        </section>
        <Projects />
      </>
    );
  }
}

export default Works;
