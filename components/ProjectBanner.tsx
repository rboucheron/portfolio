"use client";
import React, { useState } from "react";
import { Ivideo } from "@/interface/Ivideo";
import { BsCalendarDateFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatDate";
import { useScopedI18n, useCurrentLocale } from "@/locales/client";
import { MdLiveTv } from "react-icons/md";
import { ProjectVideo } from "./ProjectVideo";

export const ProjectBanner = ({
  category,
  date,
  website,
  github,
  video,
}: {
  category: string;
  date: Date;
  website: string | null;
  github: string;
  video: Ivideo | null;
}) => {
  const lang = useCurrentLocale();
  const translation = useScopedI18n("landing");
  const [isPlay, setIsPlay] = useState(false);

  return (
    <>
      <div
        className={`grid grid-cols-2 ${
          website === null && video === null
            ? "lg:grid-cols-3"
            : website === null || video === null
            ? "lg:grid-cols-4"
            : "lg:grid-cols-5"
        } gap-4 lg:mt-5`}
      >
        <div className="p-4 flex flex-col items-center">
          <BsCalendarDateFill className="text-xl" />
          <div className="font-medium text-center text-md mt-4">
            {formatDate(date, lang)}
          </div>
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-center text-xl">Type</h2>
          <div className="font-medium text-center text-md mt-2">{category}</div>
        </div>

        {website === null ? (
          ""
        ) : (
          <div className="flex justify-center items-center">
            <Button asChild>
              <a href={website}>{translation("badge.webSite")}</a>
            </Button>
          </div>
        )}

        {video === null ? (
          ""
        ) : (
          <div className="flex justify-center items-center">
            <div onClick={() => setIsPlay(true)}>
              <MdLiveTv color="" size={45}/>
            </div>
          </div>
        )}

        <div className="flex justify-center items-center">
          <Button asChild>
            <a href={github}>Github</a>
          </Button>
        </div>
      </div>

      {video != null && (
        <ProjectVideo
          src={video.src}
          title={video.title}
          banner={video.banner}
          isPlay={isPlay}
          width={1000}
          height={1000}
        />
      )}
    </>
  );
};
