import Image from "next/image";
import {useScopedI18n} from "@/locales/client";
import NavButton from "./NavButton";
import Link from "next/link";
import {Nav} from "@/components/nav/Nav";

const SkillNav = () => {
    const translation = useScopedI18n("landing");
    return (

        < Nav className="grid-cols-3">
            <NavButton title="Web Design">
                <Image
                    src="/img/Figma-logo.png"
                    alt="logo de figma"
                    width={40}
                    height={40}
                />
            </NavButton>
            <Link href={`/skills/1`}>
                <NavButton
                    title={
                        translation('badge.frontend')
                    }
                >
                    <Image
                        src="/img/React_Logo_SVG.png"
                        alt="logo React"
                        width={60}
                        height={60}
                    />
                </NavButton>
            </Link>

            <NavButton
                title={
                    translation('badge.backend')
                }
            >
                <Image
                    src="/img/PHP-logo.png"
                    alt="logo Php"
                    width={60}
                    height={60}
                />
            </NavButton>
        </Nav>

    );
};

export default SkillNav;
