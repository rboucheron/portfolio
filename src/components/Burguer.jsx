import React from "react";
import { useState } from "react";
import {Menu, X} from "lucide-react"; 

function Burguer(props) {
  const [isOpenBurguer, setIsopenBurguer] = useState(false);
  const toggleBurguer = () => {
    setIsopenBurguer(!isOpenBurguer);
  };

  return (
    <button onClick={toggleBurguer} className="navelement">
      {isOpenBurguer ? <X /> : <Menu />}
    </button>
  );
}
import { Form } from "react-router-dom";

export default Burguer;
