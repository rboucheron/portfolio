"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/public/img/logo.svg";
import ToggleTheme from "./button/ToggleTheme";
import ToggleLang from "./button/ToggleLang";
import ProjectNav from "./nav/ProjectNav";
import AboutNav from "./nav/AboutNav";
import BurguerNav from "./nav/BurguerNav";

const Header = () => {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const translation = useScopedI18n("landing");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavHover = (nav: string) => {
    setActiveNav(activeNav === nav ? null : nav);
  };

  const handleCloseAll = () => {
    setActiveNav(null);
  };

  const navItems = [
    { key: "about", label: translation("badge.about") },
    { key: "projects", label: translation("badge.projects") },
  ];

  return (
    <>
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-gray-300/70 dark:bg-gray-700/70  backdrop-blur-md shadow-md"
            : "bg-transparent"
        } sticky top-0 z-50`}
        onMouseOver={handleCloseAll}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
           

            <nav className="hidden md:flex space-x-10 " onMouseOver={(e) => e.stopPropagation()}>
               <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Logo du portfolio"
                className="h-6 w-auto"
              />
            </Link>
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => handleNavHover(item.key)}
                >
                  <button
                    className={`text-neutral dark:text-lightneutral group inline-flex items-center text-md text-base font-semibold hover:text-success focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                      activeNav === item.key
                        ? "text-success dark:text-success"
                        : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`ml-2 h-5 w-5 text-neutral dark:text-lightneutral group-hover:text-success transition-transform duration-200 ${
                        activeNav === item.key ? "transform rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              ))}
            </nav>

            <div className="flex items-center justify-end space-x-4 md:flex-1 flex-4 lg:w-0 w-1/4 ">
              <ToggleTheme />
              <ToggleLang />
              <div className="md:hidden">
                <button
                  onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isBurgerOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {activeNav === "about" && <AboutNav />}
          {activeNav === "projects" && <ProjectNav />}
        </div>
      </header>

      <BurguerNav isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />
    </>
  );
};

export default Header;
