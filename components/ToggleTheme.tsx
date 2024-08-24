import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {isDarkTheme ? <Sun color="#ff6d0a" /> : <Moon color="#ff6d0a" />}
    </div>
  );
};

export default ToggleTheme;
