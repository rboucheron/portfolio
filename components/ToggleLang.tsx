import React, { useState } from "react";
import Image from "next/image";

const ToggleLang = () => {
  const [isFr, setIsFr] = useState(true);

  const handleClick = () => {
    setIsFr(!isFr);
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {isFr ? (
        <Image src="img/usa.svg" alt="frensh flag" width={22} height={22} />
      ) : (
        <Image src="img/fr.svg" alt="usa flag" width={22} height={22} />
      )}
    </div>
  );
};

export default ToggleLang;
