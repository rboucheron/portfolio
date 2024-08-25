"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/logo.svg";
import ToggleTheme from "./button/ToggleTheme";
import ToggleLang from "./button/ToggleLang";
import ProjectNav from "./nav/ProjectNav";
import SkillNav from "./nav/SkillNav";
import { useLang } from "@/lib/store";
import { Menu } from "lucide-react";

const Header = () => {
  const { lang } = useLang();
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
      className={`w-screen bg-[#fffbf9] dark:bg-[#2f2f2f] ${isOpenProject || isOpenSkill ? " " : "dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm"}  mt-0 border-b border-b-[#ff6d0a] sticky z-50 top-0 grid grid-cols-2`}
      onMouseOver={handleCloseAll}
    >
      <div className="w-14 pl-4 pt-2 pb-2">
        <Image src={Logo} alt="Logo du portfolio " className="w-full" />
      </div>
      <div
        className="grid place-items-center lg:grid-cols-5 h-full gap-y-4 xl:gap-y-0.5 w-1/2 sm:w-1/4 lg:w-2/3 ml-auto pt-2  pb-2 mr-8 sm:mr-0"
        onMouseOver={(e) => e.stopPropagation()}
      >
        <div className="hidden lg:flex text-sm text-[#ff6d0a] font-normal text-center cursor-pointer">
          {lang === "fr" ? "A propos" : "About"}
        </div>
        <div
          className="hidden lg:flex text-sm text-[#ff6d0a] font-normal text-center cursor-pointer"
          onMouseOver={handleProjectHover}
        >
          {lang === "fr" ? "projet" : "project"}
        </div>
        <div
          className="hidden lg:flex text-sm text-[#ff6d0a] font-normal text-center cursor-pointer"
          onMouseOver={handleSkillHover}
        >
          {lang === "fr" ? "Compétence" : "Skill"}
        </div>
        <div className="hidden lg:flex text-sm text-[#ff6d0a] font-normal text-center cursor-pointer">
          Contact
        </div>
        <div className="pl-2 flex items-center space-x-2 sm:pr-2 ">
          <div className="flex lg:hidden">
            <Menu color="#ff6d0a" />
          </div>
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
