import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full py-5 bg-[#f66d0a] mt-28">
      <div className="w-1/2 lg:w-1/6 m-auto grid grid-cols-3 gap-2 text-white dark:text-black justify-items-stretch">
        <div className=" justify-self-center">
          <FaLinkedin size={35} />
        </div>
        <div className=" justify-self-center">
          <FaGithubSquare size={35} />
        </div>
        <div className=" justify-self-center">
          {" "}
          <FaCodepen size={35} />
        </div>
      </div>
      <div className="mt-4 w-full text-center text-md font-extralight text-white dark:text-black">
        Mentions Légales
      </div>
      <div className="mt-4 w-full text-center text-md font-extralight text-white dark:text-black ">
        Un projet de Raphaël Boucheron - © 2024 Portfolio - Tous droits
        Réservés.{" "}
      </div>
    </footer>
  );
};
export default Footer;
