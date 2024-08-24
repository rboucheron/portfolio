import React from "react";
import Image from "next/image";
import { useLang } from "@/lib/store"; 

const ToggleLang = () => {
  const { lang, updateLang } = useLang();

  const handleClick = () => {
    const newLang = lang === "fr" ? "eng" : "fr";
    updateLang(newLang); 
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {lang === "fr" ? (
        <Image src="/img/usa.svg" alt="French flag" width={22} height={22} />
      ) : (
        <Image src="/img/fr.svg" alt="USA flag" width={22} height={22} />
      )}
    </div>
  );
};

export default ToggleLang;

