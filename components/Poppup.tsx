import React, { ReactNode } from "react";

export interface PopupsProps {
  children: ReactNode;
  onClose?: () => void;
}

export default function Popups({ children, onClose }: PopupsProps) {
  return (
    <div
      className="bg-black bg-opacity-20 fixed top-0 z-50 left-0 h-screen w-full"
      onClick={onClose}
    >
      <div className="transform absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full sm:w-3/3 md:w-2/3 lg:w-3/2 xl:w-2/6">
        <div
          className="shadow-lg rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white  dark:bg-dark-100 rounded-t-lg rounded-b-lg flex space-y-4 mt-6 dark:text-white flex-col flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeaderPopups({ children }: PopupsProps) {
  return (
    <div className="dark:bg-gray-800  font-bold text-lg text-white h-full flex p-3 bg-[#343a40] rounded-tl rounded-tr">
      <p className="font-semibold text-lg ml-3">{children}</p>
    </div>
  );
}

export function FooterPopups({ children }: PopupsProps) {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-b-lg py-2 pr-2 flex space-x-4 justify-end">
      {children}
    </div>
  );
}

export function BodyPopups({ children }: PopupsProps) {
  return <div className="pl-4 ml-3 py-4 px-4">{children}</div>;
}
