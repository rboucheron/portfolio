import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {HiHome} from "react-icons/hi2";
import {getScopedI18n} from "@/locales/server";
import ExperienceCard, {ExperienceH1} from "@/components/experienceCard";
import Image from "next/image";


const Page = async () => {
    const translation = await getScopedI18n("landing");
    return (
        <div className="w-11/12 m-auto">
            <div className="mt-2 flex flex-col lg:flex-row items-center justify-between pt-2 pb-2">
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    <HiHome/>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{translation("badge.skills")}</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={``}>
                                    {translation("badge.frontend")}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <h1 className="mt-10 font-semibold text-2xl mb-4 lg:mt-4">
                    {translation("badge.frontend")}
                </h1>
            </div>
            < ExperienceCard>

                <div>
                    < ExperienceH1>Html et Css</ExperienceH1>
                    <p className=" mt-2 text-sm text-gray-500">
                        Découverte du HTML et du CSS en classe de STI2D lors d'un projet de poulailler connecté.
                        J'étais
                        chargé de créer une page web affichant les résultats des différents capteurs présent dans le
                        poulailler.
                    </p>
                </div>
                <div>

                </div>


            </ExperienceCard>
            < ExperienceCard>

                <div>
                    < ExperienceH1>JavaScript</ExperienceH1>
                    <p className=" mt-2 text-sm text-gray-500">
                        J'ai appris et mis en pratique les connaissance théorique sur javascript lors d'un projet de
                        SAE. Mon objectif étais de me démarquer des autre étudient en proposant dans mon appication
                        un dispositif intéractif important. J'ai réaliser ce calendrier en javascript Vanilla, cela
                        ma permit d'appréender tous les concepte important du langage.
                    </p>
                </div>
                <div>
                    <div className=" flex justify-center">
                        <Image src="/img/sae3032024-09-0322.31.53.png" alt="css" width={1000} height={1000}
                               className="rounded-md w-4/5"/>

                    </div>
                </div>


            </ExperienceCard>
            < ExperienceCard>

                <div>
                    < ExperienceH1>Angular et TypeScript</ExperienceH1>
                    <p className=" mt-2 text-sm text-gray-500">
                        J'ai appris à utiliser typescript
                    </p>
                </div>
                <div>
                    <div className=" flex lg:justify-center mt-5 lg:mt-0">
                        <Image src="/img/sae4012024-09-0323.43.42.png" alt="css" width={1000} height={1000}
                               className="rounded-md w-11/12 lg:w-4/5"/>

                    </div>
                </div>


            </ExperienceCard>

        </div>
    );
}

export default Page;