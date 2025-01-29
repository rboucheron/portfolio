"use client";

import React, {useState} from "react";
import Image from "next/image";
import Logo from "@/public/img/logo.svg";
import ToggleTheme from "./button/ToggleTheme";
import ToggleLang from "./button/ToggleLang";
import ProjectNav from "./nav/ProjectNav";
import SkillNav from "./nav/SkillNav";
import {useScopedI18n} from "@/locales/client";
import Link from "next/link";
import {Menu} from "lucide-react";
import BurguerNav from "./nav/BurguerNav";
import AboutNav from "./nav/AboutNav";

const Header = () => {
    const [isOpenProject, setIsOpenProject] = useState<boolean>(false);
    const [isOpenSkill, setIsOpenSkill] = useState<boolean>(false);
    const [isOpenAbout, setIsOpenAbout] = useState<boolean>(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
    const translation = useScopedI18n("landing");

    const handleSkillHover = () => {
        setIsOpenSkill(!isOpenSkill);
        setIsOpenProject(false);
        setIsOpenAbout(false);
    };

    const handleProjectHover = () => {
        setIsOpenProject(!isOpenProject);
        setIsOpenSkill(false);
        setIsOpenAbout(false);
    };
    const handleAboutHover = () => {
        setIsOpenSkill(false);
        setIsOpenProject(false);
        setIsOpenAbout(!isOpenAbout);
    };

    const handleCloseAll = () => {
        setIsOpenProject(false);
        setIsOpenSkill(false);
        setIsOpenAbout(false);
    };

    return (
        <>
            <header
                className={`w-full bg-[#fffbf9] dark:bg-[#2f2f2f] ${
                    isOpenProject || isOpenSkill || isOpenAbout
                        ? ""
                        : "dark:bg-opacity-60 bg-opacity-60 backdrop-blur-sm"
                } mt-0 border-b border-b-[#ff6d0a] sticky z-50 top-0 `}
                onMouseOver={handleCloseAll}
            >
                <div className="grid grid-cols-2 2xl:px-48 2xl:gap-7">
                    <Link href="/" className="w-14 pl-4 pt-2 pb-2">
                        <Image src={Logo} alt="Logo du portfolio" className="w-full"/>
                    </Link>
                    <div
                        className="grid place-items-center lg:grid-cols-4 h-full gap-y-2 xl:gap-y-0.5 w-1/2 sm:w-1/4 lg:w-3/5 ml-auto pt-2 pb-2 sm:mr-0"
                        onMouseOver={(e) => e.stopPropagation()}
                    >
                        <div
                            className={`hidden lg:flex text-sm text-[#ff6d0a] border-b-2  ${
                                isOpenAbout ? " border-[#ff6d0a]" : "border-transparent"
                            } font-normal text-center cursor-pointer`}
                            onMouseOver={handleAboutHover}
                        >
                            {translation("badge.about")}
                        </div>
                        <div
                            className={`hidden lg:flex text-sm text-[#ff6d0a] border-b-2  ${
                                isOpenProject ? " border-[#ff6d0a]" : "border-transparent"
                            } font-normal text-center cursor-pointer`}
                            onMouseOver={handleProjectHover}
                        >
                            {translation("badge.projects")}
                        </div>
        

                        <div className="sm:pl-2 flex items-center space-x-1.5 sm:space-x-2 lg:space-x-4 sm:pr-2 ">
                            <ToggleTheme/>
                            <ToggleLang/>
                            <div
                                className="flex lg:hidden cursor-pointer"
                                onClick={() => setIsBurgerOpen(true)}
                            >
                                <Menu color="#ff6d0a"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>{isOpenProject && <ProjectNav/>}</div>
                <div>{isOpenSkill && <SkillNav/>}</div>
                <div>{isOpenAbout && <AboutNav/>}</div>
            </header>
            <BurguerNav isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen}/>{" "}
        </>
    );
};

export default Header;
