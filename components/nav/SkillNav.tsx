import Image from "next/image";
import { useLang } from "@/lib/store";
import NavButton from "./NavButton";
const SkillNav = () => {
  const { lang } = useLang();
  return (
    <div className="fixed top-12 left-0 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div
        className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-3 p-4 pt-8 gap-4 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <NavButton title="Web Design">
          <Image
            src="/img/Figma-logo.png"
            alt="logo de figma"
            width={30}
            height={30}
          />
        </NavButton>
        <NavButton
          title={
            lang === "fr" ? "Développement Frontend" : "Frontend development"
          }
        >
          <Image
            src="/img/React_Logo_SVG.png"
            alt="logo React"
            width={50}
            height={50}
          />
        </NavButton>
        <NavButton
          title={
            lang === "fr" ? "Développement Backend" : "Backend development"
          }
        >
          <Image
            src="/img/PHP-logo.png"
            alt="logo Php"
            width={50}
            height={50}
          />
        </NavButton>
      </div>
    </div>
  );
};

export default SkillNav;
