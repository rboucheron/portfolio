"use client"
import Header from "@/components/Header";
import { Card, CardH1, CardP, CardBadges, Badge } from "@/components/Card";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className=" mt-48">
          <h1 className="text-center w-full text-6xl text-gray-900 font-bold dark:text-[#fffbf9]">
            Raphaël Boucheron
          </h1>
          <p className="w-full text-center text-sm mt-2">
            {" "}
            Développeur fullstack chez SNCF Voyageur, étudient en BUT MMI{" "}
          </p>
        </div>

        <div className="mt-72">
          <h2 className="w-full text-center text-2xl text-[#ff6d0a] mb-4">
            A Propos
          </h2>
          <div className="w-11/12 2xl:w-3/4 m-auto flex flex-col lg:flex-row lg:flew-wrap">
            <div className="w-1/2 2xl:w-1/6 m-auto lg:w-1/5 sm:w-1/3 mt-4 lg:mt-auto">
              <Image
                src="/img/YAL_0083.jpg"
                alt="Raphaël Boucheron"
                width={100}
                height={100}
                className="w-full rounded-sm  sm:rounded-xl "
              />
            </div>
            <div className="w-11/12 lg:w-4/5 m-auto mt-8 lg:mt-0">
              <p className="hidden lg:block text-md font-light ml-8 ">
                Depuis toujours, je suis passionné par l'informatique, qui est
                pour moi à la fois un outil de travail, de communication et de
                divertissement. J'ai commencé mon parcours en réalisant des
                projets avec des cartes électroniques Arduino puis en intégrant
                des sites web en HTML, CSS et JavaScript. Après l’obtention d’un
                BAC sciences et technologie de l’industrie et du développement
                durable, je poursuis mes études en BUT métiers du multimédia et
                de l’internet pour devenir développeur Full Stack. J'apprends et
                j'acquiers des compétences dans le développement web, le design
                et l'audio-visuel.
              </p>
              <div className="xl:hidden">
                <Paragraph>
                  Depuis toujours, je suis passionné par l'informatique, qui est
                  pour moi à la fois un outil de travail, de communication et de
                  divertissement. J'ai commencé mon parcours en réalisant des
                  projets avec des cartes électroniques Arduino puis en
                  intégrant des sites web en HTML, CSS et JavaScript. Après
                  l’obtention d’un BAC sciences et technologie de l’industrie et
                  du développement durable, je poursuis mes études en BUT
                  métiers du multimédia et de l’internet pour devenir
                  développeur Full Stack. J'apprends et j'acquiers des
                  compétences dans le développement web, le design et
                  l'audio-visuel.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-64">
          <h2 className="w-full text-center text-2xl text-[#ff6d0a] mb-4">
            Mes Projets
          </h2>
          <div className=" m-auto mt-10 w-3/4 2xl:w-1/2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-8 sm:gap-y-8">
            <Card>
              <CardH1>Webdocumentaire</CardH1>
              <CardP>
                Le webdocumentaire LÉcho des Écologues est un projet
                universitaire réalisé au cours du troisième semestre du BUT MMI.
              </CardP>

              <CardBadges>
                <Badge>React</Badge>
                <Badge>CSS</Badge>
                <Badge>Javascript</Badge>
                <Badge>Vite</Badge>
              </CardBadges>
            </Card>
            <Card>
              <CardH1>Sushi House</CardH1>
              <CardP>
                Dans le cadre de la SAE 401, nous avons réalisé un site de
                e-commerce spécialisé dans la vente de sushi.{" "}
              </CardP>

              <CardBadges>
                <Badge>Angular</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>Php</Badge>
                <Badge>MySql</Badge>
              </CardBadges>
            </Card>
            <Card>
              <CardH1>Le Buggy</CardH1>
              <CardP>
                Nous avons réalisé un site web interactif présentant un objet
                typique de la culture amish.
              </CardP>

              <CardBadges>
                <Badge>React</Badge>
                <Badge>TailwindCSS</Badge>
                <Badge>ThreeJS</Badge>
                <Badge>Vite</Badge>
              </CardBadges>
            </Card>

            <Card>
              <CardH1>Password Manager</CardH1>
              <CardP>
                J'ai dévélopper un gestionnaire de mot de passe en ligne de
                commande, il offre quelque fonctionalité comme la génération de
                mot de passe aléatoire et l'enregistrement de mot de passe dans
                une base de données
              </CardP>

              <CardBadges>
                <Badge>GO</Badge>
                <Badge>Cobra</Badge>
                <Badge>CobraCLI</Badge>
                <Badge>Sqlite</Badge>
              </CardBadges>
            </Card>

            <Card>
              <CardH1>Reviens</CardH1>
              <CardP>
                J'ai dévélopper d'emprint de materiel pour mon IUT. Les étudient
                peuvent reserver le matériel dont ils ont besoient en choisisent
                sur un catalogue.
              </CardP>

              <CardBadges>
                <Badge>PHP</Badge>
                <Badge>Html</Badge>
                <Badge>Css</Badge>
                <Badge>Javascript</Badge>
              </CardBadges>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}
