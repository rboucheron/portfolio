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
import ExperienceCard, {ExperienceH1, ExperienceImage, ExperienceP} from "@/components/experienceCard";
import { Prisma } from "@/lib/prisma";
import {ISkill} from "@/interface/Skill";


const Page = async ({params}: {
    params: { id: string };
}) => {
    const translation = await getScopedI18n("landing");
    const skillId = parseInt(params.id, 10);

    if (isNaN(skillId)) {
        return <div>Invalid skill ID</div>;
    }

    let skill: ISkill | null = null;

    try {
        const rawSkill = await Prisma.skills.findUnique({
            where: { id: skillId },
            include: {
                experience: true,
            },
        });

        if (!rawSkill) {
            return <div>Skill not found</div>;
        }

        skill = {
            ...rawSkill,
        };
    } catch (error) {
        console.error("Error fetching skill:", error);
        return <div>Failed to fetch skill</div>;
    }

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
                                <BreadcrumbLink href={`/skills/${skillId}`}>
                                    {skill.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <h1 className="mt-10 font-semibold text-2xl mb-4 lg:mt-4">
                    {skill.title}
                </h1>
            </div>
            {skill?.experience.map((experience) => (
                < ExperienceCard key={experience.id}>
                    <div>
                        < ExperienceH1>{experience.title}</ExperienceH1>
                        < ExperienceP>{experience.details}</ExperienceP>
                    </div>
                    {experience.src === " " ? "" : (
                        < ExperienceImage src={experience.src} alt={experience.alt} />
                    )}
                </ExperienceCard>
            ))}
        </div>
    );
}

export default Page;