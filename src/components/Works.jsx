import React from "react";
import { useLocation } from "react-router-dom";
import works from "../data/works.json";

function Works(props) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section>
      <h1>{pathname}</h1>
    </section>
  );
}

export default Works;
