"use client";
import Header from "@/components/Header";
import React from "react";
import { HiHome } from "react-icons/hi2";
import { BsCalendarDateFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Eng, Fr, Lang } from "@/components/Lang";
import Image from "next/image";
import Paragraph from "@/components/Paragraph";

function page() {
  return (
    <>
      <Header />
      <div className=" w-11/12  m-auto ">
        <div className="mt-2 flex flex-row items-center justify-between pt-2 pb-2">
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
                  <BreadcrumbPage>
                    <Lang>
                      {" "}
                      <Fr>Projets</Fr> <Eng> Projects</Eng>
                    </Lang>
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">
                    Webdocumentaire
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h1 className="font-semibold text-2xl  mb-4 mt-4">Webdocumentaire</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-5">
          <div className="p-4 flex flex-col items-center">
            <BsCalendarDateFill className="text-xl" />
            <div className="font-medium text-center text-md mt-4">
              {" "}
              01/09/2024
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-center text-xl">Type</h2>
            <div className="font-medium text-center text-md mt-2">
              {" "}
              Projet tuteuré
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-center text-xl">Liens</h2>
            <div className="flex justify-center ">
              <Button asChild>
                <a href="">Site Web</a>
              </Button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-center text-xl">Github</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mt-5">
          <div>
            <Image
              src="/img/ecologue2024-08-3017.30.03.png"
              alt="r"
              className="w-full object-cover h-full rounded-sm "
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
          <div>
            {" "}
            <Image
              src="/img/ecologue2024-08-3017.30.39.png"
              alt="r"
              className="w-full object-cover h-full rounded-sm"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        </div>

        <div className=" mt-4 ">
          <div>
            <Paragraph>
              Dans le cadre d'un projet tuteuré, j'ai réalisé un webdocumentaire
              sur le métier peu connu d'écologue. J'ai suivi deux écologues de
              l'association CPIE Boucles de la Marne lors de leur suivi mensuel
              des oiseaux, et ils m'ont accordé une interview. Ce site web
              regroupe des articles, une interview, des témoignages audio et une
              galerie d'images de ma visite. J'ai réalisé ce webdocumentaire
              durant les mois d'octobre et de novembre 2023. Son objectif était
              de présenter le métier et de créer une expérience utilisateur
              interactive.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
