import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/store";


const ToggleTheme = () => {
  const { theme, updateTheme } = useTheme();

  const handleClick = () => {
    const newTheme = theme === "dark" ? "clear" : "dark";
    updateTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {theme === "dark" ? <Moon color="#ff6d0a" /> : <Sun color="#ff6d0a" />}
    </div>
  );
};

export default ToggleTheme;
