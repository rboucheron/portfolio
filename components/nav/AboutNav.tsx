import Image from "next/image";
import { useScopedI18n } from "@/locales/client";
import NavButton from "./NavButton";
import { ScrollText } from "lucide-react";
import { IoMdPaper } from "react-icons/io";

const AboutNav = () => {
  const translation = useScopedI18n("landing");
  return (
    <div className="fixed transition top-12 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div
        className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-2 p-4 pt-8 gap-4 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <a
          href="https://github.com/rboucheron"
          className=" justify-self-center"
        >
          <NavButton title="GitHub">
            <Image
              src="/img/github.svg"
              alt="logo de github"
              width={60}
              height={60}
            />
          </NavButton>
        </a>

        <NavButton title={translation("badge.resume")}>
          <IoMdPaper size={60} />
        </NavButton>
      </div>
    </div>
  );
};

export default AboutNav;
