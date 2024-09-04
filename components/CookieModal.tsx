'use client'; 
import React from "react";
import { motion } from "framer-motion";
import { RxCookie } from "react-icons/rx";
import Paragraph from "./Paragraph";

const CookieModal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed bottom-3 m-auto left-3 lg:left-0 right-3 p-4 grid grid-cols-2 bg-[#fffbf9] border border-[#ff6d09] w-11/12 lg:w-2/5 rounded-md gap-2"
    >
      <div className="flex-col mb-6 ">
        <RxCookie color="#ff6d09" size={100} className="m-auto" />
      </div>
      <div className="flex-col mb-6">
        <h4 className="text-md font-medium text-[#ff6d09] mb-2">
          Nous respectons votre vie privée
        </h4>
        <Paragraph className="text-sm font-extralight ">
          Nous utilisons des cookies pour vous offrir la meilleure expérience
          sur notre site. Ces cookies nous permettent de personnaliser le
          contenu, d'analyser notre trafic et de vous proposer des
          fonctionnalités adaptées. Vous pouvez choisir d'accepter tous les
          cookies ou de personnaliser vos préférences. En continuant votre
          navigation, vous acceptez l'utilisation de ces cookies. Pour en
          savoir plus, consultez notre Politique de confidentialité
        </Paragraph>
      </div>
      <div className="w-full text-center text-md">Refuser</div>
      <div className="w-full text-center text-md">Accepter</div>
    </motion.div>
  );
};

export default CookieModal;
