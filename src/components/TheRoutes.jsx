import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import Works from "./Works";
function TheRoutes(props) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviens" element={<Works />} />
      </Routes>
    </AnimatePresence>
  );
}

export default TheRoutes;
