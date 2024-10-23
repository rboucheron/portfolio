import Image from "next/image";
import {useScopedI18n} from "@/locales/client";
import NavButton from "./NavButton";
import Link from "next/link";
import {Nav} from "./Nav"

const ProjectNav = () => {
    const translation = useScopedI18n("landing");

    return (
        < Nav className="grid-cols-4">
            <Link href={`/project/1`}>
                <NavButton title={translation("badge.webDocumentary")}>
                    <Image
                        src="/img/logo_sae302.svg"
                        alt="logo l écho des écologues"
                        width={100}
                        height={100}
                    />
                </NavButton>
            </Link>
            <Link href={`/project/3`}>
                <NavButton title={translation("badge.brochureWebsite")}>
                    <Image
                        src="/img/logo_sae303.png"
                        alt="ac2fl"
                        width={80}
                        height={80}
                    />
                </NavButton>
            </Link>
            <Link href={`/project/4`}>
                <NavButton title={translation("badge.webApplication")}>
                    <Image
                        src="/img/logo_sae401.png"
                        alt="Sushy House"
                        width={80}
                        height={80}
                        className="bg-[#2f2f2f] p-2 rounded-md"
                    />
                </NavButton>
            </Link>
            <Link href={`/project/5`}>
                <NavButton title={translation("badge.dWebsite")}>
                    <Image
                        src="/img/logo_sae402.png"
                        alt="Le buggy"
                        width={80}
                        height={80}
                        className="bg-[#fffbf9] p-2 rounded-md"
                    />
                </NavButton>
            </Link>
        </Nav>

    );
};

export default ProjectNav;
