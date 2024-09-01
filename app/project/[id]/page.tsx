"use client";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";
import { HiHome } from "react-icons/hi2";
import { BsCalendarDateFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import CircularProgress from "@mui/material/CircularProgress";
import { formatDate } from "@/lib/formatDate";

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
import { Iproject } from "@/interface/Iproject";


function page() {
  const [id, setId] = useState<string | null>(null);
  const [project, setProject] = useState<Iproject | null>(null);

  useEffect(() => {
    const url = window.location.pathname;
    const idFromUrl = url.split("/").pop();
    setId(idFromUrl || null);
  }, []);

  useEffect(() => {
    if (id !== null) {
      fetchProject(id);
    }
  }, [id]);

  const fetchProject = async (projectId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/project/${projectId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProject(data.project);
      } else {
        const errorData = await response.json();
        console.log(errorData);
      }
    } catch (error) {
      console.log("Erreur :", error);
    }
  };

  return (
    <>

      {project !== null ? (
        <div className=" w-11/12  m-auto ">
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
                    <BreadcrumbPage>
                      <Lang>
                        {" "}
                        <Fr>Projets</Fr> <Eng> Projects</Eng>
                      </Lang>
                    </BreadcrumbPage>
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
            <h1 className=" mt-10 font-semibold text-2xl  mb-4 lg:mt-4">
              {project.title}
            </h1>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  lg:mt-5">
            <div className="p-4 flex flex-col items-center">
              <BsCalendarDateFill className="text-xl" />
              <div className="font-medium text-center text-md mt-4">
                {" "}
                {formatDate(project.date)}
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-center text-xl">Type</h2>
              <div className="font-medium text-center text-md mt-2">
                {" "}
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
                className="w-full object-cover h-full rounded-sm "
                width={1000}
                height={1000}
                quality={100}
              />
            </div>
            <div>
              {" "}
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

          <div className=" mt-4 xl:mt-10 xl:w-3/4 m-auto ">
            <div>
              <Paragraph>{project.details}</Paragraph>
            </div>
          </div>
        </div>
        
      ) : (
        <div className="my-80 flex justify-center w-full ">
          <CircularProgress disableShrink />
        </div>
      )}

    </>
  );
}

export default page;
