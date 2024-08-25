"use client"
import React, { useState, ReactNode } from "react";

type ProjectButtonProps = {
  title: string;
  children: ReactNode;
};

const ProjectButton = ({ title, children}: ProjectButtonProps): JSX.Element => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer rounded-sm p-2 transition delay-150 duration-300 ease-in-out"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <h2 className="text-md font-semibold text-center">{title}</h2>
      <div
        className={`grid justify-items-center mt-2 transition delay-150 duration-300 ease-in-out ${
          isHover ? "rotate-180" : "rotate-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ProjectButton;