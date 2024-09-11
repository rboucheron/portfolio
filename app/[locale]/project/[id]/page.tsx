import { HiHome } from "react-icons/hi2";
import { BsCalendarDateFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";
import { Prisma } from "@/lib/prisma";
import { getScopedI18n } from "@/locales/server";
import { getCurrentLocale } from "@/locales/server";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import { Project } from "@/interface/Iproject";
import { ProjectImages } from "@/components/ProjectImages";
import { ProjectBanner } from "@/components/ProjectBanner";
import { title } from "process";
export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const lang = getCurrentLocale();
  const translation = await getScopedI18n("landing");

  const projectId = parseInt(params.id, 10);

  if (isNaN(projectId)) {
    return <div>Invalid project ID</div>;
  }

  let project: Project | null = null;

  try {
    const rawProject = await Prisma.project.findUnique({
      where: { id: projectId },
      include: {
        images: true,
        technologies: true,
        translatedProject: true,
      },
    });

    if (!rawProject) {
      return <div>Project not found</div>;
    }

    project = {
      ...rawProject,
    };
  } catch (error) {
    console.error("Error fetching project:", error);
    return <div>Failed to fetch project</div>;
  }

  return (
    <div className="w-11/12 m-auto">
      <div className="mt-2 flex flex-col lg:flex-row items-center justify-between pt-2 pb-2">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <HiHome />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{translation("badge.projects")}</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/project/${project.id}`}>
                  {lang === "fr" ? (
                    <>{project.title}</>
                  ) : project.translatedProject ? (
                    <>{project.translatedProject.title}</>
                  ) : (
                    <>{project.title}</>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="mt-10 font-semibold text-2xl mb-4 lg:mt-4">
          {lang === "fr" ? (
            <>{project.title}</>
          ) : project.translatedProject ? (
            <>{project.translatedProject.title}</>
          ) : (
            <>{project.title}</>
          )}
        </h1>
      </div>

      <ProjectBanner
        category={
          lang === "fr"
            ? project.category
            : project.translatedProject
            ? project.translatedProject.category
            : project.category
        }
        date={project.date}
        github={project.github}
        website={project.link != " " ? project.link : null}
        video={{
          title: "L'écho des écologues",
          src: "v1_2.mp4",
          banner: "ecologue2024-08-3017.30.03.png",
        }}
      />

      <ProjectImages Images={project.images} />

      <div className="mt-4 xl:mt-10 xl:w-3/4 m-auto">
        <div>
          <Paragraph>
            {lang === "fr" ? (
              <>{project.details}</>
            ) : project.translatedProject ? (
              <>{project.translatedProject.description}</>
            ) : (
              <>{project.details}</>
            )}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
