"use client";
import React from "react";
import { useMessage } from "@/lib/store";

const FormHeader = () => {
  const { message } = useMessage();
  return (
    <>
      {message !== "" ? (
        <div className="w-full flex  justify-center my-14">
          <div className="relative  bg-[#F54703] text-white p-3 rounded-xl shadow-md max-w-xs">
            <p>{message}</p>
            <div className="absolute right-[-0.6em] -bottom-1 w-3 h-4 border-l-8 border-l-[#F54703] rounded-bl-[0.7em_0.75em] -rotate-45"></div>
          </div>
        </div>
      ) : (
        <h4 className="text-[#101827] dark:text-white text-sm lg:text-md font-normal w-3/4  lg:w-1/2 m-auto mt-20">
          N'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
          J'attends de vos nouvelles avec impatience !
        </h4>
      )}

      <div className="border-b p-4 border-[#ff6d0a] w-1/2 m-auto"></div>
    </>
  );
};

export default FormHeader;
