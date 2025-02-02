"use client";
import React, { useEffect, useState } from "react";
import { Glasses } from "lucide-react";
import Cookies from "js-cookie";
import { useAuthorization } from "@/lib/store";

const ToggleAccessibility = () => {
  const [isAccessibleFont, setIsAccessibleFont] = useState(false);
  const { Authorization } = useAuthorization();

  useEffect(() => {
    const savedFont = Cookies.get("accessibleFont");
    if (savedFont) {
      const { isEnabled } = JSON.parse(savedFont);
      setIsAccessibleFont(isEnabled);
      if (isEnabled) {
        document.documentElement.classList.add("font-dyslexic");
      }
    }
  }, []);

  const handleClick = () => {
    const newState = !isAccessibleFont;
    setIsAccessibleFont(newState);
    document.documentElement.classList.toggle("font-dyslexic");

    if (Authorization) {
      Cookies.set("accessibleFont", JSON.stringify({ isEnabled: newState }), {
        expires: 7,
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      <Glasses className={`${isAccessibleFont ? ' text-success ' : 'text-neutral dark:text-lightneutral'}`} size={28} strokeWidth={2.25} />
    </div>
  );
};

export default ToggleAccessibility;
