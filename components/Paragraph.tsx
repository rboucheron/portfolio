"use client";
import { ReactNode, useState } from "react";
import { useScopedI18n } from "@/locales/client";

const Paragraph = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const translation = useScopedI18n("landing");
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <p
        className={`
          text-md font-light ${readMore ? "" : "line-clamp-3"} 
          ${className} 
          text-primary dark:text-background 
       
        `}
      >
        {children}
      </p>
      <div
        className="font-normal text-sm cursor-pointer text-highlight"
        role="button"
        tabIndex={0}
        onClick={() => setReadMore(!readMore)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setReadMore(!readMore);
          }
        }}
      >
        {readMore ? translation("badge.readLess") : translation("badge.readMore")}
      </div>
    </>
  );
};

export default Paragraph;
