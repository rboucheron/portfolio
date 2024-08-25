import Image from "next/image";
import { useLang } from "@/lib/store";
import { ReactNode, useState } from "react";
import NavButton from "./NavButton";

const ProjectNav = () => {
  const { lang } = useLang();
  return (
    <div className="fixed top-12 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div
        className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-4 p-4 pt-8 gap-4 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <NavButton
          title={lang === "fr" ? "Web Documentaire" : "web documentary"}
        >
          <Image
            src="/img/logo_sae302.svg"
            alt="logo l écho des écologues"
            width={100}
            height={100}
          />
        </NavButton>

        <NavButton title={lang === "fr" ? "Site vitrine" : "Brochure website"}>
          <Image
            src="/img/logo_sae303.png"
            alt="ac2fl"
            width={80}
            height={80}
          />
        </NavButton>
        <NavButton
          title={lang === "fr" ? "Application Web" : "Web Application"}
        >
          <Image
            src="/img/logo_sae401.png"
            alt="Sushy House"
            width={80}
            height={80}
            className="bg-[#2f2f2f] p-2 rounded-md"
          />
        </NavButton>
        <NavButton title={lang === "fr" ? "Site Web 3D" : "3D website"}>
          <Image
            src="/img/logo_sae402.png"
            alt="Le buggy"
            width={80}
            height={80}
            className="bg-[#fffbf9] p-2 rounded-md"
          />
        </NavButton>
      </div>
    </div>
  );
};

export default ProjectNav;
