"use client";
import React, { useState, ReactNode } from "react";

type NavButtonProps = {
  title: string;
  children: ReactNode;
};

const NavButton = ({ title, children }: NavButtonProps): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer rounded-sm p-2 transition delay-150 duration-300 ease-in-out"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <h2
        className={`text-md font-semibold text-center ${
          isHover ? "text-success" : " text-neutral dark:text-lightneutral"
        }`}
      >
        {title}
      </h2>
      <div
        className={`grid justify-items-center mt-2 transition delay-150 duration-300 ease-in-out`}
        style={{ transform: isHover ? "rotate(360deg)" : "rotate(0deg)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default NavButton;
