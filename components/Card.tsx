"use client";

import { Maximize2 } from "lucide-react";
import React, { useState } from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="bg-lightBlue cursor-pointer rounded-2xl  w-80 m-4 shadow-blackblue dark:shadow-transparent shadow-xl p-4 flex flex-col dark:bg-blackBlue relative"
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      {children}
      <CardButton isHover={isHover} />
    </div>
  );
};

export const CardH1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mt-2 text-blackBlue text-2xl font-bold dark:text-background">
      {children}
    </h3>
  );
};

export const CardP = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-md text-blackBlue dark:text-background mt-6 line-clamp-2 mb-6">{children}</p>
  );
};

export const CardBadges = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap mb-4">{children}</div>;
};

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-neutral mr-2 mb-2 py-1 px-4 text-sm rounded-full text-background">
      {children}
    </span>
  );
};

const CardButton = ({ isHover }: { isHover: boolean }) => {
  return (
    <div
      className={`absolute p-2 flex items-center justify-center text-sm rounded-xl bottom-2 right-2 ${
        isHover
          ? " w-full h-full top-0 bottom-0 right-0 left-0 bg-success bg-opacity-40 text-[#fffbf9] dark:text-[#1b1b1b] "
          : "text-[#1b1b1b] dark:text-[#fffbf9]"
      }`}
    >
      <Maximize2
        size={isHover ? 60 : 24}
        className="transition-all duration-500 ease-in-out"
      />
    </div>
  );
};
