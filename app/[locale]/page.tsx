import { Card, CardH1, CardP, CardBadges, Badge } from "@/components/Card";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";
import { Prisma } from "@/lib/prisma";
import Skills from "@/components/Skills";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";
import { getCurrentLocale } from "@/locales/server";
import { Project } from "@/interface/Iproject";
import ContactForm from "@/components/ContactForm";
import FormHeader from "@/components/FormHeader";
import Subtitle from "@/components/Subtitle";

export default async function Home() {
  const translation = await getScopedI18n("landing");
  const lang = getCurrentLocale();
  let projects: Project[] | null = null;

  try {
    const fetchProjects = await Prisma.project.findMany({
      include: {
        images: true,
        technologies: true,
        translatedProject: true,
      },
    });
    projects = fetchProjects.map((project) => ({
      ...project,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <>
      <main className="2xl:mx-24 ">
        <div className="my-48 lg:my-72  ">
          <h1 className="text-center w-full text-6xl text-gray-900 font-bold dark:text-[#fffbf9]">
            Raphaël Boucheron
          </h1>
          <p className="w-3/4 text-center text-sm m-auto mt-2">
            <Subtitle />
          </p>
        </div>

        <div className="mt-10">
          <h2 className="w-full text-center text-3xl text-[#ff6d0a] mb-4">
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
          <h2 className="w-full text-center text-3xl text-[#ff6d0a] mb-4">
            {translation("badge.skills")}
          </h2>
          <Skills />
        </div>
        <div className="mt-64">
          <h2 className="w-full text-center text-3xl text-[#ff6d0a] mb-4">
            {translation("badge.projects")}
          </h2>
          <div className=" m-auto flex flex-wrap justify-center 2xl:mx-10 2xl:px-44 ">
            {projects &&
              projects.length > 0 &&
              projects.map((project) => (
                <Link href={`/project/${project.id}`} key={project.id}>
                  <Card>
                    {lang === "fr" ? (
                      <>
                        <CardH1>{project.title}</CardH1>
                        <CardP>{project.details}</CardP>
                      </>
                    ) : project.translatedProject ? (
                      <>
                        <CardH1>{project.translatedProject.title}</CardH1>
                        <CardP>{project.translatedProject.description}</CardP>
                      </>
                    ) : (
                      <>
                        <CardH1>{project.title}</CardH1>
                        <CardP>{project.details}</CardP>
                      </>
                    )}
                    <CardBadges>
                      {project.technologies.map((technology) => (
                        <Badge key={technology.id}>{technology.name}</Badge>
                      ))}
                    </CardBadges>
                  </Card>
                </Link>
              ))}
          </div>
    
          <div className="my-72">
            <h2 className="w-full text-center text-3xl text-[#ff6d0a] mb-4">
              Contact
            </h2>
            <FormHeader />
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
