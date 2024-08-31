"use client";
import Header from "@/components/Header";
import React from "react";
import { HiHome } from "react-icons/hi2";
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

function page() {
  return (
    <>
      <Header />
      <div className=" w-11/12  m-auto ">
        <div className="mt-5 flex flex-row items-center justify-between pt-2 pb-2">
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
          <div>
            <h1 className="font-semibold text-xl">Webdocumentaire</h1>
          </div>
        </div>
        <div className="flex flex-row justify-around   w-full">
          <div className="  p-4 w-1/2">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="w-1/2">
                  <Image
                    src="/img/ecologue2024-08-3017.30.03.png"
                    alt="r"
                    className="w-full object-cover "
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/img/ecologue2024-08-3017.30.39.png"
                    alt="r"
                    className="w-full object-cover "
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/img/ecologue2024-08-3017.30.54.png"
                    alt="r"
                    className="w-full object-cover "
                    width={1000}
                    height={1000}
                    quality={100}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div>null</div>
        </div>
      </div>
    </>
  );
}

export default page;
