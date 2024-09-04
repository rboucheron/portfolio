"use client";
import { ReactNode, useState } from "react";
import { useScopedI18n } from "@/locales/client";

const Paragraph = ({ children, className }: { children: ReactNode, className? : string }) => {
  const translation = useScopedI18n("landing");
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <>
      <p className={`text-md font-light ${readMore ? "" : "line-clamp-3"} ${className}  `}>
        {children}
      </p>
      <div
        className="font-normal text-sm text-[#f66d0a] cursor-pointer"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore
          ? translation("badge.readLess")
          : translation("badge.readMore")}
      </div>
    </>
  );
};

export default Paragraph;
