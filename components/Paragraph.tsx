"use client";
import { ReactNode, useState } from "react";
import { Lang, Eng, Fr } from "@/components/Lang";

const Paragraph = ({ children }: { children: ReactNode }) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <>
      <p
        className={`text-md font-light ${readMore ? "" : "line-clamp-3"}  `}
      >
        {children}
      </p>
      <div
        className="font-normal text-sm text-[#f66d0a] cursor-pointer"
        onClick={() => setReadMore(!readMore)}
      >
        {readMore ? (
          <Lang>
            <Eng>Read Less</Eng>
            <Fr>Lire Moins</Fr>
          </Lang>
        ) : (
          <Lang>
            <Eng>Read More</Eng>
            <Fr>Lire Plus</Fr>
          </Lang>
        )}
      </div>
    </>
  );
};

export default Paragraph;
