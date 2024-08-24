"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/logo.svg";
import ToggleTheme from "./ToggleTheme";
import ToggleLang from "./ToggleLang";
import ProjectNav from "./ProjectNav";
import SkillNav from "./SkillNav";

const Header = () => {
  const [isOpenProject, setIsOpenProject] = useState<boolean>(false);
  const [isOpenSkill, setIsOpenSkill] = useState<boolean>(false);
  const handleSkillHover = () => {
    setIsOpenSkill(!isOpenSkill);
    setIsOpenProject(false);
  };
  const handleProjectHover = () => {
    setIsOpenProject(!isOpenProject);
    setIsOpenSkill(false);
  };
  const handleCloseAll = () => {
    setIsOpenProject(false);
    setIsOpenSkill(false);
  };

  return (
    <header
      className={`w-screen bg-[#fffbf9] dark:bg-[#2f2f2f] ${isOpenProject ? " " : "dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm"}  mt-0 border-b border-b-[#ff6d0a] sticky z-50 top-0 grid grid-cols-2`}
      onMouseOver={handleCloseAll}
    >
      <div className="w-14 pl-4 pt-2 pb-2">
        <Image src={Logo} alt="Logo du portfolio " className="w-full" />
      </div>
      <div
        className="grid grid-cols-5 h-full gap-y-4 w-2/3 ml-auto pt-2  pb-2 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <div className="text-sm text-[#ff6d0a] font-normal text-center cursor-pointer">
          A propos
        </div>
        <div
          className="text-sm text-[#ff6d0a] font-normal text-center cursor-pointer"
          onMouseOver={handleProjectHover}
        >
          Projet
        </div>
        <div
          className="text-sm text-[#ff6d0a] font-normal text-center cursor-pointer"
          onMouseOver={handleSkillHover}
        >
          Compétence
        </div>
        <div className="text-sm text-[#ff6d0a] font-normal text-center cursor-pointer">
          Contact
        </div>
        <div className="flex space-x-4">
          <ToggleTheme />
          <ToggleLang />
        </div>
      </div>
      <div>{isOpenProject ? <ProjectNav /> : ""}</div>
      <div>{isOpenSkill ? <SkillNav /> : ""}</div>
    </header>
  );
};

export default Header;
