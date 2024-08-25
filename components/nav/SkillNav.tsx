import Image from "next/image";
import {useLang} from "@/lib/store";
const SkillNav = () => {
    const { lang } = useLang();
    return (
        <div className="fixed top-12 left-0 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
            <div
                className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-3 p-4 pt-8 gap-4 "
                onMouseOver={(e) => e.stopPropagation()}
            >
                <div className="cursor-pointer hover:bg-[#f66d0a] hover:bg-opacity-60 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
                    <h2 className="text-md font-semibold text-center cursor-pointer">
                        Web Design
                    </h2>
                    <div className="grid justify-items-center mt-2">
                        <Image
                            src="/img/Figma-logo.png"
                            alt="logo ce figma"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f66d0a] hover:bg-opacity-60 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
                    <h2 className="text-md font-semibold text-center">
                        {lang === "fr" ? "Développement Frontend" : "Frontend development"}
                    </h2>

                    <div className="grid justify-items-center mt-2">
                        <Image
                            src="/img/React_Logo_SVG.png"
                            alt="logo ce figma"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <div className="cursor-pointer hover:bg-[#f66d0a] hover:bg-opacity-60 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
                    <h2 className="text-md font-semibold text-center">
                        {lang === "fr" ? "Développement Backend" : "Backend development"}
                    </h2>
                    <div className="grid justify-items-center mt-2 ">
                        <Image
                            src="/img/PHP-logo.png"
                            alt="logo ce figma"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillNav;
