import React from "react";
import IMAGES from "../assets/img/images";
import { motion, useScroll } from "framer-motion";
import skills from "../data/skills.json";

function Skills(props) {
  const scrollY = useScroll(); 

  const skillgrid = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const element = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills">
      <h2>Compétences</h2>
      <motion.div
        className="skillgrid"
        variants={skillgrid}
        initial="hidden"
        whileInView="visible"
      >
        {skills.map((skill) => (
          <motion.div className="skill"  variants={element}>
            <div className="img">
              <img src={IMAGES[skill.img]} alt={skill.title} />
            </div>
            <h3>{skill.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
