"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {isDark ? <Sun color="#ff6d0a" /> : <Moon color="#ff6d0a" /> }
    </div>
  );
};

export default ToggleTheme;
