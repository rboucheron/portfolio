"use client";

import { Maximize2 } from "lucide-react";
import React, { useState } from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className="bg-[#fffbf9] cursor-pointer rounded-2xl  shadow-gray-300 dark:shadow-transparent shadow-2xl p-4 flex flex-col dark:bg-[#1b1b1b] relative"
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
    <h3 className="mt-2 text-[#101827] text-2xl font-normal dark:text-[#fffbf9]">
      {children}
    </h3>
  );
};

export const CardP = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-md text-[#b1b1b1] mt-6 line-clamp-2 mb-6">{children}</p>
  );
};

export const CardBadges = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap mb-4">{children}</div>;
};

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-[#F54703] mr-2 mb-2 py-1 px-4 text-sm rounded-full text-[#fffbf9] dark:text-[#2f2f2f]">
      {children}
    </span>
  );
};

const CardButton = ({ isHover }: { isHover: boolean }) => {
  return (
    <div
      className={`absolute p-2 flex items-center justify-center text-sm rounded-xl bottom-2 right-2 ${
        isHover
          ? " w-full h-full top-0 bottom-0 right-0 left-0 bg-[#F54703] bg-opacity-40 text-[#fffbf9] dark:text-[#1b1b1b] "
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
