import Accordion from "../Accordion";
import { useLang } from "@/lib/store";
const BurguerNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const { lang } = useLang();
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
          <Accordion title={lang === "fr" ? "À Propos" : "About"}>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr" ? "Mon cv" : "My Resume"}
            </div>
          </Accordion>

          <Accordion title={lang === "fr" ? "Projet" : "Project"}>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr" ? "Web Documentaire" : "Web Documentary"}
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr" ? "Site vitrine" : "Brochure Website"}
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr" ? "Application Web" : "Web Application"}
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr" ? "Site Web 3D" : "3D website"}
            </div>
          </Accordion>

          <Accordion title={lang === "fr" ? "Compétence" : "Skill"}>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              Web Design
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr"
                ? "Développement Frontend"
                : "Frontend development"}
            </div>
            <div className="ml-2 cursor-pointer hover:text-gray-400">
              {lang === "fr" ? "Développement Backend" : "Backend development"}
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
