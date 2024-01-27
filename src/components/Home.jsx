import React from "react";
import Title from "./Title";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { motion } from "framer-motion";
function Home(props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 50}}
    exit={{opacity: 0}}

    >
      <Title />
      <About />
      <Skills />
      <Project />
      <Contact />
    </motion.div>
  );
}

export default Home;
