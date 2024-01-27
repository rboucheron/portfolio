import React from "react";
import { useLocation } from "react-router-dom";
import works from "../data/works.json";

function Works(props) {
  const location = useLocation();
  const pathname = location.pathname;
  const project = pathname.replace("/", "");

  var findIndexInWorks = (works, project) => {
    var WorksCol = works.findIndex((work) => work.link == project);
    if (WorksCol !== -1) {
      return WorksCol;
    }
    return -1;
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
      <section>
        <h1>Projet : {project} est indisponible </h1>
      </section>
    );
  }
}

export default Works;
