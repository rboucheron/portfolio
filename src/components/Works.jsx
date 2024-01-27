import React from "react";
import { useLocation } from "react-router-dom";
import works from "../data/works.json";

function Works(props) {
  const location = useLocation();
  const pathname = location.pathname;
  const project = pathname.replace("/", "");

  var findIndexInWorks = (works, project) => {
    var WorksCol = works.findIndex(function (element) {
      return element.link === project;
    });
    if (WorksCol !== -1) {
      return WorksCol;
    }
    return -1;
  };

  
  var index = findIndexInWorks(works, project);
  if (index != -1) {
    return (
      <section>
        <h1>{project}</h1>
      </section>
    );
  } else {
    return (
      <section>
        <h1>Projet : {project} indisponible </h1>
      </section>
    );
  }
}

export default Works;
