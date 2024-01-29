import { React, useState } from "react";
import { Children } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Carrousel({ children }) {
  const [CountImg, setCountImg] = useState(0);

  return (
    <>
      {children}
      <button>
        <ArrowLeft />
      </button>
      <button>
        <ArrowRight/>
      </button>
    </>
  );
}

export default Carrousel;
