import React from "react";
import { motion } from "framer-motion";

export const Nav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      <motion.div
        className={`w-full bg-gray-300/70 dark:bg-gray-700/80  backdrop-blur-md shadow-md  grid p-4 pt-4 gap-4 ${className}`}
        onMouseOver={(e) => e.stopPropagation()}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
      <div className="fixed transition top-30 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]"></div>
    </>
  );
};
