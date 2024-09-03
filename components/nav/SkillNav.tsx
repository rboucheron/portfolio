import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import NavButton from "./NavButton";
const SkillNav = () => {
  const translation = useScopedI18n("landing");
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
            width={40}
            height={40}
          />
        </NavButton>
        <NavButton
          title={
            translation('badge.frontend')
          }
        >
          <Image
            src="/img/React_Logo_SVG.png"
            alt="logo React"
            width={60}
            height={60}
          />
        </NavButton>
        <NavButton
          title={
            translation('badge.backend')
          }
        >
          <Image
            src="/img/PHP-logo.png"
            alt="logo Php"
            width={60}
            height={60}
          />
        </NavButton>
      </div>
    </div>
  );
};

export default SkillNav;
