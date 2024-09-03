import { HiHome } from "react-icons/hi2";
import { BsCalendarDateFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";
import { Prisma } from "@/lib/prisma";
import { getScopedI18n } from "@/locales/server";
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
import { Iproject } from "@/interface/Iproject";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const translation = await getScopedI18n("landing");

  const projectId = parseInt(params.id, 10);

  if (isNaN(projectId)) {
    return <div>Invalid project ID</div>;
  }

  let project: Iproject | null = null;

  try {
    const rawProject = await Prisma.project.findUnique({
      where: { id: projectId },
      include: {
        images: true,
        technologies: true,
      },
    });

    if (!rawProject) {
      return <div>Project not found</div>;
    }

    project = {
      ...rawProject,
      date: rawProject.date.toISOString(),
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
                  {project.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="mt-10 font-semibold text-2xl mb-4 lg:mt-4">
          {project.title}
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-5">
        <div className="p-4 flex flex-col items-center">
          <BsCalendarDateFill className="text-xl" />
          <div className="font-medium text-center text-md mt-4">
            {formatDate(project.date)}
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-center text-xl">Type</h2>
          <div className="font-medium text-center text-md mt-2">
            {project.category}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button asChild>
            <a href={project.link}>Site Web</a>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Button asChild>
            <a href={project.github}>Github</a>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-5">
        <div>
          <Image
            src={`/img/${project.images[0].src}`}
            alt={project.images[0].alt}
            className="w-full object-cover h-full rounded-sm"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div>
          <Image
            src={`/img/${project.images[1].src}`}
            alt={project.images[1].alt}
            className="w-full object-cover h-full rounded-sm"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
      <div className="mt-4 xl:mt-10 xl:w-3/4 m-auto">
        <div>
          <Paragraph>{project.details}</Paragraph>
        </div>
      </div>
    </div>
  );
}
