"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

function Nav() {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <>
      <div className="grid grid-cols-5 gap-y-4 w-2/3 ml-auto ">
        <div className="text-sm text-[#ff6d0a] font-normal text-center">
          A propos
        </div>
        <div
          className="text-sm text-[#ff6d0a] font-normal text-center"
          onMouseOver={() => setIsHover(!isHover)}
        >
          Projet
        </div>
        <div className="text-sm text-[#ff6d0a] font-normal text-center">
          Contact
        </div>
        <div className="text-sm text-[#ff6d0a] font-normal text-center">
          Projet
        </div>
        <ToggleTheme />
      </div>
      {isHover ? <ProjectNav /> : ""}
    </>
  );
}

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div onClick={handleClick} className="grid justify-items-center">
      {isDarkTheme ? <Moon color="#ff6d0a" /> : <Sun color="#ff6d0a" />}
    </div>
  );
};

const ProjectNav = () => {
  return (
    <div className="fixed top-12 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-4 p-4 pt-8 gap-4 ">
        <div>
          <h2 className="text-md font-semibold text-center">
            Web Documentaire
          </h2>
          <p className="text-sm font-normal text-[#b1b1b1] mt-6 line-clamp-1 mb-6">
            Le webdocumentaire LÉcho des Écologues est un projet universitaire
            réalisé au cours du troisième semestre du BUT MMI.
          </p>
        </div>
        <div>
          <h2 className="text-md font-semibold text-center">
            Web Documentaire
          </h2>
          <p className="text-sm font-normal text-[#b1b1b1] mt-6 line-clamp-1 mb-6">
            Le webdocumentaire LÉcho des Écologues est un projet universitaire
            réalisé au cours du troisième semestre du BUT MMI.
          </p>
        </div>
        <div>
          <h2 className="text-md font-semibold text-center">
            Web Documentaire
          </h2>
          <p className="text-sm font-normal text-[#b1b1b1] mt-6 line-clamp-1 mb-6">
            Le webdocumentaire LÉcho des Écologues est un projet universitaire
            réalisé au cours du troisième semestre du BUT MMI.
          </p>
        </div>
        <div>
          <h2 className="text-md font-semibold text-center">
            Web Documentaire
          </h2>
          <p className="text-sm font-normal text-[#b1b1b1] mt-6 line-clamp-1 mb-6">
            Le webdocumentaire LÉcho des Écologues est un projet universitaire
            réalisé au cours du troisième semestre du BUT MMI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
