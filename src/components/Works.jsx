import React from "react";
import { useLocation } from "react-router-dom";
import works from "../data/works.json";
import Projects from "./Projects";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 50 }}
        exit={{ opacity: 0 }}
      >
        <h1>{works[index].title}</h1>
        <p>{works[index].content}</p>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 50 }}
        exit={{ opacity: 0 }}
      >
        <section id="work">
          <h1>{project} est indisponible </h1>
        </section>
        <Projects />
      </motion.div>
    );
  }
}

export default Works;
