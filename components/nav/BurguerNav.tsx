"use client";
import Accordion from "../Accordion";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link"; 

const BurguerNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const translation = useScopedI18n("landing");

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`h-screen w-screen fixed z-50 bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9] top-0 ${
        isOpen ? "" : "hidden"
      } `}
      onClick={handleClose}
    >
      <div
        className={`w-3/4 sm:w-1/3 bg-[#fffbf9] dark:bg-[#2f2f2f] h-screen ml-auto p-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mt-6 flex flex-col justify-around">
          <Accordion title={translation("badge.about")}>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.resume")}
            </div>
          </Accordion>

          <Accordion title={translation("badge.projects")}>
            <Link href={`/project/5`}  className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.webDocumentary")}
            </Link>
            <Link href={`/project/7`}  className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.brochureWebsite")}
            </Link>
            <Link href={`/project/9`}  className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.webApplication")}
            </Link>
            <Link href={`/project/8`}  className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.dWebsite")}
            </Link>
          </Accordion>

          <Accordion title={translation("badge.skills")}>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              Web Design
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.frontend")}
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {translation("badge.backend")}
            </div>
          </Accordion>

          <Accordion title="Contact">
            <div></div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default BurguerNav;
