import Image from "next/image";
import { useLang } from "@/lib/store";
import NavButton from "./NavButton";
import { ScrollText } from "lucide-react";

const AboutNav = () => {
  const { lang } = useLang();
  return (
    <div className="fixed transition top-12 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div
        className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-2 p-4 pt-8 gap-4 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <NavButton title="GitHub">
          <Image
            src="/img/github.svg"
            alt="logo de github"
            width={60}
            height={60}
          />
        </NavButton>
        <NavButton title={lang === "fr" ? "Mon Cv" : "My Resume"}>
          <ScrollText size={60} />
        </NavButton>
      </div>
    </div>
  );
};

export default AboutNav;
