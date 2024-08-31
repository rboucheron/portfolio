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
import { Eng, Fr, Lang } from "@/components/Lang";

function page() {
  return (
    <>
      <Header />
      <div className=" w-11/12  m-auto mt-5 flex flex-row items-center justify-between pt-2 pb-2">
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
    </>
  );
}

export default page;
