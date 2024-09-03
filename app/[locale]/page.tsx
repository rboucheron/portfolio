import { Card, CardH1, CardP, CardBadges, Badge } from "@/components/Card";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import { Prisma } from "@/lib/prisma";
import { Iproject } from "@/interface/Iproject";
import Skills from "@/components/Skills";
import Link from "next/link";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function Home() {
  const translation = await getScopedI18n("landing");
  let projects: Iproject[] | null = null;

  try {
    projects = await Prisma.project.findMany({
      include: {
        images: true,
        technologies: true,
      },
    });
  } catch (error) {
    console.log("error:", error);
  }

  return (
    <>
      <main>
        <div className=" mt-48">
          <h1 className="text-center w-full text-6xl text-gray-900 font-bold dark:text-[#fffbf9]">
            Raphaël Boucheron
          </h1>
          <p className="w-3/4 text-center text-sm m-auto mt-2">
            {translation("badge.title")}
          </p>
        </div>

        <div className="mt-72">
          <h2 className="w-full text-center text-2xl text-[#ff6d0a] mb-4">
            {translation("badge.about")}
          </h2>
          <div className="w-11/12 2xl:w-3/4 m-auto flex flex-col lg:flex-row lg:flew-wrap mt-10">
            <div className="w-1/2 2xl:w-1/6 m-auto lg:w-1/5 sm:w-1/3 mt-4 lg:mt-auto">
              <Image
                src="/img/YAL_0083.jpg"
                alt="Raphaël Boucheron"
                width={1000}
                height={1000}
                className="w-full rounded-sm  sm:rounded-xl "
              />
            </div>
            <div className="w-11/12 lg:w-4/5 m-auto mt-8 lg:mt-0">
              <p className="hidden lg:block text-md font-light ml-8 ">
                {translation("badge.profil")}
              </p>
              <div className="lg:hidden">
                <Paragraph>{translation("badge.profil")}</Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-64">
          <h2 className="w-full text-center text-2xl text-[#ff6d0a] mb-4">
            {translation("badge.skills")}
          </h2>
          <Skills />
        </div>
        <div className="mt-64">
          <h2 className="w-full text-center text-2xl text-[#ff6d0a] mb-4">
            {translation("badge.projects")}
          </h2>
          <div className=" m-auto mt-10 w-3/4 2xl:w-1/2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-8 sm:gap-y-8">
            {projects !== null &&
              projects.map((project) => (
                <Link href={`/project/${project.id}`} key={project.id}>
                  <Card>
                    <CardH1>{project.title}</CardH1>
                    <CardP>{project.details}</CardP>
                    <CardBadges>
                      {project.technologies.map((technology) => (
                        <Badge key={technology.id}>{technology.name}</Badge>
                      ))}
                    </CardBadges>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
