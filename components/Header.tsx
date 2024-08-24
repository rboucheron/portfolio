"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/img/logo.svg";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <header
      className="w-screen bg-[#fffbf9] dark:bg-[#2f2f2f] dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm  mt-0 border-b border-b-[#ff6d0a] sticky z-50 top-0 grid grid-cols-2 "
      onMouseOver={() => setIsHover(false)}
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
          onMouseOver={() => setIsHover(!isHover)}
        >
          Projet
        </div>
        <div className="text-sm text-[#ff6d0a] font-normal text-center cursor-pointer">
          Contact
        </div>
        <div className="text-sm text-[#ff6d0a] font-normal text-center cursor-pointer">
          Projet
        </div>
        <ToggleTheme />
      </div>
      <div>{isHover ? <ProjectNav /> : ""}</div>
    </header>
  );
};

export default Header;

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {isDarkTheme ? <Sun color="#ff6d0a" /> : <Moon color="#ff6d0a" />}
    </div>
  );
};

const ProjectNav = () => {
  return (
    <div className="fixed top-12 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div
        className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-4 p-4 pt-8 gap-4 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center cursor-pointer">
            Web Documentaire
          </h2>
          <div className="grid justify-items-center mt-2">
            <Image
              src="/img/logo_sae302.svg"
              alt="logo l écho des écologues"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center">Site Vitrine</h2>

          <div className="grid justify-items-center mt-2">
            <Image
              src="/img/logo_sae303.png"
              alt="ac2fl"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center">Application Web</h2>
          <div className="grid justify-items-center mt-2 ">
            <Image
              src="/img/logo_sae401.png"
              alt="Sushy House"
              width={80}
              height={80}
              className="bg-[#2f2f2f] p-2 rounded-md"
            />
          </div>
        </div>

        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center">Site Web 3D</h2>
          <div className="grid justify-items-center mt-2">
            <Image
              src="/img/logo_sae402.png"
              alt="Le buggy"
              width={80}
              height={80}
              className="bg-[#fffbf9] p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
