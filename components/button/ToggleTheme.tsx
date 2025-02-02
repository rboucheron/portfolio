"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Cookies from "js-cookie";
import { useAuthorization } from "@/lib/store";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const { Authorization } = useAuthorization();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleClick = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    setCookieTheme();
  };

  const setCookieTheme = () => {
    if (Authorization) {
      const globalTheme = {
        isDark: !isDark,
      };
      Cookies.set("globalTheme", JSON.stringify(globalTheme), { expires: 7 });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      <Moon
        className={`${isDark ? ' text-success ' : 'text-neutral dark:text-lightneutral'}`}
        size={28}
        strokeWidth={2.25}
      />
    </div>
  );
};

export default ToggleTheme;
