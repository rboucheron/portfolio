import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-[#f66d0a] mt-28">
      <div className="w-1/2 lg:w-1/6 m-auto grid grid-cols-3 gap-2 text-white dark:text-black justify-items-stretch">
        <a
          href="https://www.linkedin.com/in/rapha%C3%ABl-boucheron-287b02233/"
          className=" justify-self-center"
        >
          <FaLinkedin size={35} />
        </a>
        <a
          href="https://github.com/rboucheron"
          className=" justify-self-center"
        >
          <FaGithubSquare size={35} />
        </a>
        <a
          href="https://codepen.io/Raphael_3b"
          className=" justify-self-center"
        >
          <FaCodepen size={35} />
        </a>
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
