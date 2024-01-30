import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import Works from "./Works";
import Cv from "./Cv";
function TheRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviens" element={<Works />} />
        <Route path="/mcdonalds" element={<Works />} />
        <Route path="/webdocumentaire" element={<Works />} />
        <Route path="/aeroclub" element={<Works />} />
        <Route path="/cv" element={<Cv />} />
        
      </Routes>
    </AnimatePresence>
  );
}

export default TheRoutes;
