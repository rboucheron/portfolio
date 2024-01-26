import React from "react";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { Contact } from "lucide-react";

function Home(props) {
  return (
    <>
      <Title />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default Home;
