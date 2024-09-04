"use client";
import React from "react";
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import { useAuthorization } from "@/lib/store";

const CookieModal = () => {
  const { Authorization, updateAuthorization } = useAuthorization();

  return (
    <>
      {Authorization === null ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed bottom-3 m-auto lg:m-0 lg:right-auto left-3  p-4 grid grid-cols-2 bg-[#fffbf9] border border-[#ff6d09] w-11/12 lg:w-1/4 2xl:w-1/5 rounded-md gap-2 dark:bg-[#2f2f2f] "
        >
          <div className="flex-col mb-2 col-span-2">
            <h4 className="text-md font-semibold text-[#ff6d09] mb-2">
              Nous respectons votre vie privée
            </h4>
            <Paragraph className="text-sm font-extralight ">
              Nous utilisons des cookies pour vous offrir la meilleure
              expérience sur notre site. Ces cookies nous permettent de
              personnaliser le contenu et de vous proposer des fonctionnalités
              adaptées.
            </Paragraph>
          </div>
          <div className="w-full text-center text-md hover:text-[#ff6d09] cursor-pointer" onClick={() => updateAuthorization(false)}>
            Refuser
          </div>
          <div className="w-full text-center text-md hover:text-[#ff6d09] cursor-pointer" onClick={() => updateAuthorization(true)}>
            Accepter
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default CookieModal;