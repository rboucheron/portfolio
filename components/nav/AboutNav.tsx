import Image from "next/image";
import {useScopedI18n} from "@/locales/client";
import NavButton from "./NavButton";
import {ScrollText} from "lucide-react";
import {IoMdPaper} from "react-icons/io";
import {Nav} from "@/components/nav/Nav";

const AboutNav = () => {
    const translation = useScopedI18n("landing");
    return (
        < Nav className="grid-cols-2">
            <a
                href="https://github.com/rboucheron"
                className=" justify-self-center"
            >
                <NavButton title="GitHub">
                    <Image
                        src="/img/github.svg"
                        alt="logo de github"
                        width={60}
                        height={60}
                    />
                </NavButton>
            </a>
            <NavButton title={translation("badge.resume")}>
                <IoMdPaper size={60}/>
            </NavButton>
        </Nav>
    )
        ;
};

export default AboutNav;
