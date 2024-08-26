import { ReactNode, useState } from "react";
import { ChevronRight } from "lucide-react";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className="w-full text-center text-2xl font-normal flex items-center justify-between mb-6 cursor-pointer hover:text-[#ff7518] transition delay-150 duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{title}</div>
        <ChevronRight className={`${isOpen ? "rotate-90" : "rotate-0"}`} />
      </div>
      <div
        className={`w-full space-y-2 text-md  font-light mb-10 ${isOpen ? "flex flex-col" : "hidden"} `}
      >
        {children}
      </div>
    </>
  );
};

export default Accordion;
