'use client'; 
import { Iimage } from "@/interface/Iimage";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ProjectImages = ({ Images }: { Images: Iimage[] }) => {
  const [openCarrousel, setOpenCarrousel] = useState<boolean>(false);
  const handleOpen = () => {};
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-5">
        <div onClick={() => setOpenCarrousel(true)}>
          <Image
            src={`/img/${Images[0].src}`}
            alt={Images[0].alt}
            className="w-full object-cover h-full rounded-sm cursor-pointer"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div onClick={() => setOpenCarrousel(true)}>
          <Image
            src={`/img/${Images[1].src}`}
            alt={Images[1].alt}
            className="w-full object-cover h-full rounded-sm cursor-pointer"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
      {openCarrousel && (
        <div
          className="fixed w-full h-screen bg-black dark:bg-white dark:bg-opacity-60 bg-opacity-60 top-0 left-0 z-50"
          onClick={() => setOpenCarrousel(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-1/2 m-auto my-36">
            <Carousel>
              <CarouselContent className="m-auto">
                {Images.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={`/img/${image.src}`}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      quality={100}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};
