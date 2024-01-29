import React from "react";
import { useLocation } from "react-router-dom";
import works from "../data/works.json";
import Projects from "./Projects";
import { motion } from "framer-motion";
import IMAGES from "../assets/img/images";
import Carrousel from "./Carrousel";
function Works(props) {
  const location = useLocation();
  const pathname = location.pathname;
  const project = pathname.replace("/", "");

  var findIndexInWorks = (works, project) => {
    var WorksCol = works.findIndex((work) => work.link == project);
    return WorksCol;
  };

  var index = findIndexInWorks(works, project);
  if (index != -1) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 50 }}
        exit={{ opacity: 0 }}
      >
        <section id="work">
          <h1>{works[index].title}</h1>
          <div className="tools">
            {works[index].tools.map((tool, idx) => (
              <div className="tool" key={idx}>
                {tool}
              </div>
            ))}
          </div>

          <p>{works[index].content}</p>

      
            <div className="img">
              {works[index].img.map((image, i) => (
                <img key={i} src={IMAGES[image]} alt="" />
              ))}
            </div>


          <div className="techno">
            <p>{works[index].toolsContent}</p>
          </div>
        </section>
      </motion.div>
    );
  } else {
    return (
      <section id="work">
        <h1>{project} est indisponible </h1>
      </section>
    );
  }
}

export default Works;
