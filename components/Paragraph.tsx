import { ReactNode, useState } from "react";
import { useLang } from "@/lib/store";


const Paragraph = ({ children }: { children: ReactNode }) => {
  const { lang } = useLang();
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <>
      <p
        className={`text-md font-light ${readMore ? "" : "line-clamp-3"} ml-8 `}
      >
        {children}
      </p>
      <div
        className="ml-8 font-normal text-sm text-[#f66d0a]"
        onClick={() => setReadMore(!readMore)}
      >
        {lang === "fr" ? "Lire Plus" : "Read More"}{" "}
      </div>
    </>
  );
};

export default Paragraph;
