"use client"; 

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Paragraph from "./Paragraph";
import { useAuthorization } from "@/lib/store";

const CookieModal = ({ consentCookie }: { consentCookie: boolean | null }) => {
  const { Authorization, updateAuthorization } = useAuthorization();

  useEffect(() => {
    if (consentCookie !== null) {
      updateAuthorization(consentCookie);
    }
  }, [consentCookie, updateAuthorization]);

  const handleRefuse = () => {
    updateAuthorization(false);
    Cookies.set("consentCookie", JSON.stringify({ Authorization: false }), { expires: 7 });
  };

  const handleAccept = () => {
    updateAuthorization(true);
    Cookies.set("consentCookie", JSON.stringify({ Authorization: true }), { expires: 7 });
  };

  if (Authorization !== null || consentCookie !== null) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed bottom-3 m-auto lg:m-0 lg:right-auto  left-3 p-4 grid grid-cols-2 bg-[#fffbf9] border border-[#ff6d09] w-11/12 lg:w-1/4 2xl:w-1/5 rounded-md gap-2 dark:bg-[#2f2f2f]"
    >
      <div className="flex-col mb-2 col-span-2">
  
        <p className="text-sm font-extralight">
        Ce site utilise des cookies pour améliorer votre expérience de navigation.
        </p>
      </div>
      <div className="w-full text-center text-md text-[#111827] hover:text-[#ff6d09] cursor-pointer p-2 transition delay-150 duration-300 ease-in-out" onClick={handleRefuse}>
        Refuser
      </div>
      <div className="w-full text-center text-md hover:bg-[#ff6d09] cursor-pointer bg-[#111827] p-2 rounded-lg text-[#f9fafb] transition delay-150 duration-300 ease-in-out" onClick={handleAccept}>
        Accepter
      </div>
    </motion.div>
  );
};

export default CookieModal;
